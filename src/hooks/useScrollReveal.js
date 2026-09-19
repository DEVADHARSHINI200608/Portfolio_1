import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Shared scroll-reveal animation variants — consistent across all sections.
 * Uses a gentle ease-out curve for a natural, smooth feel.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.02 },
  },
};

/**
 * useScrollReveal — triggers animation when section enters viewport.
 * @param {string} margin - rootMargin offset (default: '-80px')
 */
export function useScrollReveal(margin = '-80px') {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}
