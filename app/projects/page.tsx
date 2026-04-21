'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ProjectCard } from '@/components/project-card'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Company Profile',
      description:
        'Tugas Membuat Company Profile Menggungunakan python',
      tags: ['python', 'flask'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      image: (
        <Image 
          src="/companyprofile.png" 
          alt="Company Profile Project" 
          width={800} 
          height={450} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      ),
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <SectionContainer className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of my most recent work showcasing my skills in full-stack development,
            design, and problem-solving.
          </p>
        </motion.div>
      </SectionContainer>

      {/* Projects Grid */}
      <SectionContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="bg-card/50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </SectionContainer>

      <Footer />
    </div>
  )
}
