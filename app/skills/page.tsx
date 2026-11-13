'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Link from 'next/link'
import {
  BarChart3,
  Cpu,
  Globe,
  Database,
  LineChart,
  Code2,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Data Analytics',
      badge: 'Fokus Utama',
      icon: BarChart3,
      description:
        'Pemrosesan data mentah, eksplorasi pola statistik, serta perancangan visualisasi data untuk menghasilkan temuan dan rekomendasi berbasis data.',
      competencies: [
        {
          name: 'Python for Data Analysis',
          context: 'Data wrangling, scripting, dan manipulasi data terstruktur',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Pandas & NumPy',
          context: 'Operasi array berkecepatan tinggi dan data frame multi-dimensi',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'SQL & Relational DBMS',
          context: 'Query kompleks, aggregasi, dan integrasi basis data MySQL',
          project: { name: 'SONARA FEST', href: '/projects' },
        },
        {
          name: 'Matplotlib & Seaborn',
          context: 'Visualisasi distribusi, korelasi, dan presentasi visual insight',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Exploratory Data Analysis (EDA)',
          context: 'Pemeriksaan distribusi, outlier, serta hubungan antar variabel klinis',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Data Preprocessing',
          context: 'Handling missing values, normalisasi fitur, dan encoding data',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Jupyter Notebook',
          context: 'Dokumentasi workflow analitis, eksperimen, dan visualisasi interaktif',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
      ],
    },
    {
      title: 'Machine Learning',
      badge: 'Spesialisasi Pendukung',
      icon: Cpu,
      description:
        'Pembangunan dan evaluasi algoritma klasifikasi data untuk pengenalan pola prediktif berbasis dataset empiris.',
      competencies: [
        {
          name: 'Scikit-learn',
          context: 'Pipeline machine learning, pemisahan dataset, dan cross-validation',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Supervised Classification',
          context: 'Implementasi model klasifikasi biner dan multi-kelas',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Support Vector Machine (SVM)',
          context: 'Klasifikasi dengan kernel RBF untuk pemisahan data kompleks',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Model Evaluation Metrics',
          context: 'Confusion matrix, precision, recall (94.00%), f1-score, dan akurasi',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
        {
          name: 'Feature Scaling & Standardization',
          context: 'Standarisasi fitur numerik sebelum pelatihan model',
          project: { name: 'Heart Disease Classification', href: '/projects' },
        },
      ],
    },
    {
      title: 'Web Development',
      badge: 'Kemampuan Tambahan',
      icon: Globe,
      description:
        'Pengembangan aplikasi web statis dan dinamis, implementasi backend modular, serta integrasi sistem basis data.',
      competencies: [
        {
          name: 'Python Flask',
          context: 'Pengembangan backend modular, blueprint, dan REST routing',
          project: { name: 'PT. Energi Nusantara Raya', href: '/projects' },
        },
        {
          name: 'PHP & MySQL',
          context: 'Pembangunan web dinamis dan manajemen query basis data relasional',
          project: { name: 'SONARA FEST', href: '/projects' },
        },
        {
          name: 'HTML5 & CSS3',
          context: 'Struktur semantik dokumen web dan penyusunan tata letak responsif',
          project: { name: 'SONARA FEST & Flask Web', href: '/projects' },
        },
        {
          name: 'Jinja2 Templating',
          context: 'Render halaman dinamis dari arsitektur backend Python',
          project: { name: 'PT. Energi Nusantara Raya', href: '/projects' },
        },
      ],
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
              <span>Kemampuan & Spesialisasi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Technical Skills
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Daftar keahlian teknis yang dipelajari dan diterapkan secara nyata dalam pengolahan data, pemodelan klasifikasi, serta implementasi perangkat lunak.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Skill Categories Grid */}
        <SectionContainer className="py-4">
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: catIndex * 0.1, ease: easeOutExpo }}
                  className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/70">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                          {category.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/25 shrink-0">
                      {category.badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.competencies.map((comp) => (
                      <div
                        key={comp.name}
                        className="p-4 rounded-xl border border-border bg-muted/40 hover:bg-muted/70 hover:border-primary/40 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">
                            {comp.name}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                            {comp.context}
                          </p>
                        </div>
                        {comp.project && (
                          <div className="pt-2.5 border-t border-border/60">
                            <Link
                              href={comp.project.href}
                              className="text-[11px] font-medium text-primary hover:underline inline-flex items-center gap-1"
                            >
                              <span className="text-muted-foreground">Proyek:</span>
                              <span>{comp.project.name}</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </SectionContainer>

        {/* CTA Link to Projects */}
        <SectionContainer className="py-20 border-t border-border/70 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Lihat Penerapan Keahlian dalam Proyek
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Setiap keterampilan di atas diterapkan langsung dalam proyek analisis data empiris, klasifikasi medis, dan implementasi aplikasi web.
            </p>
            <div className="pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>Jelajahi Proyek</span>
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

