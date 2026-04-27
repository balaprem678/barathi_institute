'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import './gallery.scss';
import { Images } from '@/app/utilis/Images';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  alt: string;
}

export default function GalleryContent({ schemaScript }: { schemaScript?: string }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    { id: 31, title: 'Capping day celebration', category: 'capping', image: Images.gallery1, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 36, title: 'Capping day celebration', category: 'capping', image: Images.gallery2, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 37, title: 'Capping day celebration', category: 'capping', image: Images.gallery3, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 38, title: 'Capping day celebration', category: 'capping', image: Images.gallery4, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 39, title: 'Capping day celebration', category: 'capping', image: Images.gallery5, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 40, title: 'Capping day celebration', category: 'capping', image: Images.gallery6, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 41, title: 'Capping day celebration', category: 'capping', image: Images.gallery7, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 42, title: 'Capping day celebration', category: 'capping', image: Images.gallery8, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 43, title: 'Bharathiyar birthday celebration', category: 'cultural', image: Images.gallery9, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 44, title: 'Bharathiyar birthday celebration', category: 'cultural', image: Images.gallery10, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 45, title: 'Bharathiyar birthday celebration', category: 'cultural', image: Images.gallery11, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 47, title: 'Christmas celebration', category: 'festival', image: Images.gallery12, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 48, title: 'Christmas celebration', category: 'festival', image: Images.gallery13, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 49, title: 'Christmas celebration', category: 'festival', image: Images.gallery14, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 50, title: 'Christmas celebration', category: 'festival', image: Images.gallery15, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 51, title: 'Christmas celebration', category: 'festival', image: Images.gallery16, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 52, title: 'Food festival competition', category: 'competition', image: Images.gallery17, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 53, title: 'Food festival competition', category: 'competition', image: Images.gallery18, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 54, title: 'Food festival competition', category: 'competition', image: Images.gallery19, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 55, title: 'Food festival competition', category: 'competition', image: Images.gallery20, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 56, title: 'Food festival competition', category: 'competition', image: Images.gallery21, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 57, title: 'Food festival competition', category: 'competition', image: Images.gallery22, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 58, title: 'Onam celebration', category: 'festival', image: Images.gallery23, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 59, title: 'Onam celebration', category: 'festival', image: Images.gallery24, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 60, title: 'Onam celebration', category: 'festival', image: Images.gallery25, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 61, title: 'Onam celebration', category: 'festival', image: Images.gallery26, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 62, title: 'Women\'s day celebration', category: 'cultural', image: Images.gallery27, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 63, title: 'Women\'s day celebration', category: 'cultural', image: Images.gallery28, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 64, title: 'Women\'s day celebration', category: 'cultural', image: Images.gallery29, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 65, title: 'Carving images', category: 'skills', image: Images.gallery30, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 66, title: 'Carving images', category: 'skills', image: Images.gallery31, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 67, title: 'Carving images', category: 'skills', image: Images.gallery32, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 68, title: 'Carving images', category: 'skills', image: Images.gallery33, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 71, title: 'Hospitality Education', category: 'academic', image: Images.gallery34, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 72, title: 'Hospitality Education', category: 'academic', image: Images.gallery35, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 73, title: 'Hospitality Education', category: 'academic', image: Images.gallery36, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 74, title: 'Hospitality Education', category: 'academic', image: Images.gallery37, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 75, title: 'Hospitality Education', category: 'academic', image: Images.gallery38, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 76, title: 'Hotel School', category: 'academic', image: Images.gallery39, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 77, title: 'Hotel School', category: 'academic', image: Images.gallery40, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 78, title: 'Hotel School', category: 'academic', image: Images.gallery41, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 79, title: 'Hotel School', category: 'academic', image: Images.gallery42, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 80, title: 'Hotel School', category: 'academic', image: Images.gallery43, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 81, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery44, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 82, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery45, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 83, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery46, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 84, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery47, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 85, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery48, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 86, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery49, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 87, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery50, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 88, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery51, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 89, title: 'Hospitality Industry Training', category: 'training', image: Images.gallery52, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 90, title: 'Industrial Visit', category: 'industry', image: Images.gallery53, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 91, title: 'Industrial Visit', category: 'industry', image: Images.gallery54, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 92, title: 'Industrial Visit', category: 'industry', image: Images.gallery55, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 93, title: 'Industrial Visit', category: 'industry', image: Images.gallery56, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 94, title: 'Industrial Visit', category: 'industry', image: Images.gallery57, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 95, title: 'Tour Images', category: 'tour', image: Images.gallery58, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 96, title: 'Tour Images', category: 'tour', image: Images.gallery59, alt: 'Bharathi Institute of Catering & Hotel Management' },
    { id: 97, title: 'Tour Images', category: 'tour', image: Images.gallery60, alt: 'Bharathi Institute of Catering & Hotel Management' },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'capping', name: 'Capping Day', count: galleryItems.filter(item => item.category === 'capping').length },
    { id: 'cultural', name: 'Cultural Events', count: galleryItems.filter(item => item.category === 'cultural').length },
    { id: 'festival', name: 'Festivals', count: galleryItems.filter(item => item.category === 'festival').length },
    { id: 'competition', name: 'Competitions', count: galleryItems.filter(item => item.category === 'competition').length },
    { id: 'skills', name: 'Skill Display', count: galleryItems.filter(item => item.category === 'skills').length },
    { id: 'academic', name: 'Academic', count: galleryItems.filter(item => item.category === 'academic').length },
    { id: 'training', name: 'Industry Training', count: galleryItems.filter(item => item.category === 'training').length },
    { id: 'industry', name: 'Industrial Visits', count: galleryItems.filter(item => item.category === 'industry').length },
    { id: 'tour', name: 'Tours', count: galleryItems.filter(item => item.category === 'tour').length },
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const handleLightboxClick = (e: React.MouseEvent) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox();
    }
  };

  return (
    <div className="gallery-page">
      {/* Dynamic Schema Markup */}
      {schemaScript && (
          <div dangerouslySetInnerHTML={{ __html: schemaScript }} />
      )}

      {/* Hero Banner */}
      <section className="banner_section">
        <Image 
          src={Images.gallery_banner} 
          alt="Gallery Banner" 
          priority 
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <h1 style={{ zIndex: 1 }}>Gallery</h1>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="container">
          {/* Gallery Filters */}
          <div className="gallery-filters">
            <div className="filters-container">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                  <span className="filter-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Original Layout Style */}
          <div className="row filter-layout gallery-grid-original">
            {filteredItems.map((item, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12" key={item.id}>
                <article className="gallery-item-original">
                  <div className="single-item">
                    <div className="inner-box text-center">
                      <div className="image-box" onClick={() => openLightbox(index)}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={400}
                          height={300}
                          className="gallery-image"
                          placeholder="blur"
                        />
                        <div className="image-overlay">
                          <div className="overlay-content">
                            <i className="fas fa-search-plus"></i>
                            <span className="view-text">View Full Size</span>
                          </div>
                        </div>
                      </div>
                      <div className="overlay-box center" onClick={() => openLightbox(index)}>
                        <h4><strong>{item.title}</strong></h4>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-images"></i>
              <h3>No photos found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}

          {/* Gallery Info */}
          <div className="gallery-info">
            <div className="info-row">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-images"></i>
                </div>
                <div className="info-content">
                  <h4>{galleryItems.length}+</h4>
                  <p>Photos in Collection</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <div className="info-content">
                  <h4>{categories.length - 1}</h4>
                  <p>Event Categories</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="info-content">
                  <h4>2024</h4>
                  <p>Current Activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Lightbox */}
      {lightboxOpen && filteredItems[lightboxIndex] && (
        <div
          className="custom-lightbox"
          ref={lightboxRef}
          onClick={handleLightboxClick}
        >
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>

            <button className="lightbox-nav prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="lightbox-image-container">
              <div className="lightbox-image-wrapper">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].alt}
                  width={1200}
                  height={800}
                  className="lightbox-image"
                  placeholder="blur"
                />
              </div>
              <div className="lightbox-caption">
                <h3>{filteredItems[lightboxIndex].title}</h3>
                <p className="category">
                  {categories.find(cat => cat.id === filteredItems[lightboxIndex].category)?.name}
                </p>
                <p className="image-info">
                  Photo {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="lightbox-thumbnails">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`thumbnail ${index === lightboxIndex ? 'active' : ''}`}
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={80}
                    height={60}
                    className="thumbnail-image"
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
