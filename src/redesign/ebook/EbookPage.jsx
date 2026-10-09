import { useEffect, useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';

import '../../styles/onaks.css';
import '../../styles/ebook.css';
import SvgDefs from '../../components/ui/SvgDefs';
import AmbientBackground from '../../components/ui/AmbientBackground';
import ProgressBar from '../../components/ui/ProgressBar';
import Nav from '../../components/ui/Nav';
import Footer from '../../components/ui/Footer';
import BeforeAfterWipe from '../../components/ui/BeforeAfterWipe';
import { Button } from '../../components/ui/Button';
import { up, blur, right, clip, EASE } from '../../components/ui/motionPresets';
import { PRODUCTS } from '../../config/products';
import { createCheckoutSession } from '../../utils/stripe';
import { usePrices } from '../../hooks/usePrices';
import { VIDEOS } from '../../config/videos';
import EbookHero from './EbookHero';

import videoPoster from '../../assets/reference-ebook/img02.jpg';
import beforeImg from '../../assets/reference-ebook/img03.jpg';
import afterImg from '../../assets/reference-ebook/img04.jpg';
import guarPic from '../../assets/reference-ebook/img05.jpg';

const buy = async () => {
  if (!PRODUCTS.ebook) return;
  try { await createCheckoutSession(PRODUCTS.ebook); }
  catch (e) { alert('Something went wrong starting checkout. Please try again.'); }
};

const Check = () => (
  <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);
const Star = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.4 5.8 21l1.6-7L2 9.3l7.1-.7z" /></svg>
);

const chapContainer = {
  initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '0px 0px -20% 0px' },
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.1 } } },
};
const chapItem = {
  variants: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } },
};

const PARTS = [
  ['PART 1', 'The breaking point', ['My journey to 101kg', 'The moment I decided to change', 'My initial struggles and mistakes', 'Setting realistic goals', 'Finding my "why"']],
  ['PART 2', 'Nutrition strategy', ['My exact meal plans and portions', 'Calorie targets and adjustments', 'Grocery shopping strategies', 'Meal prepping for success', 'Dealing with cravings and setbacks']],
  ['PART 3', 'The workout protocol', ['Key exercises that drove results', 'How I tracked progress', 'Adapting when plateaus hit', 'Progressing week by week', 'Recovery strategies']],
  ['PART 4', 'The mental game', ['Building sustainable habits', 'Overcoming motivation slumps', 'Developing discipline', 'Maintaining a social life while changing', 'Creating your new identity']],
];

const LEARN = [
  'How to create a sustainable nutrition plan',
  'The exact workouts that drove my transformation',
  'How to overcome plateaus and setbacks',
  'Mental strategies for staying consistent',
  'How to maintain results after reaching your goal',
];

const REVIEWS = [
  ['David M.', 'London, UK', "I've tried keto, intermittent fasting, and even paid for expensive meal plans, nothing lasted. What stood out in this ebook is how realistic and sustainable it is. The calorie banking strategy and workout split fit perfectly into my hectic job. I've dropped 9kg in 10 weeks without feeling miserable. Highly recommend it for anyone serious about change."],
  ['Sophie L.', 'Birmingham, UK', "I've struggled with my weight since university and tried everything from expensive personal trainers to cutting out entire food groups. This ebook taught me how to approach weight loss without stress. The meal prep guide is genius! I've lost 17kg so far, but what's more amazing is how strong and energetic I feel. For the first time, this feels sustainable."],
  ['Jason M.', 'Los Angeles, USA', "This ebook was exactly what I needed. I travel a lot for work and always found it hard to stay consistent. The calorie banking strategy and the simple workout plan fit perfectly into my lifestyle. I'm down 20 pounds (9kg) and still going. More importantly, I feel fitter, sleep better, and have energy all day. I can't thank Onaks enough."],
  ['Daniel K.', 'Wolverhampton, UK', "What I loved most was how adaptable it is. I still enjoy my weekend pub visits, but I now understand portion sizes and calorie banking. I've lost 8kg in 2.5 months, and my clothes fit better than ever. Plus, the workout plan is beginner friendly but still challenging. This is the first time weight loss hasn't felt like torture."],
  ['Michael O.', 'Manchester, UK', "I was skeptical at first, but this book delivers. The focus on systems over motivation is exactly what I needed. I adapted the meal plan to fit my lifestyle and dropped weight without feeling deprived. Best fitness investment I've ever made."],
  ['Grace A.', 'Lagos, Nigeria', "This ebook was the game changer I needed. As a busy mom, I always thought weight loss meant starving or doing extreme workouts. Onaks step by step approach made it simple. I lost 11kg in 3 months by following the meal prep strategy and daily step goals. I finally feel like myself again, confident, strong, and proud."],
  ['Ethan R.', 'New York, USA', "The most sustainable fitness guide I've ever used. The progressive workouts, calorie tracking tips, and mindset shifts work perfectly together."],
  ['Tolu A.', 'London, UK', "I've lived in the UK most of my life and always struggled balancing my cultural foods with healthy eating. This ebook completely changed my mindset. I've learned how to enjoy the foods I love in the right portions while staying on track. I've already lost 6kg and I'm still on my weight loss journey. I feel stronger, more energetic, and for the first time, this actually feels sustainable."],
  ['Emeka O.', 'Birmingham, UK', "I used to think weight loss meant giving up everything I enjoyed, but this ebook showed me it's about balance, not restriction. I've already lost 8kg and I'm still on my journey. My energy levels are better, my clothes fit differently, and I feel like a different person mentally. This is hands down the most realistic and sustainable approach I've ever tried."],
];

