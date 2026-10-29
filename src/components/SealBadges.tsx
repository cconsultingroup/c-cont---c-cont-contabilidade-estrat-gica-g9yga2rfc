import React from 'react'
import { Award, ShieldCheck, Handshake } from 'lucide-react'

/**
 * Faixa de selos em linha com badges institucionais
 */
export default function SealBadges({ className = '' }: { className?: string }) {
  const seals = [
    {
      icon: Award,
      title: 'Selo Ouro ANCEC 2020',
      subtitle: 'Agência Nacional de Cultura, Empreendedorismo e Comunicação',
    },
    {
      icon: ShieldCheck,
      title: 'Prêmio LAQI 2021',
      subtitle: 'Latin American Quality Institute',
    },
    {
      icon: Handshake,
      title: 'Parceria BTG Pactual',
      subtitle: 'Via C Capital para estruturação patrimonial',
    },
  ]

  return (
    <div className={`py-12 border-y border-slate-200/80 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {seals.map((seal) => {
            const Icon = seal.icon
            return (
              <div
                key={seal.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 transition-all hover:bg-white hover:shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF2F6] text-[#0a1628] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#154671]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0a1628]">{seal.title}</h4>
                  <p className="text-xs text-slate-500">{seal.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
