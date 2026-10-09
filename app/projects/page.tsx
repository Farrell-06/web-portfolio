'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ProjectCard, ProjectCardProps } from '@/components/project-card'
import Image from 'next/image'
import Link from 'next/link'
import { Activity } from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function Projects() {
  const projects: ProjectCardProps[] = [
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-3">
              <span>Koleksi Proyek</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Daftar Proyek
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Dokumentasi proyek akademik yang menonjolkan analisis data, pemodelan prediktif machine learning, dan implementasi web fungsional.
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
                <ProjectCard {...project} />
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
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Terbuka untuk eksplorasi proyek analitik data, evaluasi model klasifikasi, maupun peluang magang di bidang Data Analytics.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xs"
              >
                Hubungi Saya
              </Link>
            </div>
          </motion.div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}
