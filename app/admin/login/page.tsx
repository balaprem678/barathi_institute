'use client';

import { useState, useEffect, Suspense } from 'react';
import {
    Lock,
    User,
    Eye,
    EyeOff,
    Loader2
} from 'lucide-react';

import { AuthService } from '@/services/authService';
import { useRouter, useSearchParams } from 'next/navigation';
import { useNotification } from '@/context/NotificationContext';
import { Images } from '@/app/utilis/Images';

export default function AdminLogin() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { showNotification } = useNotification();

    const isExpired = searchParams.get('expired') === 'true';

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isExpired) {
            showNotification(
                'error',
                'Your session has expired. Please login again.'
            );
        }
    }, [isExpired, showNotification]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });

        if (error) setError('');
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        try {
            await AuthService.login(credentials);
            router.push('/admin/dashboard');
        } catch (err: any) {
            setError(
                err.message ||
                    'Login failed. Please check your credentials.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="login_page"
            style={{
                '--login-bg': `url(${Images.login_bg.src})`
            } as React.CSSProperties}
        >
            <div className="login_wrap">

                {/* LEFT PANEL */}

                <div className="login_panel">
                    <div className="login_panel_content">

                        <span className="tag">
                            Bharathi Institutes
                        </span>

                        <h2>
                            Welcome
                            <br />
                            Back
                        </h2>

                        <p>
                            Securely manage admissions,
                            student data, enquiries and
                            website content from one place.
                        </p>

                    </div>
                </div>

                {/* RIGHT PANEL */}

                <div className="login_form_card">
                    <div className="login_form_inner">

                        <div className="login_heading">
                            <h2>Admin Login</h2>

                            <p>
                                Enter your credentials to continue
                            </p>
                        </div>

                        {error && (
                            <div className="error_box">
                                ⚠️ {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            {/* USERNAME */}

                            <div className="input_group">
                                <label>Username</label>

                                <div className="input_box">

                                    <User
                                        size={20}
                                        className="input_icon"
                                    />

                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        value={credentials.username}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                            </div>

                            {/* PASSWORD */}

                            <div className="input_group">
                                <label>Password</label>

                                <div className="input_box">

                                    <Lock
                                        size={20}
                                        className="input_icon"
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        name="password"
                                        placeholder="Enter password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="password_toggle"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>

                                </div>
                            </div>

                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="login_btn"
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={20}
                                            className="spin"
                                        />
                                        Signing In...
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </button>

                        </form>

                        <div className="login_footer">
                            © {new Date().getFullYear()}
                            {' '}
                            Bharathi Institutes
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}