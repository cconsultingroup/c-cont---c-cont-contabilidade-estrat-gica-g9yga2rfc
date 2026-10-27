import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Comportamentos de UI das páginas do site (header, menu, FAQ, formulário,
// revelação ao rolar e navegação fluida entre páginas).
export function useSiteBehaviors() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const cleanups: Array<() => void> = []

    // header sólido ao rolar
    const header = document.querySelector('.header')
    const onScroll = () => {
      if (header) header.classList.toggle('is-solid', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    // menu mobile
    const toggle = document.querySelector('.nav-toggle')
    const nav = document.querySelector('.nav')
    const onToggle = () => {
      toggle?.classList.toggle('is-open')
      nav?.classList.toggle('is-open')
    }
    toggle?.addEventListener('click', onToggle)
    cleanups.push(() => toggle?.removeEventListener('click', onToggle))

    // revelação ao rolar
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('is-visible')
              io.unobserve(en.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )
      reveals.forEach((el) => io.observe(el))
      cleanups.push(() => io.disconnect())
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'))
    }

    // FAQ accordion
    const faqHandlers = Array.from(document.querySelectorAll<HTMLButtonElement>('.faq-q')).map(
      (btn) => {
        const handler = () => {
          const item = btn.closest('.faq-item')
          const answer = item?.querySelector<HTMLElement>('.faq-a')
          if (!item || !answer) return
          const isOpen = item.classList.contains('is-open')
          document.querySelectorAll('.faq-item.is-open').forEach((other) => {
            if (other !== item) {
              other.classList.remove('is-open')
              const a = other.querySelector<HTMLElement>('.faq-a')
              if (a) a.style.maxHeight = ''
            }
          })
          item.classList.toggle('is-open', !isOpen)
          answer.style.maxHeight = isOpen ? '' : `${answer.scrollHeight}px`
        }
        btn.addEventListener('click', handler)
        return () => btn.removeEventListener('click', handler)
      },
    )
    cleanups.push(...faqHandlers)

    // formulário de contato
    const form = document.querySelector<HTMLFormElement>('.contact-form')
    const onSubmit = (e: Event) => {
      e.preventDefault()
      const success = form?.querySelector<HTMLElement>('.form-success')
      if (success) {
        success.classList.add('is-visible')
        success.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      form?.reset()
    }
    form?.addEventListener('submit', onSubmit)
    cleanups.push(() => form?.removeEventListener('submit', onSubmit))

    // vídeos de fundo
    document.querySelectorAll<HTMLVideoElement>('video[data-bg]').forEach((v) => {
      v.muted = true
      v.loop = true
      v.playsInline = true
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    })

    // navegação fluida entre as páginas do site
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a')
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('/') || a.getAttribute('target') === '_blank') return
      e.preventDefault()
      const page = document.querySelector('.site-page')
      page?.classList.add('is-leaving')
      window.setTimeout(() => navigate(href), 180)
    }
    document.addEventListener('click', onClick)
    cleanups.push(() => document.removeEventListener('click', onClick))

    return () => cleanups.forEach((fn) => fn())
  }, [navigate, location.pathname])
}
