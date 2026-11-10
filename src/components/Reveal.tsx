import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { EASE } from '@/lib/motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Atraso em segundos. */
  delay?: number
  /** Distância inicial em px. */
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

/**
 * Revela o conteúdo ao entrar na viewport (fade + leve subida).
 * Respeita prefers-reduced-motion: aparece sem animação.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as as React.ElementType
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}
