import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

import '../../styles/onaks.css';
import '../../styles/programs.css';
import SvgDefs from '../../components/ui/SvgDefs';
import AmbientBackground from '../../components/ui/AmbientBackground';
import ProgressBar from '../../components/ui/ProgressBar';
import Nav from '../../components/ui/Nav';
import Footer from '../../components/ui/Footer';
import { Button, GhostButton } from '../../components/ui/Button';
import { up, blur } from '../../components/ui/motionPresets';
import { CALENDLY_URL } from '../../config/site';
import { PRODUCTS } from '../../config/products';
import { createCheckoutSession } from '../../utils/stripe';
import { usePrices } from '../../hooks/usePrices';

import ebookCover from '../../assets/reference-programs/img01.png';

// Start Stripe checkout for a backend product id. Buttons stay disabled until the
// id is filled in src/config/products.js.
const buy = async (id) => {
  if (!id) return;
  try {
    await createCheckoutSession(id);
  } catch (e) {
    alert('Something went wrong starting checkout. Please try again.');
  }
};

const EASE = [0.215, 0.61, 0.355, 1];
const EASE_INOUT = [0.645, 0.045, 0.355, 1];

const HERO = 'Real experience. Real results.';

const staggerBox = {
  initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '0px 0px -20% 0px' },
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.1 } } },
};
const staggerItem = {
  variants: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } },
};

