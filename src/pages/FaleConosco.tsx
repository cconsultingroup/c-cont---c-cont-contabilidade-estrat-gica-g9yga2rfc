import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, Clock, Send } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { EASE } from '@/lib/motion'

export default function FaleConosco() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <div>
      {/* Cabeçalho fino */}
      <section className="pt-32 pb-14 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.3em] text-[#00102A]/50 font-medium"
          >
            Fale conosco
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
            className="mt-3 text-[28px] sm:text-[34px] font-light text-[#00102A] tracking-tight"
          >
            Comece por uma conversa.
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            {/* Dados de contato */}
            <Reveal className="lg:col-span-4 space-y-8">
              <p className="text-sm font-light text-[#00102A]/60 leading-relaxed">
                Conte um pouco sobre a sua empresa. Respondemos em até um dia útil.
              </p>
              <div className="space-y-5">
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

            {/* Formulário simples */}
            <Reveal delay={0.1} className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-[11px] uppercase tracking-[0.2em] text-[#00102A]/50 font-medium mb-2"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-transparent border-b border-[#00102A]/20 focus:border-[#00102A] py-2.5 text-sm font-light text-[#00102A] placeholder:text-[#00102A]/30 outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-[11px] uppercase tracking-[0.2em] text-[#00102A]/50 font-medium mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nome da empresa"
                      className="w-full bg-transparent border-b border-[#00102A]/20 focus:border-[#00102A] py-2.5 text-sm font-light text-[#00102A] placeholder:text-[#00102A]/30 outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#00102A]/50 font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com.br"
                    className="w-full bg-transparent border-b border-[#00102A]/20 focus:border-[#00102A] py-2.5 text-sm font-light text-[#00102A] placeholder:text-[#00102A]/30 outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#00102A]/50 font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    placeholder="Como podemos ajudar?"
                    className="w-full bg-transparent border-b border-[#00102A]/20 focus:border-[#00102A] py-2.5 text-sm font-light text-[#00102A] placeholder:text-[#00102A]/30 outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 border border-[#00102A]/30 px-7 py-3 text-[13px] tracking-wide text-[#00102A] hover:bg-[#00102A] hover:text-white transition-colors duration-400"
                  >
                    Enviar mensagem
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="text-sm font-light text-[#00102A]"
                      role="status"
                    >
                      Mensagem recebida. Retornaremos em breve.
                    </motion.p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
