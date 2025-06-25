import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { sessionId } = req.body;

    // Retrieve the session to verify its payment status
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if the payment was successful
    if (session.payment_status === 'paid') {
      // Here you could also handle any post-payment tasks like:
      // - Sending confirmation emails
      // - Updating database records
      // - Generating access tokens
      
      res.status(200).json({ 
        success: true,
        session: session 
      });
    } else {
      res.status(400).json({ 
        success: false,
        message: 'Payment not completed'
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error verifying payment',
      error: error.message 
    });
  }
} 