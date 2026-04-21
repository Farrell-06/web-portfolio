import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  label: string
  className?: string
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/40 text-sm font-medium hover:bg-secondary/30 transition-colors',
        className
      )}
    >
      {label}
    </span>
  )
}
