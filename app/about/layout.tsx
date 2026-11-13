import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description:
    'Profil akademik, latar belakang sistem informasi, dan orientasi karir Farrell Putra Prayoga sebagai aspiring Data Analyst.',
  alternates: {
    canonical: 'https://farrellputra.site/about',
  },
  openGraph: {
    title: 'Tentang Saya | Farrell Putra Prayoga',
    description:
      'Profil akademik, latar belakang sistem informasi, dan orientasi karir Farrell Putra Prayoga sebagai aspiring Data Analyst.',
    url: 'https://farrellputra.site/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

