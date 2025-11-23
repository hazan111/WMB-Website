import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import PlasmaBackground from './components/ui/PlasmaBackground.tsx'

// Plasma background'u body'ye ekle
const plasmaContainer = document.createElement('div')
plasmaContainer.id = 'plasma-background'
document.body.appendChild(plasmaContainer)

const plasmaRoot = createRoot(plasmaContainer)
plasmaRoot.render(<PlasmaBackground />)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

