'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import './HiddenTerminal.css'

interface TerminalLine {
    type: 'input' | 'output' | 'error' | 'system'
    text: string
}

interface HiddenTerminalProps {
    onAchievementUnlock?: (id: string) => void
    onThemeChange?: (theme: string) => void
}

export default function HiddenTerminal({ onAchievementUnlock, onThemeChange }: HiddenTerminalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [history, setHistory] = useState<TerminalLine[]>([])
    const [currentInput, setCurrentInput] = useState('')
    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const inputRef = useRef<HTMLInputElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    // Boot sequence on first open
    useEffect(() => {
        if (isOpen && history.length === 0) {
            const bootSequence = [
                { type: 'system' as const, text: '> INITIALIZING FORBIDDEN TERMINAL...' },
                { type: 'system' as const, text: '> LOADING CURSED MODULES...' },
                { type: 'system' as const, text: '> CONNECTION ESTABLISHED' },
                { type: 'output' as const, text: '' },
                { type: 'output' as const, text: 'Welcome to the void...' },
                { type: 'output' as const, text: 'Type "help" to see available commands.' },
                { type: 'output' as const, text: '' },
            ]

            bootSequence.forEach((line, i) => {
                setTimeout(() => {
                    setHistory(prev => [...prev, line])
                }, i * 300)
            })
        }
    }, [isOpen, history.length])

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Open terminal with ~ or /
            if ((e.key === '`' || e.key === '/') && !isOpen) {
                e.preventDefault()
                setIsOpen(true)
                onAchievementUnlock?.('terminal_use')
            }

            // Close with Escape
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onAchievementUnlock])

    // Focus input when terminal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Auto-scroll to bottom
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [history])

    // Execute command
    const executeCommand = useCallback((cmd: string) => {
        const trimmed = cmd.trim().toLowerCase()
        if (!trimmed) return

        // Add to history
        setHistory(prev => [...prev, { type: 'input', text: `$ ${cmd}` }])
        setCommandHistory(prev => [...prev, cmd])

        // Parse command
        const [command, ...args] = trimmed.split(' ')

        let output: TerminalLine[] = []

        switch (command) {
            case 'help':
                output = [
                    { type: 'output', text: 'Available Commands:' },
                    { type: 'output', text: '  whoami          - Reveal your true self' },
                    { type: 'output', text: '  ls projects     - List haunted projects' },
                    { type: 'output', text: '  ls skills       - Display cursed abilities' },
                    { type: 'output', text: '  sanity          - Check sanity level' },
                    { type: 'output', text: '  summon ghost    - Call forth the spirit' },
                    { type: 'output', text: '  theme [mode]    - Change reality (light/dark/horror)' },
                    { type: 'output', text: '  achievements    - View unlocked souls' },
                    { type: 'output', text: '  secret          - ???' },
                    { type: 'output', text: '  clear           - Clear the void' },
                    { type: 'output', text: '  exit            - Escape (or press ESC)' },
                ]
                break

            case 'whoami':
                output = [
                    { type: 'output', text: 'You are a damned soul wandering through the digital void...' },
                    { type: 'output', text: 'Lost in the portfolio of Krishna Kumar.' },
                    { type: 'output', text: 'There is no escape. 👻' },
                ]
                break

            case 'ls':
                if (args[0] === 'projects') {
                    output = [
                        { type: 'output', text: 'Projects from the graveyard:' },
                        { type: 'output', text: '  💀 AI-Medical-Assistant' },
                        { type: 'output', text: '  💀 Bank-Management-System' },
                        { type: 'output', text: '  💀 Airlines-Reservation-System' },
                        { type: 'output', text: '  💀 Krishna-Kumar-Portfolio' },
                        { type: 'output', text: '  💀 Location_Tracker' },
                        { type: 'output', text: '' },
                        { type: 'output', text: 'Visit /projects to explore the cemetery...' },
                    ]
                } else if (args[0] === 'skills') {
                    output = [
                        { type: 'output', text: 'Cursed Abilities:' },
                        { type: 'output', text: '  🔮 TypeScript, JavaScript, Python' },
                        { type: 'output', text: '  🔮 React, Next.js, Node.js' },
                        { type: 'output', text: '  🔮 Firebase, Supabase' },
                        { type: 'output', text: '  🔮 HTML, CSS, Tailwind' },
                        { type: 'output', text: '  🔮 Git, GitHub' },
                    ]
                } else {
                    output = [{ type: 'error', text: 'Usage: ls [projects|skills]' }]
                }
                break

            case 'sanity':
                const sanity = localStorage.getItem('sanity') || '100'
                output = [
                    { type: 'output', text: `Current Sanity: ${sanity}%` },
                    { type: 'output', text: parseInt(sanity) > 50 ? 'Still holding on...' : 'The void is calling...' },
                ]
                break

            case 'summon':
                if (args[0] === 'ghost') {
                    output = [
                        { type: 'output', text: 'Summoning the spirit...' },
                        { type: 'output', text: '👻 The ghost appears before you!' },
                        { type: 'output', text: 'It whispers: "You cannot escape me..."' },
                    ]
                    // Trigger ghost to appear near cursor
                    window.dispatchEvent(new CustomEvent('summonGhost'))
                } else {
                    output = [{ type: 'error', text: 'Usage: summon ghost' }]
                }
                break

            case 'theme':
                if (args[0] && ['light', 'dark', 'horror'].includes(args[0])) {
                    onThemeChange?.(args[0])
                    output = [{ type: 'output', text: `Reality shifted to ${args[0]} mode...` }]
                } else {
                    output = [{ type: 'error', text: 'Usage: theme [light|dark|horror]' }]
                }
                break

            case 'achievements':
                const achievements = localStorage.getItem('achievements')
                if (achievements) {
                    const parsed = JSON.parse(achievements)
                    const unlocked = parsed.filter((a: any) => a.unlocked)
                    output = [
                        { type: 'output', text: `Unlocked Souls: ${unlocked.length}/${parsed.length}` },
                        ...unlocked.map((a: any) => ({ type: 'output' as const, text: `  ${a.icon} ${a.name} - ${a.description}` }))
                    ]
                } else {
                    output = [{ type: 'output', text: 'No souls captured yet...' }]
                }
                break

            case 'secret':
                output = [
                    { type: 'output', text: '🔮 You have discovered a secret...' },
                    { type: 'output', text: 'The portfolio watches you, even when you sleep.' },
                    { type: 'output', text: 'Type "konami" for a surprise... 👾' },
                ]
                break

            case 'konami':
                output = [
                    { type: 'system', text: '🎮 ↑ ↑ ↓ ↓ ← → ← → B A' },
                    { type: 'output', text: 'ULTRA NIGHTMARE MODE ACTIVATED!' },
                ]
                // Could trigger extreme horror effects
                break

            case 'clear':
                setHistory([])
                return

            case 'exit':
                setIsOpen(false)
                return

            default:
                output = [
                    { type: 'error', text: `Command not found: ${command}` },
                    { type: 'output', text: 'Type "help" for available commands.' },
                ]
        }

        setHistory(prev => [...prev, ...output, { type: 'output', text: '' }])
    }, [onThemeChange, onAchievementUnlock])

    // Handle input submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (currentInput.trim()) {
            executeCommand(currentInput)
            setCurrentInput('')
            setHistoryIndex(-1)
        }
    }

    // Handle arrow keys for command history
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
                setHistoryIndex(newIndex)
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1
                setHistoryIndex(newIndex)
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
            } else if (historyIndex === 0) {
                setHistoryIndex(-1)
                setCurrentInput('')
            }
        }
    }

    if (!isOpen) return null

    return (
        <div className="hidden-terminal">
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="terminal-title">FORBIDDEN_TERMINAL.exe - The Void</span>
                    <button className="terminal-close" onClick={() => setIsOpen(false)}>×</button>
                </div>
                <div className="terminal-body" ref={terminalRef}>
                    <div className="terminal-scanlines" />
                    {history.map((line, i) => (
                        <div key={i} className={`terminal-line terminal-${line.type}`}>
                            {line.text}
                        </div>
                    ))}
                    <form onSubmit={handleSubmit} className="terminal-input-form">
                        <span className="terminal-prompt">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="terminal-input"
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
