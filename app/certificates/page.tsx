'use client'

import { useState } from 'react'
import Link from 'next/link'
import './certificates.css'

const certificates = [
    {
        title: 'AWS - Solutions Architecture Job Simulation',
        issuer: 'Forage',
        date: 'Dec 2025',
        credentialId: 'Ys9tz86WHpHHCacsS',
        skills: ['Cloud Architecture', 'AWS', 'Solutions Design'],
        icon: '☁️'
    },
    {
        title: 'Full Stack Web Development Workshop',
        issuer: 'Softpro India Computer Technologies (P) Ltd.',
        date: 'Dec 2025',
        credentialId: null,
        skills: ['Full Stack Development', 'Web Development', 'HTML', 'CSS', 'JavaScript'],
        description: 'Organized in collaboration with Dr. A. P. J. Abdul Kalam Technical University (AKTU), Lucknow',
        icon: '🌐'
    },
    {
        title: 'Introduction to Prompt Engineering with GitHub Copilot',
        issuer: 'Microsoft',
        date: 'Dec 2025',
        credentialId: '9504001',
        skills: ['Prompt Engineering', 'Generative AI', 'GitHub Copilot'],
        icon: '🤖'
    },
    {
        title: 'Start Writing Prompts like a Pro',
        issuer: 'Google',
        date: 'Nov 2025',
        expires: 'Jan 2035',
        credentialId: 'EVA3P549D06Y',
        skills: ['Prompt Engineering', 'Creative Writing', 'Generative AI'],
        icon: '✍️'
    },
    {
        title: 'NodeJs + ExpressJs + MongoDB',
        issuer: 'KNOWLEDGEGATE',
        date: 'Jul 2025',
        credentialId: '168074902037209807736',
        skills: ['Node.js', 'Express.js', 'MongoDB'],
        icon: '🟢'
    },
    {
        title: 'Java Programming',
        issuer: 'HackerRank',
        date: 'Apr 2025',
        credentialId: '1DC82FEAB3CD',
        skills: ['GitHub', 'Java', 'Spring Boot', 'Spring Framework'],
        icon: '☕'
    },
    {
        title: 'HTML Certification Test',
        issuer: 'Complete Coding by Prashant Sir',
        date: 'Apr 2024',
        credentialId: 'CTQKDJKS',
        skills: ['HTML'],
        icon: '📄'
    },
    {
        title: 'Java Certification Test',
        issuer: 'Complete Coding by Prashant Sir',
        date: 'Apr 2024',
        credentialId: '8NXI5CWB',
        skills: ['Java'],
        icon: '☕'
    },
    {
        title: 'React and Redux Certification Test',
        issuer: 'Complete Coding by Prashant Sir',
        date: 'Apr 2024',
        credentialId: 'Z5TNPCIK',
        skills: ['React', 'Redux'],
        icon: '⚛️'
    },
    {
        title: 'Problem Solving (Intermediate & Basic)',
        issuer: 'HackerRank',
        date: '2025',
        credentialId: 'OD7B420F3FDA',
        skills: ['Problem Solving', 'Algorithms', 'Data Structures'],
        icon: '🧩'
    },
    {
        title: 'Python Programming',
        issuer: 'HackerRank',
        date: '2025',
        credentialId: 'F2C5B8F46DB7',
        skills: ['Python'],
        icon: '🐍'
    },
    {
        title: 'SQL (Advanced, Intermediate & Basic)',
        issuer: 'HackerRank',
        date: '2025',
        credentialId: 'B7317A548399',
        skills: ['SQL', 'Database Management'],
        icon: '🗄️'
    }
]

export default function Certificates() {
    const [filter, setFilter] = useState('all')

    const filteredCerts = filter === 'all'
        ? certificates
        : certificates.filter(cert => cert.date.includes(filter))

    const years = ['all', '2025', '2024']

    return (
        <main className="page-container">
            <section className="page-hero fade-in">
                <h1 className="glitch" data-text="Cursed Achievements">Cursed Achievements</h1>
                <p className="hero-subtitle text-muted">
                    Certificates collected from the depths of knowledge... Each one a testament to conquered challenges.
                </p>
            </section>

            {/* Filter */}
            <section className="filter-section">
                <div className="filter-buttons">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setFilter(year)}
                            className={`filter-btn ${filter === year ? 'active' : ''}`}
                        >
                            {year === 'all' ? 'All Souls' : year}
                        </button>
                    ))}
                </div>
            </section>

            {/* Certificates Grid */}
            <section className="certificates-section">
                <div className="certificates-grid">
                    {filteredCerts.map((cert, index) => (
                        <div
                            key={index}
                            className="certificate-card liquid-glass"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="cert-icon">{cert.icon}</div>

                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer text-blood">{cert.issuer}</p>

                                <div className="cert-meta">
                                    <span className="cert-date">📅 {cert.date}</span>
                                    {cert.expires && (
                                        <span className="cert-expires">⏳ Expires: {cert.expires}</span>
                                    )}
                                </div>

                                {cert.credentialId && (
                                    <div className="cert-credential">
                                        <span className="credential-label">ID:</span>
                                        <code className="credential-id">{cert.credentialId}</code>
                                    </div>
                                )}

                                {cert.description && (
                                    <p className="cert-description text-muted">{cert.description}</p>
                                )}

                                <div className="cert-skills">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="cert-glow" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="stats-section">
                <div className="liquid-glass card">
                    <h2 className="flicker">📊 Achievement Stats</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value text-blood">{certificates.length}</span>
                            <span className="stat-label">Total Certificates</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-blood">
                                {[...new Set(certificates.flatMap(c => c.skills))].length}
                            </span>
                            <span className="stat-label">Skills Mastered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-blood">
                                {[...new Set(certificates.map(c => c.issuer))].length}
                            </span>
                            <span className="stat-label">Issuers</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
