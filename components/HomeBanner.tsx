'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Images } from '@/app/utilis/Images';
import './homebanner.scss';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: Images.home_banner_1,
    title: 'Create Your Future with Bharathi Institute',
    subtitle: 'Skill Based Courses with Placement Help',
    description: 'Leading Hotel Management & Paramedical College in Tamil Nadu',
    buttonText: 'Launch Your Career – Admissions Open!',
    buttonLink: '/register'
  },
  {
    id: 2,
    image: Images.home_banner_2,
    title: 'Join Bharathi Institute',
    subtitle: 'Learn Practical Skills. Get Job Support.',
    description: 'Best Hotel Management & Paramedical Courses in Tamil Nadu',
    buttonText: 'Explore Courses – Secure Your Seat',
    buttonLink: '/courses'
  },
  {
    id: 3,
    image: Images.home_banner_3,
    title: 'Welcome to Bharathi Institutes of Hotel Management & Paramedicals',
    subtitle: 'Learn Skills. Build a Career.',
    description: 'Trusted Hotel Management & Paramedical College in Tamil Nadu',
    buttonText: 'Learn more about Bharathi Institute',
    buttonLink: '/about'
  }
];

export default function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [currentSlide, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="home-slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''
              }`}
          >
            {/* Background Image using Next.js Image component - Option 1 */}
            <div className="slide-background">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                {...(index === 0 ? { fetchPriority: "high" } : {})}
              />
            </div>


            <div className="slide-overlay" />
            <div className="slide-content">
              <h1 className="slide-title">
                {slide.title}<br />
                <span className="slide-subtitle">{slide.subtitle}</span>
              </h1>
              <p className="slide-description">
                {slide.description}
              </p>
              <Link
                href={slide.buttonLink}
                className="slide-button"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="slider-arrow prev-arrow"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        className="slider-arrow next-arrow"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            transform: `scaleX(${(currentSlide + 1) / slides.length})`,
            transformOrigin: 'left',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}