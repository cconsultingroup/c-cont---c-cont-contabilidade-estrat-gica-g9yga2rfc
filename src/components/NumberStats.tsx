import React from 'react'

/**
 * Faixa de 3 números com destaques da C Cont
 */
export default function NumberStats({
  className = '',
  bgColor = 'bg-[#EAF2F6]',
}: {
  className?: string
  bgColor?: string
}) {
  const stats = [
    {
      highlight: '100%',
      title: '100% digital',
      desc: 'Operação conectada às necessidades do seu negócio com máxima segurança.',
    },
    {
      highlight: 'Ouro',
      title: 'Selo Ouro ANCEC 2020',
      desc: 'Reconhecimento nacional pela qualidade e ética em serviços contábeis.',
    },
    {
      highlight: 'LAQI',
      title: 'Prêmio LAQI 2021',
      desc: 'Distinção pelo Latin American Quality Institute em governança e gestão.',
    },
  ]

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`${bgColor} p-8 rounded-[16px] border border-sky-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between`}
            >
              <div>
                <span className="font-serif text-3xl lg:text-4xl font-bold text-[#0a1628] block mb-2">
                  {stat.highlight}
                </span>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2 font-serif">{stat.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
