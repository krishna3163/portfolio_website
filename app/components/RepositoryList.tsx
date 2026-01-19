'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import repositoriesData from '../data/repositories.json'
import { supabase } from '../../lib/supabase'

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

export default function RepositoryList() {
    const [mediaMap, setMediaMap] = useState<Record<string, { image_url?: string, video_url?: string }>>({})

    useEffect(() => {
        const fetchMedia = async () => {
            const { data, error } = await supabase
                .from('project_media')
                .select('*')

            if (data) {
                const map: Record<string, any> = {}
                data.forEach((item: any) => {
                    map[item.repo_name] = {
                        image_url: item.image_url,
                        video_url: item.video_url
                    }
                })
                setMediaMap(map)
            }
        }

        fetchMedia()
    }, [])

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
                    {repositoriesData.map((repo, index) => {
                        const media = mediaMap[repo.name]
                        return (
                            <motion.a
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
                            >
                                {/* Dynamic Media Cover */}
                                <div className="relative h-48 w-full overflow-hidden bg-black/50 border-b border-white/5">
                                    {media?.image_url ? (
                                        <img
                                            src={media.image_url}
                                            alt={repo.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {getLanguageIcon(repo.language)}
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors truncate">
                                            {repo.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                                            <span>{getLanguageIcon(repo.language)} {repo.language}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {repo.description}
                                    </p>
                                </div>
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
