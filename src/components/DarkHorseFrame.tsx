import React from 'react'

interface DarkHorseFrameProps {
  src: string
  alt: string
  className?: string
  offsetColor?: string
  aspectRatio?: string
  imageClassName?: string
}

export default function DarkHorseFrame({
  src,
  alt,
  className = '',
  offsetColor = 'bg-[#EAF2F6]',
  aspectRatio = 'aspect-[4/3]',
  imageClassName = '',
}: DarkHorseFrameProps) {
  return (
    <div className={`relative isolate p-3 sm:p-4 ${className}`}>
      {/* Bloco de cor deslocado atrás (offset) */}
      <div
        className={`absolute inset-0 ${offsetColor} rounded-[20px] -z-10 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 shadow-sm`}
        aria-hidden="true"
      />

      {/* Padrão decorativo de pequenas cruzes "+" no canto superior esquerdo (estilo darkhorse.cpa) */}
      <div
        className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 z-20 pointer-events-none select-none text-sky-500 font-mono text-sm font-bold leading-none grid grid-cols-3 gap-2 bg-white/70 backdrop-blur-2xs p-1.5 rounded-lg shadow-2xs border border-sky-100/60"
        aria-hidden="true"
      >
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>

      {/* Padrão decorativo de pequenas cruzes "+" no canto inferior direito */}
      <div
        className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 z-20 pointer-events-none select-none text-sky-600 font-mono text-xs font-bold leading-none grid grid-cols-2 gap-1.5 bg-white/80 backdrop-blur-2xs p-1 rounded-md shadow-2xs border border-slate-200/60"
        aria-hidden="true"
      >
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>

      {/* Moldura da imagem com cantos arredondados (16px = rounded-[16px]) */}
      <div
        className={`relative overflow-hidden rounded-[16px] bg-slate-100 shadow-lg border border-slate-200/70 z-10 ${aspectRatio}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${imageClassName}`}
        />
      </div>
    </div>
  )
}
