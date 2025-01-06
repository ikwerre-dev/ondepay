import { useState } from 'react'
import logo from '../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-full py-[1.5rem] px-[1.5rem]">
          <nav className="flex items-center justify-between px-[.5rem]">
            <div className="flex items-center gap-2">
              <img src={logo} className='w-[7rem]' alt="" />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#why-us" className="text-white/70 hover:text-white text-sm transition-colors">
                Why Us
              </a>
              <a href="#services" className="text-white/70 hover:text-white text-sm transition-colors">
                Services
              </a>
              <a href="#process" className="text-white/70 hover:text-white text-sm transition-colors">
                Our Process
              </a>
              <a href="#payments" className="text-white/70 hover:text-white text-sm transition-colors">
                Payments
              </a>
              <a href="#faqs" className="text-white/70 hover:text-white text-sm transition-colors">
                FAQs
              </a>
            </div>

            <button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6 py-3 text-sm font-normal transition-colors">
              Get Started
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </nav>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-purple-900 p-4">
          <a href="#why-us" className="block text-white py-2">Why Us</a>
          <a href="#services" className="block text-white py-2">Services</a>
          <a href="#process" className="block text-white py-2">Our Process</a>
          <a href="#payments" className="block text-white py-2">Payments</a>
          <a href="#faqs" className="block text-white py-2">FAQs</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
