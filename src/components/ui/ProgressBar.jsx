import { motion, useScroll } from 'framer-motion';

// Ignite gradient progress bar fixed at the top, scales with scroll.
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="progress"
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
