'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                } as any)

            if (error) throw error

            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error: any) {
            setStatus('error')
            setErrorMessage(error.message || 'Failed to send message')
        }
    }

    return (
        <main className="page-container">
            <section className="page-hero fade-in">
                <h1 className="glitch" data-text="Summon the Developer">Summon the Developer</h1>
                <p className="hero-subtitle text-muted">
                    Reach out from the void, and I shall answer
                </p>
            </section>

            <section className="contact-section">
                <div className="contact-grid">
                    <div className="contact-form-container liquid-glass card">
                        <h2 className="text-blood">Send a Message</h2>

                        {status === 'success' ? (
                            <div className="success-message">
                                <span className="success-icon">👻</span>
                                <h3>Message Received!</h3>
                                <p className="text-muted">Your message has been cast into the void. I&apos;ll respond from the shadows soon.</p>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setStatus('idle')}
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {status === 'error' && (
                                    <div className="error-message">
                                        <span className="error-icon">☠️</span>
                                        {errorMessage}
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="input"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="input"
                                        placeholder="What's this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="textarea"
                                        placeholder="Tell me your darkest secrets..."
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? (
                                        <span className="loading-text">
                                            <span className="spinner"></span>
                                            Casting...
                                        </span>
                                    ) : (
                                        'Cast Message into the Void'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="contact-info">
                        <div className="liquid-glass card">
                            <h3 className="text-blood">Direct Channels</h3>
                            <div className="contact-methods">
                                <a href="mailto:kk3163019@gmail.com" className="contact-method">
                                    <span className="method-icon">📧</span>
                                    <div className="method-details">
                                        <div className="method-label text-muted">Email</div>
                                        <div className="method-value">kk3163019@gmail.com</div>
                                    </div>
                                </a>

                                <a href="tel:+919876543210" className="contact-method">
                                    <span className="method-icon">📱</span>
                                    <div className="method-details">
                                        <div className="method-label text-muted">Phone</div>
                                        <div className="method-value">+91 98765 43210</div>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/krishna0858" target="_blank" rel="noopener noreferrer" className="contact-method">
                                    <span className="method-icon">💼</span>
                                    <div className="method-details">
                                        <div className="method-label text-muted">LinkedIn</div>
                                        <div className="method-value">Connect with me</div>
                                    </div>
                                </a>

                                <a href="https://github.com/krishna3163" target="_blank" rel="noopener noreferrer" className="contact-method">
                                    <span className="method-icon">💻</span>
                                    <div className="method-details">
                                        <div className="method-label text-muted">GitHub</div>
                                        <div className="method-value">View my code</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="liquid-glass card">
                            <h3 className="text-blood flicker">Location</h3>
                            <p className="text-muted">
                                📍 Lucknow, Uttar Pradesh, India<br />
                                🌍 Available worldwide<br />
                                ⏰ Timezone: IST (UTC +5:30)
                            </p>
                        </div>

                        <div className="liquid-glass card">
                            <h3 className="text-blood">Response Time</h3>
                            <p className="text-muted">
                                I typically respond within 24-48 hours. For urgent matters,
                                please indicate in your message subject.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
