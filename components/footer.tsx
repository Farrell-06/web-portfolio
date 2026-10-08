import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">Farrell Putra Prayoga</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Mahasiswa Sistem Informasi
            </p>
          </div>

          {/* Navigasi Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors py-2">
              About
            </Link>
            <Link href="/projects" className="hover:text-foreground transition-colors py-2">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors py-2">
              Contact
            </Link>
          </div>

          {/* Social Links dengan tap target >= 44px */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Farrell-06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="GitHub Profil Farrell-06"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:farrell.prayoga106@gmail.com"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Kirim Email ke Farrell"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          © {currentYear} Farrell Putra Prayoga. Dibangun dengan Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
