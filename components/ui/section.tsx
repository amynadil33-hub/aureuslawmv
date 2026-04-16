import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'muted' | 'navy' | 'stone'
  id?: string
}

export function Section({ children, className, variant = 'default', id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        variant === 'muted' && 'bg-muted',
        variant === 'navy' && 'bg-navy text-stone-light',
        variant === 'stone' && 'bg-stone',
        className
      )}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  variant?: 'default' | 'light'
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  variant = 'default'
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {subtitle && (
        <p className={cn(
          'text-sm font-medium tracking-wider uppercase mb-3',
          variant === 'light' ? 'text-gold' : 'text-gold'
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        'font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance',
        variant === 'light' ? 'text-stone-light' : 'text-navy'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-lg leading-relaxed',
          variant === 'light' ? 'text-stone-light/80' : 'text-muted-foreground'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'container mx-auto px-6',
        size === 'narrow' && 'max-w-4xl',
        size === 'wide' && 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  )
}
