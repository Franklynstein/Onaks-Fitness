import { loadStripe } from '@stripe/stripe-js';
import { API_BASE_URL } from '../config/api';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) throw new Error('VITE_STRIPE_PUBLISHABLE_KEY is not set');
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

export const createCheckoutSession = async (productId) => {
  try {
    const stripe = await getStripe();
    
    // Create checkout session on the server
    const response = await fetch(`${API_BASE_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    }

    const session = await response.json();

    // Redirect to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error in createCheckoutSession:', error);
    throw error;
  }
}; 