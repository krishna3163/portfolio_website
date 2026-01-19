'use client'

import { storage } from './firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

/**
 * Uploads a file to Firebase Storage under the 'projects' directory
 * @param file The file to upload
 * @param repoName The name of the repository/project
 * @param type 'image' or 'video'
 * @returns The download URL of the uploaded file
 */
export const uploadProjectMedia = async (file: File, repoName: string, type: 'image' | 'video'): Promise<string> => {
    try {
        const fileExtension = file.name.split('.').pop()
        const fileName = `${type === 'image' ? 'cover' : 'demo'}_${Date.now()}.${fileExtension}`
        const filePath = `projects/${repoName}/${fileName}`

        const storageRef = ref(storage, filePath)
        const snapshot = await uploadBytes(storageRef, file)
        const downloadURL = await getDownloadURL(snapshot.ref)

        return downloadURL
    } catch (error) {
        console.error("Error uploading media:", error)
        throw error
    }
}
