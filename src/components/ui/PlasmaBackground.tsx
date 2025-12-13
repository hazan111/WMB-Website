import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Check viewport size (skip WebGL on small screens for performance)
const isViewportTooSmall = () => {
  if (typeof window === 'undefined') return true
  return window.innerWidth < 768 || window.innerHeight < 600
}

// Fallback gradient background component
const GradientBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
      }}
    />
  )
}

const PlasmaBackground = () => {
  const [shouldLoadWebGL, setShouldLoadWebGL] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Check if WebGL should be disabled
    if (prefersReducedMotion() || isViewportTooSmall()) {
      setShowFallback(true)
      return
    }

    // Delay WebGL initialization until after first paint
    const initWebGL = () => {
      // Use requestIdleCallback if available, fallback to setTimeout
      if ('requestIdleCallback' in window) {
        requestIdleCallback(
          () => {
            setShouldLoadWebGL(true)
          },
          { timeout: 2000 }
        )
      } else {
        setTimeout(() => {
          setShouldLoadWebGL(true)
        }, 100)
      }
    }

    // Wait for first paint
    if (document.readyState === 'complete') {
      initWebGL()
    } else {
      window.addEventListener('load', initWebGL, { once: true })
    }

    return () => {
      window.removeEventListener('load', initWebGL)
    }
  }, [])

  useEffect(() => {
    if (!shouldLoadWebGL) return

    const container = document.getElementById('plasma-background')
    if (!container) return

    // Dynamically import Plasma component only when needed
    import('./Plasma').then(({ default: Plasma }) => {
      const root = createRoot(container)
      root.render(
        <Plasma 
          color="#3b82f6"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.15}
          mouseInteractive={false}
        />
      )

      // Store root for cleanup
      ;(container as any).__plasmaRoot = root
    }).catch((error) => {
      console.warn('Failed to load WebGL background:', error)
      setShowFallback(true)
    })

    return () => {
      const container = document.getElementById('plasma-background')
      if (container && (container as any).__plasmaRoot) {
        try {
          ;(container as any).__plasmaRoot.unmount()
          delete (container as any).__plasmaRoot
        } catch (error) {
          console.warn('Error unmounting Plasma:', error)
        }
      }
    }
  }, [shouldLoadWebGL])

  // Show fallback gradient if WebGL is disabled
  if (showFallback) {
    return <GradientBackground />
  }

  return null
}

export default PlasmaBackground

