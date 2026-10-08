'use client'

import { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'validating' | 'ready_to_send' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validasi input
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Mohon lengkapi nama, email, dan pesan Anda.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Format alamat email tidak valid.')
      return
    }

    setStatus('validating')

    // Buka email client pengguna dengan data yang sudah diisi
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() ? `[Portofolio] ${formData.subject}` : `[Portofolio] Pesan dari ${formData.name}`
    )
    const mailtoBody = encodeURIComponent(
      `Nama: ${formData.name}\nEmail Pengirim: ${formData.email}\n\nPesan:\n${formData.message}`
    )
    const mailtoUrl = `mailto:farrell.prayoga106@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`

    // Trigger mailto
    window.location.href = mailtoUrl
    setStatus('ready_to_send')
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setStatus('idle')
    setErrorMessage('')
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {status === 'ready_to_send' && (
        <div className="mb-6 p-4 rounded-lg bg-card border border-primary/40 text-foreground space-y-2">
          <div className="flex items-center gap-2 text-primary font-medium">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>Aplikasi email Anda telah dibuka</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Jika aplikasi email tidak terbuka otomatis, Anda dapat mengirimkan email langsung ke{' '}
            <a
              href="mailto:farrell.prayoga106@gmail.com"
              className="font-medium text-foreground underline hover:text-primary"
            >
              farrell.prayoga106@gmail.com
            </a>
            .
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-medium text-primary hover:underline min-h-[44px] flex items-center"
            >
              Tulis Pesan Baru
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/40 text-destructive flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Nama Lengkap <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Alamat Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            placeholder="nama@email.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
            Subjek Pesan
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            placeholder="Contoh: Diskusi Proyek Web"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            Pesan <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-y"
            placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Kirim via Email</span>
          </button>
        </div>
      </form>
    </div>
  )
}
