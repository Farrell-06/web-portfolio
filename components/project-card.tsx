'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { PhotoPlaceholder } from './photo-placeholder'

interface ProjectCardProps {
  title: string
  description: string
  image?: React.ReactNode
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-video bg-muted overflow-hidden">
        {image || <PhotoPlaceholder className="w-full h-full" label="Project" />}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-border">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>View Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>Code</span>
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
