import React, { useEffect } from 'react'
import { MapPin, Mail, Phone, Clock, Building2, ArrowUpRight } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import { IMAGES } from '@/lib/siteImages'

export default function Contato() {
  const mapsExternalLink =
    'https://www.google.com/maps?sca_esv=b3cb815f54d8ec19&output=search&q=Empresarial+Alexandre+de+Castro+e+Silva,+Av.+Eng.+Domingos+Ferreira,+2589+-+Boa+Viagem,+Recife+-+PE,+51020-030&source=lnms&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszjzN4g3YOmrBeWW1F-m8tPtOg9IWsjvSsBIhjG-wKIfX-pe4s8qHGnJkvHw8dRpzGwTXmQNMMdXMSSlJTZGusO2CBGIdneOobVzB0Rb9UNAqEqfix4oHYVrO2Qhua7R8Md0L0lTUOCCZHebZlzQ0iPdvwP6ouqPQy4_Vn_5HsBFOPt9Cqu7mJZN3JOUGgL0GoXjExOg&entry=mc&ved=1t:200715&ictx=111'

  useEffect(() => {
    document.title = 'Contato | C Cont — Contabilidade Estratégica'
  }, [])

  return (
    <div className="flex flex-col">
      {/* Banner topo */}
      <PageBanner
        title="Contato"
        subtitle="Converse com nossa equipe para entender como podemos estruturar a contabilidade da sua empresa com segurança e método."
        imageSrc={IMAGES.contatoBanner}
        breadcrumb="Canais de Atendimento"
      />

      {/* Seção principal de Contato e Mapa */}
      <section className="py-20 lg:py-28 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Informações de Contato e Sede */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 sm:p-10 rounded-[20px] border border-slate-200/80 shadow-sm space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
                    Sede Recife
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00102A] mt-1">
                    C Cont Contabilidade
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
                    Atendimento Consultivo Nacional
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2F7] text-[#00102A] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#0B2347]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00102A] block text-xs uppercase tracking-wider">
                        Endereço
                      </span>
                      <p className="leading-relaxed mt-0.5 text-slate-600 font-normal">
                        Empresarial Alexandre de Castro e Silva
                        <br />
                        Av. Eng. Domingos Ferreira, 2589, Boa Viagem
                        <br />
                        Recife/PE · CEP 51020-030
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2F7] text-[#00102A] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#0B2347]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00102A] block text-xs uppercase tracking-wider">
                        E-mail Institucional
                      </span>
                      <a
                        href="mailto:controladoria@ccont.cnt.com.br"
                        className="text-[#0B2347] hover:text-[#00102A] font-medium transition-colors break-all leading-relaxed mt-0.5 inline-block"
                      >
                        controladoria@ccont.cnt.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2F7] text-[#00102A] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#0B2347]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00102A] block text-xs uppercase tracking-wider">
                        Telefone / WhatsApp
                      </span>
                      <a
                        href="tel:+5581996887921"
                        className="text-[#0B2347] hover:text-[#00102A] transition-colors font-semibold leading-relaxed mt-0.5 inline-block"
                      >
                        +55 81 99688-7921
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2F7] text-[#00102A] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#0B2347]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#00102A] block text-xs uppercase tracking-wider">
                        Horário de Atendimento
                      </span>
                      <p className="leading-relaxed mt-0.5 text-slate-600 font-normal">
                        Segunda a sexta-feira, das 8h às 18h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Building2 className="w-4 h-4 text-[#0B2347]" />
                    <span>Boa Viagem · Recife/PE</span>
                  </div>
                  <a
                    href={mapsExternalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2347] hover:text-[#00102A]"
                  >
                    Abrir no Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Interativo Google Maps */}
            <div className="lg:col-span-7">
              <div className="bg-white p-4 sm:p-5 rounded-[20px] border border-slate-200/80 shadow-sm">
                <div className="relative w-full h-[460px] rounded-[16px] overflow-hidden bg-slate-100">
                  <iframe
                    title="Localização C Cont - Boa Viagem Recife"
                    src="https://www.google.com/maps?q=Empresarial+Alexandre+de+Castro+e+Silva,+Av.+Eng.+Domingos+Ferreira,+2589+-+Boa+Viagem,+Recife+-+PE,+51020-030&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold text-[#00102A] border border-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Empresarial Alexandre de Castro e Silva · Boa Viagem
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
