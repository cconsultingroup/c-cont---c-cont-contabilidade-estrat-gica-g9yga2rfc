import React, { useEffect } from 'react'
import PageBanner from '@/components/PageBanner'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IMAGES } from '@/lib/siteImages'

export default function Duvidas() {
  useEffect(() => {
    document.title = 'Dúvidas frequentes | C Cont — Contabilidade Estratégica'
  }, [])

  const faqs = [
    {
      q: 'Como a C Cont atua na estrutura contábil da minha empresa?',
      a: 'Nos adaptamos à realidade da sua operação, mapeando fluxos existentes, padronizando rotinas e integrando a escrituração a sistemas ERPs. Apoiamos a gestão financeira com relatórios executivos em datas fixas e orientações tributárias constantes.',
    },
    {
      q: 'O que diferencia a C Cont de uma contabilidade tradicional?',
      a: 'Mais do que emitir guias de tributos e folha, entregamos inteligência estratégica. Aliamos contabilidade consultiva, planejamento tributário preventivo, governança e a sinergia multidisciplinar com a Caldas Advocacia e a C Capital (BTG Pactual).',
    },
    {
      q: 'A C Cont atende empresas em todo o Brasil?',
      a: 'Sim. Nossa operação é 100% digital, segura e estruturada em nuvem, permitindo atender companhias de comércio, indústria, serviços e saúde em qualquer estado brasileiro com a mesma proximidade e agilidade.',
    },
    {
      q: 'Como a tecnologia é aplicada na rotina contábil?',
      a: 'Utilizamos automações para captura de notas, conciliação bancária assistida e cruzamento preventivo de obrigações acessórias. Isso reduz prazos de entrega e elimina erros operacionais, liberando nossos especialistas para análises estratégicas.',
    },
    {
      q: 'Como começa o trabalho de transição para a C Cont?',
      a: 'Iniciamos com um diagnóstico preliminar sem custo da sua estrutura contábil e fiscal. Cuidamos de todo o processo de transição junto à contabilidade anterior de forma organizada, ética e sem interrupção nas rotinas da sua empresa.',
    },
    {
      q: 'Como a C Cont prepara os clientes para a Reforma Tributária (CBS/IBS/IS)?',
      a: 'Criamos simulações personalizadas no âmbito do New Tax Plan, identificando o impacto das novas regras nos preços de venda, margens de lucro, cumulatividade residual e créditos sobre insumos, orientando cada ajuste com antecedência.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner topo */}
      <PageBanner
        title="Dúvidas Frequentes"
        subtitle="Principais esclarecimentos sobre o modelo de atuação, tecnologia, governança e transição contábil da C Cont."
        imageSrc={IMAGES.duvidasBanner}
        breadcrumb="Central de Dúvidas"
      />

      {/* Conteúdo com Acordeão shadcn */}
      <section className="py-20 lg:py-28 bg-[#F6F5F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-[24px] border border-slate-200/80 shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-slate-100 rounded-[14px] px-6 py-1 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:border-sky-200 data-[state=open]:shadow-xs transition-all"
                >
                  <AccordionTrigger className="text-left font-serif font-bold text-base sm:text-lg text-[#0a1628] hover:text-sky-700 hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed font-light pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
