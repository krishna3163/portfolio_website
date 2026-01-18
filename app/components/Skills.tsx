'use client'

import { motion } from 'framer-motion'

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', icon: '⚛️' },
            { name: 'Next.js', icon: '▲' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'Framer Motion', icon: '✨' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Express', icon: '🚂' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'REST API', icon: '🔌' },
        ],
    },
    {
        category: 'Tools & Others',
        skills: [
            { name: 'Git', icon: '📚' },
            { name: 'Docker', icon: '🐳' },
            { name: 'AWS', icon: '☁️' },
            { name: 'Python', icon: '🐍' },
            { name: 'Java', icon: '☕' },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-foreground/70">
                        Tools and technologies I work with
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-display font-bold mb-6 text-primary">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] text-center group cursor-pointer"
                                    >
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <p className="font-semibold text-sm">
                                            {skill.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
