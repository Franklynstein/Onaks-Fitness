import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/api';

// Fetch live prices from the backend so displayed prices always match Stripe.
// priceOf(id) -> "$14.99" (or '' while loading / unknown id).
export function usePrices() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    let alive = true;
    fetch(`${API_BASE_URL}/api/payment-plans`)
      .then((r) => (r.ok ? r.json() : []))
      .then((plans) => {
        if (!alive || !Array.isArray(plans)) return;
        const map = {};
        plans.forEach((p) => { if (p && p.id != null) map[p.id] = p.price; });
        setPrices(map);
      })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const priceOf = (id) =>
    id && prices[id] != null ? `$${(prices[id] / 100).toFixed(2)}` : '';

  return { priceOf };
}
