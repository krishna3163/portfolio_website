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
                                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in building modern web applications. I love turning ideas into reality through clean, efficient code.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                With a strong foundation in the <span className="text-primary font-semibold">MERN stack</span>, I specialize in creating seamless user experiences and robust backend systems. I'm constantly learning and exploring new technologies to stay ahead in this ever-evolving field.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.
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
                                        <p className="text-muted">Full Stack Developer</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">🎓</span>
                                    <div>
                                        <p className="font-semibold">Education</p>
                                        <p className="text-muted">B.Tech in Computer Science</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">🚀</span>
                                    <div>
                                        <p className="font-semibold">Specialization</p>
                                        <p className="text-muted">MERN Stack, Next.js, AWS</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl">🌍</span>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-muted-foreground">Lucknow, UP, India</p>
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
