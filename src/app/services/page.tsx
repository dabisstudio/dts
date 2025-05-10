import { getAllServices } from '@/lib/sanity'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import TextReveal from '@/components/animations/TextReveal'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

// This would fetch from Sanity when fully set up
async function getServices() {
  // Placeholder data until Sanity is fully connected
  return [
    {
      title: 'Strategy',
      slug: { current: 'strategy' },
      description: 'Research-driven insights that guide your digital presence with purpose and clarity.',
      icon: null,
      details: [
        'Digital Strategy',
        'User Research',
        'Content Strategy',
        'Brand Positioning',
        'Analytics & Optimization'
      ]
    },
    {
      title: 'Design',
      slug: { current: 'design' },
      description: 'Visually compelling experiences that communicate your brand's unique value.',
      icon: null,
      details: [
        'UX/UI Design',
        'Brand Identity',
        'Motion Design',
        'Prototyping',
        'Design Systems'
      ]
    },
    {
      title: 'Development',
      slug: { current: 'development' },
      description: 'Technically excellent solutions that perform flawlessly across all platforms.',
      icon: null,
      details: [
        'Frontend Development',
        'CMS Integration',
        'E-commerce',
        'Performance Optimization',
        'Accessibility Implementation'
      ]
    },
  ]
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <h1 className="hero-title mb-6">What We Deliver</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Our services combine strategic thinking, creative design, and technical excellence to create digital experiences with purpose.
          </p>
        </FadeIn>
      </section>

      {/* Services Overview */}
      <section>
        <GsapReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <FadeIn key={service.slug.current} delay={index * 0.1}>
                <Link href={`/services/${service.slug.current}`} className="block">
                  <div className="bg-white p-8 rounded-lg shadow-md h-full hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-electric-blue bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                      {service.icon ? (
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={32}
                          height={32}
                        />
                      ) : (
                        <div className="w-8 h-8 bg-electric-blue rounded-full"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-electric-blue rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* Approach Section */}
      <section>
        <GsapReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/services-approach.jpg"
                alt="Our approach to digital services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <TextReveal
                text="Our Approach"
                tag="h2"
                className="section-title"
              />
              <p className="mb-4">
                We believe that exceptional digital experiences arise from the perfect balance of strategic thinking, creative vision, and technical excellence.
              </p>
              <p className="mb-4">
                Every project begins with understanding your business objectives and user needs. This foundation guides our creative and technical decisions throughout the process.
              </p>
              <p>
                The result is a digital experience that not only looks beautiful but performs flawlessly and delivers measurable results for your business.
              </p>
            </div>
          </div>
        </GsapReveal>
      </section>

      {/* CTA Section */}
      <section>
        <GsapReveal>
          <div className="bg-charcoal text-off-white p-12 rounded-lg text-center">
            <TextReveal
              text="Ready to Elevate Your Digital Presence?"
              tag="h2"
              className="section-title"
            />
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals with digital experiences crafted with precision and purpose.
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
