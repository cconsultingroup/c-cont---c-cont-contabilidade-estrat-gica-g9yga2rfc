import { motion } from 'motion/react'
import {
  GraduationCap,
  TrendingUp,
  Users2,
  Sparkles,
  Laptop2,
  Award,
  MapPin,
  Briefcase,
  ArrowRight,
  Send,
} from 'lucide-react'
import Reveal from '@/components/Reveal'
import { EASE } from '@/lib/motion'

interface JobPosition {
  id: string
  title: string
  department: string
  regime: string
  contractType: string
  summary: string
}

const BANNER_IMAGE =
  'https://images.' +
  'pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920'

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
  return (
    <div>
      {/* Banner fino */}
      <section className="relative h-[42vh] min-h-[320px] flex items-end overflow-hidden bg-[#00102A]">
        <motion.img
          src={BANNER_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <div className="absolute inset-0 bg-[#00102A]/70" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-10">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-medium"
          >
            Carreiras
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-3 text-[28px] sm:text-[34px] font-light text-white tracking-tight"
          >
            Construa sua trajetória aqui.
          </motion.h1>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
              Trabalhe conosco
            </p>
            <h2 className="mt-4 text-[26px] sm:text-[32px] font-light text-[#00102A] leading-snug">
              Como é trabalhar na C Cont.
            </h2>
            <p className="mt-8 text-[15px] font-light text-[#00102A]/70 leading-relaxed">
              Acreditamos que a excelência no serviço começa pela valorização das pessoas. Aqui, a
              equipe participa da contabilidade consultiva e da inteligência fiscal que orientam as
              grandes decisões — em um ambiente colaborativo, moderno e acolhedor, onde boas ideias
              são ouvidas e o aprendizado faz parte do cotidiano.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-light text-[#00102A]/60">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00102A]" strokeWidth={1.25} />
                Boa Viagem — Recife/PE
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00102A]" strokeWidth={1.25} />
                Meritocracia e aprendizado contínuo
              </span>
            </div>
          </Reveal>

          {/* Benefícios */}
          <div className="mt-16">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
                Pilares de crescimento
              </p>
              <h3 className="mt-4 text-[24px] sm:text-[28px] font-light text-[#00102A]">
                Benefícios e desenvolvimento profissional
              </h3>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {BENEFITS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <item.icon className="w-6 h-6 text-[#00102A]" strokeWidth={1.25} />
                  <h4 className="mt-4 text-base font-normal text-[#00102A] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-sm font-light text-[#00102A]/60 leading-relaxed">
                    {item.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oportunidades abertas */}
      <section className="py-20 lg:py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
              Faça parte
            </p>
            <h2 className="mt-4 text-[26px] sm:text-[30px] font-light text-[#00102A]">
              Oportunidades abertas
            </h2>
            <p className="mt-4 text-sm font-light text-[#00102A]/60 max-w-xl leading-relaxed">
              Candidate-se enviando seu currículo diretamente para nossa controladoria.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {OPEN_POSITIONS.map((position, i) => {
              const mailSubject = encodeURIComponent(`Candidatura — ${position.title}`)
              const mailHref = `mailto:controladoria@ccont.cnt.com.br?subject=${mailSubject}`
              return (
                <Reveal key={position.id} delay={i * 0.04}>
                  <div className="group bg-white border border-[#00102A]/10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#00102A]/40 hover:-translate-y-0.5 transition-all duration-400">
                    <div className="space-y-2.5 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-[#00102A]/50 font-medium">
                        <span>{position.department}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" strokeWidth={1.25} />
                          {position.contractType}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" strokeWidth={1.25} />
                          {position.regime}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-normal text-[#00102A] tracking-tight">
                        {position.title}
                      </h3>
                      <p className="text-sm font-light text-[#00102A]/60 leading-relaxed">
                        {position.summary}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <a
                        href={mailHref}
                        className="group/link inline-flex items-center gap-2.5 border border-[#00102A]/30 px-6 py-3 text-[13px] tracking-wide text-[#00102A] hover:bg-[#00102A] hover:text-white transition-colors duration-400"
                      >
                        Candidate-se
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Candidatura espontânea */}
          <Reveal delay={0.05}>
            <div className="mt-10 p-8 sm:p-10 bg-white border border-[#00102A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-normal text-[#00102A]">Não encontrou sua vaga?</h3>
                <p className="mt-2 text-sm font-light text-[#00102A]/60 leading-relaxed max-w-xl">
                  Estamos sempre em busca de talentos. Envie seu currículo com sua área de interesse
                  para o nosso banco de talentos.
                </p>
              </div>
              <a
                href="mailto:controladoria@ccont.cnt.com.br?subject=Candidatura%20espont%C3%A2nea"
                className="shrink-0 inline-flex items-center gap-2.5 border border-[#00102A]/30 px-6 py-3 text-[13px] tracking-wide text-[#00102A] hover:bg-[#00102A] hover:text-white transition-colors duration-400"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
                Candidatura espontânea
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
