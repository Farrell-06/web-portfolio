'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Image from 'next/image'
import Link from 'next/link'
import { BarChart3, Cpu, Globe, GraduationCap, TrendingUp, MapPin, ArrowRight } from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function About() {
  const technicalCompetencies = [
    {
      category: 'Data Analytics',
      badge: 'Fokus Utama',
      icon: BarChart3,
      description: 'Pemrosesan data mentah, eksplorasi pola statistik, dan pembuatan visualisasi data analitis.',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'MySQL',
        'Matplotlib',
        'Seaborn',
        'Jupyter Notebook',
        'Data Preprocessing',
        'Exploratory Data Analysis',
        'Data Visualization',
      ],
    },
    {
      category: 'Machine Learning',
      badge: 'Spesialisasi Pendukung',
      icon: Cpu,
      description: 'Pembangunan model klasifikasi data terpandu, seleksi fitur, dan evaluasi metrik akurasi.',
      skills: ['Scikit-learn', 'Classification', 'Support Vector Machine (SVM)', 'Model Evaluation'],
    },
    {
      category: 'Web Development',
      badge: 'Kemampuan Tambahan',
      icon: Globe,
      description: 'Pengembangan arsitektur website dinamis dan integrasi sistem basis data relasional.',
      skills: ['Python', 'Flask', 'PHP', 'CSS', 'MySQL'],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* About Header */}
        <SectionContainer className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-3">
              <span>Profil Personal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Tentang Saya
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Mahasiswa S1 Sistem Informasi Universitas Mercu Buana dengan fokus utama pada Data Analytics dan Machine Learning.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Narrative & Photo */}
        <SectionContainer className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Image & Quick Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              className="md:col-span-5 space-y-4"
            >
              <div className="overflow-hidden rounded-2xl shadow-xs border border-border group relative">
                <Image
                  src="/Profile 2.jpeg"
                  alt="Foto profil Farrell Putra Prayoga"
                  width={500}
                  height={600}
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-border bg-card">
                  <span className="text-xs text-muted-foreground block mb-0.5">Institusi</span>
                  <p className="text-xs font-bold text-foreground">Univ. Mercu Buana</p>
                  <span className="text-[11px] text-muted-foreground">Sistem Informasi</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border bg-card">
                  <span className="text-xs text-muted-foreground block mb-0.5">Prestasi Akademik</span>
                  <p className="text-base font-bold text-primary font-mono">IPK 3.82</p>
                  <span className="text-[11px] text-muted-foreground">Skala 4.00</span>
                </div>
              </div>
            </motion.div>

            {/* Narrative Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              <h2 className="text-2xl font-bold text-foreground">
                Latar Belakang Akademik & Orientasi Karir
              </h2>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-4">
                <p className="text-foreground font-medium">
                  Saya Farrell Putra Prayoga, mahasiswa S1 Sistem Informasi di Universitas Mercu Buana (IPK 3.82) yang menempatkan Data Analytics sebagai fokus keahlian utama, didukung penguasaan Machine Learning dan Web Development.
                </p>
                <p>
                  Perjalanan analitik saya berakar dari pemahaman tentang bagaimana data kuantitatif diterjemahkan menjadi wawasan yang terukur bagi proses bisnis organisasi. Melalui perkuliahan Sistem Informasi dan pengerjaan proyek akademik, saya mendalami perancangan skema basis data relasional (MySQL), manipulasi dataset menggunakan Python (Pandas, NumPy), hingga penyusunan visualisasi analitis (Matplotlib, Seaborn).
                </p>
                <p>
                  Pada domain Machine Learning terapan, saya mengimplementasikan model klasifikasi Support Vector Machine (SVM) pada studi kasus risiko penyakit jantung dengan tingkat recall 94.00% pada kelas positif. Didukung pemahaman arsitektur web (PHP dan Python Flask), saya mampu merancang alur integrasi data dari antarmuka pengguna hingga lapisan basis data secara utuh.
                </p>
                <p>
                  Saat ini, saya aktif memperkuat kompetensi melalui program kredensial resmi (RevoU Data Analytics dan IBM SkillsBuild) serta terbuka untuk peluang magang maupun kolaborasi proyek analitik data yang membutuhkan ketelitian analitis dan integritas metodologi.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>2024 - Sekarang</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>IPK 3.82 / 4.00</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bekasi, Indonesia</span>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Competencies Section */}
        <SectionContainer className="py-16 border-t border-border/70 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="max-w-2xl mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
              Keahlian Teknis
            </h2>
            <p className="text-sm text-muted-foreground">
              Pengelompokan keahlian teknis terverifikasi yang digunakan dalam analisis data dan implementasi proyek.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalCompetencies.map((group, index) => {
              const Icon = group.icon
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-xs transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {group.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1.5">
                      {group.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </SectionContainer>

        {/* CTA to Skills */}
        <SectionContainer className="py-16 border-t border-border/70 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Eksplorasi Keahlian & Spesialisasi
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Pelajari rincian kompetensi teknis di bidang Data Analytics, Machine Learning terapan, dan Web Development beserta keterhubungannya pada proyek nyata.
            </p>
            <div className="pt-2">
              <Link
                href="/skills"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>Buka Halaman Skills</span>
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
