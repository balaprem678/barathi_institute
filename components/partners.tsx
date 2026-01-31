import React from 'react'
import { Images } from '@/app/utilis/Images'
import Image from 'next/image'


export default function partners() {
     // Placement Partners
  const hotelPartners = [
    { logo: Images.logo_1, alt: 'mariott international logo' },
    { logo: Images.logo_2, alt: 'taj logo' },
    { logo: Images.logo_3, alt: 'hyatt regency logo' },
    { logo: Images.logo_4, alt: 'ITC Hotel logo' },
    { logo: Images.logo_5, alt: 'The Leela Logo' }
  ]

  const healthcarePartners = [
    { logo: Images.logo_6, alt: 'apollo logo' },
    { logo: Images.logo_7, alt: 'fortis logo' },
    { logo: Images.logo_8, alt: 'miot hospital logo' },
    { logo: Images.logo_9, alt: 'RPS Global hospital logo' },
    { logo: Images.logo_10, alt: 'Kauvery hospital logo' }
  ]

  const corporatePartners = [
    { logo: Images.logo_11, alt: 'sodexo logo' },
    { logo: Images.logo_12, alt: 'the oberoi group logo' },
    { logo: Images.logo_13, alt: 'emirates flight catering logo' },
    { logo: Images.logo_14, alt: 'Radison blue logo' },
    { logo: Images.logo_15, alt: 'Park hyatt logo' }
  ]
  return (
    <div>


          {/* Hotel Partners */}
                  <div className="logo-section" style={{ marginBottom: '40px' }}>
                    <h3 style={{ color: 'black', fontWeight: '600', textAlign: 'center', textDecoration: 'underline', marginBottom: '30px' }}>
                      Hotel Industry
                    </h3>
                    <div className="row aic jcc">
                      {hotelPartners.map((partner, index) => (
                        <div className="col-lg-2 col-md-4 col-sm-6" key={index} style={{ marginBottom: '20px' }}>
                          <div className="image" style={{ textAlign: 'center' }}>
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              width={120}
                              height={80}
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* Healthcare Partners */}
                  <div className="logo-section" style={{ marginBottom: '40px' }}>
                    <h3 style={{ color: 'black', fontWeight: '600', textAlign: 'center', textDecoration: 'underline', marginBottom: '30px' }}>
                      Healthcare Industry
                    </h3>
                    <div className="row aic jcc">
                      {healthcarePartners.map((partner, index) => (
                        <div className="col-lg-2 col-md-4 col-sm-6" key={index} style={{ marginBottom: '20px' }}>
                          <div className="image" style={{ textAlign: 'center' }}>
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              width={120}
                              height={80}
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* Corporate Partners */}
                  <div className="logo-section">
                    <h3 style={{ color: 'black', fontWeight: '600', textAlign: 'center', textDecoration: 'underline', marginBottom: '30px' }}>
                      Corporate & Other Sectors
                    </h3>
                    <div className="row aic jcc">
                      {corporatePartners.map((partner, index) => (
                        <div className="col-lg-2 col-md-4 col-sm-6" key={index} style={{ marginBottom: '20px' }}>
                          <div className="image" style={{ textAlign: 'center' }}>
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              width={120}
                              height={80}
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
    </div>
  )
}
