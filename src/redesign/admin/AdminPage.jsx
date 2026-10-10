import PageLayout from '../../components/ui/PageLayout';
import Admin from '../../components/Admin';

// Internal/admin page: the system shell with REDUCED motion (no ambient orbs, no
// progress bar, no scroll reveals) per brief section 8. The existing Admin component
// is rendered unchanged so all functionality (payment plans, TinyMCE, PDF upload,
// API calls) is preserved exactly; only the surrounding shell/theme changes.
export default function AdminPage() {
  return (
    <PageLayout reduced footer={false}>
      <div className="admin">
        <Admin />
      </div>
    </PageLayout>
  );
}
