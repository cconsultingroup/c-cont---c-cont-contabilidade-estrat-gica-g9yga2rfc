import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { logoAzul, logoBranco } from '@/lib/logos'
import { EASE } from '@/lib/motion'

const NAV_ITEMS = [
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Onde Estamos', path: '/onde-estamos' },
  { label: 'Carreiras', path: '/carreiras' },
  { label: 'Fale Conosco', path: '/fale-conosco' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Trava o scroll do body enquanto o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-white/85 backdrop-blur-md text-[#00102A] border-b border-[#00102A]/8'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo fino e discreto */}
            <Link to="/" aria-label="C Cont Contabilidade — início" className="shrink-0 py-2">
              <img
                src={transparent ? logoBranco : logoAzul}
                alt="C Cont Contabilidade"
                className="h-7 w-auto object-contain transition-opacity duration-200"
              />
            </Link>

            {/* Menu desktop */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="nav-link group relative py-1.5 text-[13px] tracking-wide transition-colors duration-300"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? 'opacity-100'
                          : transparent
                            ? 'opacity-80 group-hover:opacity-100'
                            : 'opacity-70 group-hover:opacity-100'
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Sublinhado animado no hover */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                        isActive ? 'scale-x-100' : ''
                      } ${transparent ? 'bg-white/90' : 'bg-[#00102A]'}`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Botão do menu mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 -mr-2 transition-colors focus:outline-none"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer lateral à direita, com fundo desfocado */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="drawer-backdrop"
              className="fixed inset-0 z-40 lg:hidden bg-[#00102A]/30 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              key="drawer-panel"
              className="fixed top-0 right-0 bottom-0 z-50 w-[78%] max-w-xs lg:hidden bg-white/70 backdrop-blur-2xl border-l border-white/40 shadow-2xl"
              initial={reduce ? { opacity: 0 } : { x: '100%' }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.45, ease: EASE }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between h-14 px-5">
                <img src={logoAzul} alt="C Cont Contabilidade" className="h-7 w-auto" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-[#00102A] focus:outline-none"
                  aria-label="Fechar menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="px-5 pt-6 pb-10 flex flex-col gap-1" aria-label="Menu mobile">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={reduce ? undefined : { opacity: 0, x: 24 }}
                    animate={reduce ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 text-lg font-light tracking-wide border-b border-[#00102A]/8 transition-colors duration-300 ${
                        location.pathname.startsWith(item.path)
                          ? 'text-[#00102A]'
                          : 'text-[#00102A]/60 hover:text-[#00102A]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="absolute bottom-8 left-5 right-5 text-[11px] uppercase tracking-[0.2em] text-[#00102A]/50">
                Recife · Pernambuco
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
