import PageLayout from '../../components/ui/PageLayout';
import PageHero from '../../components/ui/PageHero';
import { CONTACT_EMAIL } from '../../config/site';
import { LEGAL } from '../../config/legal';

// NOTE: AI-drafted starting point. Have it reviewed by a professional before relying on it.
const Gap = ({ label }) => (
  <mark style={{ background: 'rgba(0,235,43,.15)', color: 'var(--green)', padding: '0 4px', borderRadius: 4 }}>
    [{label}]
  </mark>
);

export default function PrivacyPolicyPage() {
  const name = LEGAL.businessName || 'Onaks Fitness';
  const dataEmail = LEGAL.dataEmail || CONTACT_EMAIL;
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="How we collect, use and protect your personal data, in line with UK data protection law."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose">
            <p><strong>Last updated:</strong> {LEGAL.lastUpdated}</p>
            <p>
              This policy explains how {name}
              {LEGAL.businessName ? '' : <> (trading as Onaks Fitness; registered name <Gap label="your registered legal name" />)</>}
              {' '}("we", "us", "our") collects and uses your personal data when you use onaksfitness.com,
              buy our programmes or ebook, use our free tools, or work with us for coaching. We are the
              data controller for this information.
            </p>

            <h2>1. Information we collect</h2>
            <ul>
              <li><strong>Details you give us:</strong> name, email address, and information you submit through our forms (calorie calculator inputs, free workout sign-up, contact messages, coaching questionnaires such as your goals, training history and lifestyle).</li>
              <li><strong>Health and fitness information:</strong> details you choose to share for coaching (for example weight, measurements, photos, dietary preferences). This can be sensitive data, which we only process with your consent and to provide the service you asked for.</li>
              <li><strong>Payment information:</strong> purchases are processed by Stripe. We receive confirmation and order details but we do not collect or store your full card details.</li>
              <li><strong>Technical and usage data:</strong> IP address, device/browser type, and how you use the site, collected via cookies and similar technologies.</li>
            </ul>

            <h2>2. How we use your data and our legal bases</h2>
            <ul>
              <li><strong>To provide what you asked for</strong> (deliver programmes, ebook downloads, calculator results, coaching) — legal basis: performance of a contract.</li>
              <li><strong>To process payments</strong> via Stripe — performance of a contract.</li>
              <li><strong>To send marketing emails</strong> (via Mailchimp) about coaching, offers and tips — legal basis: your consent; you can unsubscribe at any time.</li>
              <li><strong>To run and improve the site</strong> and keep it secure — legitimate interests.</li>
              <li><strong>To meet legal obligations</strong> such as tax and accounting records.</li>
            </ul>

            <h2>3. Marketing emails</h2>
            <p>If you join our free workout list or opt in elsewhere, we use Mailchimp to send emails. Every email has an unsubscribe link, and you can opt out at any time by contacting us. We will not add you to marketing lists without your consent.</p>

            <h2>4. Payments</h2>
            <p>Card payments are handled by Stripe, which acts as an independent controller/processor for payment data under its own privacy policy. We never see or store your card number.</p>

            <h2>5. Sharing your data</h2>
            <p>We do not sell your personal data. We share it only with providers that help us run the business, under appropriate agreements: Stripe (payments), Mailchimp (email marketing), and our email, hosting and analytics providers. We may disclose data where required by law.</p>

            <h2>6. International transfers</h2>
            <p>Some providers (for example Stripe and Mailchimp) may process data outside the UK/EEA. Where they do, we rely on appropriate safeguards such as the UK International Data Transfer Agreement or equivalent mechanisms.</p>

            <h2>7. Cookies</h2>
            <p>We use essential cookies to run the site and may use analytics cookies to understand usage. You can control cookies through your browser settings. Disabling some cookies may affect how the site works.</p>

            <h2>8. How long we keep your data</h2>
            <p>We keep personal data only as long as needed for the purposes above: coaching and customer records for the duration of our relationship and a reasonable period afterwards, financial records as required by law, and marketing data until you unsubscribe.</p>

            <h2>9. Your rights</h2>
            <p>Under UK GDPR you have the right to access, correct, delete or restrict your data, to object to processing, to data portability, and to withdraw consent at any time. To exercise any of these, email <a href={`mailto:${dataEmail}`}>{dataEmail}</a>. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk.</p>

            <h2>10. Security</h2>
            <p>We take reasonable technical and organisational measures to protect your data. No method of transmission or storage is completely secure, but we work to keep your information safe.</p>

            <h2>11. Children</h2>
            <p>Our services are intended for adults (18+) and are not directed at children. We do not knowingly collect data from children.</p>

            <h2>12. Changes to this policy</h2>
            <p>We may update this policy from time to time. The latest version will always be posted here with a new "last updated" date.</p>

            <h2>13. Contact</h2>
            <p>For any privacy question or data request, email <a href={`mailto:${dataEmail}`}>{dataEmail}</a>.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
