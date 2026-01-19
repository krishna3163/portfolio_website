'use client'

import { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
    const { user, profile, loading, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <main className="page-container">
                <div className="loading-screen">
                    <div className="loading-skull">💀</div>
                    <p className="loading-text flicker">Awakening the darkness...</p>
                </div>
            </main>
        )
    }

    if (!user) return null

    const handleSignOut = async () => {
        await signOut()
        router.push('/')
    }

    return (
        <main className="page-container dashboard-page">
            <section className="page-hero fade-in">
                <h1 className="glitch" data-text="Your Dark Realm">Your Dark Realm</h1>
                <p className="hero-subtitle text-muted">
                    Welcome back, {profile?.display_name || user.email}
                </p>
            </section>

            <section className="dashboard-content">
                <div className="dashboard-grid">
                    {/* Profile Card */}
                    <div className="dashboard-card liquid-glass card slide-up">
                        <div className="card-header">
                            <span className="card-icon">👤</span>
                            <h2 className="text-blood">Your Profile</h2>
                        </div>
                        <div className="profile-info">
                            <div className="avatar-container">
                                <div className="avatar">
                                    {profile?.avatar_url ? (
                                        <img src={profile.avatar_url} alt="Avatar" />
                                    ) : (
                                        <span className="avatar-placeholder">👻</span>
                                    )}
                                </div>
                                <div className="avatar-glow"></div>
                            </div>
                            <div className="profile-details">
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Username:</strong> {profile?.username || 'Not set'}</p>
                                <p><strong>Display Name:</strong> {profile?.display_name || 'Anonymous Soul'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="dashboard-card liquid-glass card slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header">
                            <span className="card-icon">⚡</span>
                            <h2 className="text-blood">Quick Actions</h2>
                        </div>
                        <div className="quick-actions">
                            <Link href="/guestbook" className="action-btn">
                                <span className="action-icon">📖</span>
                                <span>Visit Guestbook</span>
                            </Link>
                            <Link href="/projects" className="action-btn">
                                <span className="action-icon">💀</span>
                                <span>View Projects</span>
                            </Link>
                            <Link href="/contact" className="action-btn">
                                <span className="action-icon">📧</span>
                                <span>Send Message</span>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="dashboard-card liquid-glass card slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header">
                            <span className="card-icon">📊</span>
                            <h2 className="text-blood">Your Activity</h2>
                        </div>
                        <div className="stats-grid-small">
                            <div className="stat-item">
                                <span className="stat-value">0</span>
                                <span className="stat-label">Guestbook Posts</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">0</span>
                                <span className="stat-label">Comments</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">1</span>
                                <span className="stat-label">Days in Void</span>
                            </div>
                        </div>
                    </div>

                    {/* Settings Card */}
                    <div className="dashboard-card liquid-glass card slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="card-header">
                            <span className="card-icon">⚙️</span>
                            <h2 className="text-blood">Settings</h2>
                        </div>
                        <div className="settings-list">
                            <div className="setting-item">
                                <span>Dark Theme</span>
                                <span className="setting-badge">Active</span>
                            </div>
                            <div className="setting-item">
                                <span>Notifications</span>
                                <span className="setting-badge">On</span>
                            </div>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-secondary btn-full logout-btn">
                            <span>🚪</span> Leave the Void
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
