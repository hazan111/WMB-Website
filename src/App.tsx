/**
 * WMB Tracker - Main App Router
 * 
 * Changelog:
 * - Refactored to use React Router for multi-page structure
 * - Landing page simplified for conversion focus
 * - Product detail page created with detailed visuals
 */

import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}

export default App

