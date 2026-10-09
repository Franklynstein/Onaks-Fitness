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

export default function TermsOfServicePage() {
  const name = LEGAL.businessName || 'Onaks Fitness';
  const dataEmail = LEGAL.dataEmail || CONTACT_EMAIL;
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        lead="The terms you agree to when you buy our products or work with us."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose">
            <p><strong>Last updated:</strong> {LEGAL.lastUpdated}</p>
            <p>
              These terms apply to onaksfitness.com and the products and services provided by {name}
              {LEGAL.businessName ? '' : <> (trading as Onaks Fitness; registered name <Gap label="your registered legal name" />)</>}
              {' '}("we", "us", "our"). By buying a product or using our services you agree to these terms.
            </p>

            <h2>1. What we provide</h2>
            <p>We offer online fat loss coaching, training programmes, nutrition resources and grocery lists, and digital guides including the "Build Different" ebook. Some resources (such as the calorie calculator and free workout plan) are provided free of charge.</p>

            <h2>2. Health disclaimer</h2>
            <p>Our content is for general information and education only and is not medical advice. Always consult a qualified doctor or healthcare professional before starting any training programme, nutrition plan or diet, especially if you are pregnant, have an injury, or have a medical condition. You take part at your own risk. Results vary from person to person and depend on your effort, consistency and individual circumstances; we do not guarantee any specific result.</p>

            <h2>3. Eligibility</h2>
            <p>You must be at least 18 years old to buy from us or enter a coaching agreement.</p>

            <h2>4. Prices and payment</h2>
            <p>Prices are shown on the site and are processed securely by Stripe. Payment is taken at checkout. We may change prices at any time, but changes do not affect orders already placed.</p>

            <h2>5. Digital products and licence</h2>
            <p>Programmes, grocery lists and the ebook are digital products delivered electronically. When you buy one, we grant you a personal, non-transferable licence to use it for your own fitness. You may not copy, share, resell or redistribute our materials.</p>

            <h2>6. Refunds and cancellations</h2>
            {LEGAL.refundTerms
              ? <p>{LEGAL.refundTerms}</p>
              : <p><Gap label="your refund policy, e.g. because our products are digital and delivered instantly, all sales are final once the download has been accessed, except where required by law" /></p>}
            <p>For digital content, under the UK Consumer Contracts Regulations your 14-day right to cancel does not apply once you have started downloading or accessing the content, where you agreed to this and acknowledged losing that right at purchase. This does not affect your statutory rights if a product is faulty or not as described.</p>

            <h2>7. Coaching relationship</h2>
            <p>Where you buy 1 on 1 coaching, we provide the services described at purchase (for example a personalised plan, check-ins and messaging support). You agree to give accurate information about your health and goals, to follow guidance at your own discretion, and to communicate honestly. Coaching is guidance and support, not a medical or therapeutic service.</p>

            <h2>8. Intellectual property</h2>
            <p>All content on the site and in our products (text, plans, images, branding) belongs to us or our licensors and is protected by law. You may not use it except as allowed by these terms.</p>

            <h2>9. Acceptable use</h2>
            <p>You agree not to misuse the site, attempt to disrupt it, or use our content in any unlawful way.</p>

            <h2>10. Limitation of liability</h2>
            <p>To the extent permitted by law, we are not liable for any loss or injury arising from your use of our content or services, including the results you do or do not achieve. Nothing in these terms excludes liability that cannot be excluded by law.</p>

            <h2>11. Termination</h2>
            <p>We may suspend or end access to our services if you breach these terms. You may stop using the services at any time.</p>

            <h2>12. Governing law</h2>
            <p>These terms are governed by the laws of England and Wales, and disputes are subject to the courts of England and Wales.</p>

            <h2>13. Changes</h2>
            <p>We may update these terms from time to time. The current version will always be posted here.</p>

            <h2>14. Contact</h2>
            <p>Questions about these terms? Email <a href={`mailto:${dataEmail}`}>{dataEmail}</a>.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
