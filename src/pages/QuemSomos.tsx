import React, { useEffect } from 'react'
import {
  Compass,
  Layers,
  ShieldCheck,
  Award,
  Eye,
  UserCheck,
  Building,
  Scale,
  TrendingUp,
} from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import DarkHorseFrame from '@/components/DarkHorseFrame'

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
      desc: 'Operação articulada entre contabilidade, direito empresarial e mercado financeiro.',
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
      desc: 'Atendimento próximo e soluções desenhadas sob medida para a realidade do negócio.',
      icon: UserCheck,
    },
  ]

  const groupCompanies = [
    {
      name: 'C Cont',
      segment: 'Contabilidade Estratégica',
      desc: 'Gestão contábil, fiscal, trabalhista e societária com alta tecnologia e visão consultiva para orientar decisões empresariais.',
      icon: Building,
      badge: 'Hub Contábil',
    },
    {
      name: 'Caldas Advocacia',
      segment: 'Direito Empresarial e Tributário',
      desc: 'Assessoria jurídica corporativa especializada em consultoria e contencioso tributário, contratos, societário e reorganizações.',
      icon: Scale,
      badge: 'Hub Jurídico',
    },
    {
      name: 'C Capital',
      segment: 'Estruturação Financeira e Patrimonial',
      desc: 'Soluções de investimento corporativo, gestão de patrimônio e estruturação financeira em parceria de credenciamento com o BTG Pactual.',
      icon: TrendingUp,
      badge: 'Parceria BTG Pactual',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner topo (~45vh) */}
      <PageBanner
        title="Quem Somos"
        subtitle="Uma contabilidade que nasceu para orientar a tomada de decisão com rigor técnico e visão de futuro."
        imageSrc="https://img.usecurling.com/p/1920/1080?q=modern%20corporate%20office&color=blue"
        breadcrumb="Institucional"
      />

      {/* História da C Cont (bloco texto + imagem) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                Nossa Trajetória
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
                Uma contabilidade que orienta a decisão.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                <p>
                  A{' '}
                  <strong className="text-slate-900 font-semibold">
                    C Cont Contabilidade Estratégica
                  </strong>{' '}
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
                  tributária e confere credibilidade à empresa perante o mercado financeiro e
                  investidores.
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="lg:col-span-5">
              <DarkHorseFrame
                src="https://img.usecurling.com/p/1200/900?q=accountants%20meeting&color=blue"
                alt="Equipe da C Cont em análise estratégica"
                offsetColor="bg-[#EAF2F6]"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Valores (6 cards) */}
      <section className="py-20 lg:py-28 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
              Princípios Fundamentais
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Nossos valores
            </h2>
            <p className="text-base text-slate-600 font-light">
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
                    <div className="w-12 h-12 rounded-xl bg-[#EAF2F6] text-[#154671] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#0a1628] mb-3">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bloco de Liderança: Vinicius Caldas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#EAF2F6]/60 border border-sky-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4">
                <div className="relative mx-auto max-w-xs lg:max-w-none">
                  <div className="rounded-[18px] overflow-hidden shadow-lg border border-white">
                    <img
                      src="https://img.usecurling.com/ppl/large?gender=male&seed=42"
                      alt="Vinicius Caldas - CEO e sócio fundador"
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-[#0a1628] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                    Liderança
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                  Diretoria Executiva
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1628]">
                  Vinicius Caldas
                </h3>
                <p className="text-sm sm:text-base font-semibold text-sky-700">
                  CEO e sócio fundador da C Cont e do C Consulting Group
                </p>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-light pt-2">
                  <p>
                    Com formação em{' '}
                    <strong>Direito pela Universidade Católica de Pernambuco (UNICAP)</strong>,
                    formação técnica em <strong>Contabilidade</strong> e especialização em{' '}
                    <strong>
                      Direito Tributário pelo Instituto Brasileiro de Estudos Tributários (IBET)
                    </strong>
                    , Vinicius Caldas reúne uma bagagem interdisciplinar única que combina precisão
                    contábil e segurança jurídica.
                  </p>
                  <p>
                    Sua visão executiva orienta a missão da C Cont: descomplicar o cenário
                    tributário brasileiro e transformar a rotina contábil em um diferencial
                    competitivo sustentável para médios e grandes grupos empresariais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco do Grupo (C Cont, Caldas Advocacia, C Capital) em 3 cards */}
      <section className="py-20 lg:py-28 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
              C Consulting Group
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Um grupo, três pilares integrados
            </h2>
            <p className="text-base text-slate-300 font-light">
              Estrutura corporativa completa para respaldar empresas em todas as etapas de
              maturidade, governança e alocação de capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groupCompanies.map((comp) => {
              const Icon = comp.icon
              return (
                <div
                  key={comp.name}
                  className="p-8 rounded-[20px] bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 text-sky-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300 bg-sky-950/70 border border-sky-800/60 px-3 py-1 rounded-full">
                        {comp.badge}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-white mb-1">{comp.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
                      {comp.segment}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">{comp.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
