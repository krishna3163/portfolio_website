'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface GuestbookEntry {
    id: string
    author_name: string
    message: string
    emoji: string
    created_at: string
}

const emojiOptions = ['👻', '💀', '🦇', '🕷️', '🎃', '👽', '🔮', '⚰️', '🌙', '🖤']

export default function Guestbook() {
    const { user, displayName } = useAuth()
    const [entries, setEntries] = useState<GuestbookEntry[]>([])
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedEmoji, setSelectedEmoji] = useState('👻')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetchEntries()
    }, [])

    const fetchEntries = async () => {
        try {
            const { data, error } = await supabase
                .from('guestbook')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50)

            if (error) throw error
            setEntries(data || [])
        } catch (err) {
            console.error('Error fetching guestbook:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) return

        setSubmitting(true)
        setError('')

        try {
            const { error } = await supabase
                .from('guestbook')
                .insert({
                    user_id: user.uid,
                    author_name: displayName || user.email?.split('@')[0] || 'Anonymous',
                    message,
                    emoji: selectedEmoji
                } as any)

            if (error) throw error

            setSuccess(true)
            setMessage('')
            fetchEntries()
            setTimeout(() => setSuccess(false), 3000)
        } catch (err: any) {
            setError(err.message || 'Failed to post message')
        } finally {
            setSubmitting(false)
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <main className="page-container">
            <section className="page-hero fade-in">
                <h1 className="glitch" data-text="The Dark Guestbook">The Dark Guestbook</h1>
                <p className="hero-subtitle text-muted">
                    Leave your mark in the void. Your words echo eternally in this cursed realm...
                </p>
            </section>

            <section className="guestbook-section">
                {/* Write Entry */}
                <div className="guestbook-form-container liquid-glass card">
                    <h2 className="text-blood">Sign the Book</h2>

                    {!user ? (
                        <div className="login-prompt">
                            <p className="text-muted">You must enter the void to leave your mark.</p>
                            <Link href="/login">
                                <button className="btn btn-primary">Enter the Void</button>
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="guestbook-form">
                            {error && (
                                <div className="error-message">
                                    <span className="error-icon">☠️</span>
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="success-message" style={{ padding: '1rem', marginBottom: '1rem' }}>
                                    <span className="success-icon">✓</span>
                                    Your mark has been left in the void!
                                </div>
                            )}

                            <div className="emoji-selector">
                                <label className="text-muted">Choose your spirit:</label>
                                <div className="emoji-options">
                                    {emojiOptions.map(emoji => (
                                        <button
                                            key={emoji}
                                            type="button"
                                            className={`emoji-btn ${selectedEmoji === emoji ? 'selected' : ''}`}
                                            onClick={() => setSelectedEmoji(emoji)}
                                        >
                                            {emoji}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    className="textarea"
                                    placeholder="Write your message to the void..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    maxLength={500}
                                    required
                                />
                                <div className="char-count text-muted">
                                    {message.length}/500
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={submitting || !message.trim()}
                            >
                                {submitting ? 'Etching...' : 'Leave Your Mark'}
                            </button>
                        </form>
                    )}
                </div>

                {/* Entries List */}
                <div className="guestbook-entries">
                    <h2 className="text-blood">Voices from the Void</h2>

                    {loading ? (
                        <div className="loading-state">
                            <span className="loading-skull">💀</span>
                            <p className="text-muted flicker">Summoning messages...</p>
                        </div>
                    ) : entries.length === 0 ? (
                        <div className="empty-state liquid-glass card">
                            <span className="empty-icon">👻</span>
                            <p className="text-muted">The void is silent... Be the first to leave your mark!</p>
                        </div>
                    ) : (
                        <div className="entries-list">
                            {entries.map((entry, index) => (
                                <div
                                    key={entry.id}
                                    className="guestbook-entry liquid-glass slide-up"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="entry-header">
                                        <span className="entry-emoji">{entry.emoji}</span>
                                        <span className="entry-author">{entry.author_name}</span>
                                        <span className="entry-date text-muted">{formatDate(entry.created_at)}</span>
                                    </div>
                                    <p className="entry-message">{entry.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
