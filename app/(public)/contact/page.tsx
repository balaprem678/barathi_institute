'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaGlobe, FaDirections } from 'react-icons/fa';
import './contact.scss';
import { Images } from '@/app/utilis/Images';

interface Branch {
    id: number;
    img: string;
    address: string;
    phone?: string;
    mobile?: string;
    mapSrc?: string;
    name?: string;
}

const branches: Branch[] = [
    {
        id: 1,
        img: "/assets/new_images/contactus/location_1.jpg",
        address: "No.95, Rajaji Road, Near Vasan Eye Care Hospital, Tambaram, Chennai – 600 0045",
        mobile: "+91 - 9444120052",
        mapSrc: "https://maps.app.goo.gl/hdMvtqr1je9R1bEa8",
        name: "Tambaram Branch"
    },
    {
        id: 2,
        img: "/assets/new_images/contactus/location_2.jpg",
        address: "No.29, GNG Colony, Varatharajapuram, Ambattur, Chennai – 600 0053",
        mobile: "+91 - 9444120052",
        mapSrc: "https://maps.app.goo.gl/8q8MJyzVonLdmdEf6",
        name: "Ambattur Branch"
    },
  
    {
        id: 3,
        img: "/assets/new_images/contactus/location_3.jpg",
        address: "No.9, M.B.T. Road, Navalpur, Vimal Shopping Complex, Ranipet – 632 402",
        mobile: "+91 - 9444320052",
        mapSrc: "https://maps.app.goo.gl/aC8c8b9DRLbHi8E37",
        name: "Ranipet Branch"
    },
    {
        id: 4,
        img: "/assets/new_images/contactus/location_4.jpg",
        address: "No.104, S.K. Road, Dr.Nagaraj Hospital (2ndFl oor), Krishnapuram, Ambur -635 802",
        mobile: "+91 - 9442100056",
        mapSrc: "https://maps.app.goo.gl/FNhnY3L5HQUrYmZQ9",
        name: "Ambur Branch"
    },
    {
        id: 5,
        img: "/assets/new_images/contactus/location_5.jpg",
        address: "No.793, Nerhuji Road, Indian Bank Upstairs, Villupuram-605 602",
        mobile: "+91 - 9444120052",
        mapSrc: "https://maps.app.goo.gl/nE2u8PHRSuiQqV9E8",
        name: "Villupuram Branch"
    },
    {
        id: 6,
        img: "/assets/new_images/contactus/location_6.jpg",
        address: "No.5, Good Shed Street, Near Sethupathi School, Madurai – 625 001",
        mobile: "+91 - 94439 17155",
        mapSrc: "https://maps.app.goo.gl/BfkyoBs7s7Ferj779",
        name: "Madurai Branch"
    },
    {
        id: 7,
        img: "/assets/new_images/contactus/location_7.jpg",
        address: "No.47, Ramal Residence, Mudiyarasan Salai, Karaikudi – 630 002",
        mobile: "+91 - 94439 17155",
        mapSrc: "https://maps.app.goo.gl/fJFKPvUB8n5bevHn9",
        name: "Karaikudi Branch"
    },
    {
        id: 8,
        img: "/assets/new_images/contactus/location_9.jpg",
        address: "No.25, S.N.Chavadi Road, K.V.Tex Near, SRG Tours, Cuddalore.",
        mobile: "+91 - 9787898991",
        mapSrc: "https://maps.app.goo.gl/rSewiS9Cxv19PLWm6",
        name: "Cuddalore Branch"
    },
    {
        id: 9,
        img: "/assets/new_images/contactus/location_10.jpg",
        address: "No.171, Hindu Nadar Sangam Complex, S N High Road, Tirunelveli Junction, Tirunelveli - 627 001",
        mobile: "+91 - 9443917155",
        mapSrc: "https://maps.app.goo.gl/AXZEyqA2nSsDcsTN6",
        name: "Tirunelveli Branch"
    },
    {
        id: 10,
        img: "/assets/new_images/contactus/location_11.jpg",
        address: "No. 36/12, Vellalar Street, Ragavan Complex, TMB Bank 2nd Floor, Ariyalur - 621704",
        mobile: "+91 - 9787898991",
        mapSrc: "https://maps.app.goo.gl/ykkiQ9U56ExFGQeA7",
        name: "Ariyalur Branch"
    },
    {
        id: 11,
        img: "/assets/new_images/contactus/location_13.jpg",
        address: "No. 29-B, IDA SCUDDAR Road, 3rd Floor, Jambubala Complex, Vellore - 632004",
        mobile: "+91 - 9444120052",
        mapSrc: "https://maps.app.goo.gl/9wsZi2vP8eDjjHr48",
        name: "Vellore Branch"
    },
    {
        id: 12,
        img: "/assets/new_images/contactus/location_6.jpg",
        address: "No.15/5, Pollur Main Road, Near Axis Bank, Thiruvannamalai – 606 601",
        mobile: "+91 - 9444320052",
        mapSrc: "https://maps.app.goo.gl/FvjBfMHPSNwNvRji9",
        name: "Tiruvannamalai Branch"
    },
    {
        id: 13,
        img: "/assets/new_images/contactus/location_7.jpg",
        address: "No.17 A, Ulagalandhar Mada Street, Near Aruna Mahal, Big Kanchipuram, Kanchipuram – 6631 502",
        mobile: "+91 - 9787438991",
        mapSrc: "https://maps.app.goo.gl/2kmgGsjFz7bXCd4c7",
        name: "Kanchipuram Branch"
    },
    {
        id: 14,
        img: "/assets/new_images/contactus/location_1.jpg",
        address: "No.59, 3rd floor, Gopuram towers, Dhurugam Road, Kallakurichi - 606202",
        mobile: "+91 - 9655363236",
        mapSrc: "https://maps.app.goo.gl/VjKnau8mmnx8JwdV8",
        name: "Kallakurichi Branch"
    },
    {
        id: 15,
        img: "/assets/new_images/contactus/location_1.jpg",
        address: "No 10, LGB compound, E.B colony, Near Anil semiya head office, Dindigul 624001",
        mobile: "+91 - 9655363236",
        mapSrc: "https://maps.app.goo.gl/ydMKXp65HDRN6x8J6",
        name: "Dindigul Branch"
    },
    {
        id: 16,
        img: "/assets/new_images/contactus/location_1.jpg",
        address: "No.14/1,SMPDA Chambers, LIC Colony,New Bus Stand ,Salem – 636 004",
        mobile: "+91 - 9442100056",
        mapSrc: "https://maps.app.goo.gl/QYuPPLspxHNSHtTS6",
        name: "Salem Branch"
    },
    {
        id: 17,
        img: "/assets/new_images/contactus/location_1.jpg",
        address: "25, Nandhi Koil St, Theppakulam, Tiruchirappalli, Tamil Nadu 620002",
        mobile: "+91 - 9442100056", 
        mapSrc: "https://maps.app.goo.gl/do6UvCi8M5HxQM3t7",
        name: "Tiruchirappalli Branch"
    },
    {
        id: 18,
        img: "/assets/new_images/contactus/location_2.jpg",
        address: "No.108, Thambuchetti Street, Kalikammbal Kovil Opp. Broadway, Chennai - 600 001",
        mobile: "+91 - 9444120052",
        mapSrc: "https://maps.app.goo.gl/H9h6te5PTyphXaARA",
        name: "Broadway Branch"
    },
];

