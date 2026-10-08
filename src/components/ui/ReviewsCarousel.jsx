import { useEffect, useRef } from 'react';

// Native horizontal scroll + snap, drag, arrows, autoplay every 4s (pauses on
// hover/touch/drag, loops). Ported from home.html. Figures passed as children.
export default function ReviewsCarousel({ children }) {
  const trackRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isDown = false, startX = 0, startL = 0, moved = false;

    const onDown = (e) => {
      if (e.pointerType === 'touch') return;
      isDown = true; moved = false; startX = e.clientX; startL = track.scrollLeft;
      track.classList.add('dragging');
    };
    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startL - dx;
    };
    const onUp = () => { isDown = false; track.classList.remove('dragging'); };
    const onClickCapture = (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    track.addEventListener('pointerdown', onDown);
    track.addEventListener('click', onClickCapture, true);

    const step = () => track.querySelector('figure').getBoundingClientRect().width + 24;
    let timer = null, paused = false, resumeT = null;
    const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const advance = () => {
      if (paused || document.hidden) return;
      if (atEnd()) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: step(), behavior: 'smooth' });
    };
    const start = () => { clearInterval(timer); timer = setInterval(advance, 4000); };
    const hold = (ms = 6000) => { paused = true; clearTimeout(resumeT); resumeT = setTimeout(() => (paused = false), ms); };

    const prev = prevRef.current, next = nextRef.current;
    const onPrev = () => { hold(); track.scrollBy({ left: -step(), behavior: 'smooth' }); };
    const onNext = () => { hold(); track.scrollBy({ left: step(), behavior: 'smooth' }); };
    prev.addEventListener('click', onPrev);
    next.addEventListener('click', onNext);
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    const onTouch = () => hold();
    track.addEventListener('pointerenter', onEnter);
    track.addEventListener('pointerleave', onLeave);
    track.addEventListener('pointerdown', onTouch);
    track.addEventListener('touchstart', onTouch, { passive: true });

    let io;
    if (!reduce) {
      io = new IntersectionObserver(
        (es) => es.forEach((e) => (e.isIntersecting ? start() : clearInterval(timer))),
        { threshold: 0.3 }
      );
      io.observe(track);
    }

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      track.removeEventListener('pointerdown', onDown);
      track.removeEventListener('click', onClickCapture, true);
      prev.removeEventListener('click', onPrev);
      next.removeEventListener('click', onNext);
      track.removeEventListener('pointerenter', onEnter);
      track.removeEventListener('pointerleave', onLeave);
      track.removeEventListener('pointerdown', onTouch);
      track.removeEventListener('touchstart', onTouch);
      clearInterval(timer); clearTimeout(resumeT);
      if (io) io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="track" id="track" ref={trackRef}>
        {children}
      </div>
      <div className="wrap">
        <div className="ctrls">
          <button ref={prevRef} aria-label="Previous"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg></button>
          <button ref={nextRef} aria-label="Next"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </div>
    </>
  );
}
