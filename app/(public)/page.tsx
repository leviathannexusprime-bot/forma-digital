import {
  Globe,
  Search,
  TrendingUp,
  MapPin,
  Star,
  Zap,
  Wrench,
  Wind,
  Home,
  Hammer,
  ShieldCheck,
  Bug,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  BadgeCheck,
} from 'lucide-react'
import AgencyNav from '@/components/AgencyNav'
import AgencyFooter from '@/components/AgencyFooter'
import TechCursor from '@/components/ui/tech-cursor'
import ExpandingCards from '@/components/ExpandingCards'
import LeadForm from '@/components/LeadForm'

/* ─── Data ─── */

const SERVICES = [
  {
    icon: Globe,
    label: 'Website Design',
    desc: 'High-converting websites built specifically for home service trades — fast, mobile-first, and ready to rank on day one.',
    color: 'pink',
  },
  {
    icon: Search,
    label: 'Local SEO',
    desc: 'Dominate page 1 in every city you serve, for every keyword your customers type into Google.',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    label: 'Google Ads',
    desc: 'Paid campaigns with a positive ROI guarantee — or we keep working until they deliver, at no extra cost.',
    color: 'lavender',
  },
  {
    icon: MapPin,
    label: 'Google Maps',
    desc: 'Own the local pack and get your phone ringing before a single competitor even loads on screen.',
    color: 'peach',
  },
  {
    icon: Star,
    label: 'Review Management',
    desc: 'Automated review requests that build your 5-star reputation on Google and Clutch — without lifting a finger.',
    color: 'ochre',
  },
  {
    icon: Zap,
    label: 'CRM & Follow-up',
    desc: 'Never miss a lead. Every call, text, and form fill captured and followed up automatically within 60 seconds.',
    color: 'mint',
  },
]

const INDUSTRIES = [
  { icon: Wrench, label: 'Plumbing', stat: 'Avg. +256% leads in 90 days' },
  { icon: Wind, label: 'HVAC', stat: 'Avg. +503% organic traffic' },
  { icon: Home, label: 'Roofing', stat: 'Avg. +180% inbound calls' },
  { icon: Zap, label: 'Electrical', stat: 'Avg. $124 cost per lead' },
  { icon: Hammer, label: 'Contracting', stat: 'Avg. 847% 6-mo ROI' },
  { icon: Bug, label: 'Pest Control', stat: 'Avg. +300% organic leads' },
]

const CASE_STUDIES = [
  {
    client: "Bear's Plumbing",
    location: 'Dallas, TX',
    service: 'Google Ads + Local SEO',
    metrics: [
      { value: '256', label: 'MQL leads generated' },
      { value: '$124', label: 'cost per conversion' },
      { value: '+180%', label: 'inbound calls' },
    ],
    quote: '"Forma replaced three separate vendors we were paying. Within 90 days we had more leads than we knew what to do with."',
    author: 'Marcus T., Owner',
  },
  {
    client: 'Northface Construction',
    location: 'Houston, TX',
    service: 'Website + SEO System',
    metrics: [
      { value: '$30k', label: 'organic traffic value/mo' },
      { value: '+416%', label: 'total keyword rankings' },
      { value: '+503%', label: 'engaged organic traffic' },
    ],
    quote: '"The 21-day launch was real. Our site went live on day 19 and the SEO was already running. We ranked for our top keyword inside two months."',
    author: 'Jennifer K., Operations Director',
  },
  {
    client: "Stan's Heating & Air",
    location: 'Austin, TX',
    service: 'Full Growth System',
    metrics: [
      { value: '+300%', label: 'organic lead increase' },
      { value: '23%', label: 'conversion rate' },
      { value: '847%', label: '6-month ROI' },
    ],
    quote: '"I was skeptical about the exclusivity claim but they really do turn away our competitors. That alone is worth the retainer."',
    author: 'David R., Owner',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Growth Audit',
    desc: 'A 30-minute call where we map your current gaps — website speed, local rankings, competitor advantages, and where leads are falling through.',
  },
  {
    number: '02',
    title: 'Custom Strategy',
    desc: 'A growth plan built for your specific trade, your target city, and your revenue goal. Not a template — a plan built for one client in your market.',
  },
  {
    number: '03',
    title: 'Build & Launch',
    desc: 'Website live in 21 days. SEO campaigns active. Ads running. Every lead source tracked with call recording and form attribution.',
  },
  {
    number: '04',
    title: 'Scale & Optimise',
    desc: 'Monthly strategy calls, weekly reports, ongoing SEO, and ad management that compounds. Your competition will wonder what changed.',
  },
]

