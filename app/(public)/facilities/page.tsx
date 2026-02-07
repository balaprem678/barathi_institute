import React from 'react';
import Link from 'next/link';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import './facilities.scss';
import Image from 'next/image';

interface Facility {
  title: string;
  description: string;
  img: string;
}

const facilities: Facility[] = [
  { title: "Class Room", description: "Fully furnished classrooms, equipped with the latest teaching aids and all have network connectivity to facilitate presentations which make learning at BHARATHI a world class experience.", img: "/images/facilities/1.jpg" },
  { title: "Basic Food Production Lab", description: "The Basic Food Production Lab of BHARATHI denoted as Basic Kitchen. The Basic Food Production kitchen is equipped with latest equipment's. This Lab is used to provide training to the students of 1st year in basic Continental and Indian cuisines.", img: "/images/facilities/2.jpg" },
  { title: "Advance Food Production Lab", description: "The Advance Food Production Lab is used to teaching and training international cuisines to the final year students. The Advance Food Production Lab is the place where finishing touches are given to the budding Chefs.", img: "/images/facilities/3.jpg" },
  { title: "Bakery & Confectionery", description: "The Bakery & Confectionery department trains the students in the art of making yeast products, flour confectionery products, chocolates, cold and hot pudding in order to prepare them face the challenges of the industry has two separate Bakery labs for smooth practical of 1st year and 2rd year students.", img: "/images/facilities/4.jpg" },
  { title: "Front Office Lab", description: "As the front office is known as the nerve centre of the hotel, the front office laboratory of the Institute is design to cater all the needs of providing training to the students. Every details of front office dealing like Room Reservation, Registration, Guest Relations, Telephones, Cashiering, Guest Accounting, Revenue Management etc. are taught to the students.", img: "/images/facilities/5.jpg" },
  { title: "Housekeeping Lab", description: "The Institute is equipped with the most modern automatic machines to train the students to provide clean and hygienic atmosphere. The model guest rooms with the most modern facility are used provide hands on training to the students.The housekeeping lab is entirely designed to meet every need of guest with chambers maid trolley. Along with this lab also includes specialized areas like Laundry Operation & room management.", img: "/images/facilities/6.jpg" },
  { title: "Language Lab", description: "The Language Lab of BHARATHI is only maid to supports all the language instructors by facilitating collaboration and communication all the students. Language laboratory encourages the students and integration of the students in the different exercises and this is reflected, Mentors of faculties uses the language lab to allow students to have access to the information quickly and easily developing many types of classroom exercises, personalizing the learning process, encouraging creativity, innovation and training.", img: "/images/facilities/7.jpg" },
  { title: "Library", description: "As Library place an very important role for the overall academic development of students, therefore to provide the best facility to our students, the Institute has got of big & specious library equipped with best books, journals, and periodicals.", img: "/images/facilities/8.jpg" },
  { title: "Medical lab", description: "For Hospital Management course BHARATHI has a medical laboratory where students of Hospital management can learn to the diagnosis, treatment, and prevention of disease.", img: "/images/facilities/9.jpg" },
  { title: "Accommodation Lab", description: "For Hospital Management student BHARATHI has a accommodation lab to train students equipped and handle any situation in future work field.", img: "/images/facilities/10.jpg" },
  { title: "Study Room", description: "Study rooms in BHARATHI are exclusively for graduate and post graduate students. Our study rooms are for academic purposes only, and they all have whiteboards, tables, and task seating.", img: "/images/facilities/11.jpg" },
  { title: "Experienced Faculty", description: "BHARATHI is having dedicated team of highly qualified and trained faculties who with their extensive support bring the best of the personal guidance for the students.", img: "/images/facilities/12.jpg" },
  { title: "Hostel", description: "Separate hostels for boys and girls is provided by the institute for safe, secure and comfortable living with good food.", img: "/images/facilities/13.jpg" },
  { title: "Text Book", description: "Students will be given a set of textbooks as prescribed by the assessing institution. Also sometimes students are required to purchase certain books for their reference at their cost.", img: "/images/facilities/14.jpg" }
];

const ZigzagCard: React.FC<{ facility: Facility; index: number }> = ({ facility, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`zigzag-card ${isEven ? 'zigzag-card--left' : 'zigzag-card--right'}`}>
      <div className="zigzag-card__container">
        <div className={`zigzag-card__image-wrapper ${isEven ? 'order-1' : 'order-2'}`}>
          <div className="zigzag-card__image-container">
            <Image
              src={facility.img}
              alt={facility.title}
              fill
              className="zigzag-card__image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="zigzag-card__number">
              <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
            </div>
            <div className="zigzag-card__overlay">
              <div className="zigzag-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={`zigzag-card__content ${isEven ? 'order-2' : 'order-1'}`}>
          <div className="zigzag-card__content-inner">
            <span className="zigzag-card__category">Facility</span>
            <h3 className="zigzag-card__title">{facility.title}</h3>
            <p className="zigzag-card__description">{facility.description}</p>
            <div className="zigzag-card__features">
              <div className="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Modern Equipment</span>
              </div>
              <div className="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                <span>Expert Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FacilitiesPage: React.FC = () => {
  return (
    <>


      <section className="facilities-hero">
        <div className="container">
          <div className="facilities-hero__content">
            <h1 className="facilities-hero__title">
              Our <span className="highlight">Facilities</span>
            </h1>
            <p className="facilities-hero__subtitle">
              State-of-the-art infrastructure designed for excellence in education
            </p>
            <div className="facilities-hero__stats">
              <div className="stat">
                <span className="stat__number">14+</span>
                <span className="stat__label">Modern Labs</span>
              </div>
              <div className="stat">
                <span className="stat__number">100%</span>
                <span className="stat__label">Practical Training</span>
              </div>
              <div className="stat">
                <span className="stat__number">24/7</span>
                <span className="stat__label">Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <div className="container">
          <div className="facilities-intro">
            <h2 className="facilities-intro__title">
              World-Class Learning Environment
            </h2>
            <p className="facilities-intro__description">
              Discover our cutting-edge facilities that provide hands-on experience
              and prepare students for real-world challenges in their respective fields.
            </p>
          </div>

          <div className="zigzag-container">
            {facilities.map((facility, index) => (
              <ZigzagCard key={index} facility={facility} index={index} />
            ))}
          </div>

          <div className="facilities-cta">
            <div className="facilities-cta__content">
              <h3 className="facilities-cta__title">Experience Excellence Firsthand</h3>
              <p className="facilities-cta__description">
                Book a campus tour to explore our world-class facilities and
                discover how BHARATHI can shape your future.
              </p>
              <Link href="/contact" className="btn btn--primary">
                <span>Schedule a Visit</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesPage;