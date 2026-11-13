import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Riwayat Pendidikan',
  description:
    'Riwayat pendidikan formal Farrell Putra Prayoga di Program Studi S1 Sistem Informasi Universitas Mercu Buana dengan IPK 3.82.',
  alternates: {
    canonical: 'https://farrellputra.site/education',
  },
  openGraph: {
    title: 'Riwayat Pendidikan | Farrell Putra Prayoga',
    description:
      'Riwayat pendidikan formal Farrell Putra Prayoga: S1 Sistem Informasi Universitas Mercu Buana dengan IPK 3.82.',
    url: 'https://farrellputra.site/education',
  },
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

