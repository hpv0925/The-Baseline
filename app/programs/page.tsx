import type { Metadata } from 'next'
import Link from 'next/link'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Programs & Pricing — The Baseline | Woodway, TX',
  description:
    'Metabolic, Hormone, and IV & Injection programs plus the All-Access Concierge bundle. Month-to-month, cash-pay, labs included.',
}

export default function ProgramsPage() {
  return (
    <>
      {/* ─── PAGE HEAD ─── */}
      <section className="page-head">
        <div className="hero-grid"></div>
        <div className="page-head-inner">
          <div className="eyebrow">Programs &amp; Pricing</div>
          <h1>Three programs.<br /><em>One standard of care.</em></h1>
          <p>
            No confusing tiers. Pick the program that fits your goal — your price is clear before
            you start. Combine two and your monthly IV is on us.
          </p>
        </div>
      </section>

      {/* ─── MEMBERSHIPS ─── */}
      <section id="memberships">
        <div className="container">
          <div className="memberships-grid">

            {/* Metabolic */}
            <div className="membership-card fade-up">
              <div className="membership-tier">Program 01</div>
              <div className="membership-name">Metabolic</div>
              <div className="membership-price">$199<span style={{ fontSize: '0.9rem', color: 'var(--graphite)' }}>+</span></div>
              <div className="membership-cadence">per month · priced by medication &amp; dose</div>
              <div className="membership-divider"></div>
              <ul className="membership-features">
                <li>Compounded GLP-1 medication included</li>
                <li>Semaglutide from $199 · Tirzepatide from $299</li>
                <li>FNP-C dose titration &amp; management</li>
                <li>Monthly clinical check-ins with SK</li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Patient portal access and messaging</li>
                <li>Labs at baseline &amp; 6 months — included</li>
              </ul>
              <Link href="/services#iv-menu" className="membership-cta ghost">See Dose Pricing</Link>
            </div>

            {/* Hormone */}
            <div className="membership-card featured fade-up">
              <div className="membership-badge">Most Popular</div>
              <div className="membership-tier">Program 02</div>
              <div className="membership-name">Hormone</div>
              <div className="membership-price">$249</div>
              <div className="membership-cadence">per month · all-inclusive HRT</div>
              <div className="membership-divider"></div>
              <ul className="membership-features">
                <li>Bioidentical HRT — estrogen, progesterone, testosterone</li>
                <li>Thyroid and adrenal support coordination</li>
                <li>MSCP-credentialed menopause care</li>
                <li>Monthly clinical check-in with SK</li>
                <li>Ongoing dose titration &amp; adjustments</li>
                <li>Patient portal access and messaging</li>
                <li>Labs at baseline &amp; 6 months — included</li>
              </ul>
              <a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer" className="membership-cta">
                Start Hormone Program
              </a>
            </div>

            {/* IV & Injection */}
            <div className="membership-card fade-up">
              <div className="membership-tier">Program 03</div>
              <div className="membership-name">IV &amp; Injection</div>
              <div className="membership-price">$99<span style={{ fontSize: '0.9rem', color: 'var(--graphite)' }}>+</span></div>
              <div className="membership-cadence">per visit · no membership required</div>
              <div className="membership-divider"></div>
              <ul className="membership-features">
                <li>Clinical-grade IV infusions from $99</li>
                <li>NAD+, Myers, Performance &amp; signature drips</li>
                <li>Glutathione, B12, and Vitamin D injectables</li>
                <li>Peptide therapy add-ons available</li>
                <li>Administered &amp; charted by your FNP-C</li>
                <li>Prepaid 4-pack: save 10% on any drip</li>
                <li>Behavioral health consult — $75</li>
              </ul>
              <Link href="/services#iv-menu" className="membership-cta ghost">See Full Menu</Link>
            </div>
          </div>

          {/* All-Access Concierge */}
          <div className="fade-up" style={{ background: 'var(--void-3)', border: '1px solid var(--border-green)', marginTop: '2px', padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--green)' }}></div>
            <div className="all-access-inner">
              <div>
                <div className="membership-badge">Best Value · Bundle &amp; Save</div>
                <div className="membership-name" style={{ fontSize: '2.2rem', marginTop: '8px' }}>All-Access Concierge</div>
                <p style={{ fontSize: '0.95rem', color: 'var(--lab-dim)', lineHeight: 1.7, margin: '16px 0 24px' }}>
                  Run both Metabolic and Hormone together and your monthly Myers Cocktail IV is
                  included free — a $165 value every month — plus concierge scheduling and direct
                  provider access. The complete optimization stack, fully coordinated by SK.
                </p>
                <ul className="membership-features" style={{ marginBottom: 0 }}>
                  <li>Full Metabolic program (your GLP-1 tier)</li>
                  <li>Full Hormone program — all-inclusive HRT</li>
                  <li>One Myers Cocktail IV monthly (included)</li>
                  <li>Concierge scheduling &amp; direct provider access</li>
                  <li>Quarterly deep-dive clinical review</li>
                  <li>First access to new service protocols</li>
                </ul>
              </div>
              <div className="all-access-right">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--graphite)', marginBottom: '12px' }}>
                  Starting At
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 300, color: 'var(--green)', lineHeight: 1 }}>
                  $448<span style={{ fontSize: '1.2rem', color: 'var(--graphite)' }}>/mo</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '8px', lineHeight: 1.6 }}>
                  Sema starter + Hormone<br />Scales with your GLP-1 tier
                </div>
                <a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer" className="membership-cta" style={{ marginTop: '28px' }}>
                  Book Consultation
                </a>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--graphite)', textAlign: 'center', marginTop: '32px', letterSpacing: '0.08em', lineHeight: 1.7 }}>
            All programs are month-to-month. GLP-1 and HRT medication included in program pricing.
            Comprehensive labs at baseline and 6-month recheck included in every program. Cash-pay
            only — no insurance billed. HSA/FSA accepted for eligible services.
          </p>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
