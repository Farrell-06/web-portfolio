import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://farrellputra.site'
  const routes = [
    '',
    '/about',
    '/skills',
    '/projects',
    '/education',
    '/certifications',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/projects' ? 0.9 : 0.8,
  }))
}

