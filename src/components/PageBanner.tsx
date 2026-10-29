import React from 'react'

interface PageBannerProps {
  title: string
  subtitle?: string
  imageSrc: string
  breadcrumb?: string
}

export default function PageBanner({ title, subtitle, imageSrc, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative min-h-[42vh] lg:min-h-[46vh] flex items-center justify-center overflow-hidden bg-[#0a1628] pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0d1a30]/85 to-[#0a1628]/80 backdrop-blur-[1px]" />
      </div>

      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
        {breadcrumb && (
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-300 mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
