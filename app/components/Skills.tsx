'use client'

import { motion } from 'framer-motion'

const skillCategories = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'C', icon: '©️' },
            { name: 'Java', icon: '☕' },
            { name: 'Python', icon: '🐍' },
            { name: 'JavaScript', icon: '📜' },
        ],
    },
    {
        category: 'Frameworks & Technologies',
        skills: [
            { name: 'React', icon: '⚛️' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Express.js', icon: '🚂' },
            { name: 'MongoDB', icon: '🍃' },
        ],
    },
    {
        category: 'Tools & Platforms',
        skills: [
            { name: 'Git', icon: '📚' },
            { name: 'GitHub', icon: '🐙' },
            { name: 'VS Code', icon: '💻' },
            { name: 'Linux', icon: '🐧' },
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
