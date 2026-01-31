"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './locations.scss';

interface Location {
    id: number;
    name: string;
    address: string[];
    phone?: string;
    mobile: string;
    landmark?: string;
}

const Locations = () => {
    const [isMobile, setIsMobile] = useState(false);

    const locations: Location[] = [
       
        {
            id: 1,
            name: 'Tirunelveli',
            address: [
                'No.171, Hindu Nadar Sangam Complex,',
                'S N High Road, Tirunelveli Junction,',
                'Tirunelveli - 627 001'
            ],
            mobile: '+91 - 9443917155'
        },
        {
            id: 2,
            name: 'Ariyalur',
            address: [
                'No. 36/12, Vellalar Street,',
                'Ragavan Complex, TMB Bank 2nd Floor,',
                'Ariyalur - 621704'
            ],
            mobile: '+91 - 9787898991'
        },
        {
            id: 3,
            name: 'Cuddalore',
            address: [
                'No.25, S.N.Chavadi Road,',
                'K.V.Tex Near, SRG Tours, Cuddalore'
            ],
            mobile: '+91 - 9787898991'
        },
        {
            id: 4,
            name: 'Broadway, Chennai',
            address: [
                'No.108, Thambuchetti Street,',
                'Kalikammbal Kovil Opp. Broadway,',
                'Chennai - 600 001'
            ],
            mobile: '+91 - 9444120052'
        },
        {
            id: 5,
            name: 'Tambaram, Chennai',
            address: [
                'No.95, Rajaji Road,',
                'Near Vasan Eye Care Hospital,',
                'Tambaram, Chennai – 600 045'
            ],
            phone: '044-22264484',
            mobile: '+91 - 9444120052'
        },
        {
            id: 6,
            name: 'Ambattur, Chennai',
            address: [
                'No.29, GNG Colony,',
                'Varatharajapuram,',
                'Ambattur, Chennai – 600 053'
            ],
            phone: '044 – 26251005',
            mobile: '+91 - 9444120052'
        },
        {
            id: 7,
            name: 'Ranipet',
            address: [
                'No.9, M.B.T. Road,',
                'Navalpur, Vimal Shopping Complex,',
                'Ranipet – 632 402'
            ],
            phone: '04172-273393',
            mobile: '+91 - 9444320052'
        },
        {
            id: 8,
            name: 'Ambur',
            address: [
                'No.104, S.K. Road, Dr.Nagaraj Hospital (2nd Floor),',
                'Krishnapuram, Ambur - 635 802'
            ],
            phone: '0417 – 4222822',
            mobile: '+91 - 9442100056'
        },
        {
            id: 9,
            name: 'Villupuram',
            address: [
                'No.793, Nerhuji Road, Indian Bank Upstairs,',
                'Villupuram - 605 602'
            ],
            phone: '04146 – 222822',
            mobile: '+91 - 9444120052'
        },
        {
            id: 10,
            name: 'Madurai',
            address: [
                'No.5, Good Shed Street,',
                'Near Sethupathi School,',
                'Madurai – 625 001'
            ],
            phone: '0452 – 2344355',
            mobile: '+91 - 9443917155'
        },
        {
            id: 11,
            name: 'Karaikudi',
            address: [
                'No.47, Ramal Residence, Mudiyarasan Salai,',
                'Karaikudi – 630 002'
            ],
            phone: '04565 – 234848',
            mobile: '+91 - 9443917155'
        },
        {
            id: 12,
            name: 'Salem',
            address: [
                'No.14/1, SMPDA Chambers, LIC Colony,',
                'New Bus Stand, Salem – 636 004'
            ],
            phone: '04565 – 234848',
            mobile: '+91 - 9442100056'
        },
        {
            id: 13,
            name: 'Vellore',
            address: [
                'No. 29-B, IDA SCUDDAR Road, 3rd Floor,',
                'Jambubala Complex, Vellore - 632004'
            ],
            mobile: '+91 - 9444120052'
        },
        {
            id: 14,
            name: 'Thiruvannamalai',
            address: [
                'No.15/5, Pollur Main Road, Near Axis Bank,',
                'Thiruvannamalai – 606 601'
            ],
            mobile: '+91 - 9444120052'
        },
        {
            id: 15,
            name: 'Kanchipuram',
            address: [
                'No.17 A, Ulagalandhar Mada Street,',
                'Near Aruna Mahal, Big Kanchipuram,',
                'Kanchipuram – 631 502'
            ],
            mobile: '+91 - 9787438991'
        },
        {
            id: 16,
            name: 'Trichy',
            address: [
                '25, Nandhi Koil St, Theppakulam,',
                'Tiruchirappalli, Tamil Nadu 620002'
            ],
            mobile: '+91 - 9787438991'  //Not this location Number
        },
        {
            id: 17,
            name: 'Kallakurichi',
            address: [
                'No.59, 3rd floor, Gopuram towers,',
                'Dhurugam Road, Tamil Nadu 606202'
            ],
            mobile: '+91 - 9787438991' //Not this location Number
        },
        {
            id: 18,
            name: 'Dindigul',
            address: [
                'No 10, LGB compound, E.B colony,',
                'Near Anil semiya head office,',
                'Tamil Nadu 624001'
            ],
            mobile: '+91 - 9787438991' //Not this location Number
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="locations-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Locations Across Tamil Nadu</h2>
                    <p className="section-subtitle">
                        Visit any of our branches for personalized guidance and support
                    </p>
                </div>

                <div className="locations-slider-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={isMobile ? 1 : 3}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={800}
                        loop={true}
                        grabCursor={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 24
                            }
                        }}
                        className="locations-swiper"
                    >
                        {locations.map((location) => (
                            <SwiperSlide key={location.id}>
                                <div className="location-card">
                                    <div className="location-card-header">
                                        <h3 className="location-name">{location.name}</h3>
                                        <div className="location-badge">
                                            <span>Branch</span>
                                        </div>
                                    </div>

                                    <div className="location-card-body">
                                        <div className="address-section">
                                            {location.address.map((line, index) => (
                                                <p key={index} className="address-line">{line}</p>
                                            ))}
                                        </div>

                                        {(location.phone || location.mobile) && (
                                            <div className="contact-section">
                                                {location.phone && (
                                                    <div className="contact-item">
                                                        <Phone size={14} />
                                                        <span className="contact-value">{location.phone}</span>
                                                    </div>
                                                )}
                                                {location.mobile && (
                                                    <div className="contact-item">
                                                        <Phone size={14} />
                                                        <span className="contact-value">{location.mobile}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="location-card-footer">
                                        <button
                                            className="action-btn direction-btn"
                                            onClick={() => {
                                                const query = encodeURIComponent(`${location.name} ${location.address[0]}`);
                                                window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
                                            }}
                                            aria-label="Get directions"
                                        >
                                            <MapPin size={18} />
                                        </button>
                                        {location.mobile && (
                                            <a
                                                href={`tel:${location.mobile.replace(/\D/g, '')}`}
                                                className="action-btn call-btn"
                                                aria-label="Call now"
                                            >
                                                <Phone size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="slider-controls">
                        <button className="swiper-button-prev" aria-label="Previous slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="swiper-button-next" aria-label="Next slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>

                <div className="locations-stats">
                    <div className="stat-item">
                        <div className="stat-number">{locations.length}</div>
                        <div className="stat-label">Branches</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">24+</div>
                        <div className="stat-label">Cities</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;