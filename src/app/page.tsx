import Image from "next/image";
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Hero from '@/components/sections/Hero'
import ServiceCard from '@/components/cards/ServiceCard'
import CaseStudyCard from '@/components/cards/CaseStudyCard'
import FadeIn from '@/components/animations/FadeIn'
import GsapReveal from '@/components/animations/GsapReveal'
import TextReveal from '@/components/animations/TextReveal'
import { Lightbulb, PenTool, Code } from 'lucide-react'

async function getHomepageData() {
  return await client.fetch(`
    *[_type == "homepageSettings"][0]{
      title,
      subtitle,
      heroImage,
      ctaText,
      ctaLink,
      "featuredCaseStudies": featuredCaseStudies[]-> {
        title,
        slug,
        mainImage,
        summary,
        tags
      },
      "featuredClients": featuredClients[]-> {
        name,
        logo
      }
    }
  `)
}

export default async function Home() {
  // Comment out the data fetching for now until Sanity is fully set up
  // const data = await getHomepageData()

  // Use placeholder data for now
  const placeholderData = {
    title: "Luminous Precision in Digital Experiences",
    subtitle: "We craft digital experiences that illuminate brands with precision and purpose.",
    ctaText: "See Our Work",
    ctaLink: "/work"
  }

  // Placeholder case studies
  const caseStudies = [
    {
      title: "Luxury Brand Redesign",
      slug: "luxury-brand-redesign",
      summary: "A complete digital transformation for a luxury fashion brand, resulting in 40% increase in online sales.",
      imageUrl: "/images/placeholder-1.jpg",
      tags: ["Branding", "E-commerce", "UX Design"]
    },
    {
      title: "Tech Startup Platform",
      slug: "tech-startup-platform",
      summary: "An innovative SaaS platform with advanced data visualization and user-friendly interface.",
      imageUrl: "/images/placeholder-2.jpg",
      tags: ["Web App", "UI/UX", "Development"]
    }
  ]

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Hero
        title={placeholderData.title}
        subtitle={placeholderData.subtitle}
        ctaText={placeholderData.ctaText}
        ctaLink={placeholderData.ctaLink}
      />

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <TextReveal as="h2" className="section-title mb-12">
          What We Deliver
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Strategy"
            description="Research-driven insights that guide your digital presence with purpose and clarity."
            icon={<Lightbulb size={32} />}
            link="/services/strategy"
          />
          <ServiceCard
            title="Design"
            description="Visually compelling experiences that communicate your brand's unique value."
            icon={<PenTool size={32} />}
            link="/services/design"
          />
          <ServiceCard
            title="Development"
            description="Technically excellent solutions that perform flawlessly across all platforms."
            icon={<Code size={32} />}
            link="/services/development"
          />
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-6 py-12 bg-charcoal text-off-white rounded-lg">
        <TextReveal as="h2" className="section-title mb-12">
          Featured Work
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              slug={study.slug}
              summary={study.summary}
              imageUrl={study.imageUrl}
              tags={study.tags}
            />
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-12 text-center">
          <a href="/work" className="btn-primary inline-block">
            View All Work
          </a>
        </FadeIn>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto px-6 py-12">
        <TextReveal as="h2" className="section-title mb-12 text-center">
          Trusted By
        </TextReveal>

        <div className="flex flex-wrap gap-12 justify-center items-center">
          {/* Placeholder for client logos */}
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeIn key={i} delay={i * 0.1} className="w-32 h-12 bg-muted rounded">
              {/* Client logo will go here */}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <TextReveal as="h2" className="section-title mb-6">
          Ready to Illuminate Your Brand?
        </TextReveal>

        <FadeIn delay={0.3}>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a digital experience that elevates your brand with precision and purpose.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <a href="/contact" className="btn-primary inline-block">
            Start a Conversation
          </a>
        </FadeIn>
      </section>
    </div>
  )
}

