'use client'

import { useState, useEffect } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import CaseStudyCard from '@/components/cards/CaseStudyCard'
import TextReveal from '@/components/animations/TextReveal'
import { Button } from '@/components/ui/Button'

// This would be a server component in a real implementation
// that fetches data from Sanity
const getCaseStudies = async () => {
  // Placeholder data
  return [
    {
      title: 'Luxury Brand Website Redesign',
      slug: { current: 'luxury-brand-redesign' },
      client: { name: 'Elegance Co.' },
      summary: 'A complete overhaul of a luxury brand's digital presence, focusing on immersive storytelling and seamless e-commerce integration.',
      mainImage: null,
      tags: ['Web Design', 'E-commerce', 'Branding'],
      imageUrl: '/images/placeholder-1.jpg',
    },
    {
      title: 'Tech Startup Product Launch',
      slug: { current: 'tech-startup-launch' },
      client: { name: 'InnovateTech' },
      summary: 'Creating a compelling digital platform for a tech startup's groundbreaking product launch, driving user acquisition and investor interest.',
      mainImage: null,
      tags: ['Product Design', 'UX/UI', 'Marketing'],
      imageUrl: '/images/placeholder-2.jpg',
    },
    {
      title: 'Cultural Institution Digital Experience',
      slug: { current: 'cultural-institution-experience' },
      client: { name: 'Metropolitan Arts' },
      summary: 'Developing an interactive digital experience for a renowned cultural institution, enhancing visitor engagement both online and in-person.',
      mainImage: null,
      tags: ['Interactive Design', 'Content Strategy', 'Development'],
      imageUrl: '/images/placeholder-3.jpg',
    },
    {
      title: 'Financial Services Platform',
      slug: { current: 'financial-services-platform' },
      client: { name: 'SecureWealth' },
      summary: 'Building a secure, user-friendly platform for financial services, balancing complex functionality with intuitive user experience.',
      mainImage: null,
      tags: ['UX/UI', 'Development', 'Security'],
      imageUrl: '/images/placeholder-4.jpg',
    },
  ]
}

export default function WorkPage() {
  const [caseStudies, setCaseStudies] = useState([])
  const [filteredStudies, setFilteredStudies] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [isLoading, setIsLoading] = useState(true)

  // Get all unique tags from case studies
  const allTags = caseStudies.reduce((tags, study) => {
    study.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
    return tags
  }, [])

  // Load case studies on component mount
  useEffect(() => {
    const loadCaseStudies = async () => {
      const studies = await getCaseStudies()
      setCaseStudies(studies)
      setFilteredStudies(studies)
      setIsLoading(false)
    }

    loadCaseStudies()
  }, [])

  // Filter case studies when activeFilter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)

    if (filter === 'All') {
      setFilteredStudies(caseStudies)
    } else {
      const filtered = caseStudies.filter(study =>
        study.tags.includes(filter)
      )
      setFilteredStudies(filtered)
    }
  }

  return (
    <div className="space-y-24">
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <h1 className="hero-title mb-6">Our Work</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Explore our portfolio of digital experiences crafted with precision and purpose.
          </p>
        </FadeIn>
      </section>

      {/* Filter Section */}
      <section>
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'All'
                ? 'bg-electric-blue text-white'
                : 'border border-muted hover:bg-muted/20'
            }`}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>

          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === tag
                  ? 'bg-electric-blue text-white'
                  : 'border border-muted hover:bg-muted/20'
              }`}
              onClick={() => handleFilterChange(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section>
        <GsapReveal>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-[16/9] bg-muted animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredStudies.map((caseStudy, index) => (
                <FadeIn key={caseStudy.slug.current} delay={index * 0.2}>
                  <CaseStudyCard
                    title={caseStudy.title}
                    slug={caseStudy.slug.current}
                    summary={caseStudy.summary}
                    imageUrl={caseStudy.imageUrl || '/images/placeholder.jpg'}
                    tags={caseStudy.tags}
                  />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">No case studies found matching the selected filter.</p>
              <button
                className="mt-4 text-electric-blue hover:underline"
                onClick={() => handleFilterChange('All')}
              >
                View all case studies
              </button>
            </div>
          )}
        </GsapReveal>
      </section>

      <section>
        <GsapReveal>
          <div className="bg-charcoal text-off-white p-12 rounded-lg text-center">
            <TextReveal
              text="Ready to Start Your Project?"
              tag="h2"
              className="section-title"
            />
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create a digital experience that elevates your brand and achieves your business goals.
            </p>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </GsapReveal>
      </section>
    </div>
  )
}
