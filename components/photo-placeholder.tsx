import { cn } from '@/lib/utils'

interface PhotoPlaceholderProps {
  className?: string
  label?: string
}

export function PhotoPlaceholder({ className, label = 'Photo' }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-lg flex items-center justify-center overflow-hidden',
        className
      )}
    >
      <div className="text-center">
        <div className="text-4xl text-primary/40 mb-2">📷</div>
        <p className="text-primary/50 font-medium">{label}</p>
      </div>
    </div>
  )
}
