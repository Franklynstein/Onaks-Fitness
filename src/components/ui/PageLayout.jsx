import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import '../../styles/onaks.css';
import SvgDefs from './SvgDefs';
import AmbientBackground from './AmbientBackground';
import ProgressBar from './ProgressBar';
import Nav from './Nav';
import Footer from './Footer';

// Shared shell for pages without their own composition.
// reduced: internal/admin pages (no ambient orbs, no progress bar) per brief section 8.
export default function PageLayout({ children, reduced = false, footer = true }) {
  useEffect(() => {
    document.body.classList.add('onaks-active');
    return () => {
      document.body.classList.remove('onaks-active');
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className={`onaks${reduced ? ' reduced' : ''}`}>
        <SvgDefs />
        {!reduced && <AmbientBackground />}
        {!reduced && <ProgressBar />}
        <Nav />
        <main id="top">{children}</main>
        {footer && <Footer />}
      </div>
    </MotionConfig>
  );
}
