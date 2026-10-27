// Resolve os binários de assets-b64/** (base64 em partes) para data URIs em
// tempo de execução — sem depender de etapa de build.
const parts = import.meta.glob('../../assets-b64/**/*', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const MIME: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
}

const contentByPart = new Map<string, string>()
let cache: Map<string, string> | null = null

function buildMap(): Map<string, string> {
  if (cache) return cache
  const groups = new Map<string, string[]>()
  for (const [key, content] of Object.entries(parts)) {
    const rel = key.replace(/^.*assets-b64\//, '')
    if (!rel.includes('.b64')) continue
    const base = rel.replace(/\.b64(\.part\d+)?$/, '')
    if (!groups.has(base)) groups.set(base, [])
    groups.get(base)!.push(rel)
    // guarda conteúdo por nome de parte
    contentByPart.set(rel, String(content))
  }
  cache = new Map()
  for (const [base, names] of groups) {
    names.sort()
    const b64 = names.map((n) => (contentByPart.get(n) || '').trim()).join('')
    const ext = base.split('.').pop() || ''
    cache.set(base, `data:${MIME[ext] || 'application/octet-stream'};base64,${b64}`)
  }
  return cache
}

// Substitui referências /assets/<caminho> pelo data URI correspondente.
export function hydrateAssets(html: string): string {
  const map = buildMap()
  return html.replace(
    /\/assets\/((?:img|video)\/[\w.-]+)/g,
    (ref, path: string) => map.get(path) || ref,
  )
}
