import styles from './AgencyFooter.module.css'

const SERVICES = [
  'Website Design',
  'Local SEO',
  'Google Ads',
  'Google Maps',
  'Review Management',
  'CRM & Follow-up',
]

const INDUSTRIES = [
  'Plumbing',
  'HVAC',
  'Roofing',
  'Electrical',
  'Contracting',
  'Pest Control',
]

const SERVICE_AREAS = [
  'Dallas',
  'Houston',
  'Austin',
  'San Antonio',
  'Fort Worth',
  'El Paso',
]

export default function AgencyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandName}>
              <span className={styles.brandDot} />
              Forma Digital
            </div>
            <p className={styles.brandTagline}>
              Growth systems for Texas home service businesses. Website, SEO, and ads working together.
            </p>
            <div className={styles.clutchBadge}>
              <span className={styles.clutchStars}>★★★★★</span>
              <span className={styles.clutchText}>4.9 on Clutch · 114 reviews</span>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Services</p>
            <ul className={styles.colLinks}>
              {SERVICES.map((s) => (
                <li key={s}><a href="#services" className={styles.colLink}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Industries</p>
            <ul className={styles.colLinks}>
              {INDUSTRIES.map((i) => (
                <li key={i}><a href="#industries" className={styles.colLink}>{i}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Service Areas</p>
            <ul className={styles.colLinks}>
              {SERVICE_AREAS.map((a) => (
                <li key={a}><a href="#contact" className={styles.colLink}>{a}, TX</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 Forma Digital LLC · Arlington, TX</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="mailto:hello@formadigital.co" className={styles.legalLink}>hello@formadigital.co</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
