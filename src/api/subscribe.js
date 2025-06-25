const AWS = require('aws-sdk');
const https = require('https');

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        const { email, firstName } = JSON.parse(event.body);
        
        // Mailchimp API configuration
        const DC = process.env.MAILCHIMP_SERVER_PREFIX;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;

        // Prepare the data for Mailchimp
        const data = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName
            },
            tags: ['Free Workout Program']
        };

        // Make request to Mailchimp API
        const result = await new Promise((resolve, reject) => {
            const options = {
                hostname: `${DC}.api.mailchimp.com`,
                path: `/3.0/lists/${LIST_ID}/members`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `apikey ${API_KEY}`
                }
            };

            const req = https.request(options, (res) => {
                let responseData = '';

                res.on('data', (chunk) => {
                    responseData += chunk;
                });

                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        data: JSON.parse(responseData)
                    });
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.write(JSON.stringify(data));
            req.end();
        });

        // Handle Mailchimp response
        if (result.statusCode === 200) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    success: true,
                    message: 'Successfully subscribed!'
                })
            };
        } else if (result.statusCode === 400 && result.data.title === 'Member Exists') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    success: true,
                    message: 'You are already subscribed! Check your email for the workout program.'
                })
            };
        } else {
            throw new Error(result.data.detail || 'Failed to subscribe');
        }
    } catch (error) {
        console.error('Subscription error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                message: error.message || 'Failed to subscribe. Please try again.'
            })
        };
    }
}; 