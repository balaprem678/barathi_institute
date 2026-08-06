// import React from 'react'
// import { Images } from '@/app/utilis/Images'
// import Image from 'next/image'
// import './partners.scss'

// export default function Partners() {
//   // Placement Partners
//   const hotelPartners = [
//     { logo: Images.logo_1, alt: 'Marriott International logo' },
//     { logo: Images.logo_2, alt: 'Taj Hotels logo' },
//     { logo: Images.logo_3, alt: 'Hyatt Regency logo' },
//     { logo: Images.logo_4, alt: 'ITC Hotels logo' },
//     { logo: Images.logo_5, alt: 'The Leela Palaces logo' }
//   ]

//   const healthcarePartners = [
//     { logo: Images.logo_6, alt: 'Apollo Hospitals logo' },
//     { logo: Images.logo_7, alt: 'Fortis Health Care logo' },
//     { logo: Images.logo_8, alt: 'MIOT Hospital logo' },
//     { logo: Images.logo_9, alt: 'RPS Global Hospital logo' },
//     { logo: Images.logo_10, alt: 'Kauvery Hospital logo' }
//   ]

//   const corporatePartners = [
//     { logo: Images.logo_11, alt: 'Sodexo logo' },
//     // { logo: Images.logo_12, alt: 'The Oberoi Group logo' },
//     { logo: Images.logo_13, alt: 'Emirates Flight Catering logo' },
//     { logo: Images.logo_14, alt: 'Radisson Blu logo' },
//     { logo: Images.logo_15, alt: 'Park Hyatt logo' }
//   ]

//   // Reusable Partner Section Component
//   const PartnerSection = ({
//     title,
//     partners,
//     className = ''
//   }: {
//     title: string;
//     partners: any[];
//     className?: string;
//   }) => (
//     <div className={`partner-section ${className}`}>
//       <h3 className="section-title mb-4">{title}</h3>
//       <div className="partners-grid">
//         {partners.map((partner, index) => (
//           <div className="partner-card" key={index}>
//             <div className="image-wrapper">
//               <Image
//                 src={partner.logo}
//                 alt={partner.alt}
//                 width={150}
//                 height={100}
//                 className="partner-logo"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )

//   return (
//     <div className="partners-container">
//       <div className="container">
//         <div className="partners-header">
//           <h2 className="main-title">Our Recruitment Partners</h2>
//           <p className="subtitle">
//             Working with reputed organizations across the hospitality and healthcare sectors.
//           </p>
//         </div>

//         <div className="partners-content">
//           <PartnerSection
//             title="Hotel Industry"
//             partners={hotelPartners}
//             className="hotel-partners"
//           />

//           <PartnerSection
//             title="Health Care Industry"
//             partners={healthcarePartners}
//             className="healthcare-partners"
//           />

//           <PartnerSection
//             title="Corporate & Other Sectors"
//             partners={corporatePartners}
//             className="corporate-partners"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import { Images } from '@/app/utilis/Images'
import Image from 'next/image'
import './partners.scss'

interface Partner {
  logo: any
  alt: string
}

export default function Partners() {
  // Placement Partners
  const hotelPartners: Partner[] = [
    { logo: Images.logo_1, alt: 'Marriott International logo' },
    { logo: Images.logo_2, alt: 'Taj Hotels logo' },
    { logo: Images.logo_3, alt: 'Hyatt Regency logo' },
    { logo: Images.logo_4, alt: 'ITC Hotels logo' },
    { logo: Images.logo_5, alt: 'The Leela Palaces logo' }
  ]

  const healthcarePartners: Partner[] = [
    { logo: Images.logo_6, alt: 'Apollo Hospitals logo' },
    { logo: Images.logo_7, alt: 'Fortis Health Care logo' },
    { logo: Images.logo_8, alt: 'MIOT Hospital logo' },
    { logo: Images.logo_9, alt: 'RPS Global Hospital logo' },
    { logo: Images.logo_10, alt: 'Kauvery Hospital logo' }
  ]

  const corporatePartners: Partner[] = [
    { logo: Images.logo_11, alt: 'Sodexo logo' },
    { logo: Images.logo_13, alt: 'Emirates Flight Catering logo' },
    { logo: Images.logo_14, alt: 'Radisson Blu logo' },
    { logo: Images.logo_15, alt: 'Park Hyatt logo' }
  ]

  // Reusable Sector Row — fixed label tab + continuously scrolling logo strip
  const SectorRow = ({
    index,
    label,
    partners,
    accent,
    direction = 'left'
  }: {
    index: string
    label: string
    partners: Partner[]
    accent: string
    direction?: 'left' | 'right'
  }) => {
    // duplicate the list so the marquee loops seamlessly
    const track = [...partners, ...partners]

    return (
      <div className={`sector-row sector-row--${accent}`}>
        <div className="sector-tab">
          <span className="sector-tab__index">{index}</span>
          <span className="sector-tab__label">{label}</span>
          <span className="sector-tab__count">{String(partners.length).padStart(2, '0')} orgs</span>
        </div>

        <div className="sector-track">
          <div className={`marquee marquee--${direction}`}>
            {track.map((partner, i) => (
              <div className="marquee__item" key={i}>
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={150}
                  height={90}
                  className="marquee__logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="partners-section">
      <div className="partners-shell">
        <header className="partners-header">
          <span className="partners-header__eyebrow">Where our graduates are placed</span>
          <h2 className="partners-header__title">Recruitment Partners</h2>
          <p className="partners-header__subtitle">
            A standing roster of hospitality, healthcare and corporate organisations that
            recruit directly from our campus.
          </p>
        </header>

        <div className="sector-manifest">
          <SectorRow
            index="01"
            label="Hotel Industry"
            partners={hotelPartners}
            accent="hotel"
            direction="left"
          />
          <SectorRow
            index="02"
            label="Health Care Industry"
            partners={healthcarePartners}
            accent="healthcare"
            direction="right"
          />
          <SectorRow
            index="03"
            label="Corporate &amp; Other Sectors"
            partners={corporatePartners}
            accent="corporate"
            direction="left"
          />
        </div>
      </div>
    </section>
  )
}
