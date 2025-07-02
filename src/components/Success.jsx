import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';
import Header from './Header';
import Footer from './Footer';

export default function Success() {
  const [status, setStatus] = useState('loading');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');
  const productId = searchParams.get('product_id');

  useEffect(() => {
    if (sessionId) {
              fetch(`${API_BASE_URL}/api/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setStatus('success');
          } else {
            setStatus('error');
          }
        })
        .catch(() => setStatus('error'));
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {status === 'loading' ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#00EB2B] mx-auto mb-4"></div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Processing your payment...</h2>
              <p className="text-gray-400">Please wait while we verify your payment.</p>
            </div>
          ) : status === 'success' ? (
            <div className="text-center">
              <div className="mb-6">
                <svg className="mx-auto h-16 w-16 text-[#00EB2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#00EB2B] mb-4">Payment Successful!</h2>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your purchase. You will receive an email with your program details shortly.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/programs')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] hover:opacity-90"
                >
                  Return to Programs
                </button>
                <br />
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center px-6 py-3 border border-[#333] text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-[#00EB2B]"
                >
                  Back to Home
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-red-500 mb-4">Payment Error</h2>
              <p className="text-xl text-gray-300 mb-8">
                There was an error processing your payment. Please try again or contact support.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/programs')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] hover:opacity-90"
                >
                  Try Again
                </button>
                <br />
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-6 py-3 border border-[#333] text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-[#00EB2B]"
                >
                  Contact Support
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 