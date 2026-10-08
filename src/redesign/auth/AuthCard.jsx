import { motion } from 'framer-motion';
import PageLayout from '../../components/ui/PageLayout';

const EASE = [0.215, 0.61, 0.355, 1];
const EASE_INOUT = [0.645, 0.045, 0.355, 1];

// Centred gradient-border card for auth forms: sweep draw-in + heading blur, nothing heavier.
export default function AuthCard({ title, subtitle, children, footer }) {
  return (
    <PageLayout footer={false}>
      <div className="authwrap" style={{ position: 'relative' }}>
        <div className="sweep" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" fill="none" style={{ width: '100%', height: '100%' }}>
            <motion.path d="M-120 620 C 300 380, 900 220, 1750 40" stroke="url(#ig)" strokeWidth="150" strokeLinecap="round" opacity=".10"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: EASE_INOUT }} />
            <motion.path d="M1250 -40 L 1110 230 L 1200 200 L 1050 520" stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity=".4"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.15, ease: EASE_INOUT }} />
          </svg>
        </div>
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="auth-card">
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(14px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              {title}
            </motion.h1>
            {subtitle && <p className="sub">{subtitle}</p>}
            {children}
            {footer && <div className="alt">{footer}</div>}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
