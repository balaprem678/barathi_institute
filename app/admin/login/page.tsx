'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('token', data.token);
                router.push('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="section-title text-center">
                        <h3>Admin Login</h3>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" className="form-control login-input" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control login-input" onChange={handleChange} required />
                        </div>
                        <button type="submit" className="thm-btn btn-block">Login</button>
                    </form>
                    <style jsx global>{`
                        .login-input {
                            color: #333 !important;
                            background: #fff !important;
                        }
                        .login-input::placeholder {
                            color: #999 !important;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
}
