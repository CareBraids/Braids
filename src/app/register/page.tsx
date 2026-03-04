import { redirect } from 'next/navigation';

// Registration and Login are handled entirely by the identical passwordless OAuth flow now.
// Redirect any stragglers hitting /register back to /login.
export default function RegisterPage() {
  redirect('/login');
}
