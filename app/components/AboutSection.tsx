'use client'

import React from 'react'

export default function AboutSection() {
    return (
        <section className="py-20 relative">
            <div className="liquid-glass card max-w-4xl mx-auto p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-12 items-center">

                    {/* Image Section (Placeholder for Admin Upload) */}
                    <div className="relative group">
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-red-900/30 relative bg-black/40">
                            {/* In production this would be dynamic from admin */}
                            <div className="absolute inset-0 flex items-center justify-center text-red-500/50">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                            <img
                                src="/images/profile-placeholder.jpg"
                                alt="Krishna Kumar"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-red-900/80 text-white px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm border border-red-500/30">
                            Looking for Opportunities 🚀
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            About Me <span className="text-red-500">.</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Hi, I'm <strong className="text-white">Krishna Kumar</strong>. I'm a Full Stack Developer passionate about building systems that matter.
                                Currently a 3rd-year B.Tech CSE student, I blend academic foundations with aggressive practical learning.
                            </p>

                            <div className="grid grid-cols-2 gap-4 my-6">
                                <div className="p-4 bg-white/5 rounded-lg border border-red-500/10">
                                    <h4 className="text-red-400 font-bold mb-1">Core Strengths</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• MERN Stack</li>
                                        <li>• Java & Spring Boot</li>
                                        <li>• Cloud Architecture (AWS)</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-red-500/10">
                                    <h4 className="text-red-400 font-bold mb-1">Focus Areas</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Scalable Backends</li>
                                        <li>• AI Integration</li>
                                        <li>• System Design</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-sm italic text-gray-400 border-l-2 border-red-800 pl-4 py-1">
                                💡 <strong className="text-gray-300">Fun Fact:</strong> When I'm not coding, I'm probably optimizing my workflow to save milliseconds, or exploring the darkest corners of horror aesthetics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
