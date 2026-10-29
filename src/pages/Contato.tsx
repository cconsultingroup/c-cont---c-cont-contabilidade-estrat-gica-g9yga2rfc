import React, { useEffect } from 'react'
import { MapPin, Mail, Phone, Clock, Building2 } from 'lucide-react'
import PageBanner from '@/components/PageBanner'

export default function Contato() {
  useEffect(() => {
    document.title = 'Contato | C Cont — Contabilidade Estratégica'
  }, [])

  return (
    <div className="flex flex-col">
      {/* Banner topo */}
      <PageBanner
        title="Contato"
        subtitle="Converse com nossa equipe para entender como podemos estruturar a contabilidade da sua empresa com segurança e método."
        imageSrc="https://img.usecurling.com/p/1920/1080?q=contact%20corporate&color=blue"
        breadcrumb="Canais de Atendimento"
      />

      {/* Seção principal de Contato e Mapa */}
      <section className="py-20 lg:py-28 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Informações de Contato e Sede */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 sm:p-10 rounded-[20px] border border-slate-200/80 shadow-sm space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                    Sede Recife
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0a1628] mt-1">
                    C Cont Contabilidade
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                    Integrante do C Consulting Group
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2F6] text-[#154671] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#0a1628] block text-xs uppercase tracking-wider">
                        Endereço
                      </span>
                      <p className="leading-relaxed mt-0.5">
                        Av. República do Líbano, 251, Sl. 616, Torre I, Pina
                        <br />
                        Recife/PE · CEP 51110-160
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2F6] text-[#154671] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#0a1628] block text-xs uppercase tracking-wider">
                        E-mail Institucional
                      </span>
                      <a
                        href="mailto:controladoria@caldasadvocacia.adv.br"
                        className="text-sky-700 hover:text-sky-900 transition-colors break-all leading-relaxed mt-0.5 inline-block"
                      >
                        controladoria@caldasadvocacia.adv.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2F6] text-[#154671] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#0a1628] block text-xs uppercase tracking-wider">
                        Telefone / Contato Direto
                      </span>
                      <a
                        href="tel:+558199957501"
                        className="text-sky-700 hover:text-sky-900 transition-colors font-medium leading-relaxed mt-0.5 inline-block"
                      >
                        +55 81 9995-7501
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2F6] text-[#154671] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#0a1628] block text-xs uppercase tracking-wider">
                        Horário de Atendimento
                      </span>
                      <p className="leading-relaxed mt-0.5">Segunda a sexta-feira, das 8h às 18h</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                  <Building2 className="w-4 h-4 text-[#154671]" />
                  <span>Estrutura física no polo corporativo do Pina</span>
                </div>
              </div>
            </div>

            {/* Mapa Interativo Google Maps */}
            <div className="lg:col-span-7">
              <div className="bg-white p-4 sm:p-5 rounded-[20px] border border-slate-200/80 shadow-sm">
                <div className="relative w-full h-[460px] rounded-[16px] overflow-hidden bg-slate-100">
                  <iframe
                    title="Localização C Cont - Pina Recife"
                    src="https://maps.google.com/maps?q=Av.%20Rep%C3%BAblica%20do%20L%C3%ADbano%2C%20251%2C%20Pina%2C%20Recife%20PE&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-[#0a1628] border border-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Torre I, Sl. 616 · Pina, Recife
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
