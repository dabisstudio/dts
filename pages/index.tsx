import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '../components/layout/Layout';
import FadeInView from '../components/animations/FadeInView';
import ScrollReveal from '../components/animations/ScrollReveal';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Hero animation with GSAP
  useEffect(() => {
    if (!heroRef.current) return;

    const heroElement = heroRef.current;
    const headline = heroElement.querySelector('.hero-headline');
    const subtext = heroElement.querySelector('.hero-subtext');
    const cta = heroElement.querySelector('.hero-cta');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(headline, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5
    })
    .from(subtext, {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, '-=0.6')
    .from(cta, {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.4');

    return () => {
      tl.kill();
    };
  }, []);

  // Client logo marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeElement = marqueeRef.current;
    const logos = marqueeElement.querySelectorAll('.client-logo');

    gsap.to(logos, {
      xPercent: -100,
      ease: 'none',
      duration: 20,
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 100)
      }
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center px-6 md:px-16 bg-charcoal overflow-hidden"
      >
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          {/* This would be replaced with a Three.js component or SVG for the abstract background */}
          <div className="absolute w-full h-full bg-gradient-to-br from-deep-navy via-charcoal to-charcoal"></div>
          <div className="absolute w-1/2 h-1/2 top-0 right-0 bg-electric-blue opacity-10 blur-[100px]"></div>
          <div className="absolute w-1/3 h-1/3 bottom-1/4 left-1/4 bg-refined-gold opacity-10 blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="hero-headline text-display-large font-serif mb-6">
            Designing the Future of Digital Experience
          </h1>
          <p className="hero-subtext text-xl md:text-2xl text-offwhite/80 mb-8 max-w-2xl">
            We craft premium digital experiences that blend innovation with timeless design principles for forward-thinking brands.
          </p>
          <a href="/contact" className="hero-cta btn-primary">
            Start Your Project
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding px-6 md:px-16 bg-offwhite text-charcoal">
        <ScrollReveal animation="fade">
          <h2 className="text-heading-large font-serif mb-12 text-center">Our Expertise</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInView delay={0.1} direction="up">
            <div className="bg-white p-8 shadow-sm border-t-2 border-electric-blue">
              <div className="w-16 h-16 mb-6 text-electric-blue">
                {/* This would be a Lottie animation */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-heading-small font-serif mb-4">Product & Service Design</h3>
              <p className="text-charcoal/80 mb-6">
                We transform complex challenges into intuitive digital products that users love and businesses thrive with.
              </p>
              <a href="/services/product-service-design" className="text-electric-blue hover:underline inline-flex items-center">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeInView>

          <FadeInView delay={0.2} direction="up">
            <div className="bg-white
