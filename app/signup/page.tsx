'use client'

import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { signUp } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)

        const { error } = await signUp(email, password)

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            setSuccess(true)
            setTimeout(() => router.push('/dashboard'), 2000)
        }
    }

    return (
        <main className="page-container auth-page">
            <div className="auth-background">
                <div className="blood-drip"></div>
                <div className="blood-drip" style={{ left: '30%', animationDelay: '0.7s' }}></div>
                <div className="blood-drip" style={{ left: '70%', animationDelay: '1.2s' }}></div>
                <div className="fog-overlay"></div>
            </div>

            <section className="auth-section fade-in">
                <div className="auth-card liquid-glass">
                    <div className="auth-header">
                        <h1 className="glitch" data-text="Join the Darkness">Join the Darkness</h1>
                        <p className="text-muted">Create your account to enter the void</p>
                    </div>

                    {success ? (
                        <div className="success-message">
                            <span className="success-icon">👻</span>
                            <h3>Soul Captured!</h3>
                            <p>Welcome to the darkness. Redirecting...</p>
                            <div className="success-animation"></div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="auth-form">
                            {error && (
                                <div className="error-message">
                                    <span className="error-icon">☠️</span>
                                    {error}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    <span className="label-icon">📧</span>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input"
                                    placeholder="soul@darkside.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    <span className="label-icon">🔐</span>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword" className="form-label">
                                    <span className="label-icon">🔒</span>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="input"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading-text">
                                        <span className="spinner"></span>
                                        Binding Soul...
                                    </span>
                                ) : (
                                    'Surrender Your Soul'
                                )}
                            </button>
                        </form>
                    )}

                    <div className="auth-footer">
                        <p className="text-muted">
                            Already in the void?{' '}
                            <Link href="/login" className="auth-link">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <div className="auth-decoration">
                        <span className="skull-icon">💀</span>
                    </div>
                </div>
            </section>
        </main>
    )
}
