import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';
import PageLayout from '../../components/ui/PageLayout';
import { Button, GhostButton } from '../../components/ui/Button';

// Post-checkout thank-you page. Payment-verify logic preserved from the old Success component.
export default function SuccessPage() {
  const [status, setStatus] = useState('loading');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      fetch(`${API_BASE_URL}/api/verify-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      })
        .then((response) => response.json())
        .then((data) => setStatus(data.success ? 'success' : 'error'))
        .catch(() => setStatus('error'));
    }
  }, [sessionId]);

  return (
    <PageLayout>
      <section className="sec" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center' }}>
        <div className="wrap">
          <div className="center-card">
            {status === 'loading' ? (
              <>
                <h1>Processing your payment</h1>
                <p className="lead" style={{ margin: '16px auto 0' }}>Please wait while we verify your payment.</p>
              </>
            ) : status === 'success' ? (
              <>
                <div className="tick"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg></div>
                <h1>Payment successful</h1>
                <p className="lead" style={{ margin: '16px auto 0' }}>
                  Thank you for your purchase. You'll receive an email with your programme details shortly.
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 26 }}>
                  <Button onClick={() => navigate('/programs')}>Back to programmes</Button>
                  <GhostButton onClick={() => navigate('/')}>Back to home</GhostButton>
                </div>
              </>
            ) : (
              <>
                <h1>Payment error</h1>
                <p className="lead" style={{ margin: '16px auto 0' }}>
                  There was an error processing your payment. Please try again or contact support.
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 26 }}>
                  <Button onClick={() => navigate('/programs')}>Try again</Button>
                  <GhostButton onClick={() => navigate('/contact')}>Contact support</GhostButton>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
