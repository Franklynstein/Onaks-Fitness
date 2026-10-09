import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

import '../../styles/onaks.css';
import '../../styles/calculator.css';
import SvgDefs from '../../components/ui/SvgDefs';
import AmbientBackground from '../../components/ui/AmbientBackground';
import ProgressBar from '../../components/ui/ProgressBar';
import Nav from '../../components/ui/Nav';
import Footer from '../../components/ui/Footer';
import PageHero from '../../components/ui/PageHero';
import SegmentedControl from '../../components/ui/SegmentedControl';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import FormConfirmation from '../../components/ui/FormConfirmation';
import { left, right, blur } from '../../components/ui/motionPresets';
import { CALENDLY_URL } from '../../config/site';
import { API_BASE_URL } from '../../config/api';

// Map the activity multiplier back to the key the backend email expects.
const ACTIVITY_KEY = { '1.2': 'sedentary', '1.375': 'light', '1.55': 'moderate', '1.725': 'active', '1.9': 'veryActive' };

const EASE = [0.215, 0.61, 0.355, 1];
const stepsContainer = {
  initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '0px 0px -20% 0px' },
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.1 } } },
};
const stepItem = {
  variants: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } },
};

const PACE_HINTS = {
  lo: 'Gentle: roughly 0.25 to 0.5kg a week. Easy to stick to.',
  mid: 'Steady: roughly 0.5 to 0.75kg a week. The sweet spot for keeping muscle.',
  hi: 'Aggressive: roughly 0.75 to 1kg a week. Short bursts only, and protein matters even more.',
};
const paceHint = (pace) => {
  const p = pace / 100;
  return p < 0.14 ? PACE_HINTS.lo : p < 0.21 ? PACE_HINTS.mid : PACE_HINTS.hi;
};

