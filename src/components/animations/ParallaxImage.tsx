'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type ParallaxImageProps = {
  src: string
  alt: string
  width: number
  height: number
  speed?: number
  className?: string
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  speed = 0.5,
  className = '',
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    const yPercent = speed * 100

    gsap.fromTo(
      imageRef.current,
      { y: -yPercent / 2 },
      {
        y: yPercent / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed])

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <div ref={imageRef} className="relative will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>
    </div>
  )
}
