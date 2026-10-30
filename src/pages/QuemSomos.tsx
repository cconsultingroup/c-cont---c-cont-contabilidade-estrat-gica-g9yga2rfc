import React, { useEffect } from 'react'
import { Compass, Layers, ShieldCheck, Award, Eye, UserCheck } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import DarkHorseFrame from '@/components/DarkHorseFrame'
import { IMAGES } from '@/lib/siteImages'

export default function QuemSomos() {
  useEffect(() => {
    document.title = 'Quem somos | C Cont — Contabilidade Estratégica'
  }, [])

  const values = [
    {
      title: 'Planejamento',
      desc: 'Antecipação de cenários e desenho cuidadoso de estratégias tributárias e financeiras.',
      icon: Compass,
    },
    {
      title: 'Integração',
      desc: 'Operação articulada entre rotinas contábeis, conformidade fiscal e visão de negócios.',
      icon: Layers,
    },
    {
      title: 'Governança',
      desc: 'Processos claros de conformidade, rastreabilidade e prestação de contas auditável.',
      icon: ShieldCheck,
    },
    {
      title: 'Excelência',
      desc: 'Rigor técnico nas demonstrações contábeis e no cumprimento das obrigações legais.',
      icon: Award,
    },
    {
      title: 'Transparência',
      desc: 'Comunicação objetiva, relatórios executivos claros e linguagem acessível à diretoria.',
      icon: Eye,
    },
    {
      title: 'Personalização',
      desc: 'Atendimento próximo e soluções desenhadas sob medida para a realidade de cada setor.',
      icon: UserCheck,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner topo (~45vh) */}
      <PageBanner
        title="Quem Somos"
        subtitle="Uma contabilidade que nasceu para orientar a tomada de decisão com rigor técnico e visão de futuro."
        imageSrc={IMAGES.quemSomosBanner}
        breadcrumb="Institucional"
      />

      {/* História da C Cont (bloco texto + imagem) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
                Nossa Trajetória
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00102A] leading-tight">
                Uma contabilidade que orienta a decisão.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <p>
                  A <strong className="text-slate-900 font-bold">C Cont Contabilidade</strong>{' '}
                  nasceu com o propósito de transformar o modo como as empresas enxergam a
                  contabilidade. Mais do que cumprir obrigações fiscais e burocráticas, atuamos como
                  verdadeiros parceiros estratégicos na condução dos negócios.
                </p>
                <p>
                  Nossa atuação combina a solidez da contabilidade tradicional com recursos
                  tecnológicos modernos que aumentam a eficiência dos processos e ampliam a
                  capacidade de análise da nossa equipe.
                </p>
                <p>
                  Acreditamos que a contabilidade bem executada é uma bússola para a diretoria: ela
                  identifica riscos antes que se tornem passivos, aponta oportunidades de economia
                  tributária e confere credibilidade à empresa perante o mercado e investidores.
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="lg:col-span-5">
              <DarkHorseFrame
                src={IMAGES.quemSomosHistoria}
                alt="Equipe da C Cont em análise estratégica"
                offsetColor="bg-[#EEF2F7]"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Valores (6 cards) */}
      <section className="py-20 lg:py-28 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
              Princípios Fundamentais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00102A]">Nossos valores</h2>
            <p className="text-base text-slate-600 font-normal">
              Pilares que orientam cada entrega técnica, relacionamento com clientes e decisão
              institucional da C Cont.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((val) => {
              const Icon = val.icon
              return (
                <div
                  key={val.title}
                  className="bg-white p-8 rounded-[16px] border border-slate-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EEF2F7] text-[#00102A] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#0B2347]" />
                    </div>
                    <h3 className="font-bold text-xl text-[#00102A] mb-3">{val.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bloco de Liderança Executiva */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#EEF2F7]/70 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4">
                <div className="relative mx-auto max-w-xs lg:max-w-none">
                  <DarkHorseFrame
                    src={IMAGES.quemSomosVinicius}
                    alt="Diretoria Executiva C Cont"
                    offsetColor="bg-slate-300"
                    aspectRatio="aspect-[4/5]"
                    imageClassName="object-top"
                  />
                  <div className="absolute -bottom-3 -right-3 z-20 bg-[#00102A] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                    Liderança
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
                  Liderança Executiva
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00102A]">
                  Vinicius Caldas
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#0B2347]">
                  CEO e sócio fundador — Direito (UNICAP), técnico em Contabilidade, especialização
                  em Direito Tributário (IBET)
                </p>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-2">
                  <p>
                    À frente da C Cont Contabilidade, reúne uma trajetória marcada pela integração
                    entre a precisão contábil e a segurança jurídica tributária, atuando diretamente
                    na orientação consultiva e no planejamento estratégico de empresas de médio e
                    grande porte.
                  </p>
                  <p>
                    Com visão focada em conformidade, governança corporativa e eficiência fiscal,
                    conduz a equipe técnica na entrega de soluções personalizadas que transformam
                    rotinas contábeis em instrumentos claros de gestão e suporte à tomada de decisão
                    executiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