export default function Home() {
  // Comment out the data fetching for now until Sanity is fully set up
  // const data = await getHomepageData()

  // Use placeholder data for now
  const placeholderData = {
    title: "Luminous Precision in Digital Experiences",
    subtitle: "We craft digital experiences that illuminate brands with precision and purpose.",
    ctaText: "See Our Work",
    ctaLink: "/work"
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <FadeIn delay={0.2} duration={0.8}>
          <TextReveal
            text={placeholderData.title}
            as="h1"
            className="hero-title mb-6"
          />
        </FadeIn>
        <FadeIn delay={0.6} duration={0.8} direction="up">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">{placeholderData.subtitle}</p>
        </FadeIn>
        <FadeIn delay={1} duration={0.8} direction="up">
          <Button href={placeholderData.ctaLink} size="lg">
            {placeholderData.ctaText}
          </Button>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section>
        <FadeIn>
          <TextReveal
            text="What We Deliver"
            as="h2"
            className="section-title"
          />
        </FadeIn>
        <StaggerContainer delay={0.2} staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card hover>
                <CardHeader>
                  <CardTitle>Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Research-driven insights that guide your digital presence with purpose and clarity.</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card hover>
                <CardHeader>
                  <CardTitle>Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visually compelling experiences that communicate your brand's unique value.</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card hover>
                <CardHeader>
                  <CardTitle>Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Technically excellent solutions that perform flawlessly across all platforms.</p>
                </CardContent>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Featured Work Section */}
      <section>
        <FadeIn>
          <TextReveal
            text="Featured Work"
            as="h2"
            className="section-title"
          />
        </FadeIn>
        <StaggerContainer delay={0.2} staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <Card hover>
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <CardTitle>Project One</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">A brief description of this amazing project and the results achieved.</p>
                </CardContent>
                <CardFooter>
                  <Button href="/work/project-one" variant="ghost">View Case Study</Button>
                </CardFooter>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card hover>
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <CardTitle>Project Two</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">A brief description of this amazing project and the results achieved.</p>
                </CardContent>
                <CardFooter>
                  <Button href="/work/project-two" variant="ghost">View Case Study</Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Clients Section */}
      <section>
        <FadeIn>
          <TextReveal
            text="Clients"
            as="h2"
            className="section-title"
          />
        </FadeIn>
        <StaggerContainer delay={0.2} staggerDelay={0.1}>
          <div className="flex flex-wrap gap-12 justify-center items-center">
            {/* Placeholder for client logos */}
            {Array.from({ length: 6 }).map((_, i) => (
              <StaggerItem key={i}>
                <div className="w-32 h-12 bg-muted rounded"></div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  )
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'

export default async function Home() {
  // Comment out the data fetching for now until Sanity is fully set up
  // const data = await getHomepageData()

  // Use placeholder data for now
  const placeholderData = {
    title: "Luminous Precision in Digital Experiences",
    subtitle: "We craft digital experiences that illuminate brands with precision and purpose.",
    ctaText: "See Our Work",
    ctaLink: "/work"
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <FadeIn delay={0.2} duration={0.8}>
          <TextReveal
            text={placeholderData.title}
            as="h1"
            className="hero-title mb-6"
          />
        </FadeIn>
        <FadeIn delay={0.6} duration={0.8} direction="up">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">{placeholderData.subtitle}</p>
        </FadeIn>
        <FadeIn delay={1} duration={0.8} direction="up">
          <Button href={placeholderData.ctaLink} size="lg">
            {placeholderData.ctaText}
          </Button>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section>
        <FadeIn>
          <TextReveal
            text="What We Deliver"
            as="h2"
            className="section-title"
          />
        </FadeIn>
        <StaggerContainer delay={0.2} staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card hover>
                <CardHeader>
                  <CardTitle>Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Research-driven insights that guide your digital presence with purpose and clarity.</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card hover>
                <CardHeader>
                  <CardTitle>Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visually compelling experiences that communicate your brand's unique value.</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card hover>
                <CardHeader>
                  <CardTitle>Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Technically excellent solutions that perform flawlessly across all platforms.</p>
                </CardContent>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Featured Work Section */}
      <section>
        <FadeIn>
          <TextReveal
            text="Featured Work"
            as="h2"
            className="section-title"
          />
        </FadeIn>
        <StaggerContainer delay={0.2} staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <Card hover>
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <CardTitle>Project One</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">A brief description of this amazing project and the results achieved.</p>
                </CardContent>
                <CardFooter>
                  <Button href="/work/project-one" variant="ghost">View Case Study</Button>
                </CardFooter>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card hover>
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <CardTitle>Project Two</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">A brief description of this amazing project and the results achieved.</p>
                </CardContent>
                <CardFooter>
                  <Button href="/work/project-two" variant="ghost">View Case Study</Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Clients Section */}
      <section>
        <FadeIn>
          <TextReveal
            text="Clients"
            as="h2"
            className="section-title"
          />
        </FadeIn>
        <StaggerContainer delay={0.2} staggerDelay={0.1}>
          <div className="flex flex-wrap gap-12 justify-center items-center">
            {/* Placeholder for client logos */}
            {Array.from({ length: 6 }).map((_, i) => (
              <StaggerItem key={i}>
                <div className="w-32 h-12 bg-muted rounded"></div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  )
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
