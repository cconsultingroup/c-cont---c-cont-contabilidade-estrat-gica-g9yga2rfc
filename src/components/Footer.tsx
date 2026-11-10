import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { logoBranco } from '@/lib/logos'

export default function Footer() {
  return (
    <footer className="bg-[#00102A] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo oficial branco */}
        <Link to="/" aria-label="C Cont Contabilidade — início" className="shrink-0">
          <img src={logoBranco} alt="C Cont Contabilidade" className="h-6 w-auto object-contain" />
        </Link>

        <p className="text-[11px] tracking-wide text-white/50 order-last sm:order-none">
          © 2026 C Cont Contabilidade
        </p>

        {/* Contato correto */}
        <div className="flex items-center gap-5 text-[11px] text-white/60">
          <a
            href="mailto:controladoria@ccont.cnt.com.br"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-3 h-3" />
            <span className="hidden md:inline">controladoria@ccont.cnt.com.br</span>
            <span className="md:hidden">E-mail</span>
          </a>
          <span className="w-px h-3 bg-white/20" aria-hidden="true" />
          <a
            href="tel:+5581996887921"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-3 h-3" />
            +55 81 99688-7921
          </a>
        </div>
      </div>
    </footer>
  )
}
