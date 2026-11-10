import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  BarChart3,
  Scale,
  RefreshCcw,
  ShoppingBag,
  Factory,
  Briefcase,
  HeartPulse,
  HardHat,
  Sprout,
  Cpu,
  Building2,
} from 'lucide-react'
import Reveal from '@/components/Reveal'
import { staggerContainer, staggerItem, EASE } from '@/lib/motion'

// Foto Pexels usada no banner da página
const BANNER_IMAGE =
  'https://images.' +
  'pexels.com/photos/8353821/pexels-photo-8353821.jpeg?auto=compress&cs=tinysrgb&w=1920'

const SERVICOS = [
  {
    icon: BarChart3,
    title: 'Contabilidade Estratégica',
    desc: 'Escrituração precisa, fechamento em data fixa e relatórios que dão à diretoria uma leitura clara do negócio.',
  },
  {
    icon: Scale,
    title: 'New Tax Plan — Reforma CBS/IBS/IS',
    desc: 'Diagnóstico de impacto, simulações de cenários e plano de transição para a nova sistemática tributária.',
  },
  {
    icon: RefreshCcw,
    title: 'Sistema S — Recuperação de Encargos',
    desc: 'Revisão e recuperação de contribuições a SESC, SENAI, SEBRAE e demais entidades do Sistema S.',
  },
]

const SEGMENTOS = [
  { icon: ShoppingBag, name: 'Comércio' },
  { icon: Factory, name: 'Indústria' },
  { icon: Briefcase, name: 'Serviços' },
  { icon: HeartPulse, name: 'Saúde' },
  { icon: HardHat, name: 'Construção' },
  { icon: Sprout, name: 'Agronegócio' },
  { icon: Cpu, name: 'Tecnologia' },
  { icon: Building2, name: 'Holdings' },
]

export default function Servicos() {
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
            Serviços
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-3 text-[28px] sm:text-[34px] font-light text-white tracking-tight"
          >
            O que sustenta a sua operação.
          </motion.h1>
        </div>
      </section>

      {/* Serviços principais */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
              Atuação
            </p>
            <h2 className="mt-4 max-w-2xl text-[28px] sm:text-[32px] font-light text-[#00102A] leading-snug">
              Três frentes, um mesmo padrão de precisão.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          >
            {SERVICOS.map((s) => (
              <motion.div key={s.title} variants={staggerItem} className="group">
                <s.icon className="w-7 h-7 text-[#00102A]" strokeWidth={1.25} />
                <h3 className="mt-5 text-base sm:text-lg font-normal text-[#00102A] tracking-tight">
                  {s.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-px w-8 bg-[#00102A]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#00102A]"
                />
                <p className="mt-4 text-sm font-light text-[#00102A]/60 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Segmentos atendidos */}
      <section className="py-20 lg:py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
              Segmentos
            </p>
            <h2 className="mt-4 text-[28px] sm:text-[32px] font-light text-[#00102A] leading-snug">
              Setores que atendemos.
            </h2>
          </Reveal>

          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          >
            {SEGMENTOS.map((seg) => (
              <motion.li key={seg.name} variants={staggerItem}>
                <div className="group flex flex-col gap-4 border border-[#00102A]/10 bg-white p-7 hover:border-[#00102A]/40 hover:-translate-y-1 transition-all duration-400 cursor-default">
                  <seg.icon className="w-5 h-5 text-[#00102A]" strokeWidth={1.25} />
                  <span className="text-sm font-normal text-[#00102A] tracking-wide">
                    {seg.name}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-[24px] sm:text-[28px] font-light text-[#00102A]">
              Vamos conversar sobre a sua operação?
            </h2>
            <Link
              to="/fale-conosco"
              className="group mt-8 inline-flex items-center gap-2.5 border border-[#00102A]/30 px-7 py-3 text-[13px] tracking-wide text-[#00102A] hover:bg-[#00102A] hover:text-white transition-colors duration-400"
            >
              Fale conosco
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
