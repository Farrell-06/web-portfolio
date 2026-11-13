'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  BarChart3,
  Cpu,
  Globe,
  ArrowRight,
  TrendingUp,
  MapPin,
  FolderKanban,
  BookOpen,
  ShieldCheck,
  Mail,
  Activity,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ProjectCard, ProjectCardProps } from '@/components/project-card'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function Home() {
  // Navigation sections directory
  const portfolioPages = [
    {
      title: 'Tentang Saya',
      href: '/about',
      icon: GraduationCap,
      badge: 'Profil Personal',
      description:
        'Latar belakang akademik, cara pandang analitis terhadap data kuantitatif, dan orientasi karir di bidang data.',
      actionText: 'Buka Profil Lengkap',
    },
    {
      title: 'Keahlian Teknis',
      href: '/skills',
      icon: BarChart3,
      badge: 'Spesialisasi',
      description:
        'Penguasaan Data Analytics (Python, SQL, Pandas, EDA), Machine Learning terapan, dan Web Development.',
      actionText: 'Lihat Daftar Keahlian',
    },
    {
      title: 'Koleksi Proyek',
      href: '/projects',
      icon: FolderKanban,
      badge: 'Implementasi Nyata',
      description:
        'Dokumentasi proyek klasifikasi machine learning, sistem web dinamis PHP MySQL, dan aplikasi modular Flask.',
      actionText: 'Jelajahi Seluruh Proyek',
    },
    {
      title: 'Riwayat Pendidikan',
      href: '/education',
      icon: BookOpen,
      badge: 'Akademik',
      description:
        'Program sarjana S1 Sistem Informasi di Universitas Mercu Buana dengan IPK 3.82 dan ringkasan kurikulum inti.',
      actionText: 'Lihat Riwayat Studi',
    },
    {
      title: 'Sertifikasi Terverifikasi',
      href: '/certifications',
      icon: ShieldCheck,
      badge: 'Kredensial Resmi',
      description:
        'Bukti fisik sertifikat kelulusan dari RevoU Data Analytics dan 3 sertifikasi resmi dari IBM SkillsBuild.',
      actionText: 'Lihat Bukti Sertifikat',
    },
    {
      title: 'Hubungi Saya',
      href: '/contact',
      icon: Mail,
      badge: 'Komunikasi',
      description:
        'Saluran komunikasi langsung melalui email, profil GitHub, dan formulir pesan terformat siap kirim.',
      actionText: 'Kirim Pesan',
    },
  ]

  // Featured Projects preview
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
      githubUrl: 'https://github.com/Farrell-06/heart-disease-classification',
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
        businessInsight:
          'Tingkat Recall 94.00% pada kelas positif krusial dalam domain analitik kesehatan, karena meminimalkan risiko False Negative (pasien berisiko tinggi yang tidak terdeteksi). Model ini dapat diposisikan sebagai alat bantu skrining awal sebelum diagnosis klinis intensif.',
      },
    },
    {
      title: 'SONARA FEST: Dynamic Concert Website',
      projectType: 'Individual Academic Project',
      year: '2025',
      description:
        'Website dinamis informasi festival musik yang dikembangkan secara mandiri, berfokus pada fungsionalitas dinamis jadwal konser dan integrasi basis data relasional.',
      tags: ['PHP', 'MySQL', 'CSS', 'Database Integration'],
      githubUrl: 'https://github.com/Farrell-06/sonara-fest',
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
        businessInsight:
          'Struktur basis data yang ternormalisasi mencegah inkonsistensi jadwal penampil dan tabrakan panggung konser. Pendekatan terstruktur ini memudahkan pengelola festival memperbarui jadwal secara sentral tanpa menyentuh kode aplikasi.',
      },
    },
    {
      title: 'PT. Energi Nusantara Raya: Company Profile Website',
      projectType: 'Individual Academic Project',
      year: '2025',
      description:
        'Website profil perusahaan yang dikembangkan secara mandiri menggunakan Python dan Flask, menekankan struktur web modular, backend routing, dan pengujian sistem.',
      tags: ['Python', 'Flask', 'HTML5', 'CSS3', 'Jinja2'],
      githubUrl: 'https://github.com/Farrell-06/company-profile-flask',
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
          'PT. Energi Nusantara Raya adalah entitas fiktif yang dibuat khusus untuk studi kasus pengembangan web dan portofolio akademik. Proyek ini mendemonstrasikan penguasaan backend ringan berbasis Python.',
        businessInsight:
          'Pemisahan komponen antarmuka melalui Jinja2 template inheritance mempercepat penambahan katalog layanan baru hingga 60% lebih ringkas serta menjamin konsistensi tata letak visual.',
      },
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border/60">
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
                  An Information Systems student passionate about transforming raw data into meaningful insights through analytics, machine learning, and technology.
                </motion.p>

                {/* Indonesian Context Narrative */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  Mahasiswa S1 Sistem Informasi Universitas Mercu Buana dengan fokus utama pada pemrosesan data mentah, exploratory data analysis (EDA), klasifikasi machine learning terapan, serta perancangan aplikasi web pendukung.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.36, ease: easeOutExpo }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
                  >
                    <span>Jelajahi Proyek</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg border border-border text-foreground font-medium hover:bg-muted active:scale-[0.98] transition-all"
                  >
                    <span>Tentang Saya</span>
                  </Link>
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
                    <span>S1 Sistem Informasi, Univ. Mercu Buana</span>
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

              {/* Right Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
                className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
              >
                <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-md bg-card">
                  <Image
                    src="/Profile.jpg"
                    alt="Farrell Putra Prayoga - Aspiring Data Analyst"
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

        {/* PORTFOLIO PAGES DIRECTORY SECTION */}
        <section className="py-20 border-b border-border/60 bg-muted/20">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navigasi Halaman Portofolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                Jelajahi Setiap Menu Portofolio
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Setiap bagian portofolio memiliki halaman khususnya masing-masing untuk menyajikan informasi akademik, keterampilan teknis, pembuktian sertifikasi, dan dokumentasi proyek secara komprehensif.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioPages.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: easeOutExpo }}
                  >
                    <Link
                      href={item.href}
                      className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center transition-transform group-hover:scale-105">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-1.5">
                          <span>{item.title}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>{item.actionText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </SectionContainer>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="py-20 border-b border-border/60">
          <SectionContainer>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: easeOutExpo }}
                className="max-w-2xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                  Proyek Terpilih
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Dokumentasi proyek akademik yang menonjolkan klasifikasi Machine Learning (Support Vector Machine) dan arsitektur web fungsional.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline min-h-[44px]"
                >
                  <span>Buka Halaman Koleksi Proyek</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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

            <div className="text-center pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-colors border border-primary/20"
              >
                <span>Lihat Informasi Rinci Setiap Proyek di Halaman Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionContainer>
        </section>

        {/* READY TO COLLABORATE CTA */}
        <section className="py-20">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl border border-border bg-card shadow-sm text-center space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mx-auto">
                <span>Mari Terhubung</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                Tertarik Berdiskusi atau Menawarkan Peluang?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Saya selalu antusias menyambut peluang magang, kolaborasi analisis data, maupun diskusi teknis seputar sistem informasi dan machine learning.
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[44px] rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
                >
                  <span>Kirim Pesan di Halaman Kontak</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] rounded-xl border border-border text-foreground font-medium hover:bg-muted active:scale-[0.98] transition-all"
                >
                  <span>Pelajari Lebih Lanjut Tentang Saya</span>
                </Link>
              </div>
            </motion.div>
          </SectionContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}
