'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Github,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Database,
  BarChart3,
  Cpu,
  Globe,
  FileCheck2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  Layers,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ProjectCard, ProjectCardProps } from '@/components/project-card'
import { ContactForm } from '@/components/contact-form'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function Home() {
  // Skills categorized strictly as requested
  const skillCategories = [
    {
      title: 'Data Analytics',
      icon: BarChart3,
      badge: 'Fokus Utama',
      description:
        'Pemrosesan data mentah, eksplorasi pola, serta penyusunan visualisasi data untuk menghasilkan temuan yang terukur.',
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
      title: 'Machine Learning',
      icon: Cpu,
      badge: 'Spesialisasi Pendukung',
      description:
        'Pembangunan dan evaluasi algoritma klasifikasi data untuk pengenalan pola prediktif berbasis dataset empiris.',
      skills: [
        'Scikit-learn',
        'Classification',
        'Support Vector Machine (SVM)',
        'Model Evaluation',
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      badge: 'Kemampuan Tambahan',
      description:
        'Pengembangan aplikasi web statis dan dinamis, implementasi backend modular, serta integrasi basis data.',
      skills: ['Python', 'Flask', 'PHP', 'CSS', 'MySQL'],
    },
  ]

  // Featured Projects prioritizing Data Analytics first
  const featuredProjects: ProjectCardProps[] = [
    {
      title: 'Heart Disease Classification Using Machine Learning',
      projectType: 'Academic Group Project',
      year: '2026',
      description:
        'Pembangunan model klasifikasi biner untuk memprediksi risiko penyakit jantung menggunakan dataset rekam medis pasien dengan algoritma Support Vector Machine.',
      tags: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Jupyter Notebook',
      ],
      githubUrl: 'https://github.com/Farrell-06',
      metricsSummary: [
        { label: 'Akurasi Uji', value: '83.61%' },
        { label: 'Recall Positif', value: '94.00%' },
        { label: 'Data Rekam', value: '303 Pasien' },
      ],
      details: {
        objective:
          'Membangun model klasifikasi biner yang mampu mengidentifikasi kemungkinan indikasi penyakit jantung pada pasien berdasarkan 13 parameter klinis kesehatan.',
        datasetOrScope: 'Dataset Cleveland Heart Disease (303 catatan pasien)',
        modelOrArchitecture: 'Support Vector Machine (SVM) dengan RBF Kernel',
        metrics: [
          { label: 'Test Accuracy', value: '83.61%' },
          { label: 'Recall (Positive Class)', value: '94.00%' },
          { label: 'Total Sample', value: '303 Data' },
        ],
        workPerformed: [
          'Pembersihan data mentah dan eliminasi duplikasi data',
          'Exploratory Data Analysis (EDA) dan analisis korelasi antar variabel klinis',
          'Feature scaling dan standarisasi fitur numerik sebelum pelatihan',
          'Pelatihan model klasifikasi Support Vector Machine dengan RBF Kernel',
          'Evaluasi performa menggunakan Confusion Matrix, Precision, Recall, dan Akurasi',
        ],
        academicNote:
          'Proyek ini merupakan proyek akademik kelompok untuk studi klasifikasi machine learning. Model ini bukan merupakan instrumen diagnostik medis klinis resmi.',
      },
    },
    {
      title: 'SONARA FEST: Dynamic Concert Website',
      projectType: 'Individual Academic Project',
      year: '2025',
      description:
        'Website dinamis informasi festival musik yang dikembangkan secara mandiri, berfokus pada fungsionalitas dinamis jadwal konser dan integrasi basis data relasional.',
      tags: ['PHP', 'MySQL', 'CSS', 'Database Integration'],
      githubUrl: 'https://github.com/Farrell-06',
      image: (
        <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-card via-muted/30 to-card">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5 text-primary">
              <Activity className="w-3.5 h-3.5" />
              Dynamic Web
            </span>
            <span>2025</span>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Fokus Teknis</p>
            <p className="text-sm font-semibold text-foreground">Relational DB & Dynamic Content</p>
          </div>
          <div className="p-2.5 rounded bg-background/80 border border-border/80 text-xs text-muted-foreground">
            Sistem manajemen acara konser & jadwal artis terintegrasi MySQL
          </div>
        </div>
      ),
      details: {
        objective:
          'Mengembangkan website acara konser musik yang dinamis untuk menampilkan informasi jadwal penampil, rincian tiket, dan pembaruan acara secara real-time dari basis data.',
        datasetOrScope: 'Sistem web dinamis dan skema basis data acara konser',
        modelOrArchitecture: 'PHP Native + MySQL Relational Database Architecture',
        workPerformed: [
          'Perancangan skema relasional tabel MySQL untuk musisi, jadwal, dan panggung',
          'Implementasi antarmuka dinamis dan render data menggunakan PHP dan CSS',
          'Pengujian query basis data dan penanganan validasi input',
        ],
        academicNote:
          'Proyek akademik mandiri yang menunjukkan kapabilitas perancangan sistem web dinamis dan manipulasi basis data SQL.',
      },
    },
    {
      title: 'PT. Energi Nusantara Raya: Company Profile Website',
      projectType: 'Individual Academic Project',
      year: '2025',
      description:
        'Website profil perusahaan yang dikembangkan secara mandiri menggunakan Python dan Flask, menekankan struktur web modular, backend routing, dan pengujian sistem.',
      tags: ['Python', 'Flask', 'HTML5', 'CSS3', 'Jinja2'],
      githubUrl: 'https://github.com/Farrell-06',
      image: (
        <div className="relative w-full h-full">
          <Image
            src="/companyprofile.png"
            alt="Tangkapan layar proyek PT Energi Nusantara Raya Flask"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ),
      details: {
        objective:
          'Membangun aplikasi web profil perusahaan yang terstruktur, cepat diakses, dan memiliki manajemen routing yang rapi menggunakan ekosistem Python Flask.',
        datasetOrScope: 'Arsitektur web profil korporat dan katalog layanan',
        modelOrArchitecture: 'Python Flask Microframework + Jinja2 Templating Engine',
        workPerformed: [
          'Penyusunan arsitektur modular blueprint dan routing server-side Flask',
          'Pengembangan template terstruktur menggunakan Jinja2 dan styling kustom CSS',
          'Manajemen aset statis, penanganan response HTTP, dan pengujian fungsionalitas halaman',
        ],
        academicNote:
          'Proyek akademik mandiri untuk mendemonstrasikan penguasaan pengembangan backend ringan berbasis Python.',
      },
    },
  ]

  // Certifications verified list
  const certifications = [
    {
      title: 'Intro to Data Analytics',
      issuer: 'RevoU',
      period: 'Agustus 2026',
      domain: 'Data Analytics Foundations',
      description:
        'Pemahaman dasar analitik data, siklus analisis data bisnis, perumusan hipotesis, dan pembersihan dataset awal.',
    },
    {
      title: 'Getting Started with Data',
      issuer: 'IBM SkillsBuild',
      period: 'Agustus 2026',
      domain: 'Data Ecosystem & Principles',
      description:
        'Konsep fundamental ekosistem data, tipe data, etika data, serta peran analisis data dalam organisasi modern.',
    },
    {
      title: 'Classifying Data Using IBM Granite',
      issuer: 'IBM SkillsBuild',
      period: 'Agustus 2026',
      domain: 'Machine Learning & Classification',
      description:
        'Penerapan model klasifikasi data, evaluasi hasil klasifikasi, serta pemahaman alur kerja model machine learning terpandu.',
    },
    {
      title: 'Unleashing the Power of AI Agents',
      issuer: 'IBM SkillsBuild',
      period: 'Agustus 2026',
      domain: 'Applied Artificial Intelligence',
      description:
        'Studi kapabilitas agentic AI, integrasi data terotomatisasi, serta pemanfaatan otomasi cerdas untuk efisiensi sistem.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="home" className="pt-16 pb-20 md:pt-24 md:pb-32 border-b border-border/60">
          <SectionContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="lg:col-span-7 space-y-6 order-2 lg:order-1"
              >
                {/* Career Focus Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: easeOutExpo }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-xs font-semibold text-primary"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Primary Career Focus: Data Analytics</span>
                </motion.div>

                {/* Hero Headline & Title */}
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.12, ease: easeOutExpo }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
                  >
                    Hi, I&apos;m Farrell Putra Prayoga
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.18, ease: easeOutExpo }}
                    className="text-xl sm:text-2xl font-bold text-primary font-mono tracking-tight"
                  >
                    Aspiring Data Analyst
                  </motion.p>
                </div>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.24, ease: easeOutExpo }}
                  className="text-base sm:text-lg text-foreground/90 font-medium leading-relaxed"
                >
                  An Information Systems student passionate about turning data into meaningful insights through analytics, machine learning, and technology.
                </motion.p>

                {/* Indonesian Context Narrative */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  Mahasiswa Sistem Informasi Universitas Mercu Buana yang berfokus mengeksplorasi data, melakukan exploratory data analysis (EDA), membangun model klasifikasi machine learning, serta mengembangkan aplikasi web pendukung.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.36, ease: easeOutExpo }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
                  >
                    <span>Explore My Projects</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-border text-foreground font-medium hover:bg-muted active:scale-[0.98] transition-all"
                  >
                    <span>Contact Me</span>
                  </a>
                </motion.div>

                {/* Metadata Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.42, ease: easeOutExpo }}
                  className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-border/70 text-xs text-muted-foreground"
                >
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>S1 Sistem Informasi, Universitas Mercu Buana</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>IPK: 3.82 / 4.00</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Bekasi, Indonesia</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Profile & Visual Spotlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
                className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
              >
                <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-md bg-card">
                  <Image
                    src="/Profile.jpg"
                    alt="Farrell Putra Prayoga: Aspiring Data Analyst"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-card/90 backdrop-blur-xs border border-border/80">
                    <p className="text-xs font-semibold text-foreground">Farrell Putra Prayoga</p>
                    <p className="text-[11px] text-primary font-mono">Data Analytics & Machine Learning</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionContainer>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 md:py-28 border-b border-border/60">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Profil & Latar Belakang
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Gambaran lengkap fokus akademik, cara pandang analitis terhadap data, dan pengalaman praktis yang ditekuni.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Profile Image & Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-xs group">
                  <div className="relative w-full h-72 sm:h-80">
                    <Image
                      src="/Profile 2.jpeg"
                      alt="Farrell Putra Prayoga"
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Structured Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <span className="text-xs text-muted-foreground block mb-1">Status Akademik</span>
                    <p className="text-sm font-bold text-foreground">Mahasiswa Aktif S1</p>
                    <span className="text-xs text-muted-foreground">Angkatan 2024</span>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <span className="text-xs text-muted-foreground block mb-1">Indeks Prestasi Kumulatif</span>
                    <p className="text-lg font-bold text-primary font-mono">3.82 / 4.00</p>
                    <span className="text-xs text-muted-foreground">Skala 4.00</span>
                  </div>
                </div>
              </motion.div>

              {/* Source of Truth Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p className="text-foreground font-medium">
                    Halo! Saya Farrell Putra Prayoga, mahasiswa S1 Sistem Informasi di Universitas Mercu Buana yang memiliki ketertarikan utama pada Data Analytics dan Machine Learning. Saya tertarik mengeksplorasi bagaimana data dapat diolah, dianalisis, dan dimanfaatkan untuk menghasilkan insight yang mendukung pemecahan masalah serta pengambilan keputusan.
                  </p>
                  <p>
                    Melalui berbagai proyek akademik, saya telah mempelajari proses data preprocessing, exploratory data analysis (EDA), visualisasi data, serta pengembangan model klasifikasi menggunakan Python dan library pendukung. Saya juga memiliki pengalaman dalam pengembangan website statis dan dinamis sebagai bagian dari kemampuan saya di bidang teknologi.
                  </p>
                  <p>
                    Saya senantiasa berusaha mengembangkan kemampuan teknis, berpikir analitis, dan mempelajari teknologi baru melalui proyek serta pengalaman praktis.
                  </p>
                </div>

                {/* Strategic Specialization Alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl border border-primary/30 bg-primary/5">
                    <div className="w-7 h-7 rounded-md bg-primary/20 text-primary flex items-center justify-center mb-2">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Primary Focus</h3>
                    <p className="text-xs text-muted-foreground">Data Analytics, EDA, Visualisasi & Wawasan Keputusan</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <div className="w-7 h-7 rounded-md bg-muted text-foreground flex items-center justify-center mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Supporting</h3>
                    <p className="text-xs text-muted-foreground">Machine Learning, Klasifikasi & Model Evaluation</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <div className="w-7 h-7 rounded-md bg-muted text-foreground flex items-center justify-center mb-2">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Additional</h3>
                    <p className="text-xs text-muted-foreground">Web Development, Flask, PHP, SQL & Basis Data</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionContainer>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 md:py-28 border-b border-border/60">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Kemampuan & Teknologi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Technical Skills
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Keahlian teknis yang digunakan secara nyata dalam proyek akademik, pengolahan data analitis, dan pengembangan aplikasi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat, index) => {
                const IconComponent = cat.icon
                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                    className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                          {cat.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/70">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2.5">
                        Daftar Tool & Konsep:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground font-medium border border-border hover:border-primary/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </SectionContainer>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="py-20 md:py-28 border-b border-border/60">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Portofolio Proyek
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Dokumentasi proyek akademik dengan prioritas utama pada pemodelan Data Analytics & Machine Learning, diikuti pengembangan website dinamis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: easeOutExpo }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 md:py-28 border-b border-border/60">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Riwayat Akademik
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Education
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Pendidikan formal yang membangun fondasi analisis sistem, perancangan basis data, dan penalaran komputasional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="max-w-3xl"
            >
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                      2024 - Sekarang
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground pt-1">
                      Universitas Mercu Buana
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-muted-foreground">
                      S1 Sistem Informasi (Bachelor of Information Systems)
                    </p>
                  </div>

                  {/* Tastefully highlighted GPA badge */}
                  <div className="self-start sm:self-auto p-3 sm:px-4 sm:py-2.5 rounded-xl bg-muted/60 border border-border text-center sm:text-right">
                    <span className="text-[11px] text-muted-foreground block font-medium">Indeks Prestasi Kumulatif</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary font-mono">
                      3.82 <span className="text-xs font-normal text-muted-foreground">/ 4.00</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/70">
                  Fokus pembelajaran meliputi analisis sistem informasi bisnis, perancangan skema basis data relasional, pemrograman komputasional, serta penerapan analitik data untuk mendukung pemecahan masalah operasional dan strategis.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded bg-muted text-foreground border border-border">
                    Analisis & Perancangan Sistem
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-muted text-foreground border border-border">
                    Manajemen Basis Data Relasional
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-muted text-foreground border border-border">
                    Algoritma & Pemrograman
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-muted text-foreground border border-border">
                    Statistika & Probabilitas
                  </span>
                </div>
              </div>
            </motion.div>
          </SectionContainer>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-20 md:py-28 border-b border-border/60">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Sertifikasi & Pelatihan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Certifications
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Program sertifikasi terverifikasi untuk memperdalam pemahaman praktis di bidang analitik data dan kecerdasan buatan.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {cert.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1.5">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-primary mb-3">
                      {cert.domain}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-primary" />
                      <span>Sertifikat Terverifikasi</span>
                    </span>
                    <span className="text-[11px] text-muted-foreground/80 font-mono">
                      Status: Lengkap
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-28">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Terhubung & Diskusi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Contact Me
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Terbuka untuk peluang magang, kolaborasi proyek data analytics, serta diskusi teknis seputar sistem informasi.
              </p>
            </motion.div>

            {/* Quick Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
            >
              <a
                href="mailto:farrell.putra106@gmail.com"
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-xs transition-all flex flex-col items-center text-center group min-h-[44px]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase mb-1">Email</span>
                <span className="text-xs sm:text-sm font-medium text-foreground break-all">
                  farrell.putra106@gmail.com
                </span>
              </a>

              <div className="p-5 rounded-xl border border-border bg-card flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase mb-1">Lokasi</span>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Bekasi, Indonesia
                </span>
              </div>

              <a
                href="https://github.com/Farrell-06"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-xs transition-all flex flex-col items-center text-center group min-h-[44px]"
                aria-label="Profil GitHub Farrell-06"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase mb-1">GitHub</span>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  github.com/Farrell-06
                </span>
              </a>
            </motion.div>

            {/* Direct Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs"
            >
              <div className="mb-6 text-center space-y-1">
                <h3 className="text-lg font-bold text-foreground">Formulir Kontak</h3>
                <p className="text-xs text-muted-foreground">
                  Kirimkan pesan Anda secara langsung melalui format email yang siap dikirim.
                </p>
              </div>
              <ContactForm />
            </motion.div>
          </SectionContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}
