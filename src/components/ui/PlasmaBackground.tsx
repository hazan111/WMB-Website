import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Plasma from './Plasma'

const PlasmaBackground = () => {
  useEffect(() => {
    const container = document.getElementById('plasma-background')
    if (!container) return

    const root = createRoot(container)
    root.render(
      <Plasma 
        color="#3b82f6"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.25}
        mouseInteractive={true}
      />
    )

    return () => {
      root.unmount()
    }
  }, [])

  return null
}

export default PlasmaBackground

