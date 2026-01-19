export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            projects: {
                Row: {
                    id: string
                    title: string
                    description: string
                    image_url: string
                    technologies: string[]
                    github_url: string | null
                    live_url: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    description: string
                    image_url: string
                    technologies: string[]
                    github_url?: string | null
                    live_url?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    description?: string
                    image_url?: string
                    technologies?: string[]
                    github_url?: string | null
                    live_url?: string | null
                    created_at?: string
                }
            }
            skills: {
                Row: {
                    id: string
                    name: string
                    category: string
                    proficiency: number
                    icon: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    category: string
                    proficiency: number
                    icon?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    category?: string
                    proficiency?: number
                    icon?: string | null
                    created_at?: string
                }
            }
            experiences: {
                Row: {
                    id: string
                    company: string
                    position: string
                    description: string
                    start_date: string
                    end_date: string | null
                    current: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    company: string
                    position: string
                    description: string
                    start_date: string
                    end_date?: string | null
                    current?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    company?: string
                    position?: string
                    description?: string
                    start_date?: string
                    end_date?: string | null
                    current?: boolean
                    created_at?: string
                }
            }
            contact_submissions: {
                Row: {
                    id: string
                    name: string
                    email: string
                    subject: string | null
                    message: string
                    submitted_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    email: string
                    subject?: string | null
                    message: string
                    submitted_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    email?: string
                    subject?: string | null
                    message?: string
                    submitted_at?: string
                }
            }
            user_profiles: {
                Row: {
                    id: string
                    username: string | null
                    display_name: string | null
                    avatar_url: string | null
                    bio: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    username?: string | null
                    display_name?: string | null
                    avatar_url?: string | null
                    bio?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    username?: string | null
                    display_name?: string | null
                    avatar_url?: string | null
                    bio?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            guestbook: {
                Row: {
                    id: string
                    user_id: string | null
                    author_name: string
                    message: string
                    emoji: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id?: string | null
                    author_name: string
                    message: string
                    emoji?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string | null
                    author_name?: string
                    message?: string
                    emoji?: string
                    created_at?: string
                }
            }
            testimonials: {
                Row: {
                    id: string
                    user_id: string | null
                    author_name: string
                    author_title: string | null
                    author_company: string | null
                    content: string
                    rating: number
                    is_approved: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id?: string | null
                    author_name: string
                    author_title?: string | null
                    author_company?: string | null
                    content: string
                    rating: number
                    is_approved?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string | null
                    author_name?: string
                    author_title?: string | null
                    author_company?: string | null
                    content?: string
                    rating?: number
                    is_approved?: boolean
                    created_at?: string
                }
            }
        }
    }
}
