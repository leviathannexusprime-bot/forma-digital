import { Phone } from 'lucide-react'
import styles from './AgencyNav.module.css'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#results', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
]

export default function AgencyNav() {
  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Forma Digital — Home">
          <span className={styles.logoDot} aria-hidden="true" />
          Forma Digital
        </a>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <a href="tel:+15125550190" className={styles.phone} aria-label="Call us: (512) 555-0190">
            <Phone size={14} aria-hidden="true" />
            (512) 555-0190
          </a>
          <a href="#contact" className={styles.cta}>
            Get free audit
          </a>
        </div>

        <div className={styles.mobileAudit}>
          <a href="tel:+15125550190" className={styles.mobilePhone} aria-label="Call us">
            <Phone size={16} />
          </a>
          <a href="#contact" className={styles.mobileAuditLink}>
            Free audit
          </a>
        </div>
      </div>
    </nav>
  )
}
