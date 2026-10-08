'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Image from 'next/image'
import { Github, Mail } from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center">
        <SectionContainer className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="md:col-span-7 order-2 md:order-1 space-y-6"
            >
              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
                  className="text-sm font-semibold tracking-wider uppercase text-primary"
                >
                  Portofolio Mahasiswa Sistem Informasi
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight text-balance"
                >
                  Farrell Putra Prayoga
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: easeOutExpo }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Fokus pada pengembangan aplikasi web, perancangan basis data, dan analisis sistem informasi untuk menghadirkan solusi teknologi yang rapi, fungsional, dan terstruktur.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: easeOutExpo }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 active:scale-[0.98] transition-all shadow-sm hover:shadow"
                >
                  Lihat Proyek
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-border text-foreground hover:bg-muted active:scale-[0.98] transition-all"
                >
                  Hubungi Saya
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center gap-4 pt-4 border-t border-border/60"
              >
                <span className="text-xs text-muted-foreground font-medium">Tautan Langsung:</span>
                <a
                  href="https://github.com/Farrell-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  aria-label="Profil GitHub Farrell-06"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:farrell.prayoga106@gmail.com"
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  aria-label="Kirim Email ke farrell.prayoga106@gmail.com"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
              className="md:col-span-5 flex justify-center order-1 md:order-2"
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-md border border-border">
                <Image
                  src="/Profile.jpg"
                  alt="Foto profil Farrell Putra Prayoga"
                  width={320}
                  height={320}
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}
