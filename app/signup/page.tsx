'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, storage } from '@/lib/firebase'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

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

        try {
            // 1. Create User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            let photoURL = ''

            // 2. Upload Profile Photo (if selected)
            if (file) {
                const storageRef = ref(storage, `profile_photos/${user.uid}/${file.name}`)
                await uploadBytes(storageRef, file)
                photoURL = await getDownloadURL(storageRef)
            }

            // 3. Update Profile
            await updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL
            })

            setSuccess(true)
            setTimeout(() => router.push('/dashboard'), 2000)

        } catch (err: any) {
            console.error('Signup Error:', err)
            if (err.code === 'auth/email-already-in-use') {
                setError('User with this email already exists. Please sign in.')
            } else {
                setError('Failed to create account. ' + err.message)
            }
        } finally {
            setLoading(false)
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
                                <label htmlFor="displayName" className="form-label">
                                    <span className="label-icon">👤</span>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="displayName"
                                    className="input"
                                    placeholder="Your Name"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    required
                                />
                            </div>

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
                                <label htmlFor="photo" className="form-label">
                                    <span className="label-icon">📸</span>
                                    Profile Photo
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    className="input"
                                    onChange={handleFileChange}
                                    accept="image/*"
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
