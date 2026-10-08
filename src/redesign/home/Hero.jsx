import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, GhostButton } from '../../components/ui/Button';
import { CALENDLY_URL } from '../../config/site';

const EASE = [0.215, 0.61, 0.355, 1];        // power3.out
const EASE_INOUT = [0.645, 0.045, 0.355, 1]; // power2.inOut
const EASE_OUT4 = [0.165, 0.84, 0.44, 1];    // power4.out

const HEADLINE = 'Your transformation starts here';

export default function Hero({ photoSrc }) {
  const [drift, setDrift] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrift(true), 2200); // sweep drifts after it draws
    return () => clearTimeout(t);
  }, []);

  const words = HEADLINE.split(' ');

  return (
    <section className="hero">
      <div className={`sweep${drift ? ' drift' : ''}`} aria-hidden="true">
        <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" fill="none">
          <motion.path
            id="sw1" d="M-120 820 C 260 560, 820 300, 1420 120" stroke="url(#ig)"
            strokeWidth="150" strokeLinecap="round" opacity=".16"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0, ease: EASE_INOUT }}
          />
          <motion.path
            id="sw2" d="M-80 980 C 300 760, 900 520, 1700 340" stroke="url(#ig)"
            strokeWidth="60" strokeLinecap="round" opacity=".18"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.15, ease: EASE_INOUT }}
          />
          <motion.path
            id="sw3" d="M1180 60 L 1045 330 L 1130 300 L 980 640" stroke="url(#ig)"
            strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" opacity=".55"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE_OUT4 }}
          />
        </svg>
      </div>

      <motion.div
        className="hero-photo" id="heroPhoto"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
      >
        <img src={photoSrc} alt="Ayomide, founder of Onaks Fitness" />
      </motion.div>

      <div className="wrap">
        <h1 id="h1">
          {words.map((w, i) => (
            <span className="w" key={i}>
              <motion.span
                style={{ display: 'inline-block' }}
                initial={{ y: '110%' }} animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.7 + i * 0.08, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="lead" id="heroLead"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        >
          No more guessing, no more starting over. Get a fat loss plan built around your body,
          your schedule, and your goals, with me coaching you every step of the way.
        </motion.p>

        <motion.div
          className="actions" id="heroActions"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease: EASE }}
        >
          <Button href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a free consultation</Button>
          <GhostButton href="#program">See how it works</GhostButton>
        </motion.div>

        <motion.div
          className="proof" id="heroProof"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.55, ease: EASE }}
        >
          <span><b>23kg</b> lost in 7 months, no coach</span>
          <span><b>Dozens</b> of client transformations</span>
          <span><b>Weekly</b> check-ins, direct line to me</span>
        </motion.div>
      </div>
    </section>
  );
}
