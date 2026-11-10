import { motion } from 'motion/react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { EASE } from '@/lib/motion'

// Foto Pexels do Recife
const RECIFE_IMAGE =
  'https://images.' +
  'pexels.com/photos/7654117/pexels-photo-7654117.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function OndeEstamos() {
  return (
    <div>
      {/* Banner fino */}
      <section className="relative h-[42vh] min-h-[320px] flex items-end overflow-hidden bg-[#00102A]">
        <motion.img
          src={RECIFE_IMAGE}
          alt="Vista aérea do Recife"
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
            Onde estamos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-3 text-[28px] sm:text-[34px] font-light text-white tracking-tight"
          >
            Recife, Pernambuco.
          </motion.h1>
        </div>
      </section>

      {/* Endereço + mapa */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Dados de contato */}
            <Reveal className="lg:col-span-5 space-y-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
                  Escritório
                </p>
                <div className="mt-6 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#00102A] shrink-0 mt-0.5" strokeWidth={1.25} />
                  <div>
                    <h3 className="text-base font-normal text-[#00102A]">C Cont Contabilidade</h3>
                    <p className="mt-2 text-sm font-light text-[#00102A]/60 leading-relaxed">
                      Recife — Pernambuco, Brasil
                      <br />
                      Atendimento presencial com agendamento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium">
                  Contato
                </p>
                <a
                  href="mailto:controladoria@ccont.cnt.com.br"
                  className="flex items-center gap-4 text-sm font-light text-[#00102A]/70 hover:text-[#00102A] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-[#00102A] shrink-0" strokeWidth={1.25} />
                  controladoria@ccont.cnt.com.br
                </a>
                <a
                  href="tel:+5581996887921"
                  className="flex items-center gap-4 text-sm font-light text-[#00102A]/70 hover:text-[#00102A] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-[#00102A] shrink-0" strokeWidth={1.25} />
                  +55 81 99688-7921
                </a>
                <div className="flex items-center gap-4 text-sm font-light text-[#00102A]/70">
                  <Clock className="w-5 h-5 text-[#00102A] shrink-0" strokeWidth={1.25} />
                  Segunda a sexta, 8h às 18h
                </div>
              </div>
            </Reveal>

            {/* Mapa do Google — Recife/PE */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="w-full h-[320px] sm:h-[420px] bg-[#F7F8FA] border border-[#00102A]/10 overflow-hidden">
                <iframe
                  title="Mapa — C Cont Contabilidade, Recife/PE"
                  src="https://www.google.com/maps?q=Recife,+Pernambuco,+Brasil&output=embed"
                  className="w-full h-full border-0 grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Foto do Recife em largura total */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <img
          src={RECIFE_IMAGE}
          alt="Recife vista do alto"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#00102A]/40" aria-hidden="true" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-5 sm:px-8 flex items-center">
          <p className="text-[20px] sm:text-[26px] font-light text-white max-w-xl leading-snug">
            Perto de você, onde quer que sua empresa esteja — atendimento também 100% digital.
          </p>
        </div>
      </section>
    </div>
  )
}
