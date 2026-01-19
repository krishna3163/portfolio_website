'use client'

import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const ADMIN_EMAIL = 'kk3163019@gmail.com'

export default function AdminRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/login')
            } else if (user.email !== ADMIN_EMAIL) {
                router.push('/') // Redirect unauthorized users to home
            }
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
        )
    }

    if (!user || user.email !== ADMIN_EMAIL) {
        return null // Will redirect in useEffect
    }

    return <>{children}</>
}
