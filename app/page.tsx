import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCards from '@/components/ServiceCards'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'The Baseline — Clinical Optimization Studio | Woodway, TX',
  description:
    'NP-led clinical optimization in Woodway, TX. GLP-1 metabolic therapy, hormone replacement, IV infusion, and peptide therapy by a board-certified FNP-C. Cash-pay.',
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section id="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <div className="hero-eyebrow">Clinical Optimization Studio · Woodway, TX</div>
          <h1 className="hero-headline">
            Find your<br /><em>baseline.</em>
          </h1>
          <p className="hero-sub">
            Reset <span>·</span> Restore <span>·</span> Optimize
          </p>
          <div className="hero-actions">
            <a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Consultation ›
            </a>
            <Link href="/services" className="btn-ghost">Explore Services</Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-label">Services</div>
              <div className="hero-stat-value"><em>4</em> Integrated</div>
            </div>
            <div>
              <div className="hero-stat-label">Provider</div>
              <div className="hero-stat-value"><em>FNP-C</em> Led</div>
            </div>
            <div>
              <div className="hero-stat-label">Model</div>
              <div className="hero-stat-value"><em>Cash-Pay</em> Only</div>
            </div>
            <div>
              <div className="hero-stat-label">Schedule</div>
              <div className="hero-stat-value">Thurs <em>By Appt</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section id="manifesto">
        <div className="manifesto-inner container">
          <div>
            <blockquote className="manifesto-quote">
              &ldquo;Fine&rdquo; is not<br />a <span className="highlight">baseline.</span>
            </blockquote>
          </div>
          <div className="manifesto-body">
            <p>
              You&apos;ve been told your labs are normal. Your weight is close enough. Your hormones
              are within range. You feel like yourself, mostly. And yet something is off.
            </p>
            <p>
              <strong>
                That gap between &ldquo;fine&rdquo; and optimal is exactly where we work.
              </strong>{' '}
              The Baseline is a clinical optimization studio run by a board-certified Family Nurse
              Practitioner who believes precision medicine should be accessible, personal, and
              unapologetically results-driven.
            </p>
            <p>
              GLP-1 metabolic therapy. Hormone replacement. IV infusions. Behavioral health
              integration. Not as isolated services but as a coordinated clinical strategy built
              around you.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Four integrated <em>service lines.</em></h2>
          <p className="section-desc">
            Every service at The Baseline is FNP-C managed, clinically coordinated, and designed
            to compound. One provider. One record. One standard.
          </p>
          <ServiceCards />
        </div>
      </section>

      {/* ─── WHY ─── */}
      <section id="why">
        <div className="container">
          <div className="section-label">The Clinical Difference</div>
          <h2 className="section-title">Why patients <em>choose us.</em></h2>
          <div className="why-grid">
            <div className="why-card fade-up">
              <div className="why-num">01</div>
              <h3 className="why-title">The Credentials That Matter</h3>
              <p className="why-desc">
                SK holds the MSCP from The Menopause Society, the most rigorous evidence-based
                menopause credential available to any provider, and completed BHRT training through
                WorldLink Medical, the gold standard academy for preventive and hormone medicine.
                These are not online certificates. They are the highest clinical standard in the
                field, because this community deserves nothing less.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-num">02</div>
              <h3 className="why-title">Integrated Service Model</h3>
              <p className="why-desc">
                Four service lines. One clinical record. One provider relationship. When your
                GLP-1 response plateaus, the conversation about hormones is already happening. That
                clinical context is the competitive advantage no IV lounge or telehealth app can
                replicate.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-num">03</div>
              <h3 className="why-title">Cash-Pay Clarity</h3>
              <p className="why-desc">
                No insurance. No billing surprises. No referral paperwork. You know exactly what
                you&apos;re paying before you walk in. Cash-pay also means SK is accountable to you
                as a patient, not to a payer&apos;s coverage criteria.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-num">04</div>
              <h3 className="why-title">Behavioral Health Built In</h3>
              <p className="why-desc">
                We are the only clinical optimization practice in Woodway with a formalized
                behavioral health integration. When metabolic change affects mood, identity, or
                your relationship with food, you have a clinical pathway. Not a suggestion to see
                a therapist.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-num">05</div>
              <h3 className="why-title">Real Clinical Infusion Suite</h3>
              <p className="why-desc">
                Three medical-grade recliners. Clinical documentation. An FNP-C on site. The
                Baseline is not a wellness lounge with an IV pole. Every infusion is charted,
                monitored, and administered with the same clinical standard as everything else
                here.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-num">06</div>
              <h3 className="why-title">Woodway. Your Neighborhood.</h3>
              <p className="why-desc">
                8416 Old McGregor Road. A local, accessible, Woodway clinical presence run by
                someone who lives and practices in this community. Not a franchise. Not a telehealth
                app. A provider you&apos;ll see at HEB who actually knows your chart.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
