import type { Metadata } from 'next'
import { Inter, Playfair_Display, Roboto_Slab } from 'next/font/google'
import './globals.css'

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
    preload: true,
    weight: ['400', '700'],
})
const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    variable: '--font-roboto-slab',
    display: 'swap',
    weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
    title: 'Krishna Kumar | Blockchain & Web Developer',
    description: 'Blockchain Developer, Problem Solver, Web Developer specializing in React and Next.js. Building modern web experiences with clean code and thoughtful design.',
    openGraph: {
        title: 'Krishna Kumar | Blockchain & Web Developer',
        description: 'Blockchain Developer, Problem Solver, and Web Developer specializing in React and Next.js',
        images: ['/images/AbhishekX.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Krishna Kumar | Blockchain & Web Developer',
        description: 'Blockchain Developer, Problem Solver, and Web Developer specializing in React and Next.js',
        images: ['/images/AbhishekX.png'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
            <body className={`${inter.variable} ${playfair.variable} ${robotoSlab.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    )
}
