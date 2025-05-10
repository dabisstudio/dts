import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'
import { Button } from '@/components/ui/Button'

export default function CaseStudyNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <FadeIn>
        <h1 className="hero-title mb-6">Case Study Not Found</h1>
        <p className="text-xl mb-8 max-w-2xl">
          We couldn't find the case study you're looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/work">
            Browse Our Work
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </FadeIn>
    </div>
  )
}
