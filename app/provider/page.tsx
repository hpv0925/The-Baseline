import type { Metadata } from 'next'
import Image from 'next/image'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Provider — The Baseline | Sarah Kathryn Hannah, FNP-C',
  description:
    'Meet Sarah Kathryn Hannah, APRN, FNP-C — MSCP-credentialed, WorldLink BHRT trained — and the behavioral health partnership behind The Baseline.',
}

export default function ProviderPage() {
  return (
    <>
      {/* ─── PAGE HEAD ─── */}
      <section className="page-head">
        <div className="hero-grid"></div>
        <div className="page-head-inner">
          <div className="eyebrow">Your Care Team</div>
          <h1>Credentialed care,<br /><em>personally delivered.</em></h1>
          <p>
            The Baseline is built around one board-certified FNP-C and a coordinated behavioral
            health partnership — the people behind your protocol.
          </p>
        </div>
      </section>

      {/* ─── PROVIDER ─── */}
      <section id="provider">
        <div className="container">
          <div className="provider-inner">
            <div className="provider-id-card">
              <div className="provider-photo-placeholder" style={{ background: 'var(--void-3)', border: 'none' }}>
                <Image
                  src="/provider.jpg"
                  alt="Sarah Kathryn Hannah, APRN FNP-C"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>
              <div className="provider-card-name">Sarah Kathryn Hannah</div>
              <div className="provider-card-cred">APRN, FNP-C</div>
              <div className="provider-card-tags">
                <span className="tag">Board Certified</span>
                <span className="tag">FNP-C</span>
                <span className="tag">MSCP</span>
                <span className="tag">WorldLink BHRT</span>
                <span className="tag">GLP-1</span>
                <span className="tag">HRT</span>
                <span className="tag">IV Therapy</span>
                <span className="tag">Waco Native</span>
              </div>
            </div>
            <div className="provider-content">
              <h2 className="provider-name-lg">Sarah Kathryn Hannah</h2>
              <div className="provider-title">APRN, FNP-C · Lead Clinical Provider</div>
              <div className="provider-bio">
                <p>
                  Sarah Kathryn Hannah is a board-certified Family Nurse Practitioner with deep
                  roots in Central Texas. She built The Baseline because she saw too many patients
                  in traditional medicine told they were &ldquo;fine&rdquo; when they were anything
                  but.
                </p>
                <p>
                  Her clinical philosophy is straightforward:{' '}
                  <strong>
                    every patient deserves a provider who actually reads their labs, adjusts their
                    protocol, and stays in the conversation
                  </strong>{' '}
                  long enough to see results. That&apos;s what she delivers, every Thursday.
                </p>
                <p>
                  SK holds the{' '}
                  <strong>MSCP credential through The Menopause Society</strong>, the most rigorous
                  evidence-based menopause certification in medicine, and completed her bioidentical
                  hormone training through{' '}
                  <strong>WorldLink Medical</strong>, the gold standard academy for preventive and
                  hormone medicine. Because this community deserves the best.
                </p>
                <p>
                  SK manages every GLP-1 protocol, every HRT case, and every clinical decision at
                  The Baseline. You will see her, not a PA, not a coordinator.
                </p>
              </div>
              <div className="provider-certs">
                <div className="provider-certs-label">Certifications &amp; Training</div>
                <div className="certs-list">
                  <div className="cert-item">Family Nurse Practitioner — Board Certified (FNP-C)</div>
                  <div className="cert-item">
                    MSCP — Menopause Society Certified Practitioner ·{' '}
                    <a href="https://menopause.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'none' }}>
                      The Menopause Society
                    </a>
                  </div>
                  <div className="cert-item">
                    BHRT Certified ·{' '}
                    <a href="https://worldlinkmedical.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'none' }}>
                      WorldLink Medical
                    </a>{' '}
                    — Academy of Preventive &amp; Innovative Medicine
                  </div>
                  <div className="cert-item">GLP-1 Metabolic Therapy Protocol Trained</div>
                  <div className="cert-item">IV Infusion Therapy Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEHAVIORAL HEALTH ─── */}
      <section id="behavioral">
        <div className="container">
          <div className="section-label">Behavioral Health Partnership</div>
          <h2 className="section-title">Your body changes. <em>Your mind deserves support.</em></h2>
          <div className="behavioral-inner">
            <div className="behavioral-content">
              <p>
                GLP-1 therapy, hormone optimization, and metabolic change don&apos;t just affect
                your weight. They reshape your relationship with food, your mood, your identity,
                and the way you move through the world.
              </p>
              <p>
                That shift deserves clinical support, not just a follow-up question at your monthly
                check-in. The Baseline has integrated behavioral health consultation directly into
                the clinical model through a formal partnership with{' '}
                <strong>Rooted &amp; Nourished Psychotherapy</strong>.
              </p>
              <p>
                Hannah Short, LCSW brings a structured, clinically coordinated 30-minute consult
                designed specifically for patients navigating metabolic and hormonal change.
                Documentation flows back to SK within 72 hours. It is a real clinical service, not
                a referral slip.
              </p>
            </div>
            <div className="behavioral-card">
              <div className="behavioral-provider-name">Hannah Short</div>
              <div className="behavioral-provider-cred">LCSW · Rooted &amp; Nourished Psychotherapy</div>
              <div className="behavioral-details">
                <div className="behavioral-detail-row">
                  <span className="behavioral-detail-label">Session Format</span>
                  <span className="behavioral-detail-value">30-min structured clinical consult</span>
                </div>
                <div className="behavioral-detail-row">
                  <span className="behavioral-detail-label">Documentation</span>
                  <span className="behavioral-detail-value">To clinical record within 72 hrs</span>
                </div>
                <div className="behavioral-detail-row">
                  <span className="behavioral-detail-label">Rate</span>
                  <span className="behavioral-detail-value green">$75 per session</span>
                </div>
                <div className="behavioral-detail-row">
                  <span className="behavioral-detail-label">Availability</span>
                  <span className="behavioral-detail-value green">Add-on to any program</span>
                </div>
                <div className="behavioral-detail-row">
                  <span className="behavioral-detail-label">Practice</span>
                  <span className="behavioral-detail-value">Rooted &amp; Nourished · Waco, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
