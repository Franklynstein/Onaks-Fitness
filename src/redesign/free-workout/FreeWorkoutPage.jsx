import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

import '../../styles/onaks.css';
import '../../styles/free-workout.css';
import SvgDefs from '../../components/ui/SvgDefs';
import AmbientBackground from '../../components/ui/AmbientBackground';
import ProgressBar from '../../components/ui/ProgressBar';
import Nav from '../../components/ui/Nav';
import Footer from '../../components/ui/Footer';
import { Button } from '../../components/ui/Button';
import { up, blur } from '../../components/ui/motionPresets';
import { CALENDLY_URL } from '../../config/site';

const EASE = [0.215, 0.61, 0.355, 1];
const EASE_INOUT = [0.645, 0.045, 0.355, 1];
const vp = { once: true, margin: '0px 0px -20% 0px' };

const stepsContainer = {
  initial: 'hidden', whileInView: 'show', viewport: vp,
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.1 } } },
};
const stepItem = {
  variants: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } },
};

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="url(#ig)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);

const HEADLINE = 'Free weekly workout programme';

export default function FreeWorkoutPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    document.body.classList.add('onaks-active');
    const tones = [['.ph', '#151515'], ['.sec-capture', '#131a1f'], ['.sec-steps', '#151515']];
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const mid = window.innerHeight / 2;
        let color = '#151515';
        tones.forEach(([sel, c]) => {
          const el = document.querySelector('.onaks ' + sel);
          if (!el) return;
          const r = el.getBoundingClientRect();
          if (r.top <= mid && r.bottom > mid) color = c;
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

  const submit = (e) => {
    e.preventDefault();
    if (!e.target.reportValidity()) return;
    // TODO: POST { firstName, email } to the Mailchimp subscribe endpoint.
    setSent(true);
  };

  const words = HEADLINE.split(' ');

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
                <motion.path className="sw" d="M-120 620 C 300 380, 900 220, 1750 40" stroke="url(#ig)" strokeWidth="150" strokeLinecap="round" opacity=".12"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0, ease: EASE_INOUT }} />
                <motion.path className="sw" d="M1250 -40 L 1110 230 L 1200 200 L 1050 520" stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity=".45"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.15, ease: EASE_INOUT }} />
              </svg>
            </div>
            <div className="wrap">
              <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, ease: EASE }}>Free resource</motion.span>
              <h1>
                {words.map((w, i) => (
                  <span className="w" key={i}>
                    <motion.span style={{ display: 'inline-block' }} initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, delay: 0.35 + i * 0.07, ease: EASE }}>{w}</motion.span>
                  </span>
                ))}
              </h1>
              <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASE }}>
                Drop your details below and I'll send the programme straight to your inbox. You get both a 3 day and a 4 day plan, so pick whichever fits your week.
              </motion.p>
            </div>
          </section>

          {/* LEAD CAPTURE */}
          <section className="sec sec-capture" style={{ paddingTop: 0 }} data-tone="#131a1f">
            <div className="wrap">
              <motion.div className="capture" {...up}>
                <div>
                  <h2>What you're getting</h2>
                  <ul className="inc">
                    <li><Check /><span>A 3 day plan and a 4 day plan, laid out session by session, so you never walk in without a plan</span></li>
                    <li><Check /><span>Built for the gym, using the equipment every gym has</span></li>
                    <li><Check /><span>Sets, reps and how to know when to add weight</span></li>
                    <li><Check /><span>A one page guide on how to eat around it for fat loss</span></li>
                  </ul>
                </div>

                {!sent ? (
                  <form onSubmit={submit} noValidate>
                    <div>
                      <label htmlFor="fn">First name</label>
                      <input id="fn" type="text" placeholder="Your first name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="em">Email address</label>
                      <input id="em" type="email" placeholder="Where should I send it?" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn" type="submit">Send me my workouts</button>
                    <p className="fine">One email with the programme, then the occasional useful thing. Unsubscribe any time.</p>
                  </form>
                ) : (
                  <motion.div className="done" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
                    {[
                      <div className="tick" key="t"><svg viewBox="0 0 24 24" fill="none" stroke="#081108" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></div>,
                      <h3 key="h">Sent. Check your inbox.</h3>,
                      <p key="p">Your programme is on its way to <b>{email}</b>. Give it a couple of minutes.</p>,
                      <ul className="inc" key="u">
                        <li><Check /><span>Can't see it? Check your spam or junk folder</span></li>
                        <li><Check /><span>On Gmail, check the Promotions tab too</span></li>
                        <li><Check /><span>Add onaksfitness@gmail.com to your contacts so the next one lands in your inbox</span></li>
                      </ul>,
                    ].map((node, i) => (
                      <motion.div key={i} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>{node}</motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </section>

          {/* STEPS + CTA */}
          <section className="sec sec-steps" data-tone="#151515">
            <div className="wrap">
              <motion.div className="steps" style={{ gridTemplateColumns: 'repeat(3,1fr)' }} {...stepsContainer}>
                <motion.div className="step" variants={stepItem.variants}><h3>Beginner friendly</h3><p>If you've never lifted, this is where I'd start you. Simple movements, done well, repeated.</p></motion.div>
                <motion.div className="step" variants={stepItem.variants}><h3>3 or 4 sessions a week</h3><p>Two versions of the plan. Enough to make real progress without living in the gym, each session under an hour.</p></motion.div>
                <motion.div className="step" variants={stepItem.variants}><h3>Built for fat loss</h3><p>Lifting keeps your muscle while the fat comes off. This is the training side of what I coach.</p></motion.div>
              </motion.div>

              <div className="rule" />

              <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
                <motion.h2 {...blur}>Want it written for you instead?</motion.h2>
                <motion.p className="lead" style={{ marginInline: 'auto' }} {...up}>This plan works. A plan built for your body, your schedule and your food works faster.</motion.p>
                <motion.p style={{ marginTop: 28 }} {...up}><Button href={CALENDLY_URL}>Book a free call</Button></motion.p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
