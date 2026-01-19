'use client'

import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signIn } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const { error } = await signIn(email, password)

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push('/dashboard')
        }
    }

    return (
        <main className="page-container auth-page">
            <div className="auth-background">
                <div className="blood-drip"></div>
                <div className="blood-drip" style={{ left: '20%', animationDelay: '0.5s' }}></div>
                <div className="blood-drip" style={{ left: '80%', animationDelay: '1s' }}></div>
                <div className="fog-overlay"></div>
            </div>

            <section className="auth-section fade-in">
                <div className="auth-card liquid-glass">
                    <div className="auth-header">
                        <h1 className="glitch" data-text="Enter the Void">Enter the Void</h1>
                        <p className="text-muted">Sign in to unlock the darkness</p>
                    </div>

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

                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading-text">
                                    <span className="spinner"></span>
                                    Summoning...
                                </span>
                            ) : (
                                'Enter the Darkness'
                            )}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="text-muted">
                            New to the void?{' '}
                            <Link href="/signup" className="auth-link">
                                Create your soul
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
