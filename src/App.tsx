/* Main App Component - Handles routing (using react-router-dom), query client and other providers - use this file to add all routes */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Servicos from './pages/Servicos'
import Carreiras from './pages/Carreiras'
import OndeEstamos from './pages/OndeEstamos'
import FaleConosco from './pages/FaleConosco'
import NotFound from './pages/NotFound'

// ONLY IMPORT AND RENDER WORKING PAGES, NEVER ADD PLACEHOLDER COMPONENTS OR PAGES IN THIS FILE
// AVOID REMOVING ANY CONTEXT PROVIDERS FROM THIS FILE (e.g. TooltipProvider, Toaster, Sonner)

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/onde-estamos" element={<OndeEstamos />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Route>
        {/* ADD ALL CUSTOM ROUTES MUST BE ADDED HERE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
