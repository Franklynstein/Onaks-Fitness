// API Configuration
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://api.onaksfitness.com'
  : 'http://localhost:3001';

export { API_BASE_URL };

// Helper function to build API URLs
export const apiUrl = (endpoint) => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};

// Common API endpoints
export const API_ENDPOINTS = {
  PAYMENT_PLANS: '/api/payment-plans',
  CREATE_CHECKOUT: '/api/create-checkout-session',
  VERIFY_PAYMENT: '/api/verify-payment',
  ADMIN_PAYMENT_PLANS: '/api/admin/payment-plans',
  ADMIN_UPLOAD_PDF: '/api/admin/upload-pdf'
}; 