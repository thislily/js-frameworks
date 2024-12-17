import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Header />

      <main className="flex-grow p-4 min-h-screen mx-auto max-w-7xl">
        {/* This is where page content will be rendered */}
        <Outlet />
      </main>

      <Footer />
      
    </div>
  )
}

export default Layout
