import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  Factory,
  Briefcase,
  HeartPulse,
  HardHat,
  Sprout,
  Cpu,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import DarkHorseFrame from '@/components/DarkHorseFrame'
import NumberStats from '@/components/NumberStats'
import SealBadges from '@/components/SealBadges'
import { HERO_VIDEO_SRC, HERO_POSTER_SRC, IMAGES } from '@/lib/siteImages'

export default function Home() {
  useEffect(() => {
    document.title =
      'C Cont | Contabilidade Estratégica — Segurança contábil para decisões mais claras'
  }, [])

  const segments = [
    { name: 'Comércio', desc: 'Varejo e atacado com apuração ágil', icon: ShoppingBag },
    { name: 'Indústria', desc: 'Controle de custos e incentivos fiscais', icon: Factory },
    { name: 'Serviços', desc: 'Tributação otimizada para prestadores', icon: Briefcase },
    { name: 'Saúde', desc: 'Clínicas, consultórios e grupos médicos', icon: HeartPulse },
    { name: 'Construção', desc: 'Engenharia, incorporação e SPEs', icon: HardHat },
    { name: 'Agronegócio', desc: 'Produtores rurais e agroindústria', icon: Sprout },
    { name: 'Tecnologia', desc: 'Startups, SaaS e empresas digitais', icon: Cpu },
    { name: 'Holdings e Patrimônio', desc: 'Proteção societária e sucessão', icon: Building2 },
  ]

  return (
    <div className="flex flex-col">
      {/* ================= A) HERO EM TELA CHEIA COM VÍDEO ================= */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden bg-[#0a1628]">
        {/* Vídeo em tela cheia com overlay escuro ~60% */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER_SRC}
            className="w-full h-full object-cover object-center filter brightness-[0.85]"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          {/* Overlay azul-marinho ~60% */}
          <div className="absolute inset-0 bg-[#0a1628]/60 backdrop-brightness-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80" />
        </div>

        {/* Conteúdo centralizado - apenas texto (sem botões) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Segurança contábil para decisões mais claras.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Rigor técnico, informação clara e acompanhamento próximo para embasar cada decisão.
          </p>
        </div>
      </section>

      {/* ================= B) FAIXA DE NÚMEROS (3 CARDS) ================= */}
      <NumberStats bgColor="bg-[#EAF2F6]" className="bg-white" />

      {/* ================= C) BLOCO TEXTO + IMAGEM (IMAGEM À DIREITA) ================= */}
      <section className="py-20 lg:py-28 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto à esquerda */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                Contabilidade Estratégica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
                Contabilidade estratégica para <span className="text-sky-600">empresas.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                Mais do que cumprir exigências fiscais e burocráticas, estruturamos uma rotina
                contábil que fornece indicadores confiáveis, previsibilidade tributária e
                acompanhamento em tempo real da saúde financeira da sua operação.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Fechamentos em data fixa:</strong> relatórios emitidos a tempo de
                    orientar a tomada de decisão da diretoria.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Tecnologia e automação:</strong> processos integrados sem retrabalho,
                    com dados auditáveis e seguros.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong>Atendimento consultivo:</strong> interlocução técnica direta e suporte
                    contínuo para sua gestão.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem à direita com moldura Dark Horse */}
            <div className="lg:col-span-5">
              <DarkHorseFrame
                src={IMAGES.homeContabilidade}
                alt="Contabilidade estratégica para empresas"
                offsetColor="bg-[#EAF2F6]"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= D) SEGMENTOS ATENDIDOS ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Esquerda: Título + Parágrafo */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                Atuação Multissetorial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628] leading-tight">
                Segmentos atendidos
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                Compreendemos as particularidades tributárias, trabalhistas e regulatórias de cada
                setor da economia, adaptando nossas entregas às exigências específicas do seu modelo
                de negócio.
              </p>
            </div>

            {/* Direita: Lista em 2 colunas com ícones de linha */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {segments.map((seg) => {
                  const Icon = seg.icon
                  return (
                    <div
                      key={seg.name}
                      className="p-6 rounded-[16px] bg-[#F6F5F2] border border-slate-200/60 hover:bg-[#EAF2F6]/60 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#154671] mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#0a1628] mb-1">
                        {seg.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {seg.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= E) BLOCO IMAGEM + TEXTO (IMAGEM À ESQUERDA) ================= */}
      <section className="py-20 lg:py-28 bg-[#EAF2F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Imagem à esquerda */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <DarkHorseFrame
                src={IMAGES.homeTributario}
                alt="Planejamento tributário e Reforma do Consumo"
                offsetColor="bg-white"
                aspectRatio="aspect-[4/3]"
              />
            </div>

            {/* Texto à direita */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
                Inteligência Tributária
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
                Planejamento tributário e Reforma do Consumo.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                Com o advento da Reforma Tributária (CBS, IBS e Imposto Seletivo) e as revisões em
                contribuições ao Sistema S, preparamos as empresas para a transição fiscal com
                segurança jurídica, mapeamento de créditos e redução legítima de encargos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/80 border border-sky-100">
                  <h4 className="font-serif font-bold text-sm text-[#0a1628] mb-1">
                    New Tax Plan (CBS / IBS / IS)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Modelagem de cenários e adequação de cadeia de suprimentos às novas alíquotas e
                    regimes de não-cumulatividade plena.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/80 border border-sky-100">
                  <h4 className="font-serif font-bold text-sm text-[#0a1628] mb-1">
                    Sistema S e Encargos
                  </h4>
                  <p className="text-xs text-slate-600">
                    Análise e recuperação de valores recolhidos indevidamente sobre a folha,
                    respeitando precedentes dos tribunais superiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= F) BLOCO ESCURO (FUNDO AZUL-MARINHO, IMAGEM À DIREITA) ================= */}
      <section className="py-20 lg:py-28 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto à esquerda */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
                Ecossistema Empresarial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Um grupo, soluções integradas.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                A C Cont faz parte do <strong className="text-white">C Consulting Group</strong>,
                atuando de forma sinérgica com a{' '}
                <strong className="text-white">Caldas Advocacia</strong> (direito empresarial,
                tributário e societário) e a <strong className="text-white">C Capital</strong>{' '}
                (estruturação financeira e patrimonial em parceria com o BTG Pactual).
              </p>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Essa convergência técnica garante que sua empresa receba orientações contábeis,
                jurídicas e financeiras alinhadas sob a mesma visão estratégica de crescimento e
                perenidade.
              </p>
              <div className="pt-2">
                <Link
                  to="/quem-somos"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
                >
                  Quem somos
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Imagem à direita com moldura */}
            <div className="lg:col-span-5">
              <DarkHorseFrame
                src={IMAGES.homeGrupo}
                alt="Um grupo, soluções integradas - C Consulting Group"
                offsetColor="bg-slate-800"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= G) FAIXA DE SELOS EM LINHA ================= */}
      <SealBadges />
    </div>
  )
}