const PRICING = [
  {
    name: 'Growth Starter',
    price: 'from $2,500',
    period: '/mo',
    featured: false,
    features: [
      '5-page conversion website',
      'Local SEO (1 city)',
      'Google Business Profile',
      'Call tracking & reporting',
      'Monthly strategy call',
    ],
    cta: 'Get started',
    ctaHref: '#contact',
  },
  {
    name: 'Growth Pro',
    price: 'from $4,500',
    period: '/mo',
    featured: true,
    features: [
      'Everything in Starter',
      'Google Ads management',
      '3-city SEO expansion',
      'Review generation system',
      'Bi-weekly strategy call',
      'CRM & lead notifications',
    ],
    cta: 'Start growing',
    ctaHref: '#contact',
  },
  {
    name: 'Market Leader',
    price: 'Custom',
    period: '',
    featured: false,
    features: [
      'Everything in Growth Pro',
      'City exclusivity guarantee',
      'Full CRM + lead automation',
      'Dedicated growth manager',
      'Competitor conquest SEO',
      'Quarterly market analysis',
    ],
    cta: 'Contact sales',
    ctaHref: '#contact',
  },
]

const TESTIMONIALS = [
  {
    quote: '"Forma replaced three separate vendors we were paying — web designer, SEO agency, and PPC manager. Within 90 days we had more leads than we knew what to do with. The system just works."',
    name: 'Marcus T.',
    role: "Owner, Bear's Plumbing",
    location: 'Dallas, TX',
  },
  {
    quote: '"I was skeptical about the one-client-per-city claim but they actually turned away our main competitor when they called. That kind of commitment shows up in the results they deliver."',
    name: 'Jennifer K.',
    role: 'Operations Director, Northface Construction',
    location: 'Houston, TX',
  },
  {
    quote: '"The 21-day website launch is real — not a sales promise. We were live on day 19 and the phone was ringing from the map pack within the first month. Best marketing investment we\'ve ever made."',
    name: 'David R.',
    role: "Owner, Stan's Heating & Air",
    location: 'Austin, TX',
  },
]

const SCORECARD_POINTS = [
  'Specific vertical focus',
  'Named client case studies',
  'Transparent starting prices',
  'Exclusivity guarantee',
  'Sells a system, not just a website',
  '114 verified Clutch reviews',
]

/* ─── Reusable star row ─── */
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="star-row" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  )
}

/* ─── Component ─── */

