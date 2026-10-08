import { motion } from 'framer-motion';

const EASE = [0.215, 0.61, 0.355, 1];        // power3.out
const EASE_INOUT = [0.645, 0.045, 0.355, 1]; // power2.inOut

// Subpage hero: eyebrow + h1 (word reveal) + lead over a drawing sweep.
// Matches the .ph pattern shared across the Onaks subpages.
export default function PageHero({ eyebrow, title, lead, tone }) {
  const words = title.split(' ');
  return (
    <section className="ph" data-tone={tone}>
      <div className="sweep" aria-hidden="true">
        <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" fill="none">
          <motion.path
            className="sw" d="M-120 620 C 300 380, 900 220, 1750 40" stroke="url(#ig)"
            strokeWidth="150" strokeLinecap="round" opacity=".12"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0, ease: EASE_INOUT }}
          />
          <motion.path
            className="sw" d="M1250 -40 L 1110 230 L 1200 200 L 1050 520" stroke="url(#ig)"
            strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity=".45"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.15, ease: EASE_INOUT }}
          />
        </svg>
      </div>
      <div className="wrap">
        {eyebrow && (
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          >
            {eyebrow}
          </motion.span>
        )}
        <h1>
          {words.map((w, i) => (
            <span className="w" key={i}>
              <motion.span
                style={{ display: 'inline-block' }}
                initial={{ y: '110%' }} animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.07, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        {lead && (
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}
