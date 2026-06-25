'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

const TRADES = ['Plumbing', 'HVAC', 'Roofing', 'Electrical', 'Contracting', 'Pest Control', 'Other']

interface FormFields {
  name: string
  business: string
  phone: string
  city: string
  trade: string
}

export default function LeadForm() {
  const [fields, setFields] = useState<FormFields>({ name: '', business: '', phone: '', city: '', trade: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <div className="lead-form-success">
        <CheckCircle size={40} />
        <p className="lead-form-success-title">You&apos;re on the list.</p>
        <p className="lead-form-success-sub">
          We&apos;ll call you within 1 business day to schedule your free growth audit.
          No sales pitch — just an honest look at your current gaps.
        </p>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="lead-form-row">
        <div className="lead-form-group">
          <label className="lead-form-label" htmlFor="lead-name">Your name</label>
          <input
            className="lead-form-input"
            type="text"
            id="lead-name"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Marcus Thompson"
            required
            autoComplete="name"
          />
        </div>
        <div className="lead-form-group">
          <label className="lead-form-label" htmlFor="lead-business">Business name</label>
          <input
            className="lead-form-input"
            type="text"
            id="lead-business"
            name="business"
            value={fields.business}
            onChange={handleChange}
            placeholder="Bear&apos;s Plumbing"
            required
          />
        </div>
      </div>

      <div className="lead-form-row">
        <div className="lead-form-group">
          <label className="lead-form-label" htmlFor="lead-phone">Phone</label>
          <input
            className="lead-form-input"
            type="tel"
            id="lead-phone"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(512) 555-0190"
            required
            autoComplete="tel"
          />
        </div>
        <div className="lead-form-group">
          <label className="lead-form-label" htmlFor="lead-city">Your city</label>
          <input
            className="lead-form-input"
            type="text"
            id="lead-city"
            name="city"
            value={fields.city}
            onChange={handleChange}
            placeholder="Dallas"
            required
          />
        </div>
      </div>

      <div className="lead-form-group">
        <label className="lead-form-label" htmlFor="lead-trade">Your trade</label>
        <select
          className="lead-form-input"
          id="lead-trade"
          name="trade"
          value={fields.trade}
          onChange={handleChange}
          required
        >
          <option value="">Select your trade...</option>
          {TRADES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <button className="lead-form-submit" type="submit" disabled={loading}>
        {loading ? 'Sending your request...' : 'Claim my free growth audit'}
        {!loading && <ArrowRight size={16} aria-hidden="true" />}
      </button>

      <p className="lead-form-note">
        <Phone size={12} aria-hidden="true" />
        We call within 1 business day &middot; No obligation &middot; Texas only
      </p>
    </form>
  )
}