export default function AgencyHomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <TechCursor />
      <AgencyNav />

      <div className="agency-page" id="main-content">

        {/* ── HERO ── */}
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-inner">

            <div className="hero-content">
              <span className="hero-eyebrow">Texas Home Services · Est. 2018</span>

              <h1 className="hero-headline" id="hero-heading">
                More calls.<br />
                More jobs.<br />
                More revenue.
              </h1>

              <p className="hero-sub">
                Forma builds websites, SEO, and ad systems{' '}
                <strong>exclusively for Texas home service businesses</strong> —
                plumbers, HVAC companies, roofers, and electricians.
                We don&apos;t serve everyone. We master one vertical.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="agency-btn-primary">
                  Get your free audit
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#results" className="btn-text-link">
                  See our results
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="hero-trust" role="list" aria-label="Trust indicators">
                <span className="hero-trust-item" role="listitem">
                  <StarRating />
                  <span>4.9 · 114 Clutch reviews</span>
                </span>
                <span className="hero-trust-item" role="listitem">
                  <CheckCircle size={15} aria-hidden="true" />
                  Clutch Top Agency 2024
                </span>
                <a href="tel:+15125550190" className="hero-trust-item" aria-label="Call us at (512) 555-0190">
                  <Phone size={15} aria-hidden="true" />
                  (512) 555-0190
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-blob hero-blob-1" />
              <div className="hero-blob hero-blob-2" />
              <div className="hero-blob hero-blob-3" />

              <div className="hero-stat-float">
                <div className="hero-stat-value">256</div>
                <div className="hero-stat-label">MQL leads / month</div>
              </div>
              <div className="hero-stat-float">
                <div className="hero-stat-value">847%</div>
                <div className="hero-stat-label">avg. 6-month ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="trust-bar" role="complementary" aria-label="Company credentials">
          <div className="trust-bar-inner">
            <span className="trust-bar-item">
              <span className="trust-bar-dot" aria-hidden="true" />
              200+ Texas businesses served
            </span>
            <span className="trust-bar-item">
              <span className="trust-bar-dot" aria-hidden="true" />
              4.9★ on Clutch · 114 reviews
            </span>
            <span className="trust-bar-item">
              <span className="trust-bar-dot" aria-hidden="true" />
              One client per city, per trade
            </span>
            <span className="trust-bar-item">
              <span className="trust-bar-dot" aria-hidden="true" />
              Website live in 21 days, guaranteed
            </span>
            <span className="trust-bar-item">
              <span className="trust-bar-dot" aria-hidden="true" />
              ROI-positive or we work free
            </span>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section className="agency-section" id="services" aria-labelledby="services-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">What we build</span>
              <h2 className="section-title" id="services-heading">The complete growth system</h2>
              <p className="section-sub">
                Not just a website. A full lead generation machine — website, SEO,
                ads, maps, reviews, and CRM working together as one.
              </p>
            </div>

            <div className="services-grid" role="list">
              {SERVICES.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.label} className={`feature-card feature-card--${service.color}`} role="listitem">
                    <div className="feature-card-icon" aria-hidden="true">
                      <Icon size={22} />
                    </div>
                    <h3>{service.label}</h3>
                    <p>{service.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="agency-section--soft" id="industries" aria-labelledby="industries-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">Who we serve</span>
              <h2 className="section-title" id="industries-heading">We speak your language</h2>
              <p className="section-sub">
                We only work with home service businesses — not agencies that dabble
                in everything. We know your trade, your customer, and your market.
              </p>
            </div>

            <div className="industries-grid" role="list">
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon
                return (
                  <a
                    key={industry.label}
                    href="#contact"
                    className="industry-card"
                    role="listitem"
                    aria-label={`${industry.label} — ${industry.stat}. Click to get a free audit.`}
                  >
                    <div className="industry-icon" aria-hidden="true">
                      <Icon size={22} />
                    </div>
                    <span className="industry-name">{industry.label}</span>
                    <span className="industry-stat">{industry.stat}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="agency-section" id="results" aria-labelledby="results-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">Proof</span>
              <h2 className="section-title" id="results-heading">
                Real results.<br />Named clients.<br />Specific numbers.
              </h2>
              <p className="section-sub">
                We don&apos;t say &ldquo;significant results&rdquo; or &ldquo;3× traffic on average.&rdquo;
                We show you exactly what we built and what it delivered — with names attached.
              </p>
            </div>

            <div className="case-studies-grid">
              {CASE_STUDIES.map((study) => (
                <article key={study.client} className="case-study-card">
                  <div className="case-study-header">
                    <div className="case-study-client">{study.client}</div>
                    <div className="case-study-location">{study.location}</div>
                    <span className="case-study-service-tag">{study.service}</span>
                  </div>

                  <div className="case-study-metrics" role="list" aria-label={`Results for ${study.client}`}>
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="case-study-metric" role="listitem">
                        <span className="metric-value" aria-label={`${metric.value} ${metric.label}`}>
                          {metric.value}
                        </span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="case-study-quote">
                    {study.quote}
                    <cite className="case-study-author">{study.author}</cite>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO — Work We've Done ── */}
        <section className="agency-section" id="portfolio" aria-labelledby="portfolio-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">Our work</span>
              <h2 className="section-title" id="portfolio-heading">
                Built for real businesses.<br />Proven in the field.
              </h2>
              <p className="section-sub">
                Click or hover each card to explore a project.
                Every one is a named client, a named city, and a number we can stand behind.
              </p>
            </div>
            <ExpandingCards />
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="agency-section--soft" id="how-it-works" aria-labelledby="process-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">How it works</span>
              <h2 className="section-title" id="process-heading">From audit to revenue in 21 days</h2>
              <p className="section-sub">
                A clear, repeatable path from where you are to where you want to be —
                with milestones you can hold us to.
              </p>
            </div>

            <div className="process-grid" role="list">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="process-step" role="listitem">
                  <div className="process-number" aria-hidden="true">{step.number}</div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="agency-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">Transparent pricing</span>
              <h2 className="section-title" id="pricing-heading">
                Simple pricing.<br />No surprises.
              </h2>
              <p className="section-sub">
                We publish our starting prices because we&apos;ve seen how &ldquo;contact for pricing&rdquo;
                erodes trust before the conversation even starts. Know what you&apos;re paying before you sign.
              </p>
            </div>

            <div className="pricing-grid" role="list">
              {PRICING.map((tier) => (
                <div
                  key={tier.name}
                  className={tier.featured ? 'pricing-card pricing-card--featured' : 'pricing-card'}
                  role="listitem"
                >
                  {tier.featured && (
                    <span className="pricing-featured-badge">Most Popular</span>
                  )}

                  <div>
                    <p className="pricing-tier-name">{tier.name}</p>
                    <div className="pricing-price">
                      {tier.price}
                      {tier.period && <span className="pricing-period">{tier.period}</span>}
                    </div>
                  </div>

                  <div className="pricing-divider" aria-hidden="true" />

                  <ul className="pricing-features" aria-label={`${tier.name} features`}>
                    {tier.features.map((feature) => (
                      <li key={feature} className="pricing-feature">
                        <span className="pricing-feature-check" aria-hidden="true">
                          <CheckCircle size={11} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.ctaHref}
                    className={tier.featured ? 'agency-btn-white' : 'agency-btn-primary'}
                    aria-label={`${tier.cta} — ${tier.name}`}
                  >
                    {tier.cta}
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="agency-section--soft" aria-labelledby="testimonials-heading">
          <div className="agency-container">
            <div className="section-header">
              <span className="section-label">What clients say</span>
              <h2 className="section-title" id="testimonials-heading">114 verified reviews. Not 4.</h2>
              <p className="section-sub">
                Review volume is a trust signal. A 5-star rating with 8 reviews means
                almost nothing. This is how we earn it — one campaign at a time.
              </p>
            </div>

            <div className="testimonials-grid" role="list">
              {TESTIMONIALS.map((t) => (
                <article key={t.name} className="testimonial-card" role="listitem">
                  <StarRating />
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-role">{t.role} · {t.location}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT / EXCLUSIVITY CTA ── */}
        <section className="exclusivity-section" id="contact" aria-labelledby="contact-heading">
          <div className="exclusivity-inner">

            {/* Scorecard */}
            <div className="scorecard-strip" role="list" aria-label="Why choose Forma">
              {SCORECARD_POINTS.map((point) => (
                <span key={point} className="scorecard-item" role="listitem">
                  <span className="scorecard-check" aria-hidden="true">✓</span>
                  {point}
                </span>
              ))}
            </div>

            {/* Trust badges */}
            <div className="trust-badges" role="list" aria-label="Certifications and awards">
              <span className="trust-badge" role="listitem">
                <span className="trust-badge-star" aria-hidden="true">
                  <StarRating />
                </span>
                4.9 · 114 Clutch Reviews
              </span>
              <span className="trust-badge" role="listitem">
                <BadgeCheck size={16} className="trust-badge-check" aria-hidden="true" />
                Google Partner Agency
              </span>
              <span className="trust-badge" role="listitem">
                <Award size={16} className="trust-badge-check" aria-hidden="true" />
                Clutch Top Agency 2024
              </span>
              <span className="trust-badge" role="listitem">
                <ShieldCheck size={16} className="trust-badge-check" aria-hidden="true" />
                ROI Guarantee
              </span>
            </div>

            {/* Two-column: headline + form */}
            <div className="contact-layout">
              <div>
                <h2 className="exclusivity-headline" id="contact-heading">
                  One plumber.<br />
                  One HVAC.<br />
                  One roofer.<br />
                  Per city.
                </h2>

                <p className="exclusivity-sub">
                  We turn away your competitors once a trade is taken in your city.
                  That&apos;s our commitment to your results — and our rarest offering.
                  If your competitor isn&apos;t already working with us, that spot is still open.
                </p>

                <a href="tel:+15125550190" className="agency-btn-white">
                  <Phone size={16} aria-hidden="true" />
                  (512) 555-0190
                </a>
              </div>

              <div className="contact-form-wrap">
                <p className="contact-form-title">Claim your free growth audit</p>
                <LeadForm />
              </div>
            </div>

            <p className="exclusivity-note">
              Free 30-minute growth audit · No obligation · Texas businesses only
            </p>
          </div>
        </section>

      </div>

      <AgencyFooter />
    </>
  )
}
