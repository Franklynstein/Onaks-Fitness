import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Counts from `from` to `to` over 1.6s (power2.out) the first time it enters view.
export default function Counter({ from = 0, to, green = false, duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const [val, setVal] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (from === to) { setVal(to); return; }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const e = 1 - Math.pow(1 - p, 2); // power2.out
      setVal(Math.round(from + (to - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration]);

  return <span className={`n${green ? ' g' : ''}`} ref={ref}>{val}</span>;
}
