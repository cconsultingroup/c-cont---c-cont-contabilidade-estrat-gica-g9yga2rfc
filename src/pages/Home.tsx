import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, BarChart3, Scale, RefreshCcw } from 'lucide-react'
import { staggerContainer, staggerItem, EASE } from '@/lib/motion'

// Foto Pexels 7654438 (mesma do hero anterior) — fundo do hero.
const HERO_IMAGE =
  'https://images.' +
  'pexels.com/photos/7654438/pexels-photo-7654438.jpeg?auto=compress&cs=tinysrgb&w=2000'

const WHAT_WE_DO = [
  {
    icon: BarChart3,
    title: 'Contabilidade Estratégica',
    desc: 'Rotina contábil precisa, fechamentos em data fixa e informação pronta para decidir.',
  },
  {
    icon: Scale,
    title: 'Inteligência Tributária',
    desc: 'Preparação para a Reforma CBS/IBS/IS com planejamento e simulações antecipadas.',
  },
  {
    icon: RefreshCcw,
    title: 'Recuperação de Encargos',
    desc: 'Revisão de contribuições ao Sistema S, SENAI, SESC, SEBRAE e similares.',
  },
]

export default function Home() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // Parallax suave no fundo da hero
  const bgY = useTransform(scrollY, [0, 800], [0, 120])
  const bgScale = useTransform(scrollY, [0, 800], [1.08, 1.16])

  return (
    <div className="bg-white">
      {/* ── 1. HERO (100vh) ─────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[560px] flex items-center overflow-hidden bg-[#00102A]">
        {/* Fundo com zoom lento + parallax */}
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { y: bgY, scale: bgScale }}
          initial={reduce ? undefined : { scale: 1.14 }}
          animate={reduce ? undefined : { scale: 1.08 }}
          transition={{ duration: 10, ease: EASE }}
        >
          <img src={HERO_IMAGE} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </motion.div>
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-[#00102A]/60" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#00102A]/50 via-transparent to-[#00102A]/40"
          aria-hidden="true"
        />

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-14">
          <motion.div
            variants={staggerContainer(0.14, 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p
              variants={staggerItem}
              className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/70 font-medium"
            >
              Contabilidade Consultiva · Recife/PE
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="mt-5 text-[30px] sm:text-[44px] leading-[1.12] font-light text-white tracking-tight"
            >
              Contabilidade que orienta decisões.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-5 text-sm sm:text-base font-light text-white/75 leading-relaxed max-w-lg"
            >
              Escrituração precisa, inteligência fiscal e compliance em um só parceiro — para
              empresas de médio e grande porte.
            </motion.p>

            <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/servicos"
                className="group inline-flex items-center gap-2.5 border border-white/40 px-7 py-3 text-[13px] tracking-wide text-white hover:bg-white hover:text-[#00102A] transition-colors duration-400"
              >
                Conheça nossos serviços
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/fale-conosco"
                className="text-[13px] tracking-wide text-white/80 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors duration-300"
              >
                Fale conosco
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador de scroll discreto */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          aria-hidden="true"
        >
          <div className="w-px h-10 bg-white/30 overflow-hidden">
            <motion.div
              className="w-full h-4 bg-white/80"
              animate={reduce ? undefined : { y: [-16, 40] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── 2. O QUE FAZEMOS (100vh) ────────────────────── */}
      <section className="h-[100svh] min-h-[620px] flex items-center bg-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={staggerItem}
              className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#00102A]/50 font-medium"
            >
              O que fazemos
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="mt-4 max-w-2xl text-[26px] sm:text-[32px] leading-snug font-light text-[#00102A]"
            >
              Somos um escritório de contabilidade consultiva que integra rotina contábil,
              inteligência fiscal e compliance para empresas de médio e grande porte.
            </motion.h2>

            {/* 3 colunas */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {WHAT_WE_DO.map((item) => (
                <motion.div key={item.title} variants={staggerItem}>
                  <Link to="/servicos" className="group block">
                    {/* Ícone de traço fino */}
                    <item.icon
                      className="w-7 h-7 text-[#00102A] stroke-[1.25] transition-transform duration-500 group-hover:-translate-y-1"
                      strokeWidth={1.25}
                    />
                    <h3 className="mt-5 text-base sm:text-lg font-normal text-[#00102A] tracking-tight">
                      {item.title}
                    </h3>
                    {/* Linha fina que expande no hover */}
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-px w-8 bg-[#00102A]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#00102A]"
                    />
                    <p className="mt-4 text-sm font-light text-[#00102A]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
