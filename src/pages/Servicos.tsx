import React, { useEffect } from 'react'
import { Check } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import DarkHorseFrame from '@/components/DarkHorseFrame'
import { IMAGES } from '@/lib/siteImages'

export default function Servicos() {
  useEffect(() => {
    document.title = 'O que fazemos | C Cont — Contabilidade Estratégica'
  }, [])

  const services = [
    {
      number: '01',
      title: 'Contábil Estratégico',
      subtitle: 'Área contábil e demonstrações patrimoniais',
      desc: 'Escrituração contábil completa, emissão de demonstrações financeiras (Balanço Patrimonial, DRE, DFC, DMPL) e acompanhamento patrimonial com máxima consistência e conformidade legal.',
      topics: [
        'Escrituração contábil em conformidade com as normas IFRS/CPC',
        'Fechamentos contábeis mensais com relatórios executivos',
        'Conciliações patrimoniais e controle rigoroso de ativo imobilizado',
        'Demonstrações financeiras auditáveis para bancos e investidores',
      ],
      image: IMAGES.servicosAlt1,
      imageLeft: false,
    },
    {
      number: '02',
      title: 'Fiscal e Tributário',
      subtitle: 'Conformidade e apuração rigorosa de tributos',
      desc: 'Execução da escrituração fiscal, apuração precisa de tributos federais, estaduais e municipais, além do cumprimento rigoroso de todas as obrigações acessórias aplicáveis à atividade da empresa.',
      topics: [
        'Apuração de Simples Nacional, Lucro Presumido e Lucro Real',
        'Transmissão de EFD ICMS/IPI, EFD Contribuições, DCTF e obrigações estaduais',
        'Revisão contínua de parametrizações e enquadramentos fiscais',
        'Suporte técnico e esclarecimento de dúvidas do time fiscal interno',
      ],
      image: IMAGES.servicosAlt2,
      imageLeft: true,
    },
    {
      number: '03',
      title: 'New Tax Plan & Reforma do Consumo',
      subtitle: 'Planejamento tributário estratégico e CBS/IBS/IS',
      desc: 'Estruturação de cenários com foco em elisão fiscal legítima e preparação técnica para o período de transição da Reforma Tributária do Consumo.',
      topics: [
        'Modelagem de impactos da CBS, IBS e Imposto Seletivo no negócio',
        'Revisão de créditos fiscais sobre insumos e cadeia de fornecimento',
        'Diagnóstico tributário preventivo para redução legítima da carga',
        'Adequação de precificação e margens operacionais à nova legislação',
      ],
      image: IMAGES.servicosAlt1,
      imageLeft: false,
    },
    {
      number: '04',
      title: 'Recuperação Tributária e Sistema S',
      subtitle: 'Identificação de créditos e revisão de encargos',
      desc: 'Levantamento administrativo e judicial de oportunidades de recuperação e compensação de tributos pagos a maior nos últimos 5 anos, com total segurança jurídica.',
      topics: [
        'Revisão de contribuições ao Sistema S (teto de 20 salários mínimos)',
        'Exclusão do ICMS e tributos da base de cálculo de PIS/Cofins',
        'Compensação administrativa via sistema PER/DCOMP',
        'Pareceres técnicos especializados e fundamentação jurisprudencial sólida',
      ],
      image: IMAGES.servicosAlt2,
      imageLeft: true,
    },
    {
      number: '05',
      title: 'Departamento Pessoal e Trabalhista',
      subtitle: 'Gestão de pessoas e segurança previdenciária',
      desc: 'Administração completa da folha de pagamento, admissões, férias, rescisões, encargos sociais e previdenciários, com envio preciso de eventos ao eSocial.',
      topics: [
        'Processamento da folha e envio pontual dos eventos do eSocial',
        'Cálculo e gestão de encargos sociais (INSS, FGTS, IRRF)',
        'Acompanhamento de acordos e convenções coletivas de trabalho',
        'Auditoria preventiva de rotinas para mitigar passivos trabalhistas',
      ],
      image: IMAGES.servicosAlt1,
      imageLeft: false,
    },
    {
      number: '06',
      title: 'Societário e Estruturação de Empresas',
      subtitle: 'Constituição, alterações e governança societária',
      desc: 'Abertura, alteração contratual e regularização de pessoas jurídicas perante órgãos reguladores, juntas comerciais e Receita Federal, com suporte a holdings e reorganizações.',
      topics: [
        'Abertura, cisão, fusão, incorporação e alteração de empresas',
        'Estruturação de Holdings Patrimoniais e Operacionais',
        'Obtenção e renovação de certidões negativas (CNDs)',
        'Legalização de filiais, inscrições estaduais e municipais',
      ],
      image: IMAGES.servicosAlt2,
      imageLeft: true,
    },
    {
      number: '07',
      title: 'BPO Financeiro e Controladoria',
      subtitle: 'Operação financeira terceirizada com método',
      desc: 'Gestão terceirizada de contas a pagar, contas a receber, conciliação bancária diária e emissão de relatórios gerenciais para apoio direto à diretoria.',
      topics: [
        'Conciliação bancária diária e gestão de fluxo de caixa',
        'Processamento de pagamentos e agendamentos bancários',
        'Cobrança ativa e acompanhamento de contas a receber',
        'Relatórios de fluxo de caixa realizado versus projetado',
      ],
      image: IMAGES.servicosAlt1,
      imageLeft: false,
    },
    {
      number: '08',
      title: 'Consultoria Empresarial e Indicadores',
      subtitle: 'Análise de métricas e organização de processos',
      desc: 'Estruturação de dashboards gerenciais, análise aprofundada de custos operacionais e assessoria técnica contínua para subsidiar o crescimento sustentável da empresa.',
      topics: [
        'Definição e acompanhamento de KPIs financeiros e operacionais',
        'Análise de ponto de equilíbrio e margens de contribuição',
        'Planejamento orçamentário anual e controle de desvios',
        'Reuniões periódicas de alinhamento estratégico com os sócios',
      ],
      image: IMAGES.servicosAlt2,
      imageLeft: true,
    },
    {
      number: '09',
      title: 'Imposto de Renda e Certificação Digital',
      subtitle: 'Pessoa física executiva e segurança eletrônica',
      desc: 'Elaboração especializada de declarações de IRPF para sócios, executivos e investidores, além de suporte na emissão e renovação de certificados digitais e-CPF e e-CNPJ.',
      topics: [
        'Declaração de ajuste anual de IRPF para investidores e sócios',
        'Apuração de ganho de capital e renda variável',
        'Planejamento sucessório na pessoa física integrado à jurídica',
        'Emissão ágil de certificados digitais A1 e A3',
      ],
      image: IMAGES.servicosAlt1,
      imageLeft: false,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner topo */}
      <PageBanner
        title="O que Fazemos"
        subtitle="Estrutura integrada para empresas que buscam conformidade, eficiência operacional e informações confiáveis para conduzir seus negócios."
        imageSrc={IMAGES.servicosBanner}
        breadcrumb="Soluções Estratégicas"
      />

      {/* Introdução com números */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#154671]">
            Visão Integrada
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1628]">
            Soluções completas e desenhadas para a sua realidade
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-light">
            Conectamos as áreas contábil, fiscal, tributária, pessoal e societária para que sua
            empresa tenha total visibilidade da operação, sem ruído, sem retrabalho e com suporte
            consultivo permanente.
          </p>
        </div>
      </section>

      {/* Serviços em blocos alternados texto/imagem */}
      <div className="flex flex-col">
        {services.map((srv, idx) => {
          const isEven = idx % 2 === 0
          const bgSection = isEven ? 'bg-[#F6F5F2]' : 'bg-white'

          return (
            <section
              key={srv.title}
              className={`py-20 lg:py-24 ${bgSection} border-b border-slate-200/50`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Se imageLeft for true no desktop: imagem na col 5, texto na col 7 */}
                  <div
                    className={`lg:col-span-5 ${
                      srv.imageLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                    }`}
                  >
                    <DarkHorseFrame
                      src={srv.image}
                      alt={srv.title}
                      offsetColor={isEven ? 'bg-[#EAF2F6]' : 'bg-slate-200/60'}
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>

                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      srv.imageLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-2xl font-bold text-sky-600">
                        {srv.number}
                      </span>
                      <span className="h-px w-8 bg-sky-200" />
                      <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
                        {srv.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1628]">
                      {srv.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                      {srv.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {srv.topics.map((tp) => (
                        <div key={tp} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                          <span className="text-xs sm:text-sm text-slate-700 font-light">{tp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
