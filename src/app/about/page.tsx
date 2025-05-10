import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import TextReveal from '@/components/animations/TextReveal'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <h1 className="hero-title mb-6">About DabisStudio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We are a digital studio dedicated to crafting luminous experiences with precision and purpose.
          </p>
        </FadeIn>
      </section>

      <section>
        <GsapReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <TextReveal
                text="Our Story"
                tag="h2"
                className="section-title"
              />
              <div className="space-y-4">
                <p>
                  Founded in 2023, DabisStudio emerged from a vision to create digital experiences that truly matter.
                  We believe in the power of thoughtful design and purposeful technology to transform how people
                  interact with brands and products.
                </p>
                <p>
                  Our team brings together diverse expertise in strategy, design, and development, united by a
                  shared commitment to excellence and innovation. We approach each project with curiosity,
                  rigor, and a deep respect for the craft.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg aspect-square"></div>
          </div>
        </GsapReveal>
      </section>

      <section>
        <GsapReveal>
          <TextReveal
            text="Our Values"
            tag="h2"
            className="section-title text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  P
                </div>
                <h3 className="text-xl font-bold mb-2">Precision</h3>
                <p>
                  We believe in meticulous attention to detail, ensuring every pixel and interaction serves a purpose.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-refined-gold rounded-full flex items-center justify-center text-charcoal text-2xl mx-auto mb-4">
                  I
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p>
                  We embrace creative thinking and technological advancement to solve complex problems.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-navy rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  C
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p>
                  We work closely with our clients, valuing partnership and shared success above all.
                </p>
              </div>
            </FadeIn>
          </div>
        </GsapReveal>
      </section>

      <section>
        <GsapReveal>
          <div className="bg-charcoal text-off-white p-12 rounded-lg">
            <TextReveal
              text="Our Team"
              tag="h2"
              className="section-title"
            />
            <p className="text-lg mb-8">
              We're a small but mighty team of strategists, designers, and developers passionate about creating
              exceptional digital experiences. Each member brings unique expertise and perspective, united by
              a shared commitment to quality and innovation.
            </p>
            <Button href="/contact" variant="secondary">
              Work With Us
            </Button>
          </div>
        </GsapReveal>
      </section>
    </div>
  )
}
