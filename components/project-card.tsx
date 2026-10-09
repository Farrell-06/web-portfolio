'use client'

import { useState } from 'react'
import { ExternalLink, Github, Info, Layers, Database, Activity } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export interface ProjectDetailData {
  objective: string
  datasetOrScope?: string
  workPerformed: string[]
  modelOrArchitecture?: string
  metrics?: { label: string; value: string }[]
  academicNote?: string
}

export interface ProjectCardProps {
  title: string
  projectType: string
  year: string
  description: string
  tags: string[]
  image?: React.ReactNode
  demoUrl?: string
  githubUrl?: string
  metricsSummary?: { label: string; value: string }[]
  details?: ProjectDetailData
}

export function ProjectCard({
  title,
  projectType,
  year,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
  metricsSummary,
  details,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasValidDemo = demoUrl && !demoUrl.includes('example.com')
  const hasValidGithub = githubUrl && githubUrl !== 'https://github.com'

  return (
    <>
      <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Card Visual Header / Preview */}
          <div className="aspect-video bg-muted/40 overflow-hidden border-b border-border relative flex items-center justify-center">
            {image ? (
              image
            ) : (
              <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-card via-muted/30 to-card">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5 text-primary">
                    <Activity className="w-3.5 h-3.5" />
                    Data Analytics
                  </span>
                  <span>{year}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Model Arsitektur</p>
                  <p className="text-sm font-semibold text-foreground font-mono">SVM (RBF Kernel)</p>
                </div>
                {metricsSummary && metricsSummary.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/60">
                    {metricsSummary.map((m) => (
                      <div key={m.label} className="bg-background/80 rounded px-2 py-1 border border-border/80">
                        <span className="text-[10px] text-muted-foreground block">{m.label}</span>
                        <span className="text-xs font-bold text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Badges Overlay */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-background/90 text-foreground border border-border backdrop-blur-xs shadow-xs">
                {year}
              </span>
            </div>
            <div className="absolute top-3 left-3">
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-primary/15 text-primary border border-primary/30 backdrop-blur-xs">
                {projectType}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Metric Highlights if available */}
            {metricsSummary && metricsSummary.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 p-2.5 rounded-lg bg-muted/40 border border-border/70">
                {metricsSummary.map((metric) => (
                  <div key={metric.label} className="text-xs flex items-center gap-1.5 mr-2">
                    <span className="text-muted-foreground">{metric.label}:</span>
                    <span className="font-semibold text-foreground font-mono">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
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

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {details && (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 min-h-[44px] rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Detail Proyek</span>
              </button>
            )}

            {hasValidDemo && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary min-h-[44px] px-2 py-2 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div>
            {hasValidGithub ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2 py-2"
                aria-label={`Repositori GitHub untuk ${title}`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="text-[11px] text-muted-foreground font-medium">
                Repositori Akademik
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {details && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs px-2 py-0.5 rounded bg-primary/15 text-primary font-medium border border-primary/30">
                  {projectType}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono">
                  {year}
                </span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
                {title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Ringkasan metodologi teknis, dataset, dan cakupan implementasi proyek.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-2 text-sm text-foreground">
              {/* Objective */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-primary" />
                  Tujuan & Sasaran
                </h4>
                <p className="text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg border border-border">
                  {details.objective}
                </p>
              </div>

              {/* Dataset or Scope & Metrics */}
              {(details.datasetOrScope || details.metrics) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.datasetOrScope && (
                    <div className="p-3 rounded-lg bg-muted/30 border border-border">
                      <span className="text-xs font-semibold text-muted-foreground block mb-1 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-primary" />
                        Dataset / Cakupan
                      </span>
                      <p className="font-medium text-foreground">{details.datasetOrScope}</p>
                    </div>
                  )}

                  {details.modelOrArchitecture && (
                    <div className="p-3 rounded-lg bg-muted/30 border border-border">
                      <span className="text-xs font-semibold text-muted-foreground block mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-primary" />
                        Model / Pendekatan
                      </span>
                      <p className="font-medium text-foreground">{details.modelOrArchitecture}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Reported Metrics if applicable */}
              {details.metrics && details.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Hasil Pengujian & Metrik Evaluasi
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {details.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-center">
                        <span className="text-xs text-muted-foreground block">{m.label}</span>
                        <span className="text-lg font-bold text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Work Performed */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Tahapan & Pengerjaan Teknis
                </h4>
                <ul className="space-y-1.5 text-muted-foreground">
                  {details.workPerformed.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic Disclaimer Note */}
              {details.academicNote && (
                <div className="p-3 rounded-lg bg-muted/60 border border-border text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Catatan Akademik: </span>
                  {details.academicNote}
                </div>
              )}

              {/* Tech Stack in Modal */}
              <div className="pt-2 border-t border-border">
                <span className="text-xs font-semibold text-muted-foreground block mb-2">
                  Teknologi & Library:
                </span>
                <div className="flex flex-wrap gap-1.5">
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
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
