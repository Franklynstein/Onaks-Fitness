import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/onaks-logo.svg';
import { CALENDLY_URL } from '../../config/site';

// Site navigation: three-part bar, Free-resources dropdown, mobile full-screen menu
// rendered OUTSIDE the <header> so backdrop-filter does not trap it.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const close = () => setDd(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' open' : ''}`} id="nav">
        <div className="wrap">
          <Link className="logo" to="/" aria-label="Onaks Fitness home">
            <img src={logo} alt="Onaks Fitness" />
          </Link>
          <ul className="links">
            <li><Link to="/programs">Programmes</Link></li>
            <li className={`has-dd${dd ? ' open' : ''}`}>
              <button
                className="dd-btn"
                aria-haspopup="true"
                aria-expanded={dd}
                onClick={(e) => { e.stopPropagation(); setDd((v) => !v); }}
              >
                Free resources
                <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="dd">
                <Link to="/calculator"><b>Calorie calculator</b><span>Your daily calories and macros, free</span></Link>
                <Link to="/workout"><b>Free workout programme</b><span>3 and 4 day gym plans, sent to your inbox</span></Link>
              </div>
            </li>
            <li><Link to="/ebook">Ebook</Link></li>
            <li><a href="#results">Results</a></li>
          </ul>
          <div className="right">
            <a href={CALENDLY_URL} className="btn" target="_blank" rel="noreferrer">Book a free call</a>
            <button
              className="burger"
              id="burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className="menu" id="menu">
        <Link to="/programs" onClick={closeMenu}>Programmes</Link>
        <div className="grp">
          <span>Free resources</span>
          <Link to="/calculator" onClick={closeMenu}>Calorie calculator</Link>
          <Link to="/workout" onClick={closeMenu}>Free workout programme</Link>
        </div>
        <Link to="/ebook" onClick={closeMenu}>Ebook</Link>
        <a href="#results" onClick={closeMenu}>Results</a>
        <a href="#reviews" onClick={closeMenu}>Client reviews</a>
        <a href={CALENDLY_URL} className="btn" onClick={closeMenu}>Book a free call</a>
      </nav>
    </>
  );
}
