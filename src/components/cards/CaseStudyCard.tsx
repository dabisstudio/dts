'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type CaseStudyCardProps = {
  title: string
  slug: string
  summary: string
  imageUrl: string
  tags?: string[]
}

export default function CaseStudyCard({
  title,
  slug,
  summary,
  imageUrl,
  tags = [],
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[16/9] relative overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 0.8 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-off-white">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-electric-blue bg-opacity-20 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-2xl font-serif-primary font-bold mb-2">{title}</h3>

        <motion.p
          className="text-sm mb-4 opacity-80"
          initial={{ height: '0', opacity: 0, marginBottom: 0 }}
          animate={{
            height: isHovered ? 'auto' : '0',
            opacity: isHovered ? 1 : 0,
            marginBottom: isHovered ? 16 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {summary}
        </motion.p>

        <Link
          href={`/work/${slug}`}
          className="inline-flex items-center text-electric-blue hover:underline"
        >
          <span>View Case Study</span>
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
