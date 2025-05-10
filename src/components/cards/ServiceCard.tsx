'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ServiceCardProps = {
  title: string
  description: string
  icon?: React.ReactNode
  link: string
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="card group relative overflow-hidden border border-transparent transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? '0 10px 30px rgba(0, 163, 255, 0.1)'
          : '0 4px 20px rgba(0, 0, 0, 0.05)',
        borderColor: isHovered ? 'rgba(0, 163, 255, 0.3)' : 'transparent',
      }}
    >
      {/* Accent line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-electric-blue"
        initial={{ width: '0%' }}
        animate={{ width: isHovered ? '100%' : '30%' }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-6">
        {icon && (
          <motion.div
            className="mb-4 text-electric-blue"
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        <h3 className="text-2xl font-serif-primary font-bold mb-4">{title}</h3>

        <p className="mb-6 text-muted-foreground">{description}</p>

        <Link
          href={link}
          className="inline-flex items-center text-electric-blue hover:underline"
        >
          <span>Learn More</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  )
}
