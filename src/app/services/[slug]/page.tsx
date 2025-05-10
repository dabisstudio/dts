import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import TextReveal from '@/components/animations/TextReveal'
import { Lightbulb, PenTool, Code, Monitor, BarChart, Layers } from 'lucide-react'

// Map of icon names to Lucide components
const iconMap = {
  lightbulb: Lightbulb,
  penTool: PenTool,
  code: Code,
  monitor: Monitor,
  barChart: BarChart,
  layers: Layers
}

// Function to get a service by slug
async function getServiceBySlug(slug: string) {
  try {
    // This would fetch from Sanity when fully set up
    return await client.fetch(`
      *[_type == "service" && slug.current == $slug][0] {
        title,
        slug,
        description,
        fullDescription,
        icon,
        image,
        features
      }
    `, { slug })
  } catch (error) {
    console.error('Error fetching service:', error)
  }

  // Placeholder data
  const services = {
    'strategy': {
      title: 'Strategy',
      slug: { current: 'strategy' },
      description: 'Research-driven insights that guide your digital presence with purpose and clarity.',
      fullDescription: 'Our strategic approach begins with deep research into your business, audience, and competitive landscape. We identify opportunities and challenges, then develop a roadmap to achieve your goals through digital channels.',
      icon: 'lightbulb',
      features: [
        { title: 'User Research', description: 'Understanding your audience through data analysis and user interviews.' },
        { title: 'Competitive Analysis', description: 'Evaluating your position in the market and identifying opportunities.' },
        { title: 'Content Strategy', description: 'Planning content that resonates with your audience and supports your goals.' },
        { title: 'Digital Roadmapping', description: 'Creating a clear path forward for your digital presence.' }
      ]
    },
    'design': {
      title: 'Design',
      slug: { current: 'design' },
      description: 'Visually compelling experiences that communicate your brand's unique value.',
      fullDescription: 'Our design process combines aesthetic excellence with user-centered principles to create digital experiences that are both beautiful and functional. We focus on creating interfaces that guide users intuitively while reinforcing your brand identity.',
      icon: 'penTool',
      features: [
        { title: 'UX Design', description: 'Creating intuitive user flows and information architecture.' },
        { title: 'UI Design', description: 'Crafting visually appealing interfaces that align with your brand.' },
        { title: 'Brand Identity', description: 'Developing or refining your visual brand elements.' },
        { title: 'Prototyping', description: 'Building interactive models to test and refine the user experience.' }
      ]
    },
    'development': {
      title: 'Development',
      slug: { current: 'development' },
      description: 'Technically excellent solutions that perform flawlessly across all platforms.',
      fullDescription: 'Our development team builds robust, scalable digital solutions using modern technologies and best practices. We prioritize performance, security, and maintainability to ensure your digital products stand the test of time.',
      icon: 'code',
      features: [
        { title: 'Frontend Development', description: 'Building responsive, accessible user interfaces with modern frameworks.' },
        { title: 'Backend Development', description: 'Creating powerful, secure server-side applications and APIs.' },
        { title: 'CMS Integration', description: 'Implementing content management systems that empower your team.' },
        { title: 'Performance Optimization', description: 'Ensuring fast load times and smooth user experiences.' }
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      slug: { current: 'digital-marketing' },
      description: 'Strategic campaigns that connect your brand with the right audience at the right time.',
      fullDescription: 'Our digital marketing services help you reach and engage your target audience through multiple channels. We develop data-driven strategies that maximize your return on investment and drive meaningful results.',
      icon: 'barChart',
      features: [
        { title: 'SEO', description: 'Improving your visibility in search engine results.' },
        { title: 'Content Marketing', description: 'Creating valuable content that attracts and engages your audience.' },
        { title: 'Social Media', description: 'Building your brand presence and community on social platforms.' },
        { title: 'Analytics & Reporting', description: 'Measuring performance and providing actionable insights.' }
      ]
    }
  }

  return services[slug]
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found | DabisStudio',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: `${service.title} | DabisStudio`,
    description: service.description
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  // Get the icon component based on the icon name
  const IconComponent = service.icon ? iconMap[service.icon] : null

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          {IconComponent && (
            <div className="text-electric-blue mb-6">
              <IconComponent size={48} />
            </div>
          )}
          <h1 className="hero-title mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            {service.description}
          </p>
        </FadeIn>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="mb-6">{service.fullDescription}</p>
              <a href="/contact" className="btn-primary inline-block">
                Discuss Your Project
              </a>
            </div>
          </FadeIn>

          <GsapReveal>
            <div className="bg-muted rounded-lg aspect-video relative overflow-hidden">
              {service.image ? (
                <Image
                  src={urlFor(service.image).url()}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-charcoal text-off-white">
                  {IconComponent && <IconComponent size={64} />}
                </div>
              )}
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <TextReveal
          text="What We Offer"
          tag="h2"
          className="section-title mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features && service.features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="p-6 border border-muted rounded-lg">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 bg-charcoal text-off-white rounded-lg">
        <GsapReveal>
          <div className="text-center">
            <h2 className="section-title mb-6">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </div>
        </GsapReveal>
      </section>
    </div>
  )
}
