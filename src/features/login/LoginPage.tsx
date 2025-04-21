import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { Button } from '../../app/shared/ui/Button';
import { Input } from '../../app/shared/ui/Input';

export default function LoginPage() {
    const { user, setUser, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();

    const emailOk = /^\S+@\S+\.\S+$/.test(email);
    const pwdOk = pwd.length >= 6;
    const formOk = emailOk && pwdOk;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (formOk) {
            setUser({ email });
            navigate('/');
        } else {
            setTouched(true);
        }
    };

    if (user)
        return (
            <section style={{ textAlign: 'center' }}>
                <h1>Welcome, {user.email}</h1>
                <Button onClick={logout}>Logout</Button>
            </section>
        );

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <Input
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={touched && !emailOk ? 'Invalid email' : ''}
            />

            <Input
                label="Password"
                type="password"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                error={touched && !pwdOk ? 'Min 6 chars' : ''}
            />

            <Button type="submit" disabled={!formOk}>
                Sign in
            </Button>
        </form>
    );
}
