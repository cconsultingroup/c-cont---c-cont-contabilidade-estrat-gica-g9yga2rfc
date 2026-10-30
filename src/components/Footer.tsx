import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { logoBranco } from '@/lib/logos'
import { IMAGES } from '@/lib/siteImages'

export default function Footer() {
  const mapsExternalLink =
    'https://www.google.com/maps?sca_esv=b3cb815f54d8ec19&output=search&q=Empresarial+Alexandre+de+Castro+e+Silva,+Av.+Eng.+Domingos+Ferreira,+2589+-+Boa+Viagem,+Recife+-+PE,+51020-030&source=lnms&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszjzN4g3YOmrBeWW1F-m8tPtOg9IWsjvSsBIhjG-wKIfX-pe4s8qHGnJkvHw8dRpzGwTXmQNMMdXMSSlJTZGusO2CBGIdneOobVzB0Rb9UNAqEqfix4oHYVrO2Qhua7R8Md0L0lTUOCCZHebZlzQ0iPdvwP6ouqPQy4_Vn_5HsBFOPt9Cqu7mJZN3JOUGgL0GoXjExOg&entry=mc&ved=1t:200715&ictx=111'

  return (
    <footer className="bg-[#00102A] text-white border-t border-[#0B2347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Coluna 1: SOMENTE o logo oficial branco */}
          <div className="space-y-4">
            <Link to="/" className="inline-block" aria-label="C Cont Contabilidade">
              <img
                src={logoBranco}
                alt="C Cont Contabilidade"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/quem-somos"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  O que Fazemos
                </Link>
              </li>
              <li>
                <Link
                  to="/diferenciais"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link
                  to="/duvidas"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">
              Contato
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:controladoria@ccont.cnt.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  controladoria@ccont.cnt.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+5581996887921" className="hover:text-white transition-colors">
                  +55 81 99688-7921
                </a>
              </div>
              <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                Atendimento: Segunda a sexta, das 8h às 18h
              </p>
            </div>
          </div>

          {/* Coluna 4: ONDE ESTAMOS */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">
              Onde Estamos
            </h4>
            <a
              href={mapsExternalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-3 p-3 rounded-2xl bg-[#0B2347]/60 hover:bg-[#0B2347] border border-white/10 hover:border-sky-400/50 transition-all duration-300"
            >
              {/* a) Imagem/vídeo de Recife em loop com efeito de zoom suave */}
              <div className="relative h-24 w-full rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={IMAGES.homeRecife}
                  alt="Recife / PE"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00102A]/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-semibold tracking-wider uppercase text-white bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-white/10">
                  Recife / PE
                </span>
              </div>

              {/* b) iframe do Google Maps */}
              <div className="relative h-[160px] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 pointer-events-none">
                <iframe
                  title="Localização C Cont - Boa Viagem Recife"
                  src="https://www.google.com/maps?q=Empresarial+Alexandre+de+Castro+e+Silva,+Av.+Eng.+Domingos+Ferreira,+2589+-+Boa+Viagem,+Recife+-+PE,+51020-030&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* c) Endereço escrito */}
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Empresarial Alexandre de Castro e Silva — Av. Eng. Domingos Ferreira, 2589, Boa
                  Viagem, Recife/PE, CEP 51020-030
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0B2347] bg-[#000B1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 C Cont Contabilidade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Recife/PE · Atendimento Nacional</span>
            <Link
              to="/contato"
              className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Fale conosco <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
