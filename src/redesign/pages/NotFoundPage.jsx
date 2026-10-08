import PageLayout from '../../components/ui/PageLayout';
import PageHero from '../../components/ui/PageHero';
import { Button, GhostButton } from '../../components/ui/Button';

export default function NotFoundPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="404"
        title="Page not found"
        lead="The page you're looking for doesn't exist or has moved. Let's get you back on track."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button to="/">Back to home</Button>
            <GhostButton to="/programs">See the programmes</GhostButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
