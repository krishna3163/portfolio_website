'use client'

import React, { useState } from 'react'
import AdminRoute from '../components/AdminRoute'
import { useAuth } from '../contexts/AuthContext'
import repositoriesData from '../data/repositories.json'
import { useRouter } from 'next/navigation'
import { uploadProjectMedia } from '../../lib/storage'

export default function AdminDashboard() {
    const { user, signOut: logout } = useAuth()
    const router = useRouter()

    const [selectedRepo, setSelectedRepo] = useState('')
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [videoFile, setVideoFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [status, setStatus] = useState('')

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedRepo) {
            setStatus('❌ Please select a repository')
            return
        }
        if (!imageFile && !videoFile) {
            setStatus('❌ Please select at least one file')
            return
        }

        setUploading(true)
        setStatus('⏳ Connecting to Secure Storage...')

        try {
            let imageUrl = ''
            let videoUrl = ''

            // 1. Upload Media
            if (imageFile) {
                setStatus('⏳ Uploading Cover Image...')
                imageUrl = await uploadProjectMedia(imageFile, selectedRepo, 'image')
            }

            if (videoFile) {
                setStatus('⏳ Uploading Demo Video...')
                videoUrl = await uploadProjectMedia(videoFile, selectedRepo, 'video')
            }

            setStatus('⏳ Saving Metadata...')

            // TODO: Here we would save the mapping to Firestore/Supabase
            // For now, we will log it to console as the DB structure is not yet finalized
            console.log('UPLOAD SUCCESS:', {
                repo: selectedRepo,
                image: imageUrl,
                video: videoUrl,
                timestamp: new Date().toISOString()
            })

            setStatus(`✅ Successfully uploaded media for [${selectedRepo}]!`)
            setImageFile(null)
            setVideoFile(null)
            // Keep repo selected for consecutive uploads if needed

        } catch (error) {
            console.error(error)
            setStatus(`❌ Upload Failed: ${(error as Error).message}`)
        } finally {
            setUploading(false)
        }
    }

    const handleLogout = async () => {
        await logout()
        router.push('/login')
    }

    return (
        <AdminRoute>
            <div className="min-h-screen pt-24 px-6 pb-12 bg-black">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-12 border-b border-red-900/30 pb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">Admin Command Center 🛡️</h1>
                            <p className="text-gray-400">Authenticated as: <span className="text-red-500">{user?.email}</span></p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 border border-red-500/50 rounded hover:bg-red-900/20 text-red-500 transition-colors"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Upload Section */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Form */}
                        <div className="bg-gray-900/50 border border-red-900/30 rounded-xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-6">Media Upload</h2>

                            <form onSubmit={handleUpload} className="space-y-6">

                                {/* Repo Selection */}
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Select Project/Repository</label>
                                    <select
                                        value={selectedRepo}
                                        onChange={(e) => setSelectedRepo(e.target.value)}
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-red-500 focus:outline-none"
                                    >
                                        <option value="">-- Select Target --</option>
                                        <option value="profile">👤 Main Profile Photo (About Section)</option>
                                        {(repositoriesData as any[]).map((repo, index) => (
                                            <option key={repo.name || index} value={repo.name || `repo-${index}`}>
                                                📦 {repo.name || `Project ${index + 1}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Cover Image</label>
                                    <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-colors text-center cursor-pointer group">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="space-y-2">
                                            <span className="text-3xl block transition-transform group-hover:scale-110">🖼️</span>
                                            <p className="text-sm text-gray-400">
                                                {imageFile ? <span className="text-green-400">{imageFile.name}</span> : "Drop image or click to browse"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Video Upload */}
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Demo Video</label>
                                    <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-colors text-center cursor-pointer group">
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="space-y-2">
                                            <span className="text-3xl block transition-transform group-hover:scale-110">🎥</span>
                                            <p className="text-sm text-gray-400">
                                                {videoFile ? <span className="text-green-400">{videoFile.name}</span> : "Drop video or click to browse"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className={`w-full py-4 rounded-lg font-bold text-lg tracking-wide transition-all ${uploading
                                            ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                            : 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                                        }`}
                                >
                                    {uploading ? 'UPLOADING...' : 'UPLOAD MEDIA'}
                                </button>

                                {status && (
                                    <div className={`p-4 rounded-lg text-center font-medium ${status.includes('✅') ? 'bg-green-900/20 text-green-400 border border-green-500/30' : 'bg-red-900/20 text-red-400 border border-red-500/30'
                                        }`}>
                                        {status}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Stats / Info */}
                        <div className="space-y-8">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">Admin Access</span>
                                        <span className="text-green-500 font-mono">GRANTED</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">Storage Engine</span>
                                        <span className="text-yellow-500 font-mono">FIREBASE</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">Database</span>
                                        <span className="text-blue-500 font-mono">CONNECTED</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-red-500 mb-2">Restricted Area</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    This interface allows modifying production assets. All uploads are logged and monitored. Ensure media is optimized before deploying.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AdminRoute>
    )
}
