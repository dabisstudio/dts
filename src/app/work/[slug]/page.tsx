import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import TextReveal from '@/components/animations/TextReveal'
import { Button } from '@/components/ui/Button'

// Function to get a single case study by slug
async function getCaseStudyBySlug(slug: string) {
  // This would fetch from Sanity when fully set up
  // return await client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]`, { slug })

  // Placeholder data
  const caseStudies = [
    {
      title: 'Luxury Brand Website Redesign',
      slug: { current: 'luxury-brand-redesign' },
      client: { name: 'Elegance Co.' },
      summary: 'A complete overhaul of a luxury brand's digital presence, focusing on immersive storytelling and seamless e-commerce integration.',
      challenge: 'The client needed to elevate their digital presence to match their premium brand positioning, while improving the online shopping experience to drive conversions.',
      solution: 'We developed a bespoke website with immersive storytelling elements, high-end visual design, and a seamless e-commerce experience optimized for conversion.',
      results: 'The new website resulted in a 40% increase in online sales, 25% improvement in average session duration, and significant enhancement of brand perception among target audiences.',
      tags: ['Web Design', 'E-commerce', 'Branding'],
      imageUrl: '/images/placeholder-1.jpg',
      gallery: ['/images/placeholder-1.jpg', '/images/placeholder-2.jpg', '/images/placeholder-3.jpg'],
      testimonial: {
        quote: 'DabisStudio transformed our digital presence with precision and creativity. The results have exceeded our expectations in both aesthetics and performance.',
        author: 'Jane Smith',
        role: 'Marketing Director, Elegance Co.'
      }
    },
    {
      title: 'Tech Startup Product Launch',
      slug: { current: 'tech-startup-launch' },
      client: { name: 'InnovateTech' },
      summary: 'Creating a compelling digital platform for a tech startup's groundbreaking product launch, driving user acquisition and investor interest.',
      challenge: 'The startup needed to introduce a complex technical product to the market in a way that was accessible to users while impressing potential investors.',
      solution: 'We created an interactive product showcase with intuitive explanations of technical features, compelling user stories, and clear calls to action.',
      results: 'The launch exceeded targets with 200% of expected user signups in the first month and secured an additional round of funding based on the strength of the digital presence.',
      tags: ['Product Design', 'UX/UI', 'Marketing'],
      imageUrl: '/images/placeholder-2.jpg',
      gallery: ['/images/placeholder-2.jpg', '/images/placeholder-4.jpg', '/images/placeholder-1.jpg'],
      testimonial: {
        quote: 'The team at DabisStudio understood our vision immediately and translated complex technical concepts into an engaging digital experience that resonated with both users and investors.',
        author: 'Alex Johnson',
        role: 'CEO, InnovateTech'
      }
    },
    {
      title: 'Cultural Institution Digital Experience',
      slug: { current: 'cultural-institution-experience' },
      client: { name: 'Metropolitan Arts' },
      summary: 'Developing an interactive digital experience for a renowned cultural institution, enhancing visitor engagement both online and in-person.',
      challenge: 'The institution needed to attract younger audiences and enhance the visitor experience through digital touchpoints before, during, and after physical visits.',
      solution: 'We developed a comprehensive digital strategy including an immersive website, mobile app with AR features for in-gallery experiences, and a digital archive of collections.',
      results: 'The digital initiatives led to a 35% increase in visitors under 35, doubled online engagement metrics, and created new revenue streams through digital membership tiers.',
      tags: ['Interactive Design', 'Content Strategy', 'Development'],
      imageUrl: '/images/placeholder-3.jpg',
      gallery: ['/images/placeholder-3.jpg', '/images/placeholder-1.jpg', '/images/placeholder-4.jpg'],
      testimonial: {
        quote: 'DabisStudio helped us bridge the gap between our traditional offerings and digital expectations of modern audiences. The result is a seamless experience that honors our heritage while embracing innovation.',
        author: 'Michael Chen',
        role: 'Digital Director, Metropolitan Arts'
      }
    },
    {
      title: 'Financial Services Platform',
      slug: { current: 'financial-services-platform' },
      client: { name: 'SecureWealth' },
      summary: 'Building a secure, user-friendly platform for financial services, balancing complex functionality with intuitive user experience.',
      challenge: 'The client needed to transform their legacy systems into a modern, user-friendly platform while maintaining the highest security standards and regulatory compliance.',
      solution: 'We designed and developed a comprehensive financial platform with intuitive interfaces, streamlined workflows, and robust security architecture.',
      results: 'The platform achieved a 98% user satisfaction rating, reduced customer service inquiries by 40%, and enabled the client to launch three new service offerings.',
      tags: ['UX/UI', 'Development', 'Security'],
      imageUrl: '/images/placeholder-4.jpg',
      gallery: ['/images/placeholder-4.jpg', '/images/placeholder-2.jpg', '/images/placeholder-3.jpg'],
      testimonial: {
        quote: 'The platform DabisStudio created has transformed how we deliver services to our clients. They expertly balanced complex requirements with exceptional user experience.',
        author: 'Sarah Williams',
        role: 'CTO, SecureWealth'
      }
    },
  ]

  const caseStudy = caseStudies.find(study => study.slug.current === slug)
  return caseStudy
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | DabisStudio',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: `${caseStudy.title} | DabisStudio`,
    description: caseStudy.summary
  }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.map((tag: string) => (
              <span key={tag} className="text-sm px-3 py-1 bg-electric-blue bg-opacity-20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="hero-title mb-6">{caseStudy.title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            {caseStudy.summary}
          </p>
          <p className="text-lg">
            <span className="text-muted">Client:</span> {caseStudy.client.name}
          </p>
        </FadeIn>
      </section>

      {/* Main Image */}
      <section>
        <GsapReveal>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={caseStudy.imageUrl}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </div>
        </GsapReveal>
      </section>

      {/* Challenge, Solution, Results */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn delay={0.1}>
            <div>
              <TextReveal
                text="Challenge"
                tag="h2"
                className="text-xl font-bold mb-4"
              />
              <p>{caseStudy.challenge}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <TextReveal
                text="Solution"
                tag="h2"
                className="text-xl font-bold mb-4"
              />
              <p>{caseStudy.solution}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <TextReveal
                text="Results"
                tag="h2"
                className="text-xl font-bold mb-4"
              />
              <p>{caseStudy.results}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <GsapReveal>
          <TextReveal
            text="Project Gallery"
            tag="h2"
            className="section-title mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.gallery.map((image: string, index: number) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${caseStudy.title} - Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section>
          <GsapReveal>
            <div className="bg-charcoal text-off-white p-12 rounded-lg">
              <div className="max-w-3xl mx-auto">
                <svg className="w-12 h-12 text-electric-blue mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm224 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64V216z"/>
                </svg>

                <p className="text-xl italic mb-6">{caseStudy.testimonial.quote}</p>

                <div>
                  <p className="font-bold">{caseStudy.testimonial.author}</p>
                  <p className="text-electric-blue">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          </GsapReveal>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="text-center">
        <FadeIn>
          <TextReveal
            text="Ready to Start Your Project?"
            tag="h2"
            className="section-title mb-6"
          />
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a digital experience that elevates your brand with precision and purpose.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact">
              Get in Touch
            </Button>
            <Button href="/work" variant="outline">
              View More Work
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
