import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { EASE } from '@/lib/motion'

const BANNER_IMAGE =
  'https://images.' +
  'pexels.com/photos/7654438/pexels-photo-7654438.jpeg?auto=compress&cs=tinysrgb&w=1920'

const PILARES = [
  {
    title: 'Rigor técnico',
    desc: 'Precisão contábil e fiscal com padrão auditável, do lançamento ao relatório gerencial.',
  },
  {
    title: 'Proximidade',
    desc: 'Interlocução direta com a diretoria, na linguagem do negócio — não apenas da contabilidade.',
  },
  {
    title: 'Visão de futuro',
    desc: 'Tecnologia, automação e leitura antecipada das mudanças tributárias que afetam a operação.',
  },
]

export default function QuemSomos() {
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
            Quem somos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-3 text-[28px] sm:text-[34px] font-light text-white tracking-tight"
          >
            Uma contabilidade feita para decidir junto.
          </motion.h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
              Nosso propósito
            </p>
            <h2 className="mt-4 text-[26px] sm:text-[32px] font-light text-[#00102A] leading-snug">
              A C Cont nasceu para ser diferente das contabilidades tradicionais: menos cumprimento
              de obrigação, mais orientação de decisão.
            </h2>
            <p className="mt-8 text-[15px] font-light text-[#00102A]/70 leading-relaxed">
              Atendemos empresas de médio e grande porte em todo o Brasil, com operação digital e
              presencial em Recife. Integramos rotina contábil, inteligência fiscal e compliance em
              um serviço único, conduzido por quem conhece o negócio de perto.
            </p>
          </Reveal>

          {/* Pilares */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {PILARES.map((pilar, i) => (
              <Reveal key={pilar.title} delay={i * 0.08}>
                <span className="block text-[11px] uppercase tracking-[0.25em] text-[#00102A]/40 font-medium">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-normal text-[#00102A] tracking-tight">
                  {pilar.title}
                </h3>
                <p className="mt-3 text-sm font-light text-[#00102A]/60 leading-relaxed">
                  {pilar.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-[24px] sm:text-[28px] font-light text-[#00102A]">
              Conheça o que fazemos por empresas como a sua.
            </h2>
            <Link
              to="/servicos"
              className="group mt-8 inline-flex items-center gap-2.5 border border-[#00102A]/30 px-7 py-3 text-[13px] tracking-wide text-[#00102A] hover:bg-[#00102A] hover:text-white transition-colors duration-400"
            >
              Nossos serviços
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
