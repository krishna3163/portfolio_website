# 👻 Krishna Kumar's Portfolio - Enter the Void

A **horror-themed** personal portfolio website built with modern web technologies. This isn't your average portfolio - it's an immersive experience with spooky animations, interactive elements, and a unique dark aesthetic.

---

## 🎬 Preview

<!-- Add your screenshots/videos here -->
![Homepage Screenshot](./screenshots/homepage.png)

![Admin Dashboard](./screenshots/admin.png)

<!-- Add a demo video/GIF here -->
![Demo Video](./screenshots/demo.gif)

---

## ✨ Features

### 🎨 Visual Experience
- **Horror Theme** - Blood red & void black color palette
- **Animated Ghost Character** - A floating ghost that follows you around
- **Typing Animation** - Dynamic "I am a..." text that cycles through roles
- **3D Page Flip Transitions** - Smooth card-flip animation when navigating pages
- **Glitch Effects** - CSS glitch animation on titles
- **Fog & Blood Overlays** - Atmospheric horror effects

### 🔐 Authentication & Admin
- **Firebase Authentication** - Email/password + Google Sign-In
- **Protected Admin Dashboard** - Only accessible by admin email
- **Media Upload System** - Upload project images and videos

### 📝 Interactive Features
- **Guestbook** - Visitors can leave messages with emoji spirits
- **Contact Form** - Direct messages saved to database
- **Project Gallery** - Dynamic project cards with links to GitHub

### 🛠️ Technical Features
- **Responsive Design** - Works on all screen sizes
- **Auto-Hide Navigation** - Nav bar hides on scroll down
- **Preloader Animation** - "Welcome to Krishna's Portfolio Void" intro
- **Smooth Scroll** - Polished scrolling experience

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + Custom CSS |
| **Animation** | Framer Motion |
| **Auth** | Firebase Authentication |
| **Storage** | Firebase Storage |
| **Database** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
portfolio_website/
├── app/
│   ├── components/        # Reusable UI components
│   │   ├── LiquidGlassNav.tsx
│   │   ├── AnimatedCharacter.tsx
│   │   ├── TypewriterEffect.tsx
│   │   ├── Preloader.tsx
│   │   └── ...
│   ├── admin/             # Admin dashboard (protected)
│   ├── guestbook/         # Guestbook page
│   ├── projects/          # Projects listing
│   ├── project/[id]/      # Individual project pages
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── contact/           # Contact form
│   ├── globals.css        # Global styles & theme
│   └── page.tsx           # Homepage
├── lib/
│   ├── firebase.ts        # Firebase configuration
│   ├── supabase.ts        # Supabase client
│   └── storage.ts         # File upload utilities
├── public/                # Static assets
└── screenshots/           # README images (add your own!)
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- Firebase project (for auth)
- Supabase project (for database)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/portfolio_website.git
cd portfolio_website
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Setup

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your_project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Step 4: Setup Supabase Database

Run this SQL in your Supabase SQL Editor:

```sql
-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Guestbook Table
CREATE TABLE IF NOT EXISTS guestbook (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    author_name TEXT NOT NULL,
    message TEXT NOT NULL,
    emoji TEXT DEFAULT '👻',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project Media Table (for admin uploads)
CREATE TABLE IF NOT EXISTS project_media (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    repo_name TEXT NOT NULL UNIQUE,
    image_url TEXT,
    video_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_media ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Public can insert contacts" ON contact_submissions FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public can read guestbook" ON guestbook FOR SELECT TO public USING (true);
CREATE POLICY "Public can insert guestbook" ON guestbook FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public can read media" ON project_media FOR SELECT TO public USING (true);
```

### Step 5: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Admin Access

The admin dashboard is protected and only accessible by the configured admin email.

**Admin Email:** `kk3163019@gmail.com`

To access:
1. Go to `/login`
2. Sign in with the admin email
3. Navigate to `/admin`

---

## 📸 Screenshots

Add your own screenshots in the `screenshots/` folder:

| Page | Screenshot |
|------|------------|
| Home | `![Home](./screenshots/home.png)` |
| Projects | `![Projects](./screenshots/projects.png)` |
| Admin | `![Admin](./screenshots/admin.png)` |
| Guestbook | `![Guestbook](./screenshots/guestbook.png)` |

---

## 🎥 Demo Video

<!-- Embed your demo video here -->
Add a screen recording showing the preloader, typing animation, and page transitions.

---

## 🌐 Live Demo

**[View Live Site →](https://your-domain.vercel.app)**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

**Krishna Kumar**
- Email: kk3163019@gmail.com
- GitHub: [github.com/krishna3163](https://github.com/krishna3163)
- LinkedIn: [linkedin.com/in/krishnakumar](https://linkedin.com/in/krishnakumar)

---

> 👻 *"Enter if you dare..."*
