import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Início', path: '/' },
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'O que Fazemos', path: '/servicos' },
  { label: 'Diferenciais', path: '/diferenciais' },
  { label: 'Dúvidas', path: '/duvidas' },
  { label: 'Contato', path: '/contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-md py-3 border-b border-slate-100'
          : 'shadow-sm py-4 border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group focus:outline-none"
            aria-label="C Cont Contabilidade Estratégica"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#0a1628] flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight tracking-tight text-[#0a1628]">
                  C CONT
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
                  Contabilidade Estratégica
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#0a1628] bg-[#EAF2F6] font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-[#0a1628] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden sm:flex items-center justify-end shrink-0">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0a1628] bg-slate-50/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              C Consulting Group
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#0a1628] hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EAF2F6] text-[#0a1628] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0a1628]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0a1628]">
              C Consulting Group
            </span>
            <span className="text-xs text-slate-500">Recife · Brasil</span>
          </div>
        </div>
      )}
    </header>
  )
}
