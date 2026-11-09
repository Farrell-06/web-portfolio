'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Link from 'next/link'
import {
  FileCheck2,
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'Intro to Data Analytics',
      issuer: 'RevoU',
      period: 'Agustus 2026',
      domain: 'Data Analytics Foundations',
      description:
        'Pemahaman dasar analitik data, siklus analisis data bisnis, perumusan hipotesis, dan pembersihan dataset awal.',
      topics: [
        'Business Data Analytics Lifecycle',
        'Hypothesis Formulation',
        'Data Cleaning & Quality Check',
        'Insight Presentation',
      ],
    },
    {
      title: 'Getting Started with Data',
      issuer: 'IBM SkillsBuild',
      period: 'Agustus 2026',
      domain: 'Data Ecosystem & Principles',
      description:
        'Konsep fundamental ekosistem data, tipe data, etika data, serta peran analisis data dalam organisasi modern.',
      topics: [
        'Data Ecosystem Architecture',
        'Data Types & Structures',
        'Data Governance & Ethics',
        'Data-Driven Decision Making',
      ],
    },
    {
      title: 'Classifying Data Using IBM Granite',
      issuer: 'IBM SkillsBuild',
      period: 'Agustus 2026',
      domain: 'Machine Learning & Classification',
      description:
        'Penerapan model klasifikasi data, evaluasi hasil klasifikasi, serta pemahaman alur kerja model machine learning terpandu.',
      topics: [
        'Supervised Classification Workflows',
        'IBM Granite Model Capabilities',
        'Model Evaluation & Accuracy Metrics',
        'Categorical & Numerical Preprocessing',
      ],
    },
    {
      title: 'Unleashing the Power of AI Agents',
      issuer: 'IBM SkillsBuild',
      period: 'Agustus 2026',
      domain: 'Applied Artificial Intelligence',
      description:
        'Studi kapabilitas agentic AI, integrasi data terotomatisasi, serta pemanfaatan otomasi cerdas untuk efisiensi sistem.',
      topics: [
        'Agentic AI Concepts & Architecture',
        'Automated Data Processing Tasks',
        'Intelligent Workflow Automation',
        'Human-in-the-Loop Verification',
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
              <span>Sertifikasi Profesional</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Certifications
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Daftar sertifikat dan pelatihan terverifikasi yang mengukuhkan kompetensi di bidang analitik data dan kecerdasan buatan terapan.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Certifications Grid */}
        <SectionContainer className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: easeOutExpo }}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {cert.period}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-1.5">
                    {cert.title}
                  </h2>
                  <p className="text-xs font-semibold text-primary mb-3">
                    {cert.domain}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border/70">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                      Materi Inti yang Dikuasai:
                    </span>
                    <ul className="space-y-1.5">
                      {cert.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Sertifikat Terverifikasi</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border font-mono">
                    Status: Selesai
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA to Contact */}
        <SectionContainer className="py-20 border-t border-border/70 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Ingin Mengetahui Lebih Banyak?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Saya selalu terbuka untuk membahas rincian sertifikasi, portofolio proyek, serta kesempatan magang atau kolaborasi di bidang Data Analytics.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>Hubungi Saya</span>
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

