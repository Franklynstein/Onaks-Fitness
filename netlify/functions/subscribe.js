const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  // Parse the body
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request body' })
    };
  }

  const { email, firstName } = data;

  // Validate inputs
  if (!email || !firstName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email and first name are required' })
    };
  }

  try {
    const DC = process.env.VITE_MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = process.env.VITE_MAILCHIMP_LIST_ID;
    const API_KEY = process.env.VITE_MAILCHIMP_API_KEY;

    const response = await fetch(
      `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
          },
          tags: ['Free Workout Program'],
        }),
      }
    );

    const responseData = await response.json();

    // Handle member exists case
    if (response.status === 400 && responseData.title === 'Member Exists') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'You are already subscribed! Check your email for the workout program.',
        }),
      };
    }

    if (!response.ok) {
      throw new Error(responseData.detail || 'Failed to subscribe');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed! Check your email for the workout program.',
      }),
    };
  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: error.message || 'Failed to subscribe. Please try again.',
      }),
    };
  }
}; 