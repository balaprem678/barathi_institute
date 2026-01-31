'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        image: "/images/banner/bharathi-institute-NEW-HOS.webp",
        title: "Welcome to Bharathi Institutes of Hotel Management \n & Paramedicals - Your Gateway of Success",
        subtitle: "Best Hotel Management & Paramedical College in TamilNadu",
        btnText: "Launch Your Career – Admissions Open!",
        btnLink: "/register",
        titleColor: "#ffffff",
        fontWeight: 900
    },
    {
        id: 2,
        image: "/images/banner/hotel-management-chennai.webp",
        title: "Build Your Future with Bharathi Institute – \nIndustry-Focused Courses & 100% Placement Support",
        subtitle: "Best Hotel Management & Paramedical College in TamilNadu",
        btnText: "Explore Courses – Secure Your Seat",
        btnLink: "/courses",
        titleColor: "#ffffff",
        fontWeight: 900
    },
    {
        id: 3,
        image: "/images/banner/bharathi-institute.webp",
        title: "Join Bharathi Institute – South India’s Leading \nInstitute for Hotel Management & Paramedical Courses!",
        subtitle: "Best Hotel Management & Paramedical College in TamilNadu",
        btnText: "Learn more about Bharathi Institute",
        btnLink: "/about",
        titleColor: "#FFFF00",
        fontWeight: 700
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="rev_slider_wrapper" style={{ position: 'relative', height: '650px', overflow: 'hidden', backgroundColor: '#000' }}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: currentSlide === index ? 2 : 1
                    }}
                >
                    {/* Background Image */}
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top center',
                        }}
                    ></div>

                    {/* Dotted Overlay */}
                    <div className="tp-dottedoverlay yes"></div>

                    {/* Content Overlay */}
                    <div
                        className="container"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: '100%',
                            zIndex: 100,
                            pointerEvents: 'none' // Let clicks pass through to arrows if needed, but text needs pointer-events auto
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '15px',
                                right: '15px',
                                transform: 'translateY(-50%)',
                                maxWidth: '1170px',
                                padding: '0 15px',
                                textAlign: 'left',
                                pointerEvents: 'auto',
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                            }}
                        >
                            <h1 style={{
                                color: slide.titleColor,
                                fontWeight: slide.fontWeight,
                                lineHeight: '1.8',
                                fontSize: '48px',
                                marginBottom: '20px',
                                whiteSpace: 'pre-line',
                                fontFamily: "'Montserrat', sans-serif",
                                textTransform: 'capitalize',
                                opacity: currentSlide === index ? 1 : 0,
                                transform: currentSlide === index ? 'translateX(0)' : 'translateX(50px)', // Moves from right to left
                                transition: 'all 0.8s ease-out 0.3s',
                                letterSpacing: '-0.5px'
                            }}>
                                {slide.title}
                            </h1>
                            <p style={{
                                color: '#fff',
                                fontSize: '18px',
                                marginBottom: '30px',
                                fontWeight: 400,
                                fontFamily: "'Open Sans', sans-serif",
                                opacity: currentSlide === index ? 1 : 0,
                                transform: currentSlide === index ? 'translateX(0)' : 'translateX(50px)',
                                transition: 'all 0.8s ease-out 0.6s'
                            }}>
                                {slide.subtitle}
                            </p>
                            <div className="banner-btns" style={{
                                opacity: currentSlide === index ? 1 : 0,
                                transform: currentSlide === index ? 'translateX(0)' : 'translateX(50px)',
                                transition: 'all 0.8s ease-out 0.9s'
                            }}>
                                <Link href={slide.btnLink} className="thm-btn" style={{
                                    padding: '15px 30px',
                                    backgroundColor: '#0495f5', // Blue
                                    color: '#fff',
                                    borderRadius: '5px',
                                    textTransform: 'uppercase',
                                    fontWeight: '700',
                                    letterSpacing: '1px'
                                }}>
                                    {/* Note: If the CSS class 'thm-btn' has !important, these inline styles might need !important too,
                                        but React inline styles usually handle it. If issues persist, we might need a style tag.
                                    */}
                                    {slide.btnText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <div
                className="tp-leftarrow tparrows"
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    cursor: 'pointer',
                    background: 'rgba(0,0,0,0.5)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    opacity: 1
                }}
            >
                <i className="fa fa-angle-left" style={{ fontSize: '20px' }}></i>
            </div>
            <div
                className="tp-rightarrow tparrows"
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    cursor: 'pointer',
                    background: 'rgba(0,0,0,0.5)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    opacity: 1
                }}
            >
                <i className="fa fa-angle-right" style={{ fontSize: '20px' }}></i>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 28px !important;
                    }
                    p {
                        font-size: 16px !important;
                    }
                    section {
                        height: 400px !important;
                    }
                }
            `}</style>
        </section >
    );
};

export default HeroSlider;
