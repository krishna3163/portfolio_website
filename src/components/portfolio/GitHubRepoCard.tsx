import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Code } from 'lucide-react';
import type { GitHubRepository } from '@/data/photographer';

interface GitHubRepoCardProps {
  repo: GitHubRepository;
  index?: number;
}

const languageColors: Record<string, string> = {
  JavaScript: 'bg-amber-500',
  TypeScript: 'bg-blue-500',
  Java: 'bg-red-500',
  C: 'bg-gray-500',
  Python: 'bg-green-500',
};

export function GitHubRepoCard({ repo, index = 0 }: GitHubRepoCardProps) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 md:p-8 bg-card border border-border rounded-lg hover:border-foreground/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Code className="size-5 text-muted-foreground" />
          <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
            {repo.name}
          </h3>
        </div>
        <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Description */}
      <p className="text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
        {repo.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {repo.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          {/* Language */}
          <div className="flex items-center gap-2">
            <span className={`size-3 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`} />
            <span>{repo.language}</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            <Star className="size-4" />
            <span>{repo.stars}</span>
          </div>

          {/* Forks */}
          <div className="flex items-center gap-1">
            <GitFork className="size-4" />
            <span>{repo.forks}</span>
          </div>
        </div>

        <span className="text-xs">{repo.year}</span>
      </div>
    </motion.a>
  );
}
