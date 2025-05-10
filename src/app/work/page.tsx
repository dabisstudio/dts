import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

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
    },
    {
      title: 'Tech Startup Product Launch',
      slug: { current: 'tech-startup-launch' },
      client: { name: 'InnovateTech' },
      summary: 'Creating a compelling digital platform for a tech startup's groundbreaking product launch, driving user acquisition and investor interest.',
      mainImage: null,
      tags: ['Product Design', 'UX/UI', 'Marketing'],
    },
    {
      title: 'Cultural Institution Digital Experience',
      slug: { current: 'cultural-institution-experience' },
      client: { name: 'Metropolitan Arts' },
      summary: 'Developing an interactive digital experience for a renowned cultural institution, enhancing visitor engagement both online and in-person.',
      mainImage: null,
      tags: ['Interactive Design', 'Content Strategy', 'Development'],
    },
    {
      title: 'Financial Services Platform',
      slug: { current: 'financial-services-platform' },
      client: { name: 'SecureWealth' },
      summary: 'Building a secure, user-friendly platform for financial services, balancing complex functionality with intuitive user experience.',
      mainImage: null,
      tags: ['UX/UI', 'Development', 'Security'],
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

      <section>
        <GsapReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <FadeIn key={caseStudy.slug.current} delay={index * 0.2}>
                <Card hover className="h-full overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    {caseStudy.mainImage ? (
                      <Image
                        src={urlFor(caseStudy.mainImage).url()}
                        alt={caseStudy.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        {caseStudy.client.name}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">
                      {caseStudy.client.name}
                    </div>
                    <CardTitle>{caseStudy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">{caseStudy.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button href={`/work/${caseStudy.slug.current}`} variant="link">
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </GsapReveal>
      </section>

      <section>
        <GsapReveal>
          <div className="bg-electric-blue text-white p-12 rounded-lg text-center">
            <h2 className="section-title">Ready to Start Your Project?</h2>
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
