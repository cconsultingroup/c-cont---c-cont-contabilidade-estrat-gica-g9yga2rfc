import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSiteBehaviors } from '../useSiteBehaviors'
import { hydrateAssets } from '../lib/assets'
import '../site.css'

import indexHtml from '../site-html/index.html?raw'
import quemSomosHtml from '../site-html/quem-somos.html?raw'
import servicosHtml from '../site-html/servicos.html?raw'
import diferenciaisHtml from '../site-html/diferenciais.html?raw'
import duvidasHtml from '../site-html/duvidas.html?raw'
import contatoHtml from '../site-html/contato.html?raw'

const PAGES: Record<string, { title: string; html: string }> = {
  '/': {
    title: 'C Cont | Contabilidade Estratégica — Segurança contábil para decisões mais claras',
    html: indexHtml,
  },
  '/quem-somos': {
    title: 'Quem somos | C Cont — Contabilidade Estratégica',
    html: quemSomosHtml,
  },
  '/servicos': {
    title: 'O que fazemos | C Cont — Contabilidade Estratégica',
    html: servicosHtml,
  },
  '/diferenciais': {
    title: 'Diferenciais | C Cont — Contabilidade Estratégica',
    html: diferenciaisHtml,
  },
  '/duvidas': {
    title: 'Dúvidas frequentes | C Cont — Contabilidade Estratégica',
    html: duvidasHtml,
  },
  '/contato': {
    title: 'Contato | C Cont — Contabilidade Estratégica',
    html: contatoHtml,
  },
}

export default function SitePage() {
  const location = useLocation()
  const page = PAGES[location.pathname] ?? PAGES['/']

  useSiteBehaviors()

  useEffect(() => {
    document.title = page.title
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div
      className="site-page"
      key={location.pathname}
      dangerouslySetInnerHTML={{ __html: hydrateAssets(page.html) }}
    />
  )
}