const Tick = () => (
  <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

function ShopCard({ title, vegan, options, item = true, priceOf }) {
  const [sel, setSel] = useState(0);
  const o = options[sel];
  const motionProps = item ? { variants: staggerItem.variants } : up;
  return (
    <motion.article className="shop" {...motionProps}>
      <h3>{title}</h3>
      {vegan && <span className="vg">Vegan options</span>}
      <div className="opts">
        {options.map((op, i) => (
          <label className="opt" key={i}>
            <input type="radio" checked={sel === i} onChange={() => setSel(i)} />
            <span className="n">{op.name}</span>
            <span className="p">{priceOf(op.id)}</span>
            <i />
          </label>
        ))}
      </div>
      <button className="btn buy" type="button" onClick={() => buy(o.id)} disabled={!o.id}>
        Buy {o.name}{priceOf(o.id) ? ` for ${priceOf(o.id)}` : ''}
      </button>
    </motion.article>
  );
}

export default function ProgramsRedesign() {
  const { priceOf } = usePrices();
  useEffect(() => {
    document.body.classList.add('onaks-active');
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const mid = window.innerHeight / 2;
        let color = '#151515';
        document.querySelectorAll('.onaks [data-tone]').forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= mid && r.bottom > mid) color = el.getAttribute('data-tone');
        });
        document.body.style.backgroundColor = color;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('onaks-active');
      document.body.style.backgroundColor = '';
    };
  }, []);

  const words = HERO.split(' ');

  return (
    <MotionConfig reducedMotion="user">
      <div className="onaks">
        <SvgDefs />
        <AmbientBackground />
        <ProgressBar />
        <Nav />

        <main id="top">
          {/* PAGE HERO */}
          <section className="ph" data-tone="#151515">
            <div className="sweep" aria-hidden="true">
              <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" fill="none">
                <motion.path d="M-120 620 C 300 380, 900 220, 1750 40" stroke="url(#ig)" strokeWidth="150" strokeLinecap="round" opacity=".12"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: EASE_INOUT }} />
                <motion.path d="M1250 -40 L 1110 230 L 1200 200 L 1050 520" stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity=".45"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.15, ease: EASE_INOUT }} />
              </svg>
            </div>
            <div className="wrap">
              <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, ease: EASE }}>My programmes</motion.span>
              <h1>
                {words.map((w, i) => (
                  <span className="w" key={i}>
                    <motion.span style={{ display: 'inline-block' }} initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, delay: 0.35 + i * 0.07, ease: EASE }}>{w}</motion.span>
                  </span>
                ))}
              </h1>
              <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASE }}>
                Training programmes and grocery lists built from exactly what worked for me, ready to download and start today.
              </motion.p>
            </div>
          </section>

          {/* TRAINING PROGRAMMES */}
          <section className="sec" id="training" data-tone="#131a1f">
            <div className="wrap">
              <motion.div className="sec-head" {...up}>
                <motion.h2 {...blur}>Training programmes</motion.h2>
                <p className="lead">From goals to gains. Pick your goal, download the plan, start this week.</p>
              </motion.div>
              <motion.div className="shops" {...staggerBox}>
                <ShopCard title="Male programmes" priceOf={priceOf} options={[
                  { name: 'Fat loss programme', id: PRODUCTS.maleFatLoss },
                  { name: 'Muscle building', id: PRODUCTS.maleMuscle },
                  { name: 'Body recomposition', id: PRODUCTS.maleRecomp },
                ]} />
                <ShopCard title="Female programmes" priceOf={priceOf} options={[
                  { name: 'Fat loss programme', id: PRODUCTS.femaleFatLoss },
                  { name: 'Muscle building', id: PRODUCTS.femaleMuscle },
                  { name: 'Body recomposition', id: PRODUCTS.femaleRecomp },
                ]} />
              </motion.div>

              <motion.div className="feature" {...up}>
                <div className="sweep" aria-hidden="true">
                  <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" fill="none">
                    <path d="M-100 420 C 300 250, 700 150, 1300 -40" stroke="url(#ig)" strokeWidth="140" strokeLinecap="round" opacity=".14" />
                    <path d="M900 -30 L 800 180 L 870 160 L 760 390" stroke="url(#ig)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
                  </svg>
                </div>
                <div className="fc">
                  <span className="flag">New</span>
                  <h3>Glute Max programme</h3>
                  <p>Specialised training for glute development and lower body toning. Progressive, structured, and built to actually grow something.</p>
                </div>
                <button className="btn" type="button" onClick={() => buy(PRODUCTS.gluteMax)} disabled={!PRODUCTS.gluteMax}>Buy now{priceOf(PRODUCTS.gluteMax) ? ` for ${priceOf(PRODUCTS.gluteMax)}` : ''}</button>
              </motion.div>
            </div>
          </section>

          {/* GROCERY LISTS */}
          <section className="sec" id="grocery" data-tone="#151515">
            <div className="wrap">
              <motion.div className="sec-head" {...up}>
                <motion.h2 {...blur}>Grocery lists</motion.h2>
                <p className="lead">Curated shopping guides that take the guesswork out of nutrition. Know exactly what to buy and why.</p>
              </motion.div>
              <motion.div className="shops" {...staggerBox}>
                <ShopCard title="Weight loss" priceOf={priceOf} options={[
                  { name: 'Mild weight loss', id: PRODUCTS.groceryWeightLossMild },
                  { name: 'Standard weight loss', id: PRODUCTS.groceryWeightLossStandard },
                  { name: 'Accelerated weight loss', id: PRODUCTS.groceryWeightLossAccelerated },
                ]} />
                <ShopCard title="Bulking" priceOf={priceOf} options={[{ name: 'Lean bulk', id: PRODUCTS.groceryLeanBulk }]} />
                <ShopCard title="Weight loss" vegan priceOf={priceOf} options={[
                  { name: 'Vegan mild', id: PRODUCTS.veganMild },
                  { name: 'Vegan standard', id: PRODUCTS.veganStandard },
                  { name: 'Vegan accelerated', id: PRODUCTS.veganAccelerated },
                ]} />
                <ShopCard title="Bulking" vegan priceOf={priceOf} options={[{ name: 'Vegan lean bulk', id: PRODUCTS.veganLeanBulk }]} />
              </motion.div>
            </div>
          </section>

          {/* COMBINATION PACKAGES */}
          <section className="sec" id="combos" data-tone="#141a16">
            <div className="wrap">
              <motion.div className="sec-head" {...up}>
                <motion.h2 {...blur}>Combination packages</motion.h2>
                <p className="lead">Save with a complete nutrition and training bundle. The grocery list and the programme, together.</p>
              </motion.div>
              <motion.div className="shops" {...staggerBox}>
                <motion.article className="shop combo" variants={staggerItem.variants}>
                  <span className="flag">Save</span>
                  <h3>Weight loss combo</h3>
                  <p>Weight loss grocery lists and training programme</p>
                  <div className="cp">{priceOf(PRODUCTS.comboWeightLoss)}</div>
                  <button className="btn" type="button" onClick={() => buy(PRODUCTS.comboWeightLoss)} disabled={!PRODUCTS.comboWeightLoss}>Buy now</button>
                </motion.article>
                <motion.article className="shop combo" variants={staggerItem.variants}>
                  <span className="flag">Save</span>
                  <h3>Lean bulking combo</h3>
                  <p>Lean bulking grocery lists and training programme</p>
                  <div className="cp">{priceOf(PRODUCTS.comboLeanBulk)}</div>
                  <button className="btn" type="button" onClick={() => buy(PRODUCTS.comboLeanBulk)} disabled={!PRODUCTS.comboLeanBulk}>Buy now</button>
                </motion.article>
              </motion.div>
            </div>
          </section>

          {/* EBOOK BLOCK */}
          <section className="sec" id="ebook" data-tone="#151515">
            <div className="wrap">
              <motion.div className="ebb" {...up}>
                <img src={ebookCover} alt="Build Different ebook cover" />
                <div>
                  <span className="eyebrow">Transformation ebook</span>
                  <h2>How I went from 101kg to 78kg in 7 months</h2>
                  <p className="lead" style={{ marginTop: 14 }}>My complete transformation journey, with all the strategies, challenges and lessons learned along the way.</p>
                  <ul className="inc">
                    <li><Tick /><span>The exact nutrition approach I followed</span></li>
                    <li><Tick /><span>My progressive workout strategy</span></li>
                  </ul>
                  <div className="buy">
                    <Button onClick={() => buy(PRODUCTS.ebook)} disabled={!PRODUCTS.ebook}>Buy now{priceOf(PRODUCTS.ebook) ? ` for ${priceOf(PRODUCTS.ebook)}` : ''}</Button>
                    <GhostButton to="/ebook">Read more</GhostButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* COACHING CTA */}
          <section className="sec" id="book" data-tone="#141a16">
            <div className="wrap">
              <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
                <motion.h2 {...blur}>Want it done with you instead?</motion.h2>
                <motion.p className="lead" style={{ marginInline: 'auto' }} {...up}>The programmes are the plan. 1 on 1 coaching is me running it with you, adjusting it every week, and keeping you on track.</motion.p>
                <motion.p style={{ marginTop: 28 }} {...up}><Button href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a free consultation</Button></motion.p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
