import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GitHubRepoCard } from './GitHubRepoCard';
import { githubProfile, getFeaturedRepositories } from '@/data/photographer';

export function GitHubSection() {
  const featuredRepos = getFeaturedRepositories();

  return (
    <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center mb-16 space-y-4 px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="size-8 text-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            GitHub Projects
          </h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
            Open source contributions and personal projects showcasing my development journey
          </p>
        </div>
      </ScrollReveal>

      {/* Repositories Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRepos.map((repo, index) => (
            <GitHubRepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      </div>

      {/* View All Link */}
      <ScrollReveal delay={0.4}>
        <div className="flex justify-center mt-12 px-6">
          <motion.a
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium tracking-wide hover:bg-foreground/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="size-5" />
            <span>View All on GitHub</span>
            <ExternalLink className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>
      </ScrollReveal>

      {/* LeetCode Link */}
      <ScrollReveal delay={0.5}>
        <div className="flex justify-center mt-4 px-6">
          <a
            href={githubProfile.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            <span>100+ problems solved on LeetCode</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
