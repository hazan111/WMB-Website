import { type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="relative z-20">
        <Header />
        <main className="flex-grow relative z-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

