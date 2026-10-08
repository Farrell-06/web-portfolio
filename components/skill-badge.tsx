import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  label: string
  className?: string
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1.5 rounded-md bg-muted text-foreground border border-border text-xs font-medium transition-colors',
        className
      )}
    >
      {label}
    </span>
  )
}
