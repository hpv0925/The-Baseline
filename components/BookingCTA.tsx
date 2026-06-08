export default function BookingCTA() {
  return (
    <section id="booking">
      <div className="booking-glow"></div>
      <div className="booking-inner">
        <div className="booking-tag">{'//'} Ready to Start</div>
        <h2 className="booking-headline">
          Your new <em>baseline</em> starts Thursday.
        </h2>
        <p className="booking-sub">
          One appointment. One honest clinical conversation. A protocol built around what your body
          actually needs. Book your initial consultation with SK Hannah, FNP-C, and find out what
          optimal looks like for you.
        </p>
        <div className="booking-actions">
          <a href="https://thebaselinetx.as.me/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Your Consultation ›
          </a>
          <a href="tel:2544338430" className="btn-ghost">Call 254.433.8430</a>
        </div>
        <div className="booking-info">
          <div className="booking-info-item">
            <span className="booking-info-label">Location</span>
            <span className="booking-info-value">8416 Old McGregor Rd, Woodway TX</span>
          </div>
          <div className="booking-info-item">
            <span className="booking-info-label">Schedule</span>
            <span className="booking-info-value">Thursdays by appointment</span>
          </div>
          <div className="booking-info-item">
            <span className="booking-info-label">Phone</span>
            <span className="booking-info-value">254.433.8430</span>
          </div>
          <div className="booking-info-item">
            <span className="booking-info-label">Instagram</span>
            <span className="booking-info-value">@thebaselinetx</span>
          </div>
        </div>
      </div>
    </section>
  )
}
