'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionContainer } from '@/components/section-container'
import { ContactForm } from '@/components/contact-form'
import { Mail, Github } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'farrell.prayoga106@gmail.com',
      href: 'mailto:farrell.prayoga106@gmail.com',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'github.com/Farrell-06',
      href: 'https://github.com/Farrell-06',
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

      {/* Hero */}
      <SectionContainer className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. Reach out
            through any of the channels below.
          </p>
        </motion.div>
      </SectionContainer>

      {/* Contact Methods */}
      <SectionContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.title}
                href={method.href}
                variants={itemVariants}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {method.description}
                </p>
              </motion.a>
            )
          })}
        </motion.div>
      </SectionContainer>

      {/* Contact Form Section */}
      <SectionContainer className="bg-card/50">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Send me a message</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <ContactForm />
      </SectionContainer>

      {/* FAQ or Additional Info Section */}
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Info</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to inquiries within 24-48 hours. For urgent matters, please indicate
                that in your message.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Availability</h3>
              <p className="text-muted-foreground">
                I&apos;m open to freelance projects, collaborations, and full-time opportunities. Feel
                free to discuss your ideas!
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Best Reach</h3>
              <p className="text-muted-foreground">
                Email is the best way to reach me for detailed projects or inquiries. For quick
                questions, you can also reach out on LinkedIn or GitHub.
              </p>
            </div>
          </div>
        </motion.div>
      </SectionContainer>

      <Footer />
    </div>
  )
}
