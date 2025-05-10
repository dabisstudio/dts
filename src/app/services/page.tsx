import TextReveal from '@/components/animations/TextReveal'
import FadeIn from '@/components/animations/FadeIn'
import ServiceCard from '@/components/cards/ServiceCard'
import { Lightbulb, PenTool, Code, BarChart, Globe, Megaphone } from 'lucide-react'

export const metadata = {
  title: 'Services | DabisStudio',
  description: 'Digital services with luminous precision - Strategy, Design, and Development',
}

export default function ServicesPage() {
  const services = [
    {
      title: "Strategy",
      description: "Research-driven insights that guide your digital presence with purpose and clarity.",
      icon: <Lightbulb size={32} />,
      link: "/services/strategy",
      subservices: [
        "Digital Strategy",
        "User Research",
        "Content Strategy",
        "Analytics & Insights"
      ]
    },
    {
      title: "Design",
      description: "Visually compelling experiences that communicate your brand's unique value.",
      icon: <PenTool size={32} />,
      link: "/services/design",
      subservices: [
        "UX/UI Design",
        "Brand Identity",
        "Motion Design",
        "Design Systems"
      ]
    },
    {
      title: "Development",
      description: "Technically excellent solutions that perform flawlessly across all platforms.",
      icon: <Code size={32} />,
      link: "/services/development",
      subservices: [
        "Frontend Development",
        "CMS Integration",
        "E-commerce",
        "Performance Optimization"
      ]
    },
    {
      title: "Analytics",
      description: "Data-driven insights to measure performance and guide strategic decisions.",
      icon: <BarChart size={32} />,
      link: "/services/analytics",
      subservices: [
        "Performance Tracking",
        "Conversion Optimization",
        "User Behavior Analysis",
        "Custom Reporting"
      ]
    },
    {
      title: "SEO",
      description: "Strategic optimization to improve visibility and drive qualified organic traffic.",
      icon: <Globe size={32} />,
      link: "/services/seo",
      subservices: [
        "Technical SEO",
        "Content Optimization",
        "Local SEO",
        "SEO Strategy"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Targeted campaigns that connect with your audience and drive measurable results.",
      icon: <Megaphone size={32} />,
      link: "/services/digital-marketing",
      subservices: [
        "Paid Media",
        "Social Media",
        "Email Marketing",
        "Content Marketing"
      ]
    }
  ]

  return (
    <div className="space-y-24 py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6">
        <FadeIn>
          <h1 className="hero-title mb-6">Our Services</h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We deliver digital experiences with luminous precision, focusing on strategy, design, and development.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-12 bg-charcoal text-off-white rounded-lg">
        <TextReveal as="h2" className="section-title mb-12">
          Our Process
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn delay={0.1} className="relative">
            <div className="absolute top-0 left-6 bottom-0 w-px bg-electric-blue hidden md:block"></div>
            <div className="h-12 w-12 rounded-full bg-electric-blue flex items-center justify-center mb-4 relative z-10">
              <span className="text-charcoal font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Discover</h3>
            <p className="text-off-white text-opacity-80">
              We begin by understanding your business, audience, and objectives through in-depth research.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <div className="absolute top-0 left-6 bottom-0 w-px bg-electric-blue hidden md:block"></div>
            <div className="h-12 w-12 rounded-full bg-electric-blue flex items-center justify-center mb-4 relative z-10">
              <span className="text-charcoal font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Define</h3>
            <p className="text-off-white text-opacity-80">
              We define the strategy and create a roadmap for your project based on insights gathered.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="relative">
            <div className="absolute top-0 left-6 bottom-0 w-px bg-electric-blue hidden md:block"></div>
            <div className="h-12 w-12 rounded-full bg-electric-blue flex items-center justify-center mb-4 relative z-10">
              <span className="text-charcoal font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="text-off-white text-opacity-80">
              We create visually compelling designs that align with your brand and engage your audience.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="relative">
            <div className="h-12 w-12 rounded-full bg-electric-blue flex items-center justify-center mb-4 relative z-10">
              <span className="text-charcoal font-bold">04</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Deliver</h3>
            <p className="text-off-white text-opacity-80">
              We develop and launch your project with precision, ensuring quality and performance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <TextReveal as="h2" className="section-title mb-6">
          Ready to Start Your Project?
        </TextReveal>

        <FadeIn delay={0.3}>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a digital experience that elevates your brand with precision and purpose.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <a href="/contact" className="btn-primary inline-block">
            Get in Touch
          </a>
        </FadeIn>
