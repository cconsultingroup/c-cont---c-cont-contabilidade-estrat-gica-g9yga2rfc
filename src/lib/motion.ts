// Helpers compartilhados de movimento (Framer Motion).
// Easing padrão do site: desaceleração suave, como pedido no novo padrão.
import type { Transition, Variants } from 'motion/react'

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const pageTransition: Transition = { duration: 0.5, ease: EASE }

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

/** Container: dispara os filhos em stagger. */
export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

/** Item de stagger: sobe levemente e aparece. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Parallax sutil de fundo (usar em elementos absolutos dentro da hero). */
export const slowZoom = {
  scale: [1.08, 1],
  transition: { duration: 8, ease: EASE },
}
