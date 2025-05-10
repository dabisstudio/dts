import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import CaseStudyCard from '@/components/cards/CaseStudyCard'
import TextReveal from '@/components/animations/TextReveal'
import { Button } from '@/components/ui/Button'

async function getCaseStudies() {
  // This would fetch from Sanity when fully set up
  // return await client.fetch(`*[_type == "caseStudy"]`)

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

export default async function WorkPage() {
  const caseStudies = await getCaseStudies()

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
          <button className="px-4 py-2 rounded-full bg-electric-blue text-white">All</button>
          <button className="px-4 py-2 rounded-full border border-muted hover:bg-muted/20 transition-colors">Web Design</button>
          <button className="px-4 py-2 rounded-full border border-muted hover:bg-muted/20 transition-colors">UX/UI</button>
          <button className="px-4 py-2 rounded-full border border-muted hover:bg-muted/20 transition-colors">Development</button>
          <button className="px-4 py-2 rounded-full border border-muted hover:bg-muted/20 transition-colors">Branding</button>
        </div>
      </section>

      <section>
        <GsapReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
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
