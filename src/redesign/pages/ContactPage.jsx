import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/ui/PageLayout';
import PageHero from '../../components/ui/PageHero';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import FormConfirmation from '../../components/ui/FormConfirmation';
import { up } from '../../components/ui/motionPresets';
import { CONTACT_EMAIL, INSTAGRAM_URL, TIKTOK_URL } from '../../config/site';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  // The old backend had no contact endpoint, so this opens the visitor's email
  // client prefilled. Swap for a real api.onaksfitness.com endpoint if you add one.
  const onSubmit = (e) => {
    e.preventDefault();
    const f = e.target;
    const name = `${f.firstName.value} ${f.lastName.value}`.trim();
    const subject = `Website enquiry from ${name || 'the Onaks site'}`;
    const body = `Name: ${name}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\n\n${f.message.value}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        lead="Questions about coaching, the programmes or the free tools? Send a message and I'll get back to you."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid">
            <motion.div className="contact-info" {...up}>
              <div>
                <div className="lbl">Email</div>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
              <div>
                <div className="lbl">Instagram</div>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@onaks_</a>
              </div>
              <div>
                <div className="lbl">TikTok</div>
                <a href={TIKTOK_URL} target="_blank" rel="noreferrer">Onaks Fitness</a>
              </div>
              <p className="lead">Prefer a chat? Book a free 30 minute call and we'll talk it through.</p>
            </motion.div>

            <motion.div {...up}>
              {sent ? (
                <div className="filled">
                  <FormConfirmation
                    heading="Message sent."
                    message="Thanks for reaching out. I'll reply to your email as soon as I can."
                  />
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit}>
                  <div className="row">
                    <Input label="First name" id="firstName" name="firstName" type="text" required />
                    <Input label="Last name" id="lastName" name="lastName" type="text" />
                  </div>
                  <div className="row">
                    <Input label="Phone" id="phone" name="phone" type="tel" />
                    <Input label="Email" id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="6" required />
                  </div>
                  <Button type="submit">Send message</Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
