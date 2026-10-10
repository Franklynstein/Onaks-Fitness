import { Link } from 'react-router-dom';
import AuthCard from './AuthCard';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function ResetPasswordPage() {
  return (
    <AuthCard
      title="Set a new password"
      subtitle="Choose a new password for your account."
      footer={<><Link to="/login">Back to log in</Link></>}
    >
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Input label="New password" id="password" name="password" type="password" placeholder="New password" required />
        <Input label="Confirm password" id="confirm" name="confirm" type="password" placeholder="Confirm password" required />
        <Button type="submit">Reset password</Button>
      </form>
    </AuthCard>
  );
}
