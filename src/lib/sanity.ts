import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
})

// Helper function for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Query functions for case studies
export async function getAllCaseStudies() {
  return await client.fetch(`
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client->{name},
      mainImage,
      summary,
      tags
    }
  `)
}

export async function getCaseStudyBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client->{name},
      mainImage,
      summary,
      challenge,
      solution,
      results,
      gallery,
      videoUrl,
      testimonial,
      tags
    }
  `, { slug })
}

// Query functions for homepage data
export async function getHomepageData() {
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

// Query functions for services
export async function getAllServices() {
  return await client.fetch(`
    *[_type == "service"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      icon
    }
  `)
}
