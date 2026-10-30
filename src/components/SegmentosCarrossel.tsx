import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Factory,
  Briefcase,
  HeartPulse,
  HardHat,
  Sprout,
  Cpu,
  Building2,
  CheckCircle2,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export interface SegmentItem {
  id: string
  name: string
  tag: string
  photo: string
  icon: React.ComponentType<{ className?: string }>
  summary: string
  description: string
  topics: string[]
}

export const SEGMENTS: SegmentItem[] = [
  {
    id: 'comercio',
    name: 'Comércio',
    tag: 'Varejo & Atacado',
    photo: 'https://img.usecurling.com/p/800/600?q=store+retail',
    icon: ShoppingBag,
    summary: 'Estruturação contábil e fiscal de alta precisão para empresas comerciais físicas e digitais.',
    description:
      'A C Cont apoia empresas do comércio atacadista e varejista na gestão estratégica de estoques, apuração rigorosa de ICMS e substituição tributária. Mapeamos incentivos fiscais setoriais e organizamos rotinas ágeis para garantir fechamentos em data fixa. Nossas análises oferecem previsibilidade de margem e segurança contra autuações em operações interestaduais.',
    topics: [
      'Rotinas fiscais e controle de ICMS, ICMS-ST e DIFAL',
      'Regime tributário ideal (Lucro Real vs. Lucro Presumido)',
      'Gestão contábil e conciliação de estoques e custos de mercadoria',
      'Cumprimento rigoroso de obrigações acessórias (SPED Fiscal e EFD)',
      'Planejamento tributário para canais omnichannel e e-commerce',
    ],
  },
  {
    id: 'industria',
    name: 'Indústria',
    tag: 'Transformação & Manufatura',
    photo: 'https://img.usecurling.com/p/800/600?q=factory+industry',
    icon: Factory,
    summary: 'Controle acurado de custos produtivos, IPI e incentivos à industrialização.',
    description:
      'Para a indústria, entregamos contabilidade de custos estruturada e acompanhamento contínuo dos créditos de insumos (IPI, PIS/Cofins e ICMS). Nossa equipe atua na conformidade de processos fabris, na integração do Bloco K e na identificação de benefícios fiscais regionais e setoriais. Com números claros, a diretoria industrial toma decisões fabris com embasamento técnico e solidez.',
    topics: [
      'Contabilidade de custos industriais e controle de absorção',
      'Aproveitamento integral de créditos fiscais sobre insumos e energia',
      'Gestão e transmissão do Bloco K do SPED Fiscal',
      'Auditoria de folha e encargos da mão de obra fabril',
      'Planejamento tributário voltado à expansão de linhas industriais',
    ],
  },
  {
    id: 'servicos',
    name: 'Serviços',
    tag: 'Corporativo & Consultivo',
    photo: 'https://img.usecurling.com/p/800/600?q=office+consulting',
    icon: Briefcase,
    summary: 'Otimização tributária de ISS, retenções na fonte e retenção de talentos.',
    description:
      'Prestadores de serviços encontram na C Cont uma parceira consultiva para modelar regimes contratuais e societários adequados. Analisamos com profundidade o enquadramento entre Lucro Presumido e Simples Nacional com Fator R, além de auditar retenções de tributos federais e ISS municipal. Proporcionamos eficiência de fluxo de caixa e total conformidade com clientes corporativos e órgãos públicos.',
    topics: [
      'Análise detalhada de retenções na fonte (IRRF, PIS, Cofins, CSLL e ISS)',
      'Planejamento tributário de alíquotas com base no Fator R e presunções',
      'Folha de pagamento estratégica e gestão de contratos PJ vs. CLT',
      'Emissão e controle de certidões negativas (CNDs) para licitações e contratos',
      'Precificação de honorários e planejamento financeiro de serviços',
    ],
  },
  {
    id: 'saude',
    name: 'Saúde',
    tag: 'Clínicas & Grupos Médicos',
    photo: 'https://img.usecurling.com/p/800/600?q=doctor+clinic',
    icon: HeartPulse,
    summary: 'Equiparação hospitalar, segurança médica societária e conformidade fiscal na área de saúde.',
    description:
      'Estruturamos clínicas, laboratórios e consultórios médicos com foco em proteção patrimonial e redução da base de cálculo de IRPJ e CSLL por meio da equiparação hospitalar legal. Orientamos a divisão societária entre profissionais de saúde e asseguramos o cumprimento de normas contábeis específicas do setor médico. Atuação próxima para mitigar riscos fiscais e garantir conformidade médica.',
    topics: [
      'Estruturação para benefício legal de equiparação hospitalar (8% IRPJ / 12% CSLL)',
      'Organização de sociedades simples e limitadas unipessoais médicas',
      'DMED, folha médica e cumprimento de exigências setoriais',
      'Gestão de plantões, repasses a profissionais parceiros e encargos',
      'Planejamento tributário preventivo para clínicas e centros diagnósticos',
    ],
  },
  {
    id: 'construcao',
    name: 'Construção',
    tag: 'Engenharia & Incorporação',
    photo: 'https://img.usecurling.com/p/800/600?q=architecture+construction',
    icon: HardHat,
    summary: 'Patrimônio de Afetação, Regime Especial de Tributação (RET) e controle por obra.',
    description:
      'Apoiamos incorporadoras, construtoras e loteadoras com controle contábil individualizado por obra e constituição de Sociedades de Propósito Específico (SPEs). Conduzimos a adesão ao RET (Regime Especial de Tributação) com alíquota unificada de 4%, gerando expressiva economia fiscal. Nosso time monitora apropriação de receitas pelo método POC (Percentage of Completion) e assegura governança com investidores e bancos.',
    topics: [
      'Adesão e controle contábil do Regime Especial de Tributação (RET 4%)',
      'Reconhecimento de receita imobiliária por evolução de obra (método POC)',
      'Abertura e gestão contábil de SPEs e Patrimônio de Afetação',
      'Gestão de folha, CNO, SERO e regularização de obras perante a Receita',
      'Planejamento tributário societário para novos lançamentos imobiliários',
    ],
  },
  {
    id: 'agronegocio',
    name: 'Agronegócio',
    tag: 'Produtores & Agroindústria',
    photo: 'https://img.usecurling.com/p/800/600?q=agriculture+farm',
    icon: Sprout,
    summary: 'Livro Caixa Digital do Produtor Rural, Funrural e gestão de ativos biológicos.',
    description:
      'Para produtores rurais individuais e agroindústrias, a C Cont assegura a conformidade do LCDPR (Livro Caixa Digital do Produtor Rural) e a correta apuração do Funrural sobre a comercialização da produção. Desenhamos a transição segura entre a atuação na pessoa física e a pessoa jurídica, preservando benefícios fiscais e estruturando a sucessão familiar do patrimônio rural.',
    topics: [
      'Escrituração completa do Livro Caixa Digital do Produtor Rural (LCDPR)',
      'Opção e apuração adequada de contribuição previdenciária e Funrural',
      'Contabilização de ativos biológicos e safras com base na norma CPC 29',
      'Estruturação societária de condomínios agrários e empresas agropecuárias',
      'Planejamento tributário e sucessão do patrimônio e terras produtivas',
    ],
  },
  {
    id: 'tecnologia',
    name: 'Tecnologia',
    tag: 'Startups, SaaS & Digitais',
    photo: 'https://img.usecurling.com/p/800/600?q=coding+software',
    icon: Cpu,
    summary: 'Incentivos à inovação, operações cross-border e escalabilidade contábil.',
    description:
      'Empresas de software, plataformas SaaS e startups encontram na C Cont processos 100% digitais integrados a gateways de pagamento e sistemas de gestão. Avaliamos incentivos da Lei do Bem, enquadramento de receitas de licenciamento de software e tributação sobre serviços no exterior. Garantimos números auditáveis prontos para rodadas de investimento (Seed e Venture Capital).',
    topics: [
      'Enquadramento fiscal de SaaS, licenciamento e cessão de uso de software',
      'Tributação de receitas no exterior e faturamento de clientes internacionais',
      'Avaliação e aplicação de incentivos fiscais de P&D (Lei do Bem)',
      'Folha de pagamento de desenvolvedores, contratação remota e stock options',
      'Demonstrações financeiras auditáveis para fundos de investimento e investidores-anjo',
    ],
  },
  {
    id: 'holdings',
    name: 'Holdings e Patrimônio',
    tag: 'Proteção & Sucessão Familiar',
    photo: 'https://img.usecurling.com/p/800/600?q=skyscraper+building',
    icon: Building2,
    summary: 'Blindagem patrimonial lícita, governança sucessória e eficiência em locações e dividendos.',
    description:
      'A C Cont estrutura Holdings Patrimoniais e Familiares para organizar o patrimônio de famílias e grupos empresariais. Reduzimos a tributação sobre rendimentos de aluguéis e ganhos de capital na venda de imóveis, além de desenhar o plano de sucessão em vida com doação de quotas com reserva de usufruto. Uma condução séria e sigilosa para preservar o legado familiar.',
    topics: [
      'Constituição e escrituração de Holdings Patrimoniais, Rurais e Familiares',
      'Redução da carga tributária sobre locação de imóveis próprios (de 27,5% para ~11,33%)',
      'Estruturação contábil da sucessão em vida via doação com reserva de usufruto',
      'Regras societárias de governança, acordo de sócios e proteção de bens',
      'Planejamento tributário para ganho de capital na alienação de ativos imobiliários',
    ],
  },
]

