import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SegmentosCarrossel from '@/components/SegmentosCarrossel'
import { HERO_VIDEO_SRC, HERO_POSTER_SRC } from '@/lib/siteImages'

export default function Home() {
  useEffect(() => {
    document.title =
      'C Cont | Contabilidade Estratégica — Sua contabilidade segura e estratégica para decisões mais claras'
  }, [])

  return (
    <div className="flex flex-col">
      {/* ================= 1) HERO EM TELA CHEIA COM VÍDEO ================= */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden bg-[#00102A]">
        {/* Vídeo em tela cheia com overlay escuro */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER_SRC}
            className="w-full h-full object-cover object-center filter brightness-[0.8]"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          {/* Overlay azul-marinho #00102A ~60% */}
          <div className="absolute inset-0 bg-[#00102A]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00102A] via-transparent to-transparent opacity-90" />
        </div>

        {/* Conteúdo centralizado - novo título */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Sua contabilidade segura e estratégica para decisões mais claras.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Rigor técnico, informação clara e acompanhamento próximo para embasar cada decisão.
          </p>
        </div>
      </section>

      {/* ================= 3) BLOCO "CONTABILIDADE ESTRATÉGICA PARA EMPRESAS" COM IMAGEM DE FUNDO ================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#00102A] text-white">
        {/* Imagem de fundo com overlay azul-marinho ~70% */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=business+meeting+office"
            alt="Contabilidade estratégica para empresas"
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-[#00102A]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00102A]/90 via-[#00102A]/75 to-[#00102A]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Contabilidade estratégica para empresas.
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Atuamos como um braço consultivo essencial para a sua diretoria, integrando inteligência
              fiscal, conformidade regulatória rigorosa e relatórios gerenciais estruturados para a
              tomada de decisões de alto impacto.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Com metodologias ágeis de fechamento contábil e auditoria preventiva contínua,
              garantimos total conformidade tributária e previsibilidade orçamentária, transformando
              obrigações fiscais em alavancas de eficiência e competitividade.
            </p>
            <div className="pt-2">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#00102A] hover:bg-[#EEF2F7] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg group"
              >
                Conheça nossos serviços
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4) SEGMENTOS ATENDIDOS (CARROSSEL COM MODAL) ================= */}
      <SegmentosCarrossel />

      {/* ================= 5) BLOCO TRIBUTÁRIO COM IMAGEM DE FUNDO ================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#00102A] text-white">
        {/* Imagem de fundo com overlay escuro */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=finance+analytics+tax"
            alt="Planejamento tributário e Reforma do Consumo"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-[#00102A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00102A] via-[#00102A]/70 to-[#00102A]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-400">
              Inteligência Tributária
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Planejamento tributário e Reforma do Consumo
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Com o advento da Reforma Tributária (CBS, IBS e Imposto Seletivo) e as revisões em
              contribuições sobre a folha, preparamos as empresas para a transição fiscal com segurança
              jurídica, mapeamento de créditos e redução legítima de encargos.
            </p>
          </div>

          {/* Conteúdo em 2 colunas / cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-[#00102A]/80 backdrop-blur-md border border-white/15 hover:border-sky-400/50 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[11px] font-semibold tracking-wider uppercase mb-4">
                Transição Fiscal 2026+
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                New Tax Plan
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Preparação estratégica para a Reforma do Consumo – CBS, IBS e IS: mapeamento de
                impactos na cadeia de suprimentos, modelagem de transição alíquota a alíquota,
                revisão de precificação e regimes de não-cumulatividade plena para proteger a margem do
                seu negócio.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#00102A]/80 backdrop-blur-md border border-white/15 hover:border-sky-400/50 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[11px] font-semibold tracking-wider uppercase mb-4">
                Recuperação & Eficiência
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Sistema S e encargos
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Revisão e recuperação administrativa de contribuições recolhidas indevidamente ao
                Sistema S e encargos sobre a folha de pagamento, com metodologia respaldada pelos
                precedentes dos tribunais superiores e total conformidade com as normas da Receita
                Federal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
