'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Link from 'next/link'
import {
  GraduationCap,
  TrendingUp,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function EducationPage() {
  const academicHighlights = [
    {
      title: 'Indeks Prestasi Kumulatif',
      value: '3.82',
      scale: 'Skala 4.00',
      description: 'Capaian akademik konsisten yang mencerminkan dedikasi dan pemahaman mendalam pada materi perkuliahan.',
    },
    {
      title: 'Status Mahasiswa',
      value: 'Aktif S1',
      scale: 'Angkatan 2024',
      description: 'Menempuh program sarjana pada Program Studi Sistem Informasi di Universitas Mercu Buana.',
    },
    {
      title: 'Fokus Keilmuan',
      value: 'Data & Sistem',
      scale: 'Informasi Bisnis',
      description: 'Mengintegrasikan kemampuan analisis data komputasional dengan kebutuhan sistem informasi organisasi.',
    },
  ]

  const coreCurriculum = [
    {
      subject: 'Manajemen & Perancangan Basis Data',
      domain: 'Data Architecture',
      description:
        'Pemodelan Entity Relationship Diagram (ERD), normalisasi tabel relasional, optimasi query SQL, serta administrasi sistem MySQL.',
    },
    {
      subject: 'Analisis & Perancangan Sistem Informasi',
      domain: 'Systems Analysis',
      description:
        'Pemetaan proses bisnis, pemodelan sistem menggunakan UML, perancangan arsitektur perangkat lunak, dan analisis kebutuhan pengguna.',
    },
    {
      subject: 'Algoritma & Pemrograman Komputasional',
      domain: 'Computer Science',
      description:
        'Penyusunan logika terstruktur, efisiensi komputasi, struktur data, dan implementasi algoritma menggunakan Python.',
    },
    {
      subject: 'Statistika & Probabilitas Bisnis',
      domain: 'Quantitative Analysis',
      description:
        'Pengukuran tendensi sentral, analisis varians, pengujian hipotesis, dan pemanfaatan konsep probabilitas untuk penarikan kesimpulan data.',
    },
    {
      subject: 'Rekayasa Perangkat Lunak & Web',
      domain: 'Software Engineering',
      description:
        'Siklus hidup pengembangan perangkat lunak (SDLC), penerapan arsitektur modular, dan pengujian fungsionalitas sistem.',
    },
    {
      subject: 'Etika & Tata Kelola Teknologi Informasi',
      domain: 'Governance & Ethics',
      description:
        'Prinsip kepatuhan regulasi data, etika pengolahan informasi privasi, dan standar tata kelola sistem enterprise.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
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
              <span>Riwayat Pendidikan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Education
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Jejak pendidikan formal yang membangun dasar pemikiran analitis, perancangan sistem informasi, dan pemodelan data.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Main University Card */}
        <SectionContainer className="py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="p-6 sm:p-10 rounded-2xl border border-border bg-card shadow-xs relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-border/70">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    2024 - Sekarang
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    Bekasi, Indonesia
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  Universitas Mercu Buana
                </h2>
                <p className="text-base sm:text-lg font-medium text-primary">
                  S1 Sistem Informasi (Bachelor of Information Systems)
                </p>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  Fokus pembelajaran mengombinasikan pemahaman alur proses bisnis organisasi dengan implementasi teknologi komputasi, analitik data, dan perancangan basis data relasional.
                </p>
              </div>

              {/* IPK Spotlight */}
              <div className="p-5 rounded-2xl bg-muted/60 border border-border text-center lg:text-right shrink-0">
                <span className="text-xs text-muted-foreground block font-medium mb-1">
                  Indeks Prestasi Kumulatif
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-primary font-mono">
                  3.82
                </span>
                <span className="text-xs text-muted-foreground block mt-0.5">
                  dari skala maksimum 4.00
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              {academicHighlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 transition-colors"
                >
                  <span className="text-xs text-muted-foreground block mb-1">
                    {item.title}
                  </span>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl font-bold text-foreground font-mono">
                      {item.value}
                    </span>
                    <span className="text-xs text-primary font-medium">
                      {item.scale}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </SectionContainer>

        {/* Core Curriculum Section */}
        <SectionContainer className="py-16 border-t border-border/70 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-3xl mb-10"
          >
            <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs tracking-wider uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Bidang Studi & Kurikulum Inti</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              Mata Kuliah & Fokus Pembelajaran
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Materi akademik yang secara langsung menunjang kemampuan dalam membedah data, merancang skema relasional, dan menyusun solusi teknologi informasi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCurriculum.map((item, index) => (
              <motion.div
                key={item.subject}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: easeOutExpo }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      {item.domain}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {item.subject}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA to Certifications */}
        <SectionContainer className="py-20 border-t border-border/70 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Sertifikasi & Pelatihan Terverifikasi
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Selain pendidikan formal, saya juga memperkuat kompetensi teknis melalui sertifikasi profesional dari institusi seperti RevoU dan IBM SkillsBuild.
            </p>
            <div className="pt-2">
              <Link
                href="/certifications"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>Lihat Sertifikasi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}

