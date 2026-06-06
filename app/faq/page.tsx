import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'FAQ — The Baseline | Woodway, TX',
  description:
    'Answers on insurance, medication, labs, scheduling, and how The Baseline\'s programs work.',
}

export default function FaqPage() {
  return (
    <>
      {/* ─── PAGE HEAD ─── */}
      <section className="page-head">
        <div className="hero-grid"></div>
        <div className="page-head-inner">
          <div className="eyebrow">Common Questions</div>
          <h1>What patients<br /><em>ask us.</em></h1>
          <p>Cash-pay, scheduling, medication, labs, and how the programs work — answered plainly.</p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq">
        <div className="container">
          <FaqAccordion />
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
