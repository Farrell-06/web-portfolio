import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Showcasing my work and experience in Information Systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors block">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors block">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors block">
                Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors block">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Farrell-06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:farrell.prayoga106@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
