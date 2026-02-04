"use client";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import NextImage from 'next/image';
import { Images } from '@/app/utilis/Images';
import './header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const closeMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="header">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="top-bar__content">
                        <div className="social-links">
                            <a
                                href="https://www.facebook.com/Bharathiinstitute2005/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=919444120052"
                                target="_blank"
                                aria-label="WhatsApp"
                                rel="noreferrer"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="mailto:info@bharathiinstitutes.com"
                                aria-label="Email"
                            >
                                <i className="far fa-envelope"></i>
                            </a>
                        </div>
                        <div className="top-bar__info">
                            <div id="google_translate_element" className="goo_lan"></div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Main Navigation */}
            <div className="main-nav" ref={menuRef}>
                <div className="container-fluid">
                    <div className="nav__wrapper">
                        {/* Logo */}
                        <Link href="/" className="logo" onClick={closeMenu}>
                            <NextImage
                                src="/images/logo/logo12.png"
                                alt="Institute of Hotel Management and paramedical"
                                className="logo__image"
                                width={300}
                                height={80}
                                priority
                            />
                        </Link>

                        {/* Contact Details */}
                        <div className="contact-info">
                            <div className="contact-info__item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <span>Email</span>
                                    <a href="mailto:info@bharathiinstitutes.com">
                                        info@bharathiinstitutes.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-info__item">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <span>Call Us</span>
                                    <a href="tel:+919444120052">
                                        +91 94441 20052
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/register"
                            className="cta-button"
                            onClick={closeMenu}
                        >
                            <span>Online Application</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                        <ul className="nav-menu__list">
                            <li>
                                <Link href="/" onClick={closeMenu}>
                                    <i className="fas fa-home"></i>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={closeMenu}>
                                    <i className="fas fa-info-circle"></i>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" onClick={closeMenu}>
                                    <i className="fas fa-graduation-cap"></i>
                                    Courses
                                </Link>
                            </li>
                            <li className="dropdown">
                                <button
                                    className="dropdown__toggle"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    aria-expanded={dropdownOpen}
                                >
                                    <i className="fas fa-user-plus"></i>
                                    Admission
                                    <i className={`dropdown__arrow ${dropdownOpen ? "rotate" : ""}`}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <path d="M4 6l4 4 4-4" stroke="currentColor" fill="none" />
                                        </svg>
                                    </i>
                                </button>
                                <ul className={`dropdown__menu ${dropdownOpen ? "show" : ""}`}>
                                    <li>
                                        <Link href="/admission" onClick={closeMenu}>
                                            <i className="fas fa-file-alt"></i>
                                            Admission Procedure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/scholarship" onClick={closeMenu}>
                                            <i className="fas fa-award"></i>
                                            Scholarship
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/placements" onClick={closeMenu}>
                                    <i className="fas fa-briefcase"></i>
                                    Placements
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" onClick={closeMenu}>
                                    <i className="fas fa-images"></i>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/student-testimonials" onClick={closeMenu}>
                                    <i className="fas fa-comment-dots"></i>
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/facilities" onClick={closeMenu}>
                                    <i className="fas fa-building"></i>
                                    Facilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" onClick={closeMenu}>
                                    <i className="fas fa-blog"></i>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={closeMenu}>
                                    <i className="fas fa-phone-alt"></i>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Contact Info */}
                        <div className="mobile-contact">
                            <a href="tel:+919444120052" className="mobile-contact__item">
                                <i className="fas fa-phone"></i>
                                Call Now
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919444120052"
                                target="_blank"
                                rel="noreferrer"
                                className="mobile-contact__item whatsapp">
                                <i className="fab fa-whatsapp"></i>
                                WhatsApp
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;


