import React from 'react'
import { Images } from '@/app/utilis/Images'
import Image from 'next/image'
import './partners.scss'

export default function Partners() {
  // Placement Partners
  const hotelPartners = [
    { logo: Images.logo_1, alt: 'Marriott International logo' },
    { logo: Images.logo_2, alt: 'Taj Hotels logo' },
    { logo: Images.logo_3, alt: 'Hyatt Regency logo' },
    { logo: Images.logo_4, alt: 'ITC Hotels logo' },
    { logo: Images.logo_5, alt: 'The Leela Palaces logo' }
  ]

  const healthcarePartners = [
    { logo: Images.logo_6, alt: 'Apollo Hospitals logo' },
    { logo: Images.logo_7, alt: 'Fortis Health Care logo' },
    { logo: Images.logo_8, alt: 'MIOT Hospital logo' },
    { logo: Images.logo_9, alt: 'RPS Global Hospital logo' },
    { logo: Images.logo_10, alt: 'Kauvery Hospital logo' }
  ]

  const corporatePartners = [
    { logo: Images.logo_11, alt: 'Sodexo logo' },
    // { logo: Images.logo_12, alt: 'The Oberoi Group logo' },
    { logo: Images.logo_13, alt: 'Emirates Flight Catering logo' },
    { logo: Images.logo_14, alt: 'Radisson Blu logo' },
    { logo: Images.logo_15, alt: 'Park Hyatt logo' }
  ]

  // Reusable Partner Section Component
  const PartnerSection = ({ 
    title, 
    partners, 
    className = '' 
  }: { 
    title: string; 
    partners: any[];
    className?: string;
  }) => (
    <div className={`partner-section ${className}`}>
      <h3 className="section-title mb-4">{title}</h3>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <div className="image-wrapper">
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={150}
                height={100}
                className="partner-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="partners-container">
      <div className="container">
        <div className="partners-header">
          <h2 className="main-title">Our Placement Partners</h2>
          <p className="subtitle">
            Trusted by industry leaders across various sectors
          </p>
        </div>

        <div className="partners-content">
          <PartnerSection 
            title="Hotel Industry" 
            partners={hotelPartners}
            className="hotel-partners"
          />
          
          <PartnerSection 
            title="Health Care Industry" 
            partners={healthcarePartners}
            className="healthcare-partners"
          />
          
          <PartnerSection 
            title="Corporate & Other Sectors" 
            partners={corporatePartners}
            className="corporate-partners"
          />
        </div>
      </div>
    </div>
  )
}