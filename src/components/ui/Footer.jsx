import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blur, up } from './motionPresets';
import { INSTAGRAM_URL, TIKTOK_URL, CONTACT_EMAIL } from '../../config/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <h4>Coaching</h4>
            <ul>
              <li><Link to="/programs">Programmes</Link></li>
              <li><Link to="/#results">Results</Link></li>
              <li><Link to="/#reviews">Client reviews</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Free resources</h4>
            <ul>
              <li><Link to="/calculator">Calorie calculator</Link></li>
              <li><Link to="/workout">Free workout programme</Link></li>
              <li><Link to="/ebook">Ebook</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><Link to="/terms-of-service">Terms of service</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={TIKTOK_URL} target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>

        <motion.p className="big" {...blur}>
          Skip the guesswork.<br />Start losing fat.
        </motion.p>

        <motion.div className="pills" {...up}>
          <span><svg viewBox="0 0 24 24"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" /></svg>Free 30 minute call</span>
          <span><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10" /></svg>Plans written for you</span>
          <span><svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /></svg>Weekly check-ins</span>
          <span><svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4z" /></svg>Direct line to me</span>
          <span><svg viewBox="0 0 24 24"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12" /></svg>Train anywhere</span>
        </motion.div>

        <p className="disc">
          Onaks Fitness provides online fat loss coaching, training programmes and nutrition
          resources. Results vary and depend on your consistency.
        </p>
        <div className="bottom">
          <span>© 2026 Onaks Fitness. All rights reserved.</span>
          <span>
            <Link to="/privacy-policy">Privacy policy</Link> &nbsp;&nbsp;
            <Link to="/terms-of-service">Terms of service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
