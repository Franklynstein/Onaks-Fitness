import PageLayout from '../../components/ui/PageLayout';
import PageHero from '../../components/ui/PageHero';
import { CONTACT_EMAIL } from '../../config/site';

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        lead='By accessing or using our website, services, content and programmes (collectively, the "Services"), you agree to be bound by the following Terms of Service. If you do not agree, please do not use our services.'
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose">
            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old or have permission from a legal guardian to use our Services. By using Onaks Fitness, you confirm you meet this requirement.</p>
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
