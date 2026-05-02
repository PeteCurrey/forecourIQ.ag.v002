import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forecouriq.com'
  
  const staticRoutes = [
    '',
    '/features',
    '/websites',
    '/the-dms',
    '/intelligent-buying',
    '/automated-leads',
    '/competitor-monitoring',
    '/daily-briefing',
    '/pricing',
    '/case-studies',
    '/blog',
    '/demo',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const comparisonRoutes = [
    '/compare/click-dealer',
    '/compare/spidersnet',
    '/compare/vehiso',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...comparisonRoutes]
}
