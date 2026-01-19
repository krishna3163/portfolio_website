import type { Metadata } from 'next'
import { Inter, Playfair_Display, Roboto_Slab } from 'next/font/google'
import './globals.css'
import './auth.css'
import './horror-effects.css'
import './guestbook.css'
import './project-detail.css'
import './journey.css'
import './components/liquid-nav.css'
import './components/AnimatedCharacter.css'
import LiquidGlassNav from './components/LiquidGlassNav'
import { AuthProvider } from './contexts/AuthContext'
import ClientEffects from './components/ClientEffects'
import AdvancedFeatures from './components/AdvancedFeatures'
import HorrorFeatures from './components/HorrorFeatures'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,
})
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
    preload: false,
    weight: ['400', '700'],
})
const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    variable: '--font-roboto-slab',
    display: 'swap',
    preload: false,
    weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
    title: 'Krishna Kumar | Full Stack Developer | React, Node.js, Java & Python',
    description: 'Portfolio of Krishna Kumar, a Full Stack Developer specializing in React, Node.js, Java, and Python. View projects, skills, and open source contributions.',
    keywords: ['Full Stack Developer', 'React Developer', 'Node.js Developer', 'Java Developer', 'Python Developer', 'Web Application Development', 'Backend Systems', 'Open Source Contributor', 'Software Engineer Portfolio'],
    openGraph: {
        title: 'Krishna Kumar | Full Stack Developer',
        description: 'Building scalable web applications and backend systems. React, Node.js, Java, Python.',
        images: ['/images/AbhishekX.png'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Krishna Kumar | Full Stack Developer',
        description: 'Building scalable web applications and backend systems.',
        images: ['/images/AbhishekX.png'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning data-theme="dark">
            <body className={`${inter.variable} ${playfair.variable} ${robotoSlab.variable} font-sans antialiased`}>
                <AuthProvider>
                    <ScrollToTop />
                    <LiquidGlassNav />

                    {/* Blood Drip Effect */}
                    <div className="blood-drip-container">
                        <div className="blood-drip-effect"></div>
                        <div className="blood-drip-effect"></div>
                        <div className="blood-drip-effect"></div>
                        <div className="blood-drip-effect"></div>
                    </div>

                    {/* Fog Effect */}
                    <div className="fog-effect"></div>

                    {/* Cobweb Corners */}
                    <div className="cobweb-corner top-left"></div>
                    <div className="cobweb-corner top-right"></div>

                    {/* Client-side Effects */}
                    <ClientEffects />

                    {/* Advanced Horror Features */}
                    <AdvancedFeatures />

                    {/* Global Horror Effects */}
                    <HorrorFeatures />

                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}
