import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className='mt-16 font-body font-medium bg-gray-400'>
      <Header />

      <main className="flex-grow p-4 min-h-screen mx-auto max-w-7xl bg-gray-100 pb-16 mt-16">
        {/* This is where page content will be rendered */}
        <Outlet />
      </main>

      <Footer />
      
    </div>
  )
}

export default Layout
