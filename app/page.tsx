'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex-1 flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent"
      >
        <SectionContainer className="py-32 md:py-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Welcome to My{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Portfolio
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={itemVariants}
              >
                I&apos;m an Information Systems student passionate about building innovative
                solutions. Explore my projects and experience below.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={itemVariants}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-6"
                variants={itemVariants}
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/Profile.jpg"
                  alt="Profile Photo"
                  width={320}
                  height={320}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-primary/20"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </SectionContainer>
      </motion.section>

      <Footer />
    </div>
  )
}
