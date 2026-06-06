import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">The Baseline</div>
            <div className="footer-brand-tagline">Reset · Restore · Optimize</div>
            <p className="footer-brand-desc">
              A clinical optimization studio in Woodway, TX. GLP-1 metabolic therapy, hormone
              replacement, IV infusion, and behavioral health — managed by one board-certified
              FNP-C. Cash-pay. Thursdays by appointment.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/services">GLP-1 Metabolic Therapy</Link></li>
              <li><Link href="/services">Hormone Replacement</Link></li>
              <li><Link href="/services#iv-menu">IV Infusion Protocols</Link></li>
              <li><Link href="/provider#behavioral">Behavioral Health</Link></li>
              <li><Link href="/services#iv-menu">Peptide Therapy</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Programs</div>
            <ul className="footer-links">
              <li><Link href="/programs">Metabolic · from $199/mo</Link></li>
              <li><Link href="/programs">Hormone · $249/mo</Link></li>
              <li><Link href="/services#iv-menu">IV &amp; Injection · from $99</Link></li>
              <li><Link href="/programs">All-Access · from $448/mo</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><span>8416 Old McGregor Rd</span></li>
              <li><span>Woodway, TX 76712</span></li>
              <li><a href="tel:2544338430">254.433.8430</a></li>
              <li><a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer">Book Online</a></li>
              <li><a href="https://instagram.com/thebaselinetx" target="_blank" rel="noopener noreferrer">@thebaselinetx</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 The Baseline · Woodway, TX · Managed by HP Ventures LLC</div>
          <div className="footer-legal">
            The Baseline is a cash-pay clinical wellness practice. Services do not constitute
            emergency medical care. All clinical services are provided by or under the supervision
            of a licensed APRN. This website is for informational purposes only and does not
            constitute medical advice.
          </div>
        </div>
      </div>
    </footer>
  )
}
