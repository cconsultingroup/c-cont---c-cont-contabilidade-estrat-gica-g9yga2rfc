// Helper para URLs de mídias externas fornecidas pelo usuário
const PEXELS_PHOTOS = 'https://images.' + 'pexels.com/photos'
const PEXELS_VIDEOS = 'https://videos.' + 'pexels.com/video-files'

export const HERO_VIDEO_SRC = `${PEXELS_VIDEOS}/3255321/3255321-hd_1920_1080_25fps.mp4`
export const HERO_POSTER_SRC = `${PEXELS_PHOTOS}/7654438/pexels-photo-7654438.jpeg?auto=compress&cs=tinysrgb&w=1920`

export const IMAGES = {
  // Início
  homeContabilidade: `${PEXELS_PHOTOS}/7654119/pexels-photo-7654119.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  homeTributario: `${PEXELS_PHOTOS}/7433827/pexels-photo-7433827.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  homeRecife: `${PEXELS_PHOTOS}/7654117/pexels-photo-7654117.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  // Segmentos Pexels fotos dedicadas
  segmentoComercio: `${PEXELS_PHOTOS}/7654119/pexels-photo-7654119.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoIndustria: `${PEXELS_PHOTOS}/7433827/pexels-photo-7433827.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoServicos: `${PEXELS_PHOTOS}/7654179/pexels-photo-7654179.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoSaude: `${PEXELS_PHOTOS}/6779567/pexels-photo-6779567.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoConstrucao: `${PEXELS_PHOTOS}/7654403/pexels-photo-7654403.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoAgronegocio: `${PEXELS_PHOTOS}/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoTecnologia: `${PEXELS_PHOTOS}/7654174/pexels-photo-7654174.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  segmentoHoldings: `${PEXELS_PHOTOS}/7654438/pexels-photo-7654438.jpeg?auto=compress&cs=tinysrgb&w=1200`,

  // Quem Somos
  quemSomosBanner: `${PEXELS_PHOTOS}/7654438/pexels-photo-7654438.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  quemSomosHistoria: `${PEXELS_PHOTOS}/7654179/pexels-photo-7654179.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  quemSomosVinicius: `${PEXELS_PHOTOS}/7654174/pexels-photo-7654174.jpeg?auto=compress&cs=tinysrgb&w=1200`,

  // O que Fazemos
  servicosBanner: `${PEXELS_PHOTOS}/8353821/pexels-photo-8353821.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  servicosAlt1: `${PEXELS_PHOTOS}/6779567/pexels-photo-6779567.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  servicosAlt2: `${PEXELS_PHOTOS}/7654174/pexels-photo-7654174.jpeg?auto=compress&cs=tinysrgb&w=1200`,

  // Diferenciais
  diferenciaisBanner: `${PEXELS_PHOTOS}/7654403/pexels-photo-7654403.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  diferenciaisBlock: `${PEXELS_PHOTOS}/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=1200`,

  // Dúvidas e Contato
  duvidasBanner: `${PEXELS_PHOTOS}/7654117/pexels-photo-7654117.jpeg?auto=compress&cs=tinysrgb&w=1920`,
  contatoBanner: `${PEXELS_PHOTOS}/7654117/pexels-photo-7654117.jpeg?auto=compress&cs=tinysrgb&w=1920`,
} as const
