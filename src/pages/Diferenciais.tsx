import React, { useEffect } from 'react'
import { Sparkles, Eye, ShieldCheck, ClipboardList, CalendarCheck, Users } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import NumberStats from '@/components/NumberStats'
import DarkHorseFrame from '@/components/DarkHorseFrame'
import { IMAGES } from '@/lib/siteImages'

export default function Diferenciais() {
  useEffect(() => {
    document.title = 'Diferenciais | C Cont — Contabilidade Estratégica'
  }, [])

  const differentials = [
    {
      title: 'Modernidade',
      desc: 'Inteligência artificial e automação integradas à rotina contábil, com análise apurada e decisão sempre humana.',
      icon: Sparkles,
    },
    {
      title: 'Transparência',
      desc: 'Informação clara e objetiva na linguagem da diretoria: o que mudou, por quê e o próximo passo estratégico.',
      icon: Eye,
    },
    {
      title: 'Segurança',
      desc: 'Conformidade, sigilo e rastreabilidade em cada entrega, com consistência auditável e governança corporativa.',
      icon: ShieldCheck,
    },
    {
      title: 'Governança e Método',
      desc: 'Cada demanda segue um padrão claro de registro e acompanhamento do início à conclusão, sem perda de prazos.',
      icon: ClipboardList,
    },
    {
      title: 'Informação no Tempo Certo',
      desc: 'Fechamento em data fixa: o resultado chega no cronograma acordado, a tempo de orientar a decisão executiva.',
      icon: CalendarCheck,
    },
    {
      title: 'Proximidade',
      desc: 'Atendimento acolhedor e consultivo, com interlocução direta entre sócios, gerentes de conta e sua equipe.',
      icon: Users,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner topo */}
      <PageBanner
        title="Diferenciais"
        subtitle="Acompanhamento personalizado e estratégico. Nossa atuação combina responsabilidade técnica, processos organizados e comunicação transparente."
        imageSrc={IMAGES.diferenciaisBanner}
        breadcrumb="Por que a C Cont"
      />

      {/* Faixa de Números (mesmos 3 cards da home) */}
      <NumberStats bgColor="bg-[#EAF2F6]" className="bg-white border-b border-slate-100" />

      {/* Grid de Diferenciais com Ícones */}
      <section className="py-20 lg:py-28 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
              Nossa Forma de Atuar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Padrão de excelência em cada entrega
            </h2>
            <p className="text-base text-slate-600 font-light">
              Combinamos rigor regulatório, processos ágeis e sensibilidade de negócio para
              transformar obrigações em valor contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-[16px] border border-slate-200/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EAF2F6] text-[#154671] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#0a1628] mb-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bloco Texto / Imagem */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                Compromisso com o Cliente
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
                A contabilidade como instrumento de gestão.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                <p>
                  Entregamos acompanhamento próximo, visão estratégica e informações que ajudam sua
                  empresa a crescer com organização, previsibilidade de fluxo e total segurança
                  patrimonial.
                </p>
                <p>
                  Utilizamos automações, inteligência analítica e ferramentas modernas para ampliar
                  a agilidade, a precisão e a qualidade das análises — com decisão sempre humana,
                  ética e orientada pela governança corporativa.
                </p>
                <p>
                  Com fechamentos em data fixa e interlocução permanente, nossa equipe apoia sua
                  diretoria em auditorias, rodadas de captação, reestruturações societárias e
                  discussões tributárias de alta complexidade.
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="lg:col-span-5">
              <DarkHorseFrame
                src={IMAGES.diferenciaisBlock}
                alt="Consultores da C Cont em reunião de acompanhamento"
                offsetColor="bg-[#EAF2F6]"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
