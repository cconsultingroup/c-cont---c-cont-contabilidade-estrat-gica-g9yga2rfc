import React, { useEffect } from 'react'
import {
  GraduationCap,
  TrendingUp,
  Users2,
  Sparkles,
  Laptop2,
  Award,
  MapPin,
  Briefcase,
  Clock,
  Mail,
  ArrowRight,
  Send,
  Building,
} from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import DarkHorseFrame from '@/components/DarkHorseFrame'
import { IMAGES } from '@/lib/siteImages'

interface JobPosition {
  id: string
  title: string
  department: string
  regime: string
  contractType: string
  summary: string
}

const BENEFITS = [
  {
    title: 'Desenvolvimento e Certificações',
    desc: 'Incentivo e subsídio para certificações técnicas (CRC, especializações tributárias e programas de educação continuada).',
    icon: GraduationCap,
  },
  {
    title: 'Plano de Carreira Estruturado',
    desc: 'Caminho de evolução claro com critérios transparentes de promoção, mérito e crescimento contínuo de competências.',
    icon: TrendingUp,
  },
  {
    title: 'Mentoria com Sócios e Liderança',
    desc: 'Acompanhamento próximo de profissionais sêniores, proporcionando aprendizado prático e visão estratégica de negócios.',
    icon: Users2,
  },
  {
    title: 'Ambiente Colaborativo',
    desc: 'Cultura baseada no respeito, cooperação mútua, troca técnica horizontal e foco compartilhado na excelência do cliente.',
    icon: Sparkles,
  },
  {
    title: 'Rotina Flexível e Híbrida',
    desc: 'Equilíbrio real entre presença no escritório em Boa Viagem (Recife/PE) e dias de trabalho remoto com infraestrutura moderna.',
    icon: Laptop2,
  },
  {
    title: 'Projetos de Alto Impacto',
    desc: 'Atuação consultiva em clientes de médio e grande porte, com contato direto com planejamento fiscal e inteligência contábil.',
    icon: Award,
  },
]

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'analista-contabil',
    title: 'Analista Contábil',
    department: 'Contabilidade Consultiva',
    regime: 'Híbrido — Recife/PE',
    contractType: 'CLT',
    summary:
      'Fechamentos mensais, conciliações patrimoniais e elaboração de demonstrações contábeis (DRE, Balanço, DFC) para empresas de médio e grande porte.',
  },
  {
    id: 'assistente-fiscal',
    title: 'Assistente Fiscal',
    department: 'Inteligência Fiscal',
    regime: 'Híbrido — Recife/PE',
    contractType: 'CLT',
    summary:
      'Apuração de tributos diretos e indiretos (Lucro Real e Presumido), conferência de notas fiscais e entrega de obrigações acessórias (SPED, EFD).',
  },
  {
    id: 'analista-folha-dp',
    title: 'Analista de Folha / Departamento Pessoal',
    department: 'Gestão de Pessoas e Folha',
    regime: 'Híbrido — Recife/PE',
    contractType: 'CLT',
    summary:
      'Processamento de folha de pagamento, encargos sociais, eSocial, rotinas de admissão e rescisão e suporte às relações trabalhistas.',
  },
  {
    id: 'estagio-ciencias-contabeis',
    title: 'Estágio em Ciências Contábeis',
    department: 'Operações Contábeis',
    regime: 'Presencial / Híbrido — Recife/PE',
    contractType: 'Estágio',
    summary:
      'Suporte na classificação contábil, conciliação bancária, organização documental e acompanhamento de relatórios com mentoria sênior.',
  },
  {
    id: 'assistente-atendimento-controladoria',
    title: 'Assistente de Atendimento / Controladoria',
    department: 'Controladoria e Atendimento',
    regime: 'Híbrido — Recife/PE',
    contractType: 'CLT',
    summary:
      'Interface consultiva direta com clientes, elaboração de relatórios executivos de controladoria e acompanhamento de chamados técnicos.',
  },
]

