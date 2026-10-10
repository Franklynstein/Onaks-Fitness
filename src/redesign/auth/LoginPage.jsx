import { Link } from 'react-router-dom';
import AuthCard from './AuthCard';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to your Onaks Fitness account."
      footer={<>New here? <Link to="/signup">Create an account</Link></>}
    >
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Input label="Email address" id="email" name="email" type="email" placeholder="you@email.com" required />
        <Input label="Password" id="password" name="password" type="password" placeholder="Your password" required />
        <Link to="/forgot-password" className="muted-link">Forgot your password?</Link>
        <Button type="submit">Log in</Button>
      </form>
    </AuthCard>
  );
}
