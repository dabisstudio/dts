export default {
  name: 'homepageSettings',
  title: 'Homepage Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
    },
    {
      name: 'featuredCaseStudies',
      title: 'Featured Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }]
    },
    {
      name: 'featuredClients',
      title: 'Featured Clients',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'clientLogo' }] }]
    }
  ]
}
