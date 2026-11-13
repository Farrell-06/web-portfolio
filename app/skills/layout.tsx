import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keahlian Teknis',
  description:
    'Keahlian teknis Farrell Putra Prayoga: Fokus utama pada Data Analytics (Python, Pandas, SQL, EDA, Visualisasi), Machine Learning (Scikit-learn, SVM), dan Web Development.',
  alternates: {
    canonical: 'https://farrellputra.site/skills',
  },
  openGraph: {
    title: 'Keahlian Teknis | Farrell Putra Prayoga',
    description:
      'Keahlian teknis Farrell Putra Prayoga: Fokus utama pada Data Analytics, Machine Learning, dan Web Development.',
    url: 'https://farrellputra.site/skills',
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