export default function Carreiras() {
  useEffect(() => {
    document.title = 'Carreiras | C Cont — Contabilidade Estratégica'
  }, [])

  return (
    <div className="flex flex-col">
      {/* 1. Banner topo (~45vh) */}
      <PageBanner
        title="Carreiras"
        subtitle="Construa sua trajetória profissional em um ambiente que une rigor técnico, contabilidade consultiva e desenvolvimento contínuo."
        imageSrc={IMAGES.carreirasBanner}
        breadcrumb="Oportunidades"
      />

      {/* 2. Introdução curta + Bloco 'Como é trabalhar na C Cont' (Texto + Moldura DarkHorseFrame) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
                Trabalhe Conosco
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00102A] leading-tight">
                Como é trabalhar na C Cont.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <p>
                  Na <strong className="text-slate-900 font-bold">C Cont Contabilidade</strong>,
                  acreditamos que a excelência nos serviços prestados aos nossos clientes começa
                  pela valorização e capacitação das nossas pessoas. Atuamos como uma consultoria
                  independente que alia precisão técnica e proximidade humana.
                </p>
                <p>
                  Aqui, você encontra uma cultura pautada no rigor técnico, no compromisso ético e
                  no desenvolvimento profissional acelerado. Mais do que processar dados, nossa
                  equipe participa ativamente da contabilidade consultiva e da inteligência fiscal
                  que orientam as grandes decisões corporativas.
                </p>
                <p>
                  Oferecemos um ambiente colaborativo, moderno e acolhedor, onde boas ideias são
                  ouvidas, a autonomia é incentivada e o aprendizado faz parte do cotidiano de cada
                  departamento.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-sky-600" />
                  <span>Sede no Empresarial Alexandre de Castro e Silva — Recife/PE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Cultura de meritocracia e aprendizado contínuo</span>
                </div>
              </div>
            </div>

            {/* Imagem com moldura DarkHorseFrame (offset + cruzes decorativas) */}
            <div className="lg:col-span-5">
              <DarkHorseFrame
                src={IMAGES.carreirasTrabalhar}
                alt="Profissionais trabalhando em equipe na C Cont"
                offsetColor="bg-[#EEF2F7]"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grid de cards de Benefícios e Desenvolvimento */}
      <section className="py-20 lg:py-28 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
              Pilares de Crescimento
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00102A]">
              Benefícios e desenvolvimento profissional
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Investimos na sua evolução para que sua carreira alcance o mesmo nível de excelência
              que entregamos aos nossos parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BENEFITS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-[16px] border border-slate-200/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EEF2F7] text-[#00102A] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#0B2347]" />
                    </div>
                    <h3 className="font-bold text-xl text-[#00102A] mb-3">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Seção 'Oportunidades' com cards de vagas abertas */}
      <section id="vagas" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B2347]">
              Faça Parte
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00102A]">
              Oportunidades abertas
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Confira as posições disponíveis em nossa equipe e candidate-se enviando seu currículo
              diretamente para nossa controladoria.
            </p>
          </div>

          <div className="space-y-6">
            {OPEN_POSITIONS.map((position) => {
              const mailSubject = encodeURIComponent(`Candidatura - ${position.title}`)
              const mailHref = `mailto:controladoria@ccont.cnt.com.br?subject=${mailSubject}`

              return (
                <div
                  key={position.id}
                  className="bg-white p-6 sm:p-8 rounded-[16px] border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2F7] text-[#00102A]">
                        {position.department}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-sky-600" />
                        {position.contractType}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-600" />
                        {position.regime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#00102A] group-hover:text-[#0B2347] transition-colors">
                      {position.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {position.summary}
                    </p>
                  </div>

                  <div className="shrink-0 pt-2 lg:pt-0">
                    <a
                      href={mailHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#00102A] hover:bg-[#0B2347] transition-colors shadow-xs group-hover:shadow"
                    >
                      <span>Candidate-se</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 5. Faixa / CTA discreto para candidatura espontânea */}
          <div className="mt-12 p-8 sm:p-10 rounded-[16px] bg-[#EEF2F7] border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-[#00102A]">
                Não encontrou sua vaga?
              </h4>
              <p className="text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
                Estamos sempre em busca de talentos para fortalecer nossa equipe técnica e
                consultiva. Envie seu currículo com sua área de interesse para o nosso banco de
                talentos.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:controladoria@ccont.cnt.com.br?subject=Candidatura%20espont%C3%A2nea"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#00102A] bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
              >
                <Send className="w-4 h-4 text-sky-600" />
                <span>Candidatura espontânea</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
