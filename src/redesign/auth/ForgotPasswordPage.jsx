import { Link } from 'react-router-dom';
import AuthCard from './AuthCard';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to reset it."
      footer={<>Remembered it? <Link to="/login">Back to log in</Link></>}
    >
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Input label="Email address" id="email" name="email" type="email" placeholder="you@email.com" required />
        <Button type="submit">Send reset link</Button>
      </form>
    </AuthCard>
  );
}