export default function ContactPage() {
    const [activeCity, setActiveCity] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Extract unique cities from addresses
    const cities = [
        { id: 'all', name: 'All Cities', count: branches.length },
        { id: 'chennai', name: 'Chennai', count: branches.filter(b => b.address.toLowerCase().includes('chennai')).length },
        {
            id: 'vellore', name: 'Vellore District', count: branches.filter(b =>
                b.address.toLowerCase().includes('vellore') ||
                b.address.toLowerCase().includes('ranipet') ||
                b.address.toLowerCase().includes('ambur')
            ).length
        },
        { id: 'madurai', name: 'Madurai', count: branches.filter(b => b.address.toLowerCase().includes('madurai')).length },
        { id: 'tirunelveli', name: 'Tirunelveli', count: branches.filter(b => b.address.toLowerCase().includes('tirunelveli')).length },
        { id: 'kanchipuram', name: 'Kanchipuram', count: branches.filter(b => b.address.toLowerCase().includes('kanchipuram')).length },
        {
            id: 'other', name: 'Other Cities', count: branches.filter(b =>
                !b.address.toLowerCase().includes('chennai') &&
                !b.address.toLowerCase().includes('vellore') &&
                !b.address.toLowerCase().includes('ranipet') &&
                !b.address.toLowerCase().includes('ambur') &&
                !b.address.toLowerCase().includes('madurai') &&
                !b.address.toLowerCase().includes('tirunelveli') &&
                !b.address.toLowerCase().includes('salem') &&
                !b.address.toLowerCase().includes('tiruchirappalli') &&
                !b.address.toLowerCase().includes('kanchipuram')
            ).length
        }
    ];

    // Filter branches based on active city and search query
    const filteredBranches = branches.filter(branch => {
        const matchesCity = activeCity === 'all' ||
            (activeCity === 'chennai' && branch.address.toLowerCase().includes('chennai')) ||
            (activeCity === 'vellore' && (
                branch.address.toLowerCase().includes('vellore') ||
                branch.address.toLowerCase().includes('ranipet') ||
                branch.address.toLowerCase().includes('ambur')
            )) ||
            (activeCity === 'madurai' && branch.address.toLowerCase().includes('madurai')) ||
            (activeCity === 'tirunelveli' && branch.address.toLowerCase().includes('tirunelveli')) ||
            (activeCity === 'kanchipuram' && branch.address.toLowerCase().includes('kanchipuram')) ||
            (activeCity === 'other' && (
                !branch.address.toLowerCase().includes('chennai') &&
                !branch.address.toLowerCase().includes('vellore') &&
                !branch.address.toLowerCase().includes('ranipet') &&
                !branch.address.toLowerCase().includes('ambur') &&
                !branch.address.toLowerCase().includes('madurai') &&
                !branch.address.toLowerCase().includes('tirunelveli') &&
                !branch.address.toLowerCase().includes('kanchipuram')
            ));

        const matchesSearch = searchQuery === '' ||
            branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            branch.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            branch.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            branch.mobile?.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCity && matchesSearch;
    });

    return (
        <div className="contact-page">
            <section className="banner_section contact_banner">
                <img src={Images.contacts_banner.src} alt="About Us Banner" />
                <h1>Contacts us</h1>
            </section>
            {/* Main Content */}
            <section className="contact-main-section">
                <div className="container">
                    {/* Section Header */}
                    <div className="section-header">
                        <h2 className="section-title">Our Locations</h2>
                        <p className="section-subtitle">
                            Bharathi Institute has multiple branches across Tamil Nadu. Find the nearest branch to you.
                        </p>

                        {/* Apply Now CTA */}
                        <div className="apply-cta">
                            <a
                                // href="https://forms.gle/9kCPJRg9aD3HKAmW9"
                                href="/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="apply-btn"
                            >
                                <i className="fas fa-edit"></i>
                                Click Here To Apply Online
                            </a>
                        </div>
                    </div>

                    {/* Filters and Search */}
                    <div className="contact-filters">
                        <div className="filter-controls">
                            {/* City Filter */}
                            <div className="city-filter">
                                <h4>Filter by City:</h4>
                                <div className="city-buttons">
                                    {cities.map(city => (
                                        <button
                                            key={city.id}
                                            className={`city-btn ${activeCity === city.id ? 'active' : ''}`}
                                            onClick={() => setActiveCity(city.id)}
                                        >
                                            {city.name}
                                            <span className="city-count">({city.count})</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Search Box */}
                            <div className="search-box">
                                <div className="search-input-wrapper">
                                    <i className="fas fa-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Search by location, phone, or address..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="search-input"
                                    />
                                    {searchQuery && (
                                        <button
                                            className="clear-search"
                                            onClick={() => setSearchQuery('')}
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="results-info">
                        <p>
                            Showing <span className="highlight">{filteredBranches.length}</span> of {branches.length} branches
                            {activeCity !== 'all' && ` in ${cities.find(c => c.id === activeCity)?.name}`}
                            {searchQuery && ` matching "${searchQuery}"`}
                        </p>
                    </div>

                    {/* Branches Grid */}
                    <div className="branches-grid">
                        {filteredBranches.length > 0 ? (
                            filteredBranches.map((branch) => (
                                <div className="branch-card" key={branch.id}>
                                    <div className="branch-image">
                                        <Image
                                            src={branch.img}
                                            alt={branch.name || 'Bharathi Institute Branch'}
                                            width={400}
                                            height={250}
                                            className="branch-img"
                                        />
                                        <div className="branch-badge">
                                            <span className="badge-text">Branch {branch.id}</span>
                                        </div>
                                    </div>

                                    <div className="branch-content">
                                        <h3 className="branch-name">{branch.name || `Branch ${branch.id}`}</h3>

                                        <div className="branch-details">
                                            <div className="detail-item">
                                                <div className="detail-icon">
                                                    <FaMapMarkerAlt />
                                                </div>
                                                <div className="detail-content">
                                                    <h4>Address</h4>
                                                    <p>{branch.address}</p>
                                                </div>
                                            </div>

                                            {branch.mobile && (
                                                <div className="detail-item">
                                                    <div className="detail-icon">
                                                        <FaMobileAlt />
                                                    </div>
                                                    <div className="detail-content">
                                                        <h4>Mobile</h4>
                                                        <p>{branch.mobile}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="branch-actions">
                                            {branch.mapSrc ? (
                                                <a
                                                    href={branch.mapSrc.replace('embed', 'view')}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-btn map-btn"
                                                >
                                                    <FaDirections />
                                                    <span>View on Map</span>
                                                </a>
                                            ) : (
                                                <button className="action-btn map-btn disabled">
                                                    <FaGlobe />
                                                    <span>Map Not Available</span>
                                                </button>
                                            )}

                                            <a
                                                href={`tel:${branch.mobile?.replace(/[^0-9]/g, '') || branch.phone?.replace(/[^0-9]/g, '')}`}
                                                className="action-btn call-btn"
                                            >
                                                <FaPhone />
                                                <span>Call Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <div className="no-results-content">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h3>No branches found</h3>
                                    <p>Try adjusting your filters or search criteria</p>
                                    <button
                                        className="reset-filters"
                                        onClick={() => {
                                            setActiveCity('all');
                                            setSearchQuery('');
                                        }}
                                    >
                                        Reset All Filters
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Map Preview */}
                    {filteredBranches.length > 0 && filteredBranches.length <= 3 && (
                        <div className="map-preview-section">
                            <h3 className="map-title">Location Preview</h3>
                            <div className="map-container">
                                {filteredBranches[0].mapSrc ? (
                                    <iframe
                                        src={filteredBranches[0].mapSrc}
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                ) : (
                                    <div className="map-placeholder">
                                        <i className="fas fa-map"></i>
                                        <p>Map not available for this location</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <div className="info-grid">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <div className="info-content">
                                    <h4>General Enquiries</h4>
                                    <p>For general information and admissions</p>
                                    <a href="tel:+919444120052" className="info-link">
                                        +91 - 9444120052
                                    </a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Email Support</h4>
                                    <p>Send us your queries via email</p>
                                    <a href="mailto:info@bharathiinstitutes.com" className="info-link">
                                        info@bharathiinstitutes.com
                                    </a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Working Hours</h4>
                                    <p>Monday - Saturday</p>
                                    <p className="info-time">9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}