export default function CalculatorPage() {
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('m');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [act, setAct] = useState('1.375');
  const [goal, setGoal] = useState('lose');
  const [pace, setPace] = useState(18);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);
  const resultRef = useRef(null);

  // Body tone shift (animate body background like the reference).
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current.reportValidity()) return;

    // Port of the reference formula (Mifflin-St Jeor).
    let w = parseFloat(weight);
    if (unit === 'lbs') w = w * 0.4536;
    const h = parseFloat(height), a = parseFloat(age), p = pace / 100;
    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === 'm' ? 5 : -161);
    const tdee = bmr * parseFloat(act);
    let kcal = tdee;
    if (goal === 'lose') kcal = tdee * (1 - p);
    if (goal === 'gain') kcal = tdee * 1.1;
    kcal = Math.max(kcal, sex === 'm' ? 1500 : 1200);

    const payload = {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      dailyCalories: Math.round(kcal),
      userDetails: {
        gender: sex === 'm' ? 'male' : 'female',
        age: a,
        weight: parseFloat(weight),
        height: h,
        activityLevel: ACTIVITY_KEY[act] || 'moderate',
        goal,
        weightUnit: unit,
        email,
      },
    };

    setError('');
    setSending(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/send-calorie-results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
    } catch (err) {
      setSending(false);
      setError('Something went wrong sending your results. Please try again.');
      return;
    }
    setSending(false);
    setSubmitted(true);
    if (window.innerWidth < 860 && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="onaks">
        <SvgDefs />
        <AmbientBackground />
        <ProgressBar />
        <Nav />

        <main id="top">
          <PageHero
            eyebrow="Free tool"
            title="Find out exactly how much to eat"
            lead="Fill in your details and I'll send your daily calories and macros straight to your email."
          />

          <section className="sec" data-tone="#131a1f">
            <div className="wrap calc">
              <motion.form className="form" id="calcForm" ref={formRef} onSubmit={onSubmit} {...left}>
                <Input label="Email address" id="email" type="email"
                  placeholder="Where should I send your results?" required
                  value={email} onChange={(e) => setEmail(e.target.value)} />

                <div>
                  <label>Sex</label>
                  <SegmentedControl ariaLabel="Sex" value={sex} onChange={setSex}
                    options={[{ value: 'm', label: 'Male' }, { value: 'f', label: 'Female' }]} />
                </div>

                <div className="row">
                  <Input label="Age" id="age" type="number" min="14" max="90" placeholder="Years"
                    required value={age} onChange={(e) => setAge(e.target.value)} />
                  <Input label="Height (cm)" id="height" type="number" min="120" max="230" placeholder="cm"
                    required value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="weight">Weight</label>
                  <div className="wunit">
                    <input id="weight" type="number" min="35" max="550" step="0.5" required
                      placeholder={unit === 'kg' ? 'Weight in kg' : 'Weight in lbs'}
                      value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <SegmentedControl ariaLabel="Weight unit" mini value={unit} onChange={setUnit}
                      options={[{ value: 'kg', label: 'kg' }, { value: 'lbs', label: 'lbs' }]} />
                  </div>
                </div>

                <Select label="Activity level" id="act" value={act} onChange={(e) => setAct(e.target.value)}>
                  <option value="1.2">Sedentary: little or no exercise</option>
                  <option value="1.375">Lightly active: 1 to 3 sessions a week</option>
                  <option value="1.55">Moderately active: 3 to 5 sessions a week</option>
                  <option value="1.725">Very active: 6 to 7 sessions a week</option>
                  <option value="1.9">Extra active: physical job or two a days</option>
                </Select>

                <div>
                  <label>Goal</label>
                  <SegmentedControl ariaLabel="Goal" value={goal} onChange={setGoal}
                    options={[
                      { value: 'lose', label: 'Lose weight' },
                      { value: 'maintain', label: 'Maintain' },
                      { value: 'gain', label: 'Gain weight' },
                    ]} />
                </div>

                {goal === 'lose' && (
                  <div id="paceWrap">
                    <label htmlFor="pace">How fast do you want to lose?</label>
                    <input type="range" id="pace" min="10" max="25" value={pace}
                      onChange={(e) => setPace(+e.target.value)} />
                    <p className="hint">{paceHint(pace)}</p>
                  </div>
                )}

                <button className="btn" id="go" type="submit" disabled={sending || submitted} style={{ justifyContent: 'center' }}>
                  {submitted ? 'Sent' : sending ? 'Sending…' : 'Calculate and send results'}
                </button>
                {error
                  ? <p className="hint" style={{ marginTop: -6, color: '#ff6b6b' }}>{error}</p>
                  : <p className="hint" style={{ marginTop: -6 }}>Your results land in your inbox within a couple of minutes.</p>}
              </motion.form>

              <motion.div className="result" ref={resultRef} {...right}>
                {!submitted ? (
                  <div className="empty">
                    <h3>Your numbers go straight to your inbox</h3>
                    <p>Daily calories, protein, carbs and fat, worked out for your body and your goal. No sign up, no catch.</p>
                    <ul className="inc">
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg><span>Calories for your exact goal</span></li>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg><span>Protein, carbs and fat targets</span></li>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg><span>What to do with the numbers</span></li>
                    </ul>
                  </div>
                ) : (
                  <FormConfirmation
                    message={<>Your results are on their way to <b>{email}</b>. Give it a couple of minutes.</>}
                    tips={[
                      "Can't see it? Check your spam or junk folder",
                      'On Gmail, check the Promotions tab too',
                      'Add onaksfitness@gmail.com to your contacts so the next one lands in your inbox',
                    ]}
                    ctaHref={CALENDLY_URL}
                    ctaText="Want me to do the rest? Book a free call"
                  />
                )}
              </motion.div>
            </div>
          </section>

          <section className="sec" data-tone="#151515">
            <div className="wrap">
              <div className="sec-head"><motion.h2 {...blur}>What to do with the number</motion.h2></div>
              <motion.div className="steps" {...stepsContainer}>
                <motion.div className="step" variants={stepItem.variants}><h3>Hit protein first</h3><p>Protein keeps you full and keeps your muscle. Get it in every meal before you worry about anything else.</p></motion.div>
                <motion.div className="step" variants={stepItem.variants}><h3>Track for two weeks</h3><p>Use any free app. Don't change anything yet, just see what's actually going in. Most people are surprised.</p></motion.div>
                <motion.div className="step" variants={stepItem.variants}><h3>Weigh in the same way</h3><p>Same scale, same time, same conditions. Look at the weekly average, not the daily number.</p></motion.div>
                <motion.div className="step" variants={stepItem.variants}><h3>Adjust slowly</h3><p>Not moving after two weeks? Drop 100 to 150 calories. Losing too fast and feeling flat? Add some back.</p></motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
