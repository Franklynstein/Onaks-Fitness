import PageLayout from '../../components/ui/PageLayout';
import PageHero from '../../components/ui/PageHero';
import { CONTACT_EMAIL } from '../../config/site';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="Your privacy is important to us. Learn how we collect, use and protect your data."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose">
            <h2>1. Information we collect</h2>
            <p>We collect personal data such as your name, email, health goals, and usage data to personalise your fitness experience.</p>
            <h2>2. How we use it</h2>
            <p>To deliver services, improve workouts, send updates and ensure a great experience. We never sell your data.</p>
            <h2>3. Third-party sharing</h2>
            <p>Only shared with essential providers (like payment processors). No unauthorised access.</p>
            <h2>4. Your rights</h2>
            <p>You can access, correct, or request deletion of your data. Contact us any time at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            <h2>5. Cookies</h2>
            <p>We use cookies to analyse traffic and enhance user experience. You can opt out via browser settings.</p>
            <h2>6. Policy updates</h2>
            <p>We update this policy occasionally. Changes will be posted here with a new effective date.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
