'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Image from 'next/image'
import Link from 'next/link'
import {
  FileCheck2,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Maximize2,
  X,
  ExternalLink,
  Copy,
  Check,
  Award,
} from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

interface CertificateItem {
  title: string
  issuer: string
  credentialId: string
  issueDate: string
  courseType: string
  domain: string
  image: string
  aspectRatio: string
  description: string
  signatory?: string
  skillsGained: string[]
}

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCert])

  const copyCredentialId = (id: string) => {
    navigator.clipboard.writeText(id)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Verified Certificates with Physical / Image Proof
  const verifiedCertificates: CertificateItem[] = [
    {
      title: 'Intro to Data Analytics',
      issuer: 'RevoU (PT Revolusi Cita Edukasi)',
      credentialId: 'DAMC-240826-01-1-00060',
      issueDate: '28 Agustus 2026',
      signatory: 'Matteo Sutto (CEO & Co-founder)',
      courseType: '1-Week Certified Online Course',
      domain: 'Data Analytics Foundations',
      image: '/certificate-revou.jpg',
      aspectRatio: 'aspect-[1.414/1]',
      description:
        'Sertifikat kelulusan resmi program intensif Data Analytics yang diselenggarakan oleh RevoU, mencakup pemahaman siklus analisis data bisnis, perumusan hipotesis analitis, pembersihan dataset mentah, serta penyusunan insight visual untuk pengambilan keputusan.',
      skillsGained: [
        'Business Data Analytics Lifecycle',
        'Hypothesis Formulation & Problem Solving',
        'Data Cleaning & Quality Preparation',
        'Exploratory Pattern Discovery',
        'Insight Presentation & Reporting',
      ],
    },
    {
      title: 'Getting Started with Data (Earn a credential!)',
      issuer: 'IBM SkillsBuild',
      credentialId: 'PLAN-14F2691E3A32',
      issueDate: '25 Agustus 2026 (GMT)',
      signatory: 'IBM Your Learning Builder System of Record',
      courseType: 'IBM SkillsBuild Completion Certificate',
      domain: 'Data Ecosystem & Principles',
      image: '/certificate-ibm-data.jpg',
      aspectRatio: 'aspect-[3.59/1]',
      description:
        'Sertifikat penyelesaian kredensial resmi dari IBM SkillsBuild yang memvalidasi pemahaman fundamental seputar arsitektur ekosistem data modern, tipe dan struktur data enterprise, etika tata kelola data, serta pemanfaatan data untuk keputusan strategis.',
      skillsGained: [
        'Modern Data Ecosystem Architecture',
        'Structured & Unstructured Data Principles',
        'Data Governance, Privacy & Ethics',
        'Data-Driven Business Decision Making',
        'Data Quality & Lifecycle Standards',
      ],
    },
    {
      title: 'Classifying Data Using IBM Granite',
      issuer: 'IBM SkillsBuild',
      credentialId: 'ALM-COURSE_4058910',
      issueDate: '28 Agustus 2026 (GMT)',
      signatory: 'Adobe Learning Manager System of Record',
      courseType: 'IBM SkillsBuild Completion Certificate (1.5 Jam)',
      domain: 'Machine Learning & Classification',
      image: '/certificate-ibm-granite.jpg',
      aspectRatio: 'aspect-[3.59/1]',
      description:
        'Sertifikat kelulusan resmi dari IBM SkillsBuild yang memvalidasi penguasaan konsep klasifikasi data terpandu menggunakan kapabilitas model IBM Granite, alur kerja persiapan data analitis, serta evaluasi metrik akurasi klasifikasi.',
      skillsGained: [
        'Supervised Classification Workflows',
        'IBM Granite Model Capabilities',
        'Model Evaluation & Accuracy Metrics',
        'Categorical & Numerical Preprocessing',
        'Machine Learning Pattern Detection',
      ],
    },
    {
      title: 'Unleashing the Power of AI Agents',
      issuer: 'IBM SkillsBuild',
      credentialId: 'ALM-COURSE_3825456',
      issueDate: '29 Agustus 2026 (GMT)',
      signatory: 'Adobe Learning Manager System of Record',
      courseType: 'IBM SkillsBuild Completion Certificate (1.5 Jam)',
      domain: 'Applied Artificial Intelligence & Agents',
      image: '/certificate-ibm-ai-agents.jpg',
      aspectRatio: 'aspect-[3.59/1]',
      description:
        'Sertifikat kelulusan resmi dari IBM SkillsBuild yang memvalidasi pemahaman arsitektur agen kecerdasan buatan (Agentic AI), alur integrasi data terotomatisasi, serta pemanfaatan sistem otomasi cerdas untuk efisiensi pemrosesan data.',
      skillsGained: [
        'Agentic AI Concepts & Architecture',
        'Automated Data Processing Tasks',
        'Intelligent Workflow Automation',
        'Multi-Step Autonomous Reasoning',
        'Human-in-the-Loop Verification Standards',
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Kredensial & Sertifikasi Terverifikasi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Certifications
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Bukti autentik seluruh sertifikasi dan pelatihan profesional terverifikasi yang mengukuhkan penguasaan metodologi analisis data, pemodelan klasifikasi machine learning, dan kecerdasan buatan terapan.
            </p>
          </motion.div>
        </SectionContainer>

        {/* Verified Certificates Showcase */}
        <SectionContainer className="py-4">
          <div className="space-y-10">
            {verifiedCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: easeOutExpo }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-primary/25 bg-card shadow-xs relative overflow-hidden"
              >
                {/* Header Bar within Card */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-border/70">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-primary text-primary-foreground">
                      Bukti Fisik Terlampir
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                      {cert.courseType}
                    </span>
                  </div>

                  {/* Credential ID with Copy Action */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyCredentialId(cert.credentialId)}
                      className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label={`Salin nomor kredensial sertifikat ${cert.title}`}
                      title="Salin ID Kredensial"
                    >
                      {copiedId === cert.credentialId ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Certificate Image Preview */}
                  <div className="lg:col-span-5 space-y-3">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedCert(cert)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setSelectedCert(cert)
                        }
                      }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-muted/40 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center p-2"
                      aria-label={`Klik untuk memperbesar tampilan sertifikat ${cert.title}`}
                    >
                      <div className={`relative w-full ${cert.aspectRatio} min-h-[160px] flex items-center justify-center`}>
                        <Image
                          src={cert.image}
                          alt={`Sertifikat ${cert.title} Farrell Putra Prayoga`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                          priority={index === 0}
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-foreground/15 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-background/95 text-foreground text-xs font-semibold shadow-md backdrop-blur-xs border border-border">
                          <Maximize2 className="w-4 h-4 text-primary" />
                          <span>Perbesar Tampilan Sertifikat</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        <span>Dokumen Terautentikasi</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="text-primary hover:underline font-medium flex items-center gap-1 min-h-[44px] px-1"
                      >
                        <span>Buka Ukuran Penuh</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Certificate Metadata & Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-muted-foreground">
                        <span className="font-semibold text-primary flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {cert.issuer}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {cert.issueDate}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-1">
                        {cert.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-primary mb-3">
                        {cert.domain}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Metadata Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl border border-border bg-muted/30 text-xs">
                      <div>
                        <span className="text-muted-foreground block mb-0.5">Penerima Sertifikat</span>
                        <p className="font-bold text-foreground">Farrell Putra Prayoga</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-0.5">Penandatangan / Sistem Validasi</span>
                        <p className="font-semibold text-foreground">{cert.signatory || cert.issuer}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-0.5">Format Pelatihan</span>
                        <p className="font-medium text-foreground">{cert.courseType}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-0.5">Nomor Sertifikat / Course ID</span>
                        <p className="font-mono font-medium text-primary break-all">
                          {cert.credentialId}
                        </p>
                      </div>
                    </div>

                    {/* Skills Covered */}
                    <div className="pt-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                        Kompetensi yang Divalidasi:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cert.skillsGained.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground border border-border font-medium flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* CTA to Contact */}
        <SectionContainer className="py-20 border-t border-border/70 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Tertarik Membahas Kualifikasi Lebih Lanjut?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Saya selalu terbuka untuk berdiskusi seputar metodologi analisis data, portofolio proyek machine learning, maupun peluang magang di bidang Data Analytics.
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

      {/* Lightbox Modal for Certificate Full Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Tampilan penuh sertifikat ${selectedCert.title}`}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-black/40 hover:bg-black/60 border border-white/20"
                aria-label="Tutup tampilan penuh sertifikat"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full aspect-[1.414/1] max-h-[75vh] overflow-hidden rounded-xl border border-white/20 bg-card/95 shadow-2xl p-4 flex items-center justify-center">
                <Image
                  src={selectedCert.image}
                  alt={`Sertifikat ${selectedCert.title} Farrell Putra Prayoga Tampilan Penuh`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 w-full text-xs text-white/90 px-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">{selectedCert.issuer} ({selectedCert.title})</span>
                  <span className="text-white/60 font-mono">ID: {selectedCert.credentialId}</span>
                </div>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold flex items-center gap-1 min-h-[44px] px-2"
                >
                  <span>Buka di Tab Baru</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
