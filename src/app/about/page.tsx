import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import TextReveal from '@/components/animations/TextReveal'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Creative Director',
      bio: 'With over 15 years of experience in digital design, Alex leads our creative vision with a focus on innovative, user-centered solutions.',
      imageUrl: '/images/team-placeholder-1.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Technical Director',
      bio: 'Sarah brings deep technical expertise and a passion for performance optimization to every project we undertake.',
      imageUrl: '/images/team-placeholder-2.jpg',
    },
    {
      name: 'Michael Rodriguez',
      role: 'UX Strategy Lead',
      bio: 'Michael combines research insights with strategic thinking to create digital experiences that truly resonate with users.',
      imageUrl: '/images/team-placeholder-3.jpg',
    },
    {
      name: 'Emma Wilson',
      role: 'Client Services Director',
      bio: 'Emma ensures our clients receive exceptional service and that their business objectives remain at the heart of our work.',
      imageUrl: '/images/team-placeholder-4.jpg',
    },
  ]

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <h1 className="hero-title mb-6">About DabisStudio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We are a digital studio dedicated to crafting experiences with luminous precision.
          </p>
        </FadeIn>
      </section>

      {/* Our Philosophy */}
      <section>
        <GsapReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal
                text="Our Philosophy"
                tag="h2"
                className="section-title"
              />
              <p className="mb-4">
                At DabisStudio, we believe that exceptional digital experiences arise from the perfect balance of strategic thinking, creative vision, and technical excellence.
              </p>
              <p className="mb-4">
                Our approach is defined by precision—in understanding our clients' needs, in crafting user experiences, and in executing technical solutions that perform flawlessly.
              </p>
              <p>
                We call this "Luminous Precision"—the ability to illuminate brands and ideas with clarity, purpose, and technical sophistication.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/about-philosophy.jpg"
                alt="DabisStudio philosophy visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </GsapReveal>
      </section>

      {/* Our Team */}
      <section>
        <GsapReveal>
          <TextReveal
            text="Our Team"
            tag="h2"
            className="section-title mb-12 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-electric-blue mb-4">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* Our Process */}
      <section>
        <GsapReveal>
          <TextReveal
            text="Our Process"
            tag="h2"
            className="section-title mb-12 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-electric-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Discover</h3>
                <p>We begin by deeply understanding your business, audience, and objectives through research and collaborative workshops.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-electric-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Design</h3>
                <p>Our design process combines strategic thinking with creative exploration to craft experiences that resonate with users and achieve business goals.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-electric-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Deliver</h3>
                <p>We bring designs to life with technical excellence, ensuring performance, accessibility, and seamless functionality across all platforms.</p>
              </div>
            </FadeIn>
          </div>
        </GsapReveal>
      </section>

      {/* CTA Section */}
      <section>
        <GsapReveal>
          <div className="bg-charcoal text-off-white p-12 rounded-lg text-center">
            <TextReveal
              text="Ready to Work Together?"
              tag="h2"
              className="section-title"
            />
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring luminous precision to your digital presence.
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