export default function SegmentosCarrossel() {
  const [selectedSegment, setSelectedSegment] = useState<SegmentItem | null>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-20 lg:py-28 bg-[#EEF2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
              Especialização Setorial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00102A] tracking-tight">
              SEGMENTOS ATENDIDOS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Compreendemos as exigências tributárias, fiscais e societárias específicas de cada setor
              econômico, entregando inteligência contábil adaptada ao seu modelo de negócio.
            </p>
          </div>

          {/* Controles de Navegação (Desktop/Tablet) */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Segmento anterior"
              className="w-11 h-11 rounded-full bg-white text-[#00102A] hover:bg-[#00102A] hover:text-white border border-slate-300 shadow-sm flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Próximo segmento"
              className="w-11 h-11 rounded-full bg-white text-[#00102A] hover:bg-[#00102A] hover:text-white border border-slate-300 shadow-sm flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carrossel Embla */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="flex gap-6">
            {SEGMENTS.map((seg) => {
              const Icon = seg.icon
              return (
                <div
                  key={seg.id}
                  className="flex-[0_0_86%] sm:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0"
                >
                  <div className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    {/* Foto real Pexels com tag */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <img
                        src={seg.photo}
                        alt={`Atuação no segmento ${seg.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00102A]/85 via-[#00102A]/20 to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#00102A]/80 backdrop-blur-xs text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                        {seg.tag}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-xl font-bold tracking-tight">{seg.name}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Descrição curta + botão Saiba Mais */}
                    <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {seg.summary}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedSegment(seg)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#EEF2F7] hover:bg-[#00102A] text-[#00102A] hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Saiba mais
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bolinhas de Navegação */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-8 bg-[#00102A]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal detalhado do segmento selecionado */}
      <Dialog open={!!selectedSegment} onOpenChange={(open) => !open && setSelectedSegment(null)}>
        {selectedSegment && (
          <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden rounded-2xl border-none shadow-2xl">
            {/* Foto de cabeçalho do Modal */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#00102A]">
              <img
                src={selectedSegment.photo}
                alt={selectedSegment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00102A] via-[#00102A]/50 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest font-semibold text-sky-300 block mb-1">
                  Atuação Especializada
                </span>
                <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {selectedSegment.name}
                </DialogTitle>
                <p className="text-xs text-slate-200 mt-0.5">{selectedSegment.tag}</p>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0B2347] mb-2">
                  O que a C Cont faz para este segmento
                </h4>
                <DialogDescription className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {selectedSegment.description}
                </DialogDescription>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0B2347] mb-3">
                  Tópicos principais de atuação
                </h4>
                <div className="space-y-2.5">
                  {selectedSegment.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Dúvidas sobre o regime da sua empresa neste setor?
                </span>
                <a
                  href="/contato"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#00102A] hover:bg-[#0B2347] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors"
                >
                  Falar com um especialista
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
