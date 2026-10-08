import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { CALENDLY_URL } from '../../config/site';
import coverImg from '../../assets/reference-ebook/img01.png';

const EASE = [0.215, 0.61, 0.355, 1];        // power3.out
const EASE_INOUT = [0.645, 0.045, 0.355, 1]; // power2.inOut
const HEADLINE = 'How I lost 23kg in 7 months';

// .ph .rv items reveal (eyebrow, lead, buy, cover) staggered from 0.8s.
const rv = (i) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.8 + i * 0.1, ease: EASE },
});

export default function EbookHero() {
  const words = HEADLINE.split(' ');
  return (
    <section className="ph eh" data-tone="#151515">
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
      <div className="wrap grid">
        <div>
          <motion.span className="eyebrow" {...rv(0)}>The transformation ebook</motion.span>
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
          <motion.p className="lead" {...rv(1)}>
            My complete transformation journey with all the strategies, challenges, and lessons
            learned along the way, with actionable content you can use this week.
          </motion.p>
          <motion.div className="buy" {...rv(2)}>
            <Button href={CALENDLY_URL}>Buy now for $19.99</Button>
            <span className="fine">Instant download. PDF format.</span>
          </motion.div>
        </div>
        <motion.div className="cov" {...rv(3)}>
          <img src={coverImg} alt="Build Different ebook" />
        </motion.div>
      </div>
    </section>
  );
}
