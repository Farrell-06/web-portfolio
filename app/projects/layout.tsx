import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koleksi Proyek',
  description:
    'Dokumentasi proyek akademik Farrell Putra Prayoga: Heart Disease Classification (Machine Learning), SONARA FEST (Dynamic Web), dan Company Profile (Python Flask).',
  alternates: {
    canonical: 'https://farrellputra.site/projects',
  },
  openGraph: {
    title: 'Koleksi Proyek | Farrell Putra Prayoga',
    description:
      'Dokumentasi proyek akademik Farrell Putra Prayoga: Heart Disease Classification, SONARA FEST, dan Company Profile Flask.',
    url: 'https://farrellputra.site/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

