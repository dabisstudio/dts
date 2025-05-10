'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

type TextRevealProps = {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  delay?: number
}

export default function TextReveal({
  text,
  tag = 'p',
  className = '',
  delay = 0,
}: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, SplitText)

    const element = textRef.current
    if (!element) return

    // Split text into characters
    const splitText = new SplitText(element, { type: 'chars, words' })
    const chars = splitText.chars

    // Create animation
    gsap.fromTo(
      chars,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: 'power2.out',
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
      }
    )

    // Cleanup
    return () => {
      splitText.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [text, delay])

  const Tag = tag
  return (
    // @ts-ignore - Dynamic tag
    <Tag ref={textRef} className={className}>
      {text}
    </Tag>
  )
}
