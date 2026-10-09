import Link from 'next/link'
import { Github, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Education', href: '/#education' },
    { label: 'Certifications', href: '/#certifications' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <footer className="border-t border-border bg-card mt-auto transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-foreground text-base">Farrell Putra Prayoga</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Aspiring Data Analyst | Sistem Informasi Universitas Mercu Buana
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Bekasi, Indonesia</span>
            </p>
          </div>

          {/* Navigasi Footer */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors min-h-[44px] flex items-center px-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links dengan tap target >= 44px */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Farrell-06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors border border-transparent hover:border-border"
              aria-label="GitHub Profil Farrell-06"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:farrell.putra106@gmail.com"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors border border-transparent hover:border-border"
              aria-label="Kirim Email ke farrell.putra106@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          © {currentYear} Farrell Putra Prayoga. Portofolio Data Analytics & Sistem Informasi.
        </div>
      </div>
    </footer>
  )
}
