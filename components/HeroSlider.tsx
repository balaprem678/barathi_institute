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
                    <div className="container" style={{ position: 'relative', height: '100%' }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '55px',
                                right: '15px',
                                maxWidth: '1170px',
                                margin: '0 0',
                                animation: currentSlide === index ? 'fadeInUp 1s ease-out 0.5s forwards' : 'none',
                                opacity: 0, // Controlled by animation
                                transform: 'translateY(20px)', // Initial state
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
                                textTransform: 'capitalize'
                            }}>
                                {slide.title}
                            </h1>
                            <p style={{
                                color: '#fff',
                                fontSize: '18px',
                                marginBottom: '30px',
                                fontWeight: 400,
                                fontFamily: "'Open Sans', sans-serif"
                            }}>
                                {slide.subtitle}
                            </p>
                            <div className="banner-btns">
                                <Link href={slide.btnLink} className="thm-btn" style={{ padding: '15px 30px' }}>
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
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
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
