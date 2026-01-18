# Portfolio Clone - Next.js

A pixel-perfect clone of abhishekworks.com built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio_website/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Full-screen hero with video background
│   │   ├── About.tsx         # About section
│   │   ├── Projects.tsx      # Projects grid
│   │   ├── Skills.tsx        # Skills with progress bars
│   │   ├── Contact.tsx       # Contact section
│   │   └── Footer.tsx        # Footer
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── public/
│   └── videos/
│       └── hero-bg.mp4       # Background video (ADD YOUR VIDEO HERE)
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json
```

## 🎨 Customization

### Content Placeholders

All content is clearly marked and easy to customize:

**1. Personal Information** (`app/components/Hero.tsx`)
```typescript
// Line 40-45: Change name and title
<h1>Meet <span>Krishna</span>!</h1>
<p>Software Developer | MERN Stack | Next.js | Python | AWS</p>
```

**2. About Text** (`app/components/About.tsx`)
```typescript
// Lines 20-35: Update your bio
```

**3. Projects** (`app/components/Projects.tsx`)
```typescript
// Lines 7-30: Edit the projects array
const projects = [
  {
    title: "Your Project",
    description: "Description...",
    tech: ["React", "Node.js"],
    image: "/images/project1.jpg",
    link: "#"
  }
]
```

**4. Skills** (`app/components/Skills.tsx`)
```typescript
// Lines 7-16: Update skills and levels
const skills = [
  { name: "Your Skill", level: 90 }
]
```

**5. Contact Links** (`app/components/Contact.tsx`)
```typescript
// Lines 35-60: Update email, resume link, and social links
```

### Background Video

1. Add your video file to `public/videos/hero-bg.mp4`
2. Recommended specs:
   - Format: MP4 (H.264)
   - Resolution: 1920x1080 or higher
   - Duration: 10-30 seconds (will loop)
   - Size: < 10MB for best performance

### Colors & Fonts

Edit `tailwind.config.ts` to customize:

```typescript
colors: {
  primary: '#000000',    // Main background
  accent: '#6366f1',     // Accent color (buttons, highlights)
}
fontFamily: {
  sans: ['Inter'],       // Body font
  display: ['Plus Jakarta Sans'], // Heading font
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

**OR** use Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables

No environment variables required for basic deployment.

## 🎬 Animations

All animations use Framer Motion with these features:

- **Scroll-triggered reveals**: Sections fade in as you scroll
- **Hover effects**: Cards scale and change on hover
- **Smooth transitions**: All interactions use easing curves
- **Loading animations**: Hero text reveals sequentially

### Animation Timing

- Hero text: 0.6s duration, staggered by 0.2s
- Scroll reveals: 0.8s duration
- Hover effects: 0.3s duration
- Progress bars: 1s duration

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1279px
- Desktop: 1280px+

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans)

## 📝 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🐛 Troubleshooting

**Video not playing?**
- Ensure video is in `public/videos/hero-bg.mp4`
- Check video format (MP4 recommended)
- Try a smaller file size

**Animations not working?**
- Clear browser cache
- Check browser console for errors
- Ensure Framer Motion is installed

**Build errors?**
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (18+ required)

## 📄 License

© Krishna Kumar, 2024. All rights reserved.

---

**Note**: This is a clone template. Replace all placeholder content with your own information before deploying.
