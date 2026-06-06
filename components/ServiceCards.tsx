export default function ServiceCards() {
  return (
    <div className="services-grid">
      {/* GLP-1 */}
      <div className="service-card fade-up">
        <div className="service-index">01 / Metabolic</div>
        <span className="service-icon">⬡</span>
        <h3 className="service-title">GLP-1 Metabolic Therapy</h3>
        <div className="service-subtitle">Semaglutide &amp; Tirzepatide Protocols</div>
        <p className="service-desc">
          Medically supervised GLP-1 therapy that addresses the root biology of metabolic
          dysfunction, not just the number on the scale. Titrated, monitored, and adjusted by your
          FNP-C at every visit.
        </p>
        <ul className="service-items">
          <li>Comprehensive intake and metabolic screening</li>
          <li>Personalized dose titration protocol</li>
          <li>Monthly check-ins with SK Hannah, FNP-C</li>
          <li>Nutrition and lifestyle clinical guidance</li>
          <li>Coordinated lab monitoring</li>
          <li>Seamless crossover to HRT when indicated</li>
        </ul>
        <div style={{ marginTop: '8px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--graphite)', marginBottom: '12px' }}>
            Compounded · Medication + Management Included
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', color: 'var(--graphite)', fontWeight: 400, padding: '6px 0', borderBottom: '1px solid var(--border)', letterSpacing: '0.1em' }}></th>
                <th style={{ textAlign: 'center', color: 'var(--graphite)', fontWeight: 400, padding: '6px 8px', borderBottom: '1px solid var(--border)', letterSpacing: '0.1em' }}>Starter</th>
                <th style={{ textAlign: 'center', color: 'var(--graphite)', fontWeight: 400, padding: '6px 8px', borderBottom: '1px solid var(--border)', letterSpacing: '0.1em' }}>Accelerator</th>
                <th style={{ textAlign: 'center', color: 'var(--graphite)', fontWeight: 400, padding: '6px 8px', borderBottom: '1px solid var(--border)', letterSpacing: '0.1em' }}>Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: 'var(--lab-dim)', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>Semaglutide</td>
                <td style={{ textAlign: 'center', color: 'var(--green)', padding: '10px 8px', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>$199/mo</td>
                <td style={{ textAlign: 'center', color: 'var(--green)', padding: '10px 8px', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>$249/mo</td>
                <td style={{ textAlign: 'center', color: 'var(--green)', padding: '10px 8px', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>$299/mo</td>
              </tr>
              <tr>
                <td style={{ color: 'var(--lab-dim)', padding: '10px 0' }}>Tirzepatide</td>
                <td style={{ textAlign: 'center', color: 'var(--green)', padding: '10px 8px', fontWeight: 500 }}>$299/mo</td>
                <td style={{ textAlign: 'center', color: 'var(--green)', padding: '10px 8px', fontWeight: 500 }}>$349/mo</td>
                <td style={{ textAlign: 'center', color: 'var(--green)', padding: '10px 8px', fontWeight: 500 }}>$399/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* HRT */}
      <div className="service-card fade-up">
        <div className="service-index">02 / Hormones</div>
        <span className="service-icon">◈</span>
        <h3 className="service-title">Hormone Replacement Therapy</h3>
        <div className="service-subtitle">Bioidentical HRT · Testosterone · Thyroid</div>
        <p className="service-desc">
          Precision hormone optimization for men and women. Whether you&apos;re addressing
          perimenopause, andropause, or unexplained fatigue, we start with data and build a
          protocol that&apos;s yours.
        </p>
        <ul className="service-items">
          <li>Comprehensive hormone panel review</li>
          <li>Bioidentical estrogen and progesterone protocols</li>
          <li>Testosterone optimization for men and women</li>
          <li>Thyroid and adrenal support coordination</li>
          <li>Pellet therapy available (coming Q3 2026)</li>
          <li>Quarterly monitoring and dose adjustment</li>
        </ul>
        <span className="service-price-tag">$249/mo · All-Inclusive HRT Program</span>
      </div>

      {/* IV */}
      <div className="service-card fade-up">
        <div className="service-index">03 / Infusion</div>
        <span className="service-icon">◎</span>
        <h3 className="service-title">IV Infusion Protocols</h3>
        <div className="service-subtitle">Therapeutic Drips · NAD+ · Performance Recovery</div>
        <p className="service-desc">
          Clinical-grade intravenous therapy administered in a real clinical setting by a
          credentialed provider, not a lounge. Every protocol is selected with purpose and
          monitored from start to finish.
        </p>
        <ul className="service-items">
          <li>Myers Cocktail and custom vitamin infusions</li>
          <li>NAD+ therapy for cellular energy and recovery</li>
          <li>Performance and hydration recovery protocols</li>
          <li>Glutathione IV push and IM injections</li>
          <li>B12, Vitamin D, and L-Carnitine injectables</li>
          <li>Peptide therapy add-ons available</li>
        </ul>
        <span className="service-price-tag">Starting at $99 · See Full Menu Below</span>
      </div>

      {/* Behavioral Health */}
      <div className="service-card fade-up">
        <div className="service-index">04 / Behavioral Health</div>
        <span className="service-icon">◐</span>
        <h3 className="service-title">Behavioral Health Integration</h3>
        <div className="service-subtitle">Clinical Consults · Rooted &amp; Nourished Psychology</div>
        <p className="service-desc">
          GLP-1 and hormone therapy change your body. They also change your relationship with food,
          your sense of self, and how you move through the world. That shift deserves clinical
          support.
        </p>
        <ul className="service-items">
          <li>30-minute structured clinical behavioral health consult</li>
          <li>Partnered with Hannah Short, LCSW</li>
          <li>Rooted &amp; Nourished Psychotherapy, Waco</li>
          <li>Coordinated documentation to your clinical record</li>
          <li>Screening and referral for ongoing therapy support</li>
          <li>Available as a $75 add-on to any program</li>
        </ul>
        <span className="service-price-tag">$75 per consult · Add-on to any program</span>
      </div>
    </div>
  )
}
