

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Images } from '@/app/utilis/Images';
import './aboutus.scss';
import Partners from './partners';

interface AccordionItem {
    id: string;
    title: string;
    content: string | React.ReactNode;
    isOpen?: boolean;
}

export default function AboutPage() {
    const [mainAccordion, setMainAccordion] = useState<AccordionItem[]>([
        {
            id: 'faq1',
            title: 'Our Journey & Legacy',
            content: 'Bharathi Educational Institution was founded in 2005 with a vision to make quality education in hotel management and paramedical sciences accessible to students across Tamil Nadu. What started as a single institution in Tambaram, Chennai, has now expanded its footprint across Vellore, Ranipet, Ambur, and Karaikudi, becoming one of the best hotel management and paramedical colleges in Tamil Nadu.',
            isOpen: true
        },
        {
            id: 'faq2',
            title: 'Bridging the Urban-Rural Education Gap',
            content: 'In the early 2000s, hotel management and catering education were primarily accessible only to students from urban metropolitan areas like Mumbai, Bangalore, and Chennai. Many talented students from rural regions lacked opportunities to pursue careers in hospitality and healthcare due to financial constraints and the unavailability of institutions near them. Bharathi Educational Institution was established with a mission to bridge this gap and provide world-class education to students from both urban and rural backgrounds, without compromising on quality.'
        },
        {
            id: 'faq3',
            title: 'Expanding Our Presence & Impact',
            content: 'Recognizing the growing demand for skilled professionals in the hospitality and healthcare industries, Bharathi Institute expanded its reach beyond Chennai. Our branches in Vellore, Ambur, Ranipet, and Karaikudi have empowered thousands of students with industry-relevant knowledge, hands-on training, and career opportunities. Over the years, we have become a preferred choice for students seeking affordable yet high-quality professional education.'
        },
        {
            id: 'faq4',
            title: 'A Legacy of Excellence in Education',
            content: (
                <>
                    For nearly two decades, Bharathi Institute has been dedicated to producing highly skilled professionals. We take pride in:
                    <ul className="legacy-list">
                        <li><i className="fa fa-medkit" aria-hidden="true"></i> 25+ Years of Excellence in Hospitality & Paramedical Education.</li>
                        <li><i className="fa fa-graduation-cap" aria-hidden="true"></i> 10,000+ Students Placed in leading hotels, hospitals, and corporate sectors.</li>
                        <li><i className="fa fa-briefcase" aria-hidden="true"></i> 100% Placement Assistance through our strong industry network.</li>
                        <li><i className="fa fa-globe" aria-hidden="true"></i> State-of-the-Art Training Facilities designed to match global industry standards.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'faq5',
            title: 'Pioneering Industry-Focused Education',
            content: 'At Bharathi Institute, we believe in a practical and hands-on approach to learning. Our courses are carefully designed with industry experts, hotel chains, and medical institutions to ensure that our students are job-ready from day one. With our extensive network of 350+ hotel and hospital tie-ups, we provide unmatched internship and job placement opportunities to help students kickstart their careers. As we continue to grow, our commitment remains the same—to provide top-tier education and career opportunities to students across Tamil Nadu, making Bharathi Institute the best hotel management and paramedical college in the region.'
        }
    ]);

    const [studentAccordion, setStudentAccordion] = useState<AccordionItem[]>([
        {
            id: 'why1',
            title: 'Student Life & Facilities – Experience Learning Beyond Classrooms',
            content: 'At Bharathi Institute, education is more than just academics—it\'s about hands-on training, industry exposure, and a vibrant student community. Our state-of-the-art facilities and engaging campus life ensure that every student gets a holistic learning experience while preparing for a successful career in hotel management and healthcare.',
            isOpen: true
        },
        {
            id: 'why2',
            title: 'World-Class Learning Environment',
            content: (
                <ul>
                    <li>Hi-Tech Classrooms & Smart Learning – Interactive teaching methods with modern infrastructure.</li>
                    <li>Advanced Training Labs – Fully equipped kitchen labs, bakery labs, housekeeping labs, and medical labs for practical training.</li>
                    <li>Library & Research Center – Extensive resources, books, and digital materials to enhance learning.</li>
                </ul>
            )
        },
        {
            id: 'why3',
            title: 'Hands-On Practical Training',
            content: (
                <ul>
                    <li>Live Cooking Demonstrations & Workshops – Learn from expert chefs and industry professionals.</li>
                    <li>Housekeeping & Front Office Simulations – Gain real-world experience before entering the workforce.</li>
                    <li>Medical Equipment Handling – Practical exposure to diagnostic tools, OT instruments, and patient care techniques.</li>
                </ul>
            )
        },
        {
            id: 'why4',
            title: 'Engaging Student Activities & Events',
            content: (
                <ul>
                    <li>Culinary Competitions & Hotel Expos – Show off your skills and connect with industry leaders.</li>
                    <li>Healthcare Awareness Camps – Real-time patient care experience through social initiatives.</li>
                    <li>Cultural Festivals & Sports Events – A vibrant campus life with entertainment and extracurricular activities.</li>
                </ul>
            )
        },
        {
            id: 'why5',
            title: 'Internship & Industry Visits',
            content: (
                <ul>
                    <li>Hotel & Hospital Internships – Gain on-the-job training in leading organizations.</li>
                    <li>Guest Lectures & Industry Talks – Learn directly from professionals shaping the industry.</li>
                    <li>Foreign Internship Opportunities – Get international exposure with global hospitality and healthcare firms.</li>
                </ul>
            )
        },
        {
            id: 'why6',
            title: 'Comfortable Accommodation & Campus Life',
            content: (
                <>
                    <ul>
                        <li>Hostel Facilities – Safe and comfortable lodging with hygienic dining facilities.</li>
                        <li>Student Support Services – Career guidance, mentorship programs, and counseling sessions.</li>
                        <li>Modern Cafeteria & Recreational Spaces – Relax and socialize in a welcoming campus environment.</li>
                    </ul>
                    <p>At Bharathi Institute, student life is a blend of learning, excitement, and career preparation. Join us and experience an education that shapes your future beyond classrooms!</p>
                </>
            )
        }
    ]);

    const toggleAccordion = (id: string, accordionType: 'main' | 'student') => {
        if (accordionType === 'main') {
            setMainAccordion(prev => prev.map(item => ({
                ...item,
                isOpen: item.id === id ? !item.isOpen : false
            })));
        } else {
            setStudentAccordion(prev => prev.map(item => ({
                ...item,
                isOpen: item.id === id ? !item.isOpen : false
            })));
        }
    };



    const futureItems = [
        {
            img: Images.aboutFuture1,
            title: 'Career-Oriented Training',
            desc: 'Our courses are designed to align with industry standards, making students job-ready from day one.'
        },
        {
            img: Images.aboutFuture2,
            title: 'Exclusive Internship Programs',
            desc: 'Gain hands-on experience in reputed organizations before stepping into full-time roles.'
        },
        {
            img: Images.aboutFuture3,
            title: 'Global Placement Assistance',
            desc: 'Opportunities extend beyond India, with career openings in the Middle East, Europe, and Asia.'
        },
        {
            img: Images.aboutFuture4,
            title: 'Industry-Tailored Workshops',
            desc: 'Regular interactions with industry experts, masterclasses, and skill-building sessions.'
        }
    ];

    const whyChooseItems = [
        {
            title: 'Industry-Backed Curriculum',
            desc: 'Learn what employers demand'
        },
        {
            title: 'Placement-Linked Training',
            desc: 'Practical sessions that go beyond textbooks.'
        },
        {
            title: 'Strong Alumni Network',
            desc: 'Connect with former students working in top organizations.'
        },
        {
            title: 'Job Fairs & On-Campus Interviews',
            desc: 'Meet recruiters directly at our institute.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Banner */}
            <section className="inner-banner about-hero-banner">
                <div className="container">
                    <div className="banner-content">
                        <h1>Bharathi Institute – Tamil Nadu's Premier Hub for Diploma in Hotel Management & Paramedicals</h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="default-section about-main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="about-image">
                                <Image
                                    src="/images/aboutus.jpg"
                                    alt="diploma of hotel management & Paramedicals"
                                    width={600}
                                    height={400}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h2 className="section-title"><b>About Bharathi Institute</b></h2>
                            <div className="accordion-container">
                                {mainAccordion.map((item) => (
                                    <div className="accordion-item" key={item.id}>
                                        <button
                                            className={`accordion-header ${item.isOpen ? 'active' : ''}`}
                                            onClick={() => toggleAccordion(item.id, 'main')}
                                        >
                                            <span>{item.title}</span>
                                            <i className={`fas fa-chevron-${item.isOpen ? 'up' : 'down'}`}></i>
                                        </button>
                                        <div className={`accordion-content ${item.isOpen ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vision-mission-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="vision-card">
                                <div className="icon-wrapper">
                                    <Image
                                        src={Images.visionIcon.src}
                                        alt="our vision"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <h4><strong>Our Vision</strong></h4>
                                <p>To be the leading institution in Tamil Nadu for hotel management and paramedical education, empowering students with world-class skills, industry exposure, and career opportunities to shape a successful future.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mission-card">
                                <div className="icon-wrapper">
                                    <Image
                                        src={Images.valueIcon.src}
                                        alt="our mission"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <h4><strong>Mission</strong></h4>
                                <ul>
                                    <li>To provide high-quality, industry-relevant education in hotel management and paramedical sciences.</li>
                                    <li>To equip students with practical skills and global exposure through hands-on training and internships.</li>
                                    <li>To foster innovation, leadership, and professionalism, preparing students for rewarding careers.</li>
                                    <li>To build strong industry partnerships ensuring 100% placement assistance.</li>
                                    <li>To make quality education accessible to students from all backgrounds, especially in rural areas.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Placement Partnerships */}
            <section className="placement-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title"><b>Our Placement & Industry Partnerships</b></h2>
                        <p className="section-description">At Bharathi Institute, we don't just provide education—we build careers. Our strong industry partnerships and dedicated placement support ensure that students step into the professional world with confidence. With a vast network of top-tier hotels, hospitals, and corporate firms, we bridge the gap between education and employment, offering real-world exposure and career opportunities both in India and abroad.</p>
                    </div>
                </div>
            </section>

            {/* Shape Your Future */}
            <section className="future-section mb-5">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>How We Shape Your Future</h3>
                    </div>
                    <div className="future-grid">
                        {futureItems.map((item, index) => (
                            <div className="future-card" key={index}>
                                <div className="future-image">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="img-fluid"
                                    />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Partners />

            {/* Why Choose Us */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Why Choose Bharathi Institute for Your Career?</h3>
                    </div>
                    <div className="why-choose-grid">
                        {whyChooseItems.map((item, index) => (
                            <div className="why-choose-card" key={index}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="commitment-text text-center">
                        <h4>At Bharathi Institute, your career is our commitment. Join us and step into a future filled with growth, stability, and success!</h4>
                    </div>
                </div>
            </section>

            {/* Student Life */}
            <section className="student-life-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="student-life-image">
                                <Image
                                    src={Images.aboutWhyUsImg.src}
                                    alt="bharathi institute students picture"
                                    width={600}
                                    height={400}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container student-accordion">
                                {studentAccordion.map((item) => (
                                    <div className="accordion-item" key={item.id}>
                                        <button
                                            className={`accordion-header ${item.isOpen ? 'active' : ''}`}
                                            onClick={() => toggleAccordion(item.id, 'student')}
                                        >
                                            <span>{item.title}</span>
                                            <i className={`fas fa-chevron-${item.isOpen ? 'up' : 'down'}`}></i>
                                        </button>
                                        <div className={`accordion-content ${item.isOpen ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Experts */}
            <section className="experts-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title"><b>Meet Our Experts – <span className="highlight">Learn from the Best in the Industry</span></b></h2>
                        <p>At Bharathi Institute, we take pride in our team of highly qualified, industry-experienced faculty members who are dedicated to shaping the future of our students. Our experts bring years of real-world experience in hotel management and healthcare, ensuring that students receive practical knowledge, hands-on training, and career guidance to excel in their respective fields.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h2><strong>Take the First Step Towards a Successful Career!</strong></h2>
                            <p>Don't wait! Your dream career starts here.</p>
                        </div>
                        <div className="cta-button">
                            <a href="https://forms.gle/9kCPJRg9aD3HKAmW9" className="cta-btn" target="_blank" rel="noopener noreferrer">
                                Apply Online Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp Button */}
            <div className="whatsapp-float">
                <a href="https://api.whatsapp.com/send?phone=+919444120052" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}