import type { Metadata } from 'next'
import ServiceCards from '@/components/ServiceCards'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Services — The Baseline | Woodway, TX',
  description:
    'GLP-1 metabolic therapy, hormone replacement, IV infusions, peptides, and behavioral health — FNP-C managed with transparent pricing.',
}

export default function ServicesPage() {
  return (
    <>
      {/* ─── PAGE HEAD ─── */}
      <section className="page-head">
        <div className="hero-grid"></div>
        <div className="page-head-inner">
          <div className="eyebrow">What We Do</div>
          <h1>Four integrated<br /><em>service lines.</em></h1>
          <p>
            Every service is FNP-C managed, clinically coordinated, and designed to compound. One
            provider. One record. One standard.
          </p>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section id="services">
        <div className="container">
          <ServiceCards />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="process">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Three steps to <em>your protocol.</em></h2>
          <div className="process-steps">
            <div className="process-step fade-up">
              <div className="process-num">Step 01 // Consult</div>
              <h3 className="process-title">Initial Clinical Consultation</h3>
              <p className="process-desc">
                Your first visit is a real clinical intake with Sarah Kathryn Hannah, FNP-C.
                Health history, labs review, goal-setting, and a frank conversation about
                what&apos;s actually going on. No upsells. No pressure. Just an honest clinical
                picture.
              </p>
            </div>
            <div className="process-step fade-up">
              <div className="process-num">Step 02 // Protocol</div>
              <h3 className="process-title">Personalized Treatment Plan</h3>
              <p className="process-desc">
                Based on your intake and labs, SK builds a protocol specific to you. GLP-1
                starting dose. Hormone baseline. IV cadence. Behavioral health referral if
                indicated. Everything is coordinated in one clinical record and one conversation.
              </p>
            </div>
            <div className="process-step fade-up">
              <div className="process-num">Step 03 // Optimize</div>
              <h3 className="process-title">Ongoing Monitoring &amp; Adjustment</h3>
              <p className="process-desc">
                Monthly check-ins, dose adjustments, and proactive protocol refinement as your
                results evolve. The Baseline doesn&apos;t set-and-forget. As your body changes,
                your protocol changes with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IV & INFUSION MENU ─── */}
      <section id="iv-menu">
        <div className="container">
          <div className="section-label">IV &amp; Infusion Menu</div>
          <h2 className="section-title">Clinical-grade. <em>Every infusion.</em></h2>
          <p className="section-desc">
            All IV protocols are administered in our clinical suite by your FNP-C and clinical
            staff. Every infusion is charted, documented, and monitored. This is not a wellness
            lounge.
          </p>

          {/* GLP-1 Tiered Pricing */}
          <div style={{ marginTop: '64px', marginBottom: '64px' }}>
            <div className="iv-col-label" style={{ fontSize: '0.72rem', marginBottom: '32px' }}>
              GLP-1 Program Pricing · Medication Included
            </div>
            <div className="responsive-2col">
              {/* Semaglutide */}
              <div style={{ background: 'var(--void)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--graphite)', marginBottom: '8px' }}>
                  Compounded
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--lab)', marginBottom: '24px' }}>
                  Semaglutide
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--void-2)', padding: '16px 20px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--lab)' }}>Starter</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '3px' }}>Low-dose titration · 0.25–0.5mg/wk</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0rem', fontWeight: 500, color: 'var(--green)' }}>$199<span style={{ fontSize: '0.6rem', color: 'var(--graphite)' }}>/mo</span></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--void-3)', padding: '16px 20px', borderLeft: '2px solid var(--green)' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--lab)' }}>Accelerator</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '3px' }}>Active loss phase · 0.5–1.7mg/wk</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0rem', fontWeight: 500, color: 'var(--green)' }}>$249<span style={{ fontSize: '0.6rem', color: 'var(--graphite)' }}>/mo</span></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--void-2)', padding: '16px 20px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--lab)' }}>Maintenance</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '3px' }}>Full dose · 2.4mg/wk</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0rem', fontWeight: 500, color: 'var(--green)' }}>$299<span style={{ fontSize: '0.6rem', color: 'var(--graphite)' }}>/mo</span></div>
                  </div>
                </div>
              </div>
              {/* Tirzepatide */}
              <div style={{ background: 'var(--void)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--graphite)', marginBottom: '8px' }}>
                  Compounded · Dual GLP-1/GIP
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--lab)', marginBottom: '24px' }}>
                  Tirzepatide
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--void-2)', padding: '16px 20px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--lab)' }}>Starter</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '3px' }}>Low-dose titration · 2.5–5mg/wk</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0rem', fontWeight: 500, color: 'var(--green)' }}>$299<span style={{ fontSize: '0.6rem', color: 'var(--graphite)' }}>/mo</span></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--void-3)', padding: '16px 20px', borderLeft: '2px solid var(--green)' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--lab)' }}>Accelerator</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '3px' }}>Active loss phase · 5–10mg/wk</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0rem', fontWeight: 500, color: 'var(--green)' }}>$349<span style={{ fontSize: '0.6rem', color: 'var(--graphite)' }}>/mo</span></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--void-2)', padding: '16px 20px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--lab)' }}>Maintenance</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', letterSpacing: '0.08em', marginTop: '3px' }}>Full dose · 10–15mg/wk</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0rem', fontWeight: 500, color: 'var(--green)' }}>$399<span style={{ fontSize: '0.6rem', color: 'var(--graphite)' }}>/mo</span></div>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', marginTop: '16px', letterSpacing: '0.08em', lineHeight: '1.6' }}>
              All GLP-1 programs include compounded medication, FNP-C clinical management, dose
              titration, and monthly check-ins. Drug and dose determined by SK at initial
              consultation. Subject to current FDA guidance and 503A pharmacy supply.
            </p>
          </div>

          {/* IV & Add-Ons Grid */}
          <div className="iv-grid">
            <div>
              <div className="iv-col-label">IV Infusion Protocols</div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Basic Hydration</div><div className="iv-detail">1L Normal Saline · Rehydration and recovery</div></div>
                <div className="iv-price">$99</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Performance Recovery</div><div className="iv-detail">NS + B-Complex + Vitamin C + Zinc · Post-workout or fatigue</div></div>
                <div className="iv-price">$150</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Myers Cocktail</div><div className="iv-detail">Magnesium · B-Complex · B12 · Vitamin C · Calcium</div></div>
                <div className="iv-price">$165</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Immune Defense</div><div className="iv-detail">High-dose Vitamin C · Zinc · Lysine · B-Complex</div></div>
                <div className="iv-price">$175</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">NAD+ Infusion</div><div className="iv-detail">500mg NAD+ · Cellular energy, cognitive clarity, metabolic support · 2–3 hr protocol</div></div>
                <div className="iv-price">$275</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">The Baseline Protocol</div><div className="iv-detail">Our signature drip: NAD+ + Glutathione IV push + Myers Cocktail</div></div>
                <div className="iv-price">$395</div>
              </div>
              <div className="iv-item fade-up" style={{ borderTop: '1px solid var(--border-green)', marginTop: '8px' }}>
                <div><div className="iv-name">Prepaid 4-Pack</div><div className="iv-detail">Buy four of any drip, save 10% · Use anytime · No monthly commitment</div></div>
                <div className="iv-price">Save 10%</div>
              </div>
            </div>
            <div>
              <div className="iv-col-label">Add-Ons &amp; Injectables</div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Glutathione IV Push</div><div className="iv-detail">Master antioxidant · Detox, skin, and metabolic support</div></div>
                <div className="iv-price">$55</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">B12 Injection (IM)</div><div className="iv-detail">Methylcobalamin · Energy and neurological support</div></div>
                <div className="iv-price">$35</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Vitamin D Injection</div><div className="iv-detail">Intramuscular D3 · Immune, bone, and hormonal support</div></div>
                <div className="iv-price">$40</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Behavioral Health Consult</div><div className="iv-detail">30-min structured consult · Hannah Short, LCSW · Add-on to any program</div></div>
                <div className="iv-price">$75</div>
              </div>
              <div className="iv-col-label" style={{ marginTop: '32px' }}>Peptide Therapy</div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">BPC-157</div><div className="iv-detail">Body Protective Compound · Gut healing, tendon repair, anti-inflammatory · IM or SQ injection</div></div>
                <div className="iv-price">Starting at $150/mo</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">CJC-1295 / Ipamorelin</div><div className="iv-detail">Growth hormone secretagogue stack · Muscle recovery, fat loss, sleep quality · SQ injection</div></div>
                <div className="iv-price">Starting at $175/mo</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Semaglutide (GLP-1)</div><div className="iv-detail">Peptide-based metabolic hormone · Included in the Metabolic program · SQ injection</div></div>
                <div className="iv-price">Included in Membership</div>
              </div>
              <div className="iv-item fade-up">
                <div><div className="iv-name">Tirzepatide (GLP-1/GIP)</div><div className="iv-detail">Dual-receptor metabolic peptide · Superior weight loss and metabolic outcomes · SQ injection</div></div>
                <div className="iv-price">Included in Membership</div>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--graphite)', marginTop: '20px', letterSpacing: '0.08em', lineHeight: '1.6' }}>
                Peptide availability subject to current FDA guidance and pharmacy supply. SK will
                determine appropriate protocol at clinical consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
