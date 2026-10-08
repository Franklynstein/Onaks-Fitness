import { useEffect, useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';

import '../../styles/onaks.css';
import SvgDefs from '../../components/ui/SvgDefs';
import AmbientBackground from '../../components/ui/AmbientBackground';
import ProgressBar from '../../components/ui/ProgressBar';
import Nav from '../../components/ui/Nav';
import Footer from '../../components/ui/Footer';
import Marquee from '../../components/ui/Marquee';
import { GhostButton } from '../../components/ui/Button';
import BeforeAfterWipe from '../../components/ui/BeforeAfterWipe';
import ReviewsCarousel from '../../components/ui/ReviewsCarousel';
import PhoneFrame from '../../components/ui/PhoneFrame';
import { Button } from '../../components/ui/Button';
import { up, blur, left, right, clip, featContainer, featItem } from '../../components/ui/motionPresets';

import Hero from './Hero';
import Counter from './Counter';
import { CALENDLY_URL } from '../../config/site';

// Exact approved visuals, extracted from design-reference/home.html (document order).
import heroPhoto from '../../assets/reference/img01.png';
import beforeImg from '../../assets/reference/img02.jpg';
import afterImg from '../../assets/reference/img03.jpg';
import phoneScreen from '../../assets/reference/img04.jpg';
import appShot from '../../assets/reference/img05.png';
import review1 from '../../assets/reference/img06.jpg';
import review2 from '../../assets/reference/img07.jpg';
import review3 from '../../assets/reference/img08.jpg';
import journeyPic from '../../assets/reference/img09.jpg';

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#ig)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);

const FAQS = [
  ['Who is this coaching for?', "Anyone who's serious about losing fat and keeping it off. Whether you're just starting out, you've been going to the gym for years without seeing results, or you've lost weight before and want to do it properly this time, I tailor everything to where you're at now and where you want to get to."],
  ['What makes your coaching different?', "I lost 23kg entirely on my own, no coach, no hand holding, just figuring out what actually works. Everything I teach comes from real experience, not a textbook. You're not getting a generic plan, you're getting what genuinely moves the needle for fat loss."],
  ['What is online coaching, and how does it work?', 'You get a fully personalised fat loss plan built around your life, no travel needed. After you sign up I learn about your goals, lifestyle and current habits, build your nutrition and training plan, check in with you weekly, and adjust everything based on your progress. All done remotely, all done around you.'],
  ['Are the workout and nutrition plans customised?', 'Completely. Every plan is built specifically for you: your schedule, your food preferences, your starting point. Nothing copy pasted, nothing generic.'],
  ['Do I need a gym membership?', "No. I build your plan around what you have access to, whether that's a full gym, home equipment, or just your bodyweight. Fat loss comes down to nutrition and consistency, not the postcode of your gym."],
  ['How fast will I see results?', "Most clients notice changes within the first 2 to 4 weeks, whether that's the scale moving, clothes fitting differently, or simply having more energy. Sustainable fat loss is roughly 0.5 to 1kg per week, and that's exactly what we aim for."],
  ['Do you guarantee results?', "I guarantee I'll give you everything you need to succeed. The results depend on you showing up and doing the work. If you're consistent, the results will come."],
  ['How much does coaching cost?', "Pricing depends on the level of support you need. The best way to find out what's right for you is to book the free call and we'll go from there."],
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <details open={open}>
      <summary onClick={(e) => { e.preventDefault(); setOpen((o) => !o); }}>
        {q}<i />
      </summary>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="a" className="a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}

export default function HomePage() {
  // Body-level background + tone shift (animating the body background, like the reference).
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

  return (
    <MotionConfig reducedMotion="user">
      <div className="onaks">
        <SvgDefs />
        <AmbientBackground />
        <ProgressBar />
        <Nav />

        <main id="top">
          <div data-tone="#151515"><Hero photoSrc={heroPhoto} /></div>

          <Marquee />

          {/* TRANSFORMATION */}
          <section className="sec xf" id="results" data-tone="#141a16">
            <div className="wrap grid">
              <BeforeAfterWipe
                className="rv-l" entrance={left}
                beforeSrc={beforeImg} afterSrc={afterImg}
                beforeAlt="Ayomide before, at 101kg" afterAlt="Ayomide after, at 78kg"
                beforeLabel="101kg" afterLabel="78kg"
              />
              <motion.div {...up}>
                <motion.h2 {...blur}>I did this with no coach. You won't have to.</motion.h2>
                <p className="lead" style={{ marginTop: 18 }}>
                  I hit 101kg and knew something had to change. Seven months of proper nutrition and
                  consistent training later, I'd lost 23kg. Everything I coach now comes from that
                  experience, not a textbook.
                </p>
                <div className="counter" id="counter">
                  <div><Counter from={101} to={101} /><small>Starting weight, kg</small></div>
                  <div><Counter from={0} to={23} green /><small>Kilograms lost</small></div>
                  <div><Counter from={0} to={7} /><small>Months</small></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* PROGRAMME VIDEO */}
          <section className="sec vid" id="program" data-tone="#131a1f">
            <div className="wrap grid">
              <PhoneFrame screenSrc={phoneScreen} entrance={left} />
              <motion.div className="copy" {...up}>
                <motion.h2 {...blur}>How the coaching works</motion.h2>
                <p className="lead" style={{ marginTop: 18 }}>
                  A one minute walk through of what you get, who it's for, and what the first few weeks look like.
                </p>
                <ul>
                  <li><Check /><span>Fully online, built around your week, no gym membership required</span></li>
                  <li><Check /><span>Training and nutrition written for you, then adjusted as you progress</span></li>
                  <li><Check /><span>Weekly check-ins and a direct line to me whenever you need it</span></li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* WHAT YOU GET */}
          <section className="sec get" data-tone="#151515">
            <div className="wrap">
              <motion.div className="sec-head" {...up}>
                <motion.h2 {...blur}>What you get with 1 on 1 coaching</motion.h2>
                <p className="lead">Not a template. A plan written for your body, your schedule, and your food, with me in your corner the whole way.</p>
              </motion.div>
              <div className="grid">
                <motion.div className="sticky" {...left}>
                  <img src={appShot} alt="The Onaks Fitness coaching app: messaging, food journal and progress tracking" />
                </motion.div>
                <motion.div className="feat" {...featContainer}>
                  <motion.article variants={featItem.variants}>
                    <div className="ic"><svg viewBox="0 0 24 24"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12" /></svg></div>
                    <div><h3>A training plan written for you</h3><p>Whatever your experience level or equipment, I'll build sessions you can actually stick to and progress on.</p></div>
                  </motion.article>
                  <motion.article variants={featItem.variants}>
                    <div className="ic"><svg viewBox="0 0 24 24"><path d="M3 11h18M5 11a7 7 0 0114 0M12 4v1M8 20h8" /></svg></div>
                    <div><h3>Your own nutrition plan</h3><p>Built around foods you like and your real routine, so fat loss doesn't mean eating chicken and rice forever.</p></div>
                  </motion.article>
                  <motion.article variants={featItem.variants}>
                    <div className="ic"><svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg></div>
                    <div><h3>Weekly check-ins</h3><p>We track weight, measurements, photos and how you're feeling, then adjust the plan so progress never stalls.</p></div>
                  </motion.article>
                  <motion.article variants={featItem.variants}>
                    <div className="ic"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4z" /></svg></div>
                    <div><h3>A direct line to me</h3><p>Questions, bad days, wins, all of it. Message me in the app any time and you'll hear back from me, not a team.</p></div>
                  </motion.article>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FREE RESOURCES */}
          <section className="sec res" id="resources" data-tone="#151515">
            <div className="wrap">
              <motion.div className="sec-head" {...up}>
                <motion.h2 {...blur}>Free resources to get you started</motion.h2>
                <p className="lead">No sign up, no catch. Two tools I'd give any client on day one.</p>
              </motion.div>
              <div className="cards">
                <motion.a className="card" href="/calculator" {...up}>
                  <div className="ic"><svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" /></svg></div>
                  <h3>Calorie calculator</h3>
                  <p>Work out exactly how much you should be eating to lose fat without feeling starved. Takes 30 seconds.</p>
                  <span className="go">Open the calculator</span>
                </motion.a>
                <motion.a className="card" href="/workout" {...up}>
                  <div className="ic"><svg viewBox="0 0 24 24"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12" /></svg></div>
                  <h3>Free workout programme</h3>
                  <p>A full training plan you can start this week, whether you've got a gym or just a bit of floor space.</p>
                  <span className="go">Get the programme</span>
                </motion.a>
              </div>
            </div>
          </section>

          {/* REVIEWS */}
          <section className="sec rev" id="reviews" data-tone="#141a16">
            <div className="wrap"><motion.div className="sec-head" {...up}><motion.h2 {...blur}>Clients, in their own words</motion.h2></motion.div></div>
            <ReviewsCarousel>
              <figure>
                <div className="thumb"><img src={review1} alt="Bayo, client video review" /><a className="pl" href="#" aria-label="Play Bayo's review"><span><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z" /></svg></span></a></div>
                <figcaption><b>Bayo, 25</b><span>Fat loss, 1 on 1 coaching</span></figcaption>
              </figure>
              <figure>
                <div className="thumb"><img src={review2} alt="Anjola, client video review" /><a className="pl" href="#" aria-label="Play Anjola's review"><span><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z" /></svg></span></a></div>
                <figcaption><b>Anjola, 21</b><span>Fat loss and strength, 1 on 1 coaching</span></figcaption>
              </figure>
              <figure>
                <div className="thumb"><img src={review3} alt="Client video review" /><a className="pl" href="#" aria-label="Play review"><span><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z" /></svg></span></a></div>
                <figcaption><b>Your next client</b><span>Placeholder, send me more review videos</span></figcaption>
              </figure>
              <figure className="cta-card">
                <div><h3>Your review could be the next one here.</h3><GhostButton href={CALENDLY_URL}>Book a free call</GhostButton></div>
              </figure>
            </ReviewsCarousel>
          </section>

          {/* JOURNEY */}
          <section className="sec jr" id="about" data-tone="#121a1d">
            <div className="wrap grid">
              <motion.div className="pic" {...clip}><img src={journeyPic} alt="Ayomide at the gym" /></motion.div>
              <motion.div {...up}>
                <motion.h2 {...blur}>Why I coach</motion.h2>
                <p style={{ marginTop: 22 }}><strong>I know exactly what it feels like to be stuck.</strong> At 101kg I'd tried the quick fixes and the extreme routines, and every one of them burned me out. What finally worked was simple: a plan I could follow, food I actually enjoyed, and consistency over perfection.</p>
                <p>Seven months later I was 23kg lighter. Since then I've helped dozens of people do the same, using the methods I tested on myself first.</p>
                <p>No crash diets, no 6am cardio punishments. Just a sustainable system that gets you results and lets you keep them.</p>
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="sec cta" id="book" data-tone="#151515">
            <div className="sweep2" aria-hidden="true">
              <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice" fill="none">
                <path d="M-200 700 C 300 400, 900 250, 1800 -50" stroke="url(#ig)" strokeWidth="200" strokeLinecap="round" opacity=".10" />
                <path d="M1250 -40 L 1120 240 L 1210 210 L 1060 540" stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity=".35" />
              </svg>
            </div>
            <div className="wrap">
              <motion.h2 {...blur}>The journey to your dream body begins with one call</motion.h2>
              <motion.p className="lead" {...up}>We'll talk through where you're at, what you want, and the plan that gets you there. If we're a good fit, we start. If not, you still leave with clarity.</motion.p>
              <motion.div {...up}><Button href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a free fat loss consultation</Button></motion.div>
              <motion.p className="fine" {...up}>The call is free, takes 30 minutes, and there's no obligation.</motion.p>
            </div>
          </section>

          {/* FAQ */}
          <section className="sec faq" id="faq" data-tone="#151515">
            <div className="wrap">
              <motion.div className="sec-head" {...up}><motion.h2 {...blur}>Questions people ask before booking</motion.h2></motion.div>
              <motion.div className="list" {...up}>
                {FAQS.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
