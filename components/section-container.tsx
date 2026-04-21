import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20',
        className
      )}
    >
      {children}
    </section>
  )
}
