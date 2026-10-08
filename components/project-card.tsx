'use client'

import { ExternalLink, Github } from 'lucide-react'
import { PhotoPlaceholder } from './photo-placeholder'

interface ProjectCardProps {
  title: string
  description: string
  image?: React.ReactNode
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  statusLabel?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  statusLabel,
}: ProjectCardProps) {
  const hasValidDemo = demoUrl && !demoUrl.includes('example.com')
  const hasValidGithub = githubUrl && githubUrl !== 'https://github.com'

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Thumbnail */}
        <div className="aspect-video bg-muted overflow-hidden border-b border-border/70 relative">
          {image || <PhotoPlaceholder className="w-full h-full" label="Proyek" />}
          {statusLabel && (
            <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded bg-background/90 text-foreground border border-border backdrop-blur-sm">
              {statusLabel}
            </span>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="px-6 py-4 border-t border-border/60 bg-muted/20 flex flex-wrap items-center gap-4">
        {hasValidDemo ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline min-h-[44px] py-2"
          >
            <span>Buka Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : null}

        {hasValidGithub ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors min-h-[44px] py-2"
          >
            <Github className="w-4 h-4" />
            <span>Lihat Kode</span>
          </a>
        ) : (
          <span className="text-xs text-muted-foreground py-2">
            {hasValidDemo ? '' : 'Repositori: Tersedia secara lokal / atas permintaan'}
          </span>
        )}
      </div>
    </div>
  )
}
