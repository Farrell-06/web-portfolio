import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hubungi Saya',
  description:
    'Hubungi Farrell Putra Prayoga untuk peluang magang, kolaborasi proyek data analytics, studi model machine learning, atau diskusi seputar sistem informasi.',
  alternates: {
    canonical: 'https://farrellputra.site/contact',
  },
  openGraph: {
    title: 'Hubungi Saya | Farrell Putra Prayoga',
    description:
      'Hubungi Farrell Putra Prayoga untuk peluang magang, kolaborasi proyek data analytics, dan sistem informasi.',
    url: 'https://farrellputra.site/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