const FAQS = [
  ['Who is this ebook for?', "Anyone who wants to lose fat and keep it off without a coach. If you've tried diets that didn't last, or you're starting from scratch, the book walks you through exactly what I did."],
  ['Is it a diet plan or a training plan?', 'Both. It covers the nutrition approach I followed, the workouts I used, and the mindset side that kept me consistent for seven months.'],
  ['Do I need a gym?', 'The workout protocol is written for the gym, but the nutrition and mindset chapters work wherever you train.'],
  ['How do I get it?', "It's a PDF, delivered instantly after payment. Read it on your phone, tablet or laptop."],
  ['What if I have questions after reading?', 'Message me on Instagram @onaks_. And if you want the whole thing done for you, the free consultation is always there.'],
];

function VideoBox() {
  const [playing, setPlaying] = useState(false);
  return (
    <motion.div className="vidbox" {...up}>
      {playing && VIDEOS.ebook ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEOS.ebook}?autoplay=1&rel=0&playsinline=1`}
          title="Build Different" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen
        />
      ) : (
        <>
          <img src={videoPoster} alt="" />
          {VIDEOS.ebook && (
            <button className="play" aria-label="Play" onClick={() => setPlaying(true)}>
              <span><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z" /></svg></span>
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <details open={open}>
      <summary onClick={(e) => { e.preventDefault(); setOpen((o) => !o); }}>{q}<i /></summary>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="a" className="a"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }} style={{ overflow: 'hidden' }}
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}

export default function EbookPage() {
  const { priceOf } = usePrices();
  const ebookPrice = priceOf(PRODUCTS.ebook);
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
          <EbookHero price={ebookPrice} />

          {/* VIDEO */}
          <section className="sec" style={{ paddingTop: 0 }} data-tone="#131a1f">
            <div className="wrap">
              <VideoBox />
              <motion.p {...up} style={{ textAlign: 'center', color: 'var(--muted)', marginTop: 18, fontSize: 15 }}>
                A minute from me on what's in the book and who it's for.
              </motion.p>
            </div>
          </section>

          {/* BEFORE / AFTER */}
          <section className="sec" data-tone="#151515">
            <div className="wrap">
              <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
                <motion.h2 {...blur}>See before and after</motion.h2>
              </div>
              <div style={{ maxWidth: 620, marginInline: 'auto' }}>
                <BeforeAfterWipe
                  entrance={up}
                  beforeSrc={beforeImg} afterSrc={afterImg}
                  beforeAlt="Before, 101kg" afterAlt="After, 78kg"
                  beforeLabel="101kg" afterLabel="78kg"
                />
              </div>
            </div>
          </section>

          {/* WHAT'S INSIDE */}
          <section className="sec" id="inside" data-tone="#141a16">
            <div className="wrap">
              <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
                <motion.h2 {...blur}>What's inside</motion.h2>
                <motion.p className="lead" {...up} style={{ marginInline: 'auto' }}>
                  Your step by step blueprint for real, lasting transformation.
                </motion.p>
              </div>
              <motion.div className="chaps two" {...chapContainer}>
                {PARTS.map(([part, title, items]) => (
                  <motion.article className="chap" key={part} variants={chapItem.variants}>
                    <b>{part}</b>
                    <h3>{title}</h3>
                    <ul>
                      {items.map((it) => (
                        <li key={it}><Check /><span>{it}</span></li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </motion.div>
              <motion.p {...up} style={{ textAlign: 'center', marginTop: 36 }}>
                <Button onClick={buy} disabled={!PRODUCTS.ebook}>Buy now{ebookPrice ? ` for ${ebookPrice}` : ''}</Button>
              </motion.p>
            </div>
          </section>

          {/* GUARANTEE */}
          <section className="sec" data-tone="#151515">
            <div className="wrap guar">
              <motion.div className="pic" {...clip}><img src={guarPic} alt="Ayomide at the gym" /></motion.div>
              <motion.div {...right}>
                <h2>My personal <span className="grad">guarantee</span></h2>
                <p className="lead" style={{ marginTop: 18 }}>
                  Everything in this book is the exact system I used to lose 23kg in 7 months. No fluff,
                  no theory, just real strategies that worked for me and can work for you too. I've shared
                  all my struggles and victories to give you a complete blueprint for your own
                  transformation journey.
                </p>
              </motion.div>
            </div>
          </section>

          {/* WHAT YOU'LL LEARN */}
          <section className="sec" data-tone="#141a16">
            <div className="wrap">
              <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
                <motion.h2 {...blur}>What you'll learn</motion.h2>
              </div>
              <ul className="learn">
                {LEARN.map((t) => (
                  <motion.li className="" key={t} {...up}>
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg><span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* REVIEWS */}
          <section className="sec" id="reviews" data-tone="#131a1f">
            <div className="wrap">
              <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
                <motion.h2 {...blur}>What readers say</motion.h2>
                <motion.p className="lead" {...up} style={{ marginInline: 'auto' }}>
                  Real transformations from real people who used this ebook.
                </motion.p>
              </div>
              <div className="reviews">
                {REVIEWS.map(([name, place, text]) => (
                  <motion.figure className="review" key={name} {...up}>
                    <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
                    <figcaption><b>{name}</b><span>{place}</span></figcaption>
                    <p>{text}</p>
                  </motion.figure>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="sec cta2" data-tone="#151515">
            <div className="sweep2" aria-hidden="true">
              <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice" fill="none">
                <path d="M-200 700 C 300 400, 900 250, 1800 -50" stroke="url(#ig)" strokeWidth="200" strokeLinecap="round" opacity=".10" />
                <path d="M1250 -40 L 1120 240 L 1210 210 L 1060 540" stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity=".35" />
              </svg>
            </div>
            <div className="wrap" style={{ textAlign: 'center' }}>
              <motion.h2 {...blur}>Ready to transform your body?</motion.h2>
              <motion.p className="lead" {...up} style={{ margin: '20px auto 32px' }}>
                Learn the exact system I used to drop from 101kg to 78kg and discover how you can apply
                these strategies to your own journey.
              </motion.p>
              <motion.p {...up}><Button onClick={buy} disabled={!PRODUCTS.ebook}>Get the ebook now{ebookPrice ? ` for ${ebookPrice}` : ''}</Button></motion.p>
              <motion.div className="trust" {...up}>
                <span><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /></svg>Secure payment</span>
                <span><svg viewBox="0 0 24 24"><path d="M12 3v12M6 11l6 6 6-6M4 21h16" /></svg>Instant download</span>
                <span><svg viewBox="0 0 24 24"><path d="M6 3h9l5 5v13H6zM15 3v5h5M9 13h6M9 17h6" /></svg>PDF format</span>
              </motion.div>
            </div>
          </section>

          {/* FAQ */}
          <section className="sec faq" data-tone="#141a16">
            <div className="wrap">
              <motion.div className="sec-head" {...up}><motion.h2 {...blur}>Questions about the ebook</motion.h2></motion.div>
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
