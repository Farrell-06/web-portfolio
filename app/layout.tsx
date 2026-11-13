import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://farrellputra.site'),
  title: {
    default: 'Farrell Putra Prayoga | Aspiring Data Analyst',
    template: '%s | Farrell Putra Prayoga',
  },
  description:
    'Portofolio profesional Farrell Putra Prayoga: Mahasiswa S1 Sistem Informasi Universitas Mercu Buana dengan fokus utama pada Data Analytics, Machine Learning, dan Web Development.',
  keywords: [
    'Farrell Putra Prayoga',
    'Data Analyst',
    'Data Analytics',
    'Machine Learning',
    'Sistem Informasi',
    'Universitas Mercu Buana',
    'Python',
    'SQL',
    'Portofolio Data Analyst',
  ],
  authors: [{ name: 'Farrell Putra Prayoga', url: 'https://farrellputra.site' }],
  creator: 'Farrell Putra Prayoga',
  alternates: {
    canonical: 'https://farrellputra.site',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://farrellputra.site',
    title: 'Farrell Putra Prayoga | Aspiring Data Analyst',
    description:
      'Portofolio profesional Farrell Putra Prayoga: Proyek analitik data, machine learning, dan sistem informasi.',
    siteName: 'Portofolio Farrell Putra Prayoga',
    images: [
      {
        url: '/Profile.jpg',
        width: 800,
        height: 800,
        alt: 'Farrell Putra Prayoga - Aspiring Data Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farrell Putra Prayoga | Aspiring Data Analyst',
    description:
      'Portofolio profesional Farrell Putra Prayoga: Proyek analitik data, machine learning, dan sistem informasi.',
    images: ['/Profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
