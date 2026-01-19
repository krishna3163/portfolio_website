'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                        Get to Know Me Better
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* About Text */}
                        <div className="space-y-6">
                            <p className="text-lg text-foreground/90 leading-relaxed">
                                Hi there! 👋 I'm <span className="text-primary font-semibold">Krishna Kumar</span>, a passionate Software Engineer with expertise in building scalable applications and solving complex problems.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                I love creating efficient solutions and learning new technologies. With a strong foundation in <span className="text-primary font-semibold">Full Stack Development</span>, I enjoy working on everything from designing intuitive user interfaces to architecting robust backend systems.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Currently, I'm focusing on advanced algorithms, system design, and building full-stack web applications with modern technologies.
                            </p>
                        </div>

                        {/* Highlights Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group">
                            <h3 className="text-2xl font-display font-bold mb-6 text-primary">Quick Facts</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">💼</span>
                                    <div>
                                        <p className="font-semibold">Role</p>
                                        <p className="text-muted">Software Engineer</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">📍</span>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-muted-foreground">India</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">📧</span>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a href="mailto:krishna.0858@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">krishna.0858@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">🌐</span>
                                    <div>
                                        <p className="font-semibold">Socials</p>
                                        <div className="flex gap-3 text-2xl mt-1">
                                            <a href="https://in.linkedin.com/in/krishna0858" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="LinkedIn">👔</a>
                                            <a href="https://github.com/krishna3163" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="GitHub">💻</a>
                                            <a href="https://leetcode.com/u/krishna0858/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="LeetCode">🧠</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
