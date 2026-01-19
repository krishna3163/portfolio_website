'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
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

    const handleGoogleSignup = async () => {
        setLoading(true)
        setError('')

        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)

            setSuccess(true)
            setTimeout(() => router.push('/dashboard'), 2000)
        } catch (err: any) {
            console.error('Google Signup Error:', err)
            if (err.code === 'auth/popup-closed-by-user') {
                setError('Sign-up cancelled. Please try again.')
            } else if (err.code === 'auth/account-exists-with-different-credential') {
                setError('An account already exists with this email. Please sign in instead.')
            } else {
                setError('Failed to sign up with Google. ' + err.message)
            }
        } finally {
            setLoading(false)
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
                        <>
                            {/* Google Sign Up Button */}
                            <button
                                type="button"
                                onClick={handleGoogleSignup}
                                disabled={loading}
                                className="btn btn-secondary btn-full mb-4"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
                                    <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.183l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853" />
                                    <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9.002c0 1.454.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                    <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.48 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335" />
                                </svg>
                                {loading ? 'Binding Soul...' : 'Continue with Google'}
                            </button>

                            {/* Divider */}
                            <div className="flex items-center my-6">
                                <div className="flex-1 border-t border-white/10"></div>
                                <span className="px-4 text-sm text-muted">OR</span>
                                <div className="flex-1 border-t border-white/10"></div>
                            </div>

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
                        </>
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
