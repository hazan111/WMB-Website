import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: any[] = [react()]
  
  // Add bundle visualizer in analyze mode
  if (mode === 'analyze') {
    plugins.push(
      visualizer({
        open: false, // Don't open browser automatically
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
        template: 'treemap', // treemap, sunburst, or network
      }) as any
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      // Code splitting optimizations
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Separate vendor chunks for better caching and tree-shaking
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor'
              }
              if (id.includes('lucide-react')) {
                // Separate lucide-react for better tree-shaking
                return 'icons-vendor'
              }
              if (id.includes('framer-motion')) {
                return 'animation-vendor'
              }
              if (id.includes('ogl')) {
                return 'webgl-vendor'
              }
              // Note: utils-vendor removed to prevent empty chunk warning
              // clsx, tailwind-merge, class-variance-authority will go to vendor chunk
              // Other node_modules
              return 'vendor'
            }
          },
        },
      },
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      // Enable source maps for production debugging (optional)
      sourcemap: false,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react'],
    },
  }
})

