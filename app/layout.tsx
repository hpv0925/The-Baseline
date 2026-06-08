import type { Metadata } from 'next'
import { Cormorant_Garamond, IBM_Plex_Mono, Outfit } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Baseline — Clinical Optimization Studio | Woodway, TX',
  description:
    'NP-led clinical optimization in Woodway, TX. GLP-1 metabolic therapy, hormone replacement, IV infusion, and peptide therapy by a board-certified FNP-C. Cash-pay.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${ibmPlexMono.variable} ${outfit.variable}`}
    >
      <body suppressHydrationWarning>
        <Nav />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  )
}
