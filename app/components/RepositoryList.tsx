'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Language icon mapper
const getLanguageIcon = (language: string) => {
    const icons: { [key: string]: string } = {
        'JavaScript': '🟨',
        'TypeScript': '🔷',
        'Python': '🐍',
        'Java': '☕',
        'C': '⚙️',
        'C++': '⚡',
        'C#': '🎯',
        'Go': '🐹',
        'Rust': '🦀',
        'PHP': '🐘',
        'Ruby': '💎',
        'Swift': '🦅',
        'Kotlin': '🟣',
        'HTML': '🌐',
        'CSS': '🎨',
        'Vue': '💚',
        'React': '⚛️',
        'Unknown': '📦'
    }
    return icons[language] || '📦'
}
import repositoriesData from '../data/repositories.json'
import Link from 'next/link'

export default function RepositoryList() {
    return (
        <section id="repositories" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-blood">
                        Open Source Contributions
                    </h2>
                    <p className="text-lg text-muted">
                        A collection of my GitHub repositories and projects
                    </p>
                </motion.div>

                {/* Repositories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {repositoriesData.map((repo, index) => (
                        <motion.a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="block"
                        >
                            <div className="h-full bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-3xl">{getLanguageIcon(repo.language || 'Unknown')}</div>
                                    <div className="text-xs font-mono text-muted-foreground px-2 py-1 bg-white/5 rounded">
                                        {repo.language || 'Code'}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold mb-2 text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                    {repo.name}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                                    {repo.description}
                                </p>

                                <div className="flex items-center text-sm text-primary font-medium mt-auto">
                                    <span>View Repository</span>
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
