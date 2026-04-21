'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import Image from 'next/image'
import { SkillBadge } from '@/components/skill-badge'

export default function About() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'SQL'],
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Git', 'Docker', 'AWS', 'Tailwind CSS', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Soft Skills',
      skills: ['Project Management', 'Team Collaboration', 'Problem Solving', 'Communication'],
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* About Hero */}
      <SectionContainer className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Driven by curiosity and a passion for technology, I&apos;m exploring the intersections of
            information systems and real-world problem-solving.
          </p>
        </motion.div>
      </SectionContainer>

      {/* About Content */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="/Profile 2.jpeg"
              alt="About Me Photo"
              width={500}
              height={600}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-xl border-4 border-primary/20"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an Information Systems student with a strong foundation in software development
                and systems thinking. My academic journey has equipped me with both technical and
                analytical skills to approach complex problems systematically.
              </p>
              <p>
                Throughout my studies, I&apos;ve worked on various projects ranging from web applications
                to database management systems. I&apos;m passionate about clean code, user-centered design,
                and building solutions that make a real impact.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to
                open-source projects, or collaborating with fellow developers to build something amazing.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Skills Section */}
      <SectionContainer className="bg-card/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Skills & Expertise</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      <Footer />
    </div>
  )
}
