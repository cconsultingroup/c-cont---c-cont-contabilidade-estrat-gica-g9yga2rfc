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
    <div className={`relative ${className}`}>
      {/* Bloco de cor deslocado atrás */}
      <div
        className={`absolute -inset-2.5 sm:-inset-3.5 ${offsetColor} rounded-[20px] -z-10 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4`}
        aria-hidden="true"
      />

      {/* Padrão de cruzes "+" no canto superior */}
      <div
        className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 -z-10 pointer-events-none select-none text-sky-400/60 font-mono text-sm leading-none grid grid-cols-3 gap-2"
        aria-hidden="true"
      >
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>

      {/* Padrão de cruzes "+" no canto inferior */}
      <div
        className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 -z-10 pointer-events-none select-none text-slate-300 font-mono text-xs leading-none grid grid-cols-2 gap-1.5"
        aria-hidden="true"
      >
        <span>+</span>
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>

      {/* Moldura da imagem com 16px de cantos arredondados */}
      <div
        className={`relative overflow-hidden rounded-[16px] bg-slate-100 shadow-lg border border-slate-200/60 ${aspectRatio}`}
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
