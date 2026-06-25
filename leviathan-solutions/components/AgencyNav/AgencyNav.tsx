import styles from './AgencyNav.module.css'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#results', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
]

export default function AgencyNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoDot} />
          Forma Digital
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Get free audit
        </a>

        <div className={styles.mobileAudit}>
          <a href="#contact" className={styles.mobileAuditLink}>
            Free audit
          </a>
        </div>
      </div>
    </nav>
  )
}
