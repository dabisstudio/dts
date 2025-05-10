'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type StaggerItemProps = {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
}

export default function StaggerItem({
  children,
  direction = 'up',
  distance = 30,
  className = '',
}: StaggerItemProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  const item = {
    hidden: { opacity: 0, ...directionMap[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
