import React, { useState, useEffect } from 'react';
import warehouseImage from '../../public/warehouse.png';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [showPassword, setShowPassword] = useState(false);

    const LOGIN_CREDENTIALS = {
        'admin@gmail.com': '123456',
        'user@wise.com': 'password123',
        'demo@wise.com': 'demo123'
    };

    useEffect(() => {
        const rememberedUser = localStorage.getItem('rememberedUser');
        const shouldRemember = localStorage.getItem('rememberMe') === 'true';

        if (rememberedUser && shouldRemember) {
            setUsername(rememberedUser);
            setRememberMe(true);
        }
    }, []);

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => {
            hideMessage();
        }, 5000);
    };

    const hideMessage = () => {
        setMessage({ type: '', text: '' });
    };

    const validateForm = (user, pass) => {
        const errors = [];
        if (!user.trim()) {
            errors.push('Username/email wajib diisi');
        }
        if (!pass.trim()) {
            errors.push('Password wajib diisi');
        } else if (pass.length < 6) {
            errors.push('Password minimal 6 karakter');
        }
        return errors;
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        hideMessage();

        const validationErrors = validateForm(username, password);
        if (validationErrors.length > 0) {
            showMessage('error', validationErrors[0]);
            return;
        }

        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const isValidCredentials = LOGIN_CREDENTIALS[username] === password;

            if (isValidCredentials) {
                showMessage('success', `Selamat datang kembali, ${username}!`);

                if (rememberMe) {
                    localStorage.setItem('rememberedUser', username);
                    localStorage.setItem('rememberMe', 'true');
                } else {
                    localStorage.removeItem('rememberedUser');
                    localStorage.removeItem('rememberMe');
                }

                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('currentUser', username);

                setTimeout(() => {
                    window.location.href = '/dashboard'; // Arahkan ke rute dashboard
                }, 1500);

            } else {
                showMessage('error', 'Username/email atau password salah. Coba lagi ya.');
            }

        } catch (error) {
            console.error('Login error:', error);
            showMessage('error', 'Terjadi kesalahan saat login. Coba lagi ya.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container flex font-inter bg-gray-50 min-h-screen overflow-hidden">
            <div
                className="image-section relative flex-1 bg-cover bg-no-repeat overflow-hidden"
                style={{ backgroundImage: `url(${warehouseImage})`, backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30"></div>
                <div className="absolute inset-y-0 right-0 w-px bg-gray-300"></div>
            </div>

            <div className="form-section w-full lg:w-[480px] bg-white flex flex-col justify-center items-center px-8 py-12 shadow-2xl z-20">
                <div className="w-full max-w-sm">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-3">LOGIN KE WISE</h2>
                        <p className="text-base lg:text-lg text-gray-600">Selamat datang kembali, Pengguna</p>
                    </div>

                    {message.text && (
                        <div className={`message-box ${message.type} ${message.text ? 'show' : 'hidden'}`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6 w-full">
                        <div>
                            <label htmlFor="username" className="block text-base font-semibold text-gray-700 mb-2">
                                Username atau email
                            </label>
                            <div className="input-field-wrapper">
                                <input
                                    type="text"
                                    id="username"
                                    required
                                    className="form-input w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg bg-white focus:ring-1 focus:ring-gray-600 outline-none text-base"
                                    placeholder="Masukkan email atau username kamu"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        hideMessage();
                                    }}
                                />
                                <div className="input-icon pointer-events-none">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="input-field-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    required
                                    minLength="6"
                                    className="form-input w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg bg-white focus:ring-1 focus:ring-gray-600 outline-none text-base"
                                    placeholder="Masukkan password kamu"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        hideMessage();
                                    }}
                                />
                                <div className="input-icon clickable" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3.27 2L2 3.27l4.59 4.59C5.22 9.01 4 11.39 4 12c0 .38 2.3 5.33 8 5.33 1.49 0 2.85-.34 4.05-.9l3.68 3.68 1.27-1.27L3.27 2zM12 14a2 2 0 01-2-2c0-.25.05-.49.13-.71l2.58 2.58c-.22.08-.46.13-.71.13zM9.17 6.34l1.69 1.69A2 2 0 0114 10c0 .25-.05.49-.13.71l1.45 1.45c.43-.7.68-1.5.68-2.16 0-.61-1.23-2.99-5.33-2.99-.74 0-1.46.11-2.14.31z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            id="loginButton"
                            className="btn-login w-full h-12 bg-gray-800 text-white text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                            disabled={isLoading}
                        >
                            <span id="loginText">{isLoading ? 'Masuk...' : 'Masuk'}</span>
                            {isLoading && (
                                <span className="loading-spinner ml-2"></span>
                            )}
                        </button>

                        <div className="flex justify-center pt-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="ml-3 text-sm text-gray-600">Ingat aku</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;