'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ContactForm } from '@/components/contact-form'
import { Mail, Github, MapPin } from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'farrell.putra106@gmail.com',
      href: 'mailto:farrell.putra106@gmail.com',
      actionText: 'Kirim Email',
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      description: 'Bekasi, Indonesia',
      href: undefined,
      actionText: 'Domisili',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'github.com/Farrell-06',
      href: 'https://github.com/Farrell-06',
      actionText: 'Kunjungi Profil',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <SectionContainer className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-3">
              <span>Komunikasi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Hubungi Saya
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Silakan hubungi saya untuk kolaborasi proyek data analytics, studi model machine learning, maupun peluang magang di bidang Sistem Informasi.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Contact Channels */}
        <SectionContainer className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const isLink = Boolean(method.href)
              const Component = isLink ? motion.a : motion.div

              return (
                <Component
                  key={method.title}
                  {...(isLink
                    ? {
                        href: method.href,
                        target: method.href?.startsWith('http') ? '_blank' : undefined,
                        rel: method.href?.startsWith('http') ? 'noopener noreferrer' : undefined,
                      }
                    : {})}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group min-h-[44px]"
                >
                  <div>
                    <div className="text-primary mb-3 transition-transform duration-200 group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-base font-semibold text-foreground mb-1">{method.title}</h2>
                    <p className="text-xs text-muted-foreground break-all">{method.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-xs font-medium text-primary">
                    {method.actionText}
                  </div>
                </Component>
              )
            })}
          </div>
        </SectionContainer>

        {/* Form Section */}
        <SectionContainer className="py-16 border-t border-border/70 bg-card/30">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="mb-10 text-center max-w-xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
              Kirim Pesan
            </h2>
            <p className="text-sm text-muted-foreground">
              Formulir di bawah akan membuka aplikasi email Anda dengan format pesan yang sudah disiapkan secara otomatis.
            </p>
          </motion.div>

          <ContactForm />
        </SectionContainer>

        {/* Information Notes */}
        <SectionContainer className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">
              Informasi Komunikasi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground text-sm mb-1.5">Kanal Utama</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Email adalah media yang paling direkomendasikan untuk pertanyaan teknis, diskusi data, atau peluang magang.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground text-sm mb-1.5">Ketersediaan Kolaborasi</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Terbuka untuk eksplorasi proyek Data Analytics, pemodelan klasifikasi Machine Learning, studi kasus Sistem Informasi, dan program magang.
                </p>
              </div>
            </div>
          </motion.div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}
