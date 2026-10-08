import { Link } from 'react-router-dom';
import AuthCard from './AuthCard';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Start your transformation with Onaks Fitness."
      footer={<>Already have an account? <Link to="/login">Log in</Link></>}
    >
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Input label="Full name" id="name" name="name" type="text" placeholder="Your name" required />
        <Input label="Email address" id="email" name="email" type="email" placeholder="you@email.com" required />
        <Input label="Password" id="password" name="password" type="password" placeholder="Create a password" required />
        <Button type="submit">Create account</Button>
      </form>
    </AuthCard>
  );
}
