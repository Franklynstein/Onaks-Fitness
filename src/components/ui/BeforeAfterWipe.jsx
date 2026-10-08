import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Scroll-driven before/after wipe, draggable to compare. Plain scroll maths (not
// ScrollTrigger scrub) so it works on iOS. Ported verbatim from home.html.
export default function BeforeAfterWipe({
  beforeSrc, afterSrc, beforeAlt = '', afterAlt = '',
  beforeLabel, afterLabel, hint = 'Drag to compare', className = '', entrance = {},
}) {
  const wipeRef = useRef(null);

  useEffect(() => {
    const wipe = wipeRef.current;
    if (!wipe) return;
    const after = wipe.querySelector('.after');
    const bar = wipe.querySelector('.bar');
    const tagR = wipe.querySelector('.tag.r');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let manual = false, lastScroll = 0, downX = null, downY = null;
    let target = 100, current = 100, raf = null;

    const apply = (p) => {
      after.style.clipPath = `inset(0 0 0 ${p}%)`;
      bar.style.left = p + '%';
      if (tagR) tagR.style.opacity = p < 45 ? 1 : 0;
    };
    const tick = () => {
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.2) { current = target; apply(current); raf = null; return; }
      apply(current);
      raf = requestAnimationFrame(tick);
    };
    const setTarget = (p) => {
      target = Math.max(0, Math.min(100, p));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const fromScroll = () => {
      if (manual) return;
      const r = wipe.getBoundingClientRect(), vh = window.innerHeight;
      const start = vh * 0.65, end = vh * 0.30 - r.height / 2;
      const t = (start - r.top) / (start - end);
      setTarget(100 - 100 * Math.max(0, Math.min(1, t)));
    };
    if (reduce) { apply(50); return; }

    const onScroll = () => {
      fromScroll();
      if (manual && Math.abs(window.scrollY - lastScroll) > 120) { manual = false; fromScroll(); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', fromScroll);
    fromScroll();

    const fromX = (x) => {
      const r = wipe.getBoundingClientRect();
      setTarget(((x - r.left) / r.width) * 100);
    };
    const onDown = (e) => { downX = e.clientX; downY = e.clientY; };
    const onMove = (e) => {
      if (downX === null || !e.buttons) return;
      if (!manual) {
        if (Math.abs(e.clientX - downX) < 8 || Math.abs(e.clientX - downX) < Math.abs(e.clientY - downY)) return;
        manual = true; lastScroll = window.scrollY;
        try { wipe.setPointerCapture(e.pointerId); } catch (_) {}
      }
      fromX(e.clientX);
    };
    const onUp = () => { downX = null; downY = null; };
    wipe.addEventListener('pointerdown', onDown);
    wipe.addEventListener('pointermove', onMove);
    wipe.addEventListener('pointerup', onUp);
    wipe.addEventListener('pointercancel', onUp);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', fromScroll);
      wipe.removeEventListener('pointerdown', onDown);
      wipe.removeEventListener('pointermove', onMove);
      wipe.removeEventListener('pointerup', onUp);
      wipe.removeEventListener('pointercancel', onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <motion.div className={`wipe ${className}`.trim()} ref={wipeRef} {...entrance}>
      <img className="before" src={beforeSrc} alt={beforeAlt} />
      <img className="after" src={afterSrc} alt={afterAlt} />
      <div className="bar" />
      {beforeLabel && <span className="tag l">{beforeLabel}</span>}
      {afterLabel && <span className="tag r">{afterLabel}</span>}
      <span className="hint">{hint}</span>
    </motion.div>
  );
}
