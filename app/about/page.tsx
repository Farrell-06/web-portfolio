'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Image from 'next/image'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function About() {
  const technicalCompetencies = [
    {
      category: 'Bahasa & Framework Pemrograman',
      description: 'Teknologi inti untuk pembangunan antarmuka web dan logika aplikasi backend.',
      skills: ['Python', 'Flask', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      category: 'Basis Data & Pemodelan Sistem',
      description: 'Pengelolaan struktur data relasional dan non-relasional serta desain skema basis data.',
      skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
    },
    {
      category: 'Alat & Lingkungan Pengembangan',
      description: 'Alat bantu kontrol versi, styling antarmuka, dan integrasi API.',
      skills: ['Git', 'GitHub', 'REST APIs', 'Tailwind CSS', 'Postman'],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* About Header */}
      <main className="flex-1">
        <SectionContainer className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4 text-balance">
              Tentang Saya
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Profil latar belakang, fokus akademik di bidang Sistem Informasi, dan keahlian teknis yang ditekuni.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Narrative & Photo */}
        <SectionContainer className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              className="md:col-span-5"
            >
              <div className="overflow-hidden rounded-2xl shadow-sm border border-border group">
                <Image
                  src="/Profile 2.jpeg"
                  alt="Foto profil Farrell Putra Prayoga"
                  width={500}
                  height={600}
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Narrative Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed"
            >
              <h2 className="text-2xl font-bold text-foreground">
                Latar Belakang Akademik & Minat
              </h2>
              <p>
                Saya adalah mahasiswa program studi Sistem Informasi yang berfokus pada integrasi antara teknologi komputasi dan kebutuhan proses bisnis. Melalui perkuliahan dan proyek mandiri, saya mempelajari bagaimana merancang sistem informasi yang efisien, mulai dari analisis kebutuhan, perancangan skema data, hingga implementasi kode program.
              </p>
              <p>
                Minat utama saya berpusat pada pengembangan aplikasi berbasis web menggunakan ekosistem Python dan JavaScript/TypeScript. Saya terbiasa membangun antarmuka web yang terstruktur serta menghubungkannya dengan API backend dan database relasional.
              </p>
              <p>
                Saya percaya bahwa sistem perangkat lunak yang andal bermula dari logika yang jelas, struktur data yang solid, dan penulisan kode yang mudah dipelihara.
              </p>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Competencies Section */}
        <SectionContainer className="py-16 border-t border-border/70">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="max-w-2xl mb-10"
          >
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">
              Keahlian Teknis
            </h2>
            <p className="text-muted-foreground">
              Teknologi dan perangkat lunak yang telah digunakan dalam tugas perkuliahan maupun pengembangan proyek.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalCompetencies.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {group.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground font-medium border border-border hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}
