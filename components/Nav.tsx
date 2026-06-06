'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <Link href="/" className="nav-logo">The Baseline</Link>
        <ul className="nav-links">
          <li><Link href="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
          <li><Link href="/programs" className={isActive('/programs') ? 'active' : ''}>Programs</Link></li>
          <li><Link href="/provider" className={isActive('/provider') ? 'active' : ''}>Provider</Link></li>
          <li><Link href="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link></li>
          <li>
            <a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer" className="nav-cta">
              Book Now
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <Link href="/services">Services</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/provider">Provider</Link>
        <Link href="/faq">FAQ</Link>
        <a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer" className="nav-cta">
          Book Now
        </a>
      </div>
    </>
  )
}
