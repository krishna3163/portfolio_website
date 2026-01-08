import type { PhotographerInfo } from '@/types';

export const photographerInfo: PhotographerInfo = {
  name: 'Krishna Kumar',
  tagline: 'Full-Stack Developer & Software Engineer',
  heroIntroduction: 'Building scalable web applications with modern technologies. Passionate about clean code, system design, and solving complex algorithmic challenges.',
  biography: `Krishna Kumar is a Computer Science Engineering student at Dr. A.P.J. Abdul Kalam Technical University, specializing in full-stack development and software engineering. With expertise in Java, Python, JavaScript, and modern frameworks like React, Node.js, and Spring Boot, Krishna has developed production-ready applications including e-commerce platforms, AI-powered assistants, and management systems.

A dedicated problem solver with 100+ LeetCode solutions across various difficulty levels, Krishna specializes in Data Structures, Dynamic Programming, and Algorithm Design. Active in the open-source community, contributing to projects and maintaining repositories with comprehensive documentation.`,
  approach: `My development philosophy centers on three pillars: clean architecture, user experience, and performance optimization. I believe the best software emerges from understanding both the technical requirements and the human needs it serves.

Whether building full-stack applications or optimizing database queries, I strive to create solutions that are maintainable, scalable, and deliver real value to users.`,
  awards: [
    'LeetCode Problem Solver - 100+ Problems Solved',
    'HackerRank Certified - Java, Python, SQL (Basic to Advanced)',
    'HackerRank Problem Solving (Basic & Intermediate)',
    'GitHub Copilot & Prompt Engineering Certified'
  ],
  clients: [
    'Open Source Community',
    'Personal Projects',
    'Academic Projects',
    'GitHub Contributors'
  ],
  education: 'B.Tech in Computer Science & Engineering, Dr. A.P.J. Abdul Kalam Technical University (2023-2027)',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'kk3163019@gmail.com',
  phone: '+91 8210763241',
  availability: 'Open to internships and collaboration opportunities',
  socialLinks: {
    instagram: undefined,
    linkedin: 'https://linkedin.com/in/krishna0858',
    behance: undefined
  },
  portraitImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjB8&ixlib=rb-4.1.0&q=80&w=1080'
};

// GitHub profile and repositories data
export const githubProfile = {
  username: 'krishna3163',
  profileUrl: 'https://github.com/krishna3163',
  leetcodeUrl: 'https://leetcode.com/krishna0858'
};

export interface GitHubRepository {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  language: string;
  url: string;
  featured: boolean;
  year: string;
}

export const githubRepositories: GitHubRepository[] = [
  {
    id: 'quickshop',
    name: 'QuickShop E-Commerce Platform',
    description: 'Full-stack e-commerce application with secure authentication, product catalog, shopping cart, order management, and Razorpay UPI payment integration. Features an admin dashboard for inventory management.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
    stars: 2,
    forks: 0,
    language: 'JavaScript',
    url: 'https://github.com/krishna3163/quickshop',
    featured: true,
    year: '2024'
  },
  {
    id: 'ai-medical-assistant',
    name: 'AI Medical Assistant',
    description: 'Intelligent medical assistant application leveraging AI to provide healthcare information and support. Built with TypeScript and React for enhanced type safety and maintainability.',
    technologies: ['TypeScript', 'React', 'AI/ML Integration'],
    stars: 1,
    forks: 0,
    language: 'TypeScript',
    url: 'https://github.com/krishna3163/ai-medical-assistant',
    featured: true,
    year: '2024'
  },
  {
    id: 'student-management-system',
    name: 'Student Management System',
    description: 'CRUD-based application for managing student records with MySQL database connectivity using JDBC. Optimized search functionality with efficient data retrieval algorithms, reducing query time by 40%.',
    technologies: ['Java', 'MySQL', 'JDBC'],
    stars: 1,
    forks: 0,
    language: 'Java',
    url: 'https://github.com/krishna3163/student-management-system',
    featured: true,
    year: '2024'
  },
  {
    id: 'bank-management-system',
    name: 'Bank Management System',
    description: 'Comprehensive banking system featuring customer account management, transaction processing, and account tracking. Utilizes advanced data structures for efficient data management and secure transaction handling.',
    technologies: ['C', 'Data Structures'],
    stars: 1,
    forks: 0,
    language: 'C',
    url: 'https://github.com/krishna3163/bank-management-system',
    featured: false,
    year: '2024'
  }
];

export const getFeaturedRepositories = () => githubRepositories.filter(repo => repo.featured);
