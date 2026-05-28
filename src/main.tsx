import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TooltipProvider } from './components/ui/tooltip.tsx'

import { SidebarProvider } from './context/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </TooltipProvider>
  </StrictMode>,
)
