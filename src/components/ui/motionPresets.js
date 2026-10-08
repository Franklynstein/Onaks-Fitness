// Framer Motion presets that mirror the reference GSAP reveals and timings.
// EASE ~= GSAP power3.out (easeOutCubic); CLIP ease ~= power4.inOut.
export const EASE = [0.215, 0.61, 0.355, 1];
export const EASE_INOUT = [0.645, 0.045, 0.355, 1];
export const EASE_POWER4 = [0.77, 0, 0.175, 1];
const vp = { once: true, margin: '0px 0px -15% 0px' };

export const up = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.9, ease: EASE },
};
export const blur = {
  initial: { opacity: 0, y: 10, filter: 'blur(14px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: vp,
  transition: { duration: 1.1, ease: EASE },
};
export const left = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: vp,
  transition: { duration: 1, ease: EASE },
};
export const right = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: vp,
  transition: { duration: 1, ease: EASE },
};
export const clip = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  whileInView: { clipPath: 'inset(0 0% 0 0)' },
  viewport: { once: true, margin: '0px 0px -20% 0px' },
  transition: { duration: 1.2, ease: EASE_POWER4 },
};
// Staggered feature list (.feat .rv-r children, 0.12s stagger).
export const featContainer = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, margin: '0px 0px -20% 0px' },
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
};
export const featItem = {
  variants: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
  },
};
