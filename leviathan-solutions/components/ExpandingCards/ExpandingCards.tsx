'use client'

import { useState } from 'react'
import styles from './ExpandingCards.module.css'

interface CardData {
  client: string
  location: string
  service: string
  metric: string
  gradient: string
  number: string
}

const CARDS: CardData[] = [
  {
    client: "Bear's Plumbing",
    location: 'Dallas, TX',
    service: 'Google Ads + SEO',
    metric: '256 MQL leads / mo',
    gradient: 'linear-gradient(135deg, #ff4d8b 0%, #c0305e 100%)',
    number: '01',
  },
  {
    client: 'Northface Construction',
    location: 'Houston, TX',
    service: 'Website + SEO System',
    metric: '$30k organic traffic / mo',
    gradient: 'linear-gradient(135deg, #1a3a3a 0%, #0a2020 100%)',
    number: '02',
  },
  {
    client: "Stan's Heating & Air",
    location: 'Austin, TX',
    service: 'Full Growth System',
    metric: '847% 6-month ROI',
    gradient: 'linear-gradient(135deg, #b8a4ed 0%, #7b5fc9 100%)',
    number: '03',
  },
  {
    client: 'Lone Star HVAC',
    location: 'San Antonio, TX',
    service: 'Google Maps + Local SEO',
    metric: '#1 ranked in San Antonio',
    gradient: 'linear-gradient(135deg, #ffb084 0%, #e07040 100%)',
    number: '04',
  },
  {
    client: 'Summit Roofing',
    location: 'Fort Worth, TX',
    service: 'Conversion Website',
    metric: '+180% inbound calls',
    gradient: 'linear-gradient(135deg, #e8b94a 0%, #b88820 100%)',
    number: '05',
  },
]

export default function ExpandingCards() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.panel} role="list">
      {CARDS.map((card, i) => (
        <div
          key={card.client}
          className={`${styles.card}${i === activeIndex ? ` ${styles.active}` : ''}`}
          onClick={() => setActiveIndex(i)}
          onMouseEnter={() => setActiveIndex(i)}
          role="listitem"
          aria-label={card.client}
        >
          <div
            className={styles.bg}
            style={{ background: card.gradient }}
          />

          <div className={styles.overlay}>
            <span className={styles.number}>{card.number}</span>

            <span className={styles.collapsedLabel}>{card.client}</span>

            <div className={styles.expandedContent}>
              <span className={styles.clientName}>{card.client}</span>
              <div className={styles.clientMeta}>
                <span className={styles.tag}>{card.location}</span>
                <span className={styles.tag}>{card.service}</span>
              </div>
              <span className={styles.metric}>{card.metric}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
