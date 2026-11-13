import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sertifikasi Terverifikasi',
  description:
    'Sertifikasi terverifikasi Farrell Putra Prayoga: RevoU Intro to Data Analytics dan kredensial IBM SkillsBuild di bidang Data, Machine Learning Granite, dan AI Agents.',
  alternates: {
    canonical: 'https://farrellputra.site/certifications',
  },
  openGraph: {
    title: 'Sertifikasi Terverifikasi | Farrell Putra Prayoga',
    description:
      'Sertifikasi terverifikasi Farrell Putra Prayoga: RevoU Intro to Data Analytics dan kredensial IBM SkillsBuild.',
    url: 'https://farrellputra.site/certifications',
  },
}

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

