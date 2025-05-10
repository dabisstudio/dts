'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import FadeIn from '@/components/animations/FadeIn'

type HeroProps = {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImageUrl?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImageUrl,
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    // Split the title text into individual characters for animation
    const titleText = titleRef.current.innerText
    const chars = titleText.split('')

    // Clear the title element
    titleRef.current.innerHTML = ''

    // Create span elements for each character
    chars.forEach((char, index) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.opacity = '0'
      span.style.display = 'inline-block'
      span.className = 'char'
      titleRef.current?.appendChild(span)
    })

    // Animate each character
    gsap.to('.char', {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.2,
    })

    // Create a subtle parallax effect on scroll
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        backgroundPositionY: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className={`min-h-[90vh] flex flex-col justify-center relative ${
        backgroundImageUrl ? 'bg-cover bg-center' : ''
      }`}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : {}
      }
    >
      {/* Optional overlay for better text readability if background image is used */}
      {backgroundImageUrl && (
        <div className="absolute inset-0 bg-charcoal bg-opacity-60 z-0"></div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <h1 ref={titleRef} className="hero-title mb-6 text-off-white">
          {title}
        </h1>

        <FadeIn delay={0.8} duration={0.7}>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-off-white">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={1.2} duration={0.7}>
          <a
            href={ctaLink}
            className="btn-primary inline-block"
          >
            {ctaText}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
