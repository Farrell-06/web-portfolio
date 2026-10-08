'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ProjectCard } from '@/components/project-card'
import Image from 'next/image'
import Link from 'next/link'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function Projects() {
  const projects = [
    {
      title: 'Company Profile Web Application',
      description:
        'Aplikasi web profil perusahaan yang dibangun menggunakan Python dan Flask. Mengimplementasikan routing modular, manajemen aset statis, dan struktur template HTML terintegrasi.',
      tags: ['Python', 'Flask', 'HTML5', 'CSS3', 'Jinja2'],
      githubUrl: 'https://github.com/Farrell-06',
      statusLabel: 'Tugas Pengembangan Web',
      image: (
        <Image
          src="/companyprofile.png"
          alt="Tangkapan layar proyek Company Profile Python Flask"
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ),
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4 text-balance">
              Daftar Proyek
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dokumentasi proyek perangkat lunak dan sistem informasi yang telah dikerjakan.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Projects Grid */}
        <SectionContainer className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: easeOutExpo }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer className="py-20 border-t border-border/70 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Tertarik berdiskusi atau berkolaborasi?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Saya terbuka untuk diskusi teknis seputar sistem informasi, kolaborasi proyek web, maupun peluang magang.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 active:scale-[0.98] transition-all shadow-sm hover:shadow"
              >
                Kirim Pesan
              </Link>
            </div>
          </motion.div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}
