export async function subscribeToMailchimp(email, firstName) {
  try {
    // Create MD5 hash of lowercase email for Mailchimp
    const emailHash = await digestMessage(email.toLowerCase());
    
    const DC = import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = import.meta.env.VITE_MAILCHIMP_LIST_ID;
    const API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;

    // Use a CORS proxy
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const MAILCHIMP_URL = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${emailHash}`;

    const response = await fetch(PROXY_URL + MAILCHIMP_URL, {
      method: 'PUT', // Using PUT instead of POST to handle both new and existing subscribers
      headers: {
        'Authorization': `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
        },
        tags: ['Free Workout Program'],
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed! Check your email for the workout program.',
      };
    } else {
      throw new Error(data.detail || 'Failed to subscribe');
    }
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    return {
      success: false,
      message: error.message || 'Failed to subscribe. Please try again.',
    };
  }
}

// Helper function to create MD5 hash
async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('MD5', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
} 