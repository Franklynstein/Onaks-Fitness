import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  'male-fat-loss': {
    price: 1499,
    name: 'Male Fat Loss Program',
    pdfPath: '/pdfs/male-fat-loss.pdf'
  },
  'male-muscle-building': {
    price: 1499,
    name: 'Male Muscle Building Program',
    pdfPath: '/pdfs/male-muscle-building.pdf'
  },
  'male-body-recomp': {
    price: 1499,
    name: 'Male Body Recomposition Program',
    pdfPath: '/pdfs/male-body-recomp.pdf'
  },
  'female-fat-loss': {
    price: 1499,
    name: 'Female Fat Loss Program',
    pdfPath: '/pdfs/female-fat-loss.pdf'
  },
  'female-muscle-building': {
    price: 1499,
    name: 'Female Muscle Building Program',
    pdfPath: '/pdfs/female-muscle-building.pdf'
  },
  'female-body-comp': {
    price: 1499,
    name: 'Female Body Composition Program',
    pdfPath: '/pdfs/female-body-comp.pdf'
  },
  'glute-max': {
    price: 2999,
    name: 'Glute Max Program',
    pdfPath: '/pdfs/glute-max.pdf'
  },
  // Add other products here...
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { productId } = req.body;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: productId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/programs`,
    });

    res.status(200).json(session);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      message: 'Error creating checkout session',
      error: error.message 
    });
  }
} 