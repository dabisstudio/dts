'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type StaggerContainerProps = {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

export default function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}: StaggerContainerProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}
