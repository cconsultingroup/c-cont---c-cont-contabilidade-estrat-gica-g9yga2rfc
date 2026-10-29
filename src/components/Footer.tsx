import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Coluna 1: Logo + Frase */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0a1628] flex items-center justify-center font-serif font-bold text-xl shadow-sm">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight tracking-tight text-white">
                  C CONT
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
                  Contabilidade Estratégica
                </span>
              </div>
            </div>
            <p className="font-serif text-2xl lg:text-3xl font-medium text-[#c7d6e6] italic pt-2">
              “Resultados importam!”
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Rigor técnico, inteligência tributária e acompanhamento próximo para embasar cada
              decisão da sua empresa.
            </p>
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
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Av. República do Líbano, 251, Sl. 616, Torre I, Pina, Recife/PE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:controladoria@caldasadvocacia.adv.br"
                  className="hover:text-white transition-colors break-all"
                >
                  controladoria@caldasadvocacia.adv.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+558199957501" className="hover:text-white transition-colors">
                  +55 81 9995-7501
                </a>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Atendimento: Segunda a sexta, das 8h às 18h
              </p>
            </div>
          </div>

          {/* Coluna 4: C Consulting Group */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">
              Parte do C Consulting Group
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Uma estrutura consultiva completa e multidisciplinar para atender empresas em todas as
              frentes de gestão e expansão:
            </p>
            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition-colors">
                <span className="font-semibold text-white text-sm block">C Cont</span>
                <span className="text-xs text-slate-400">
                  Contabilidade estratégica, tributária e societária
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition-colors">
                <span className="font-semibold text-white text-sm block">Caldas Advocacia</span>
                <span className="text-xs text-slate-400">
                  Direito empresarial, consultoria tributária e societária
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition-colors">
                <span className="font-semibold text-white text-sm block flex items-center justify-between">
                  C Capital
                  <span className="text-[10px] text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-800/60">
                    Parceria BTG Pactual
                  </span>
                </span>
                <span className="text-xs text-slate-400">
                  Estruturação financeira e patrimonial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-[#081220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} C Cont Contabilidade Estratégica. Todos os direitos
            reservados.
          </p>
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
