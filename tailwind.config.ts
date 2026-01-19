import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                },
                secondary: '#6B7280',
                accent: '#8B5CF6',
                background: '#FFFFFF',
                surface: '#F9FAFB',
                text: {
                    DEFAULT: '#111827',
                    muted: '#6B7280',
                },
                border: '#E5E7EB',
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                headings: ['Inter', 'sans-serif'],
                mono: ['Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
            },
            spacing: {
                none: '0px',
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
                xxl: '48px',
            },
            borderRadius: {
                sm: '4px',
                md: '8px',
                lg: '12px',
                pill: '9999px',
            },
            boxShadow: {
                none: 'none',
                sm: '0 1px 2px rgba(0,0,0,0.05)',
                md: '0 4px 6px rgba(0,0,0,0.1)',
                lg: '0 10px 15px rgba(0,0,0,0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                'floating': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                slideUp: {
                    from: { transform: 'translateY(8px)', opacity: '0' },
                    to: { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            transitionDuration: {
                fast: '150ms',
                base: '300ms',
                slow: '500ms',
            },
        },
    },
    plugins: [],
}
export default config
