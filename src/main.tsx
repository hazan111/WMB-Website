import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

// Lazy load PlasmaBackground to reduce initial bundle size
const PlasmaBackground = lazy(() => import('./components/ui/PlasmaBackground.tsx'))

// Plasma background'u body'ye ekle
const plasmaContainer = document.createElement('div')
plasmaContainer.id = 'plasma-background'
document.body.appendChild(plasmaContainer)

const plasmaRoot = createRoot(plasmaContainer)
plasmaRoot.render(
  <Suspense fallback={null}>
    <PlasmaBackground />
  </Suspense>
)

// Use StrictMode only in development for better performance in production
const isDevelopment = import.meta.env.DEV
const rootElement = document.getElementById('root')!

if (isDevelopment) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(<App />)
}

