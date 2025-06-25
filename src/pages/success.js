import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Success() {
  const [status, setStatus] = useState('loading');
  const router = useRouter();
  const { session_id } = router.query;

  useEffect(() => {
    if (session_id) {
      fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId: session_id }),
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
  }, [session_id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {status === 'loading' ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Processing your payment...</h2>
              <p className="text-gray-600">Please wait while we verify your payment.</p>
            </div>
          ) : status === 'success' ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
              <p className="text-xl text-gray-700 mb-8">
                Thank you for your purchase. You will receive an email with your program details shortly.
              </p>
              <button
                onClick={() => router.push('/programs')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                Return to Programs
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Payment Error</h2>
              <p className="text-xl text-gray-700 mb-8">
                There was an error processing your payment. Please try again or contact support.
              </p>
              <button
                onClick={() => router.push('/programs')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                Return to Programs
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 