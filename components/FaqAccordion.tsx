'use client'

import { useState } from 'react'

const FAQS = [
  {
    question: 'Do you take insurance?',
    answer:
      'No. The Baseline is a cash-pay practice. This means no prior authorizations, no coverage denials, and no surprise bills. You know what every visit costs before you arrive. Payment is collected at time of service. HSA and FSA cards are accepted for eligible services.',
  },
  {
    question: 'Is medication included in the GLP-1 membership fee?',
    answer:
      'GLP-1 medication is included in the Metabolic program price at The Baseline. Your monthly program fee covers medication, consultations, protocol design, dose adjustments, monitoring, and ongoing care coordination with SK. Comprehensive labs at baseline and your 6-month recheck are included in your program — no separate lab bill. We will walk you through the full cost picture at your initial consultation so there are no surprises.',
  },
  {
    question: 'Do I have to be on GLP-1 to access HRT or IV services?',
    answer:
      'No. You can access any service line independently. GLP-1, HRT, and IV infusions are each available as standalone services. Many patients come in for IV therapy or HRT without any interest in GLP-1. That said, the All-Access Concierge bundle is designed for patients who benefit from running Metabolic and Hormone together — your monthly IV is included free when you do.',
  },
  {
    question: 'When are you open?',
    answer:
      'The Baseline operates Thursdays by appointment at 8416 Old McGregor Road, Woodway, TX 76712. Booking is through Acuity Scheduling. All appointments are reserved in advance. Walk-ins are not accepted. To book, use the link above or call 254.433.8430.',
  },
  {
    question: 'Who will I see at my appointments?',
    answer:
      'Every clinical appointment at The Baseline is managed by Sarah Kathryn Hannah, APRN, FNP-C. You will see SK at your initial consultation and at your clinical check-ins. IV infusions and add-on services are administered by SK and clinical support staff. You will not be handed off to a coordinator or rotating provider.',
  },
  {
    question: 'What is the behavioral health consult and do I have to do it?',
    answer:
      'No, it is not required. The behavioral health consult is an optional 30-minute structured clinical session with Hannah Short, LCSW, integrated into The Baseline\'s care model. It is designed for patients navigating the emotional and psychological side of metabolic and hormonal change. If SK identifies that you would benefit from it, she may recommend it. But it is never mandatory, and it does not affect your clinical care if you decline.',
  },
  {
    question: 'Can I cancel my membership at any time?',
    answer:
      'Yes. All programs are month-to-month with no long-term contracts. You can cancel at any time. We ask for reasonable notice to manage scheduling. Your clinical records are yours and can be transferred to any provider upon request.',
  },
  {
    question: 'Do you prescribe GLP-1 medications?',
    answer:
      'Yes. Sarah Kathryn Hannah is a licensed APRN and FNP-C with full prescriptive authority in Texas. GLP-1 medications are prescribed following clinical evaluation and are filled through your pharmacy of choice or through coordinated pharmacy partnerships. Availability of specific medications, including compounded options, is subject to current FDA guidance and pharmacy supply.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-list">
      {FAQS.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <div className="faq-question" onClick={() => toggle(i)}>
            <span className="faq-question-text">{faq.question}</span>
            <span className="faq-toggle">+</span>
          </div>
          <div className="faq-answer">
            <div className="faq-answer-inner">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
