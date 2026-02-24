
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Images } from '@/app/utilis/Images';
import './aboutus.scss';
import Partners from '@/components/partners';

interface AccordionItem {
    id: string;
    title: string;
    content: string | React.ReactNode;
    isOpen?: boolean;
}

export default function About() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<'journey' | 'student'>('journey');
    const [mainAccordion, setMainAccordion] = useState<AccordionItem[]>([
        {
            id: 'faq1',
            title: 'Our Branches in Tamil Nadu',
            content: 'Karaikudi, Tambaram, Ambattur, Broadway (Chennai), Cuddalore, Kanchipuram, Villupuram, Ariyalur, Ranipet, Ambur, Madurai, Tirunelveli, Trichy, Vellore, Salem, Tiruvannamalai, Dindigul, and Kallakurichi.',
            isOpen: true
        },
        {
            id: 'faq2',
            title: 'Bridging the Urban-Rural Education Gap',
            content: 'In the early 2000s, hotel management and catering courses were available only in big cities like Mumbai, Bangalore, and Chennai. Many meritorious students from villages did not get a chance to pursue these courses because of the distance and high tuition fees of colleges. Bharathi Educational Institution was established to overcome this issue. Our intention was to provide quality education to students from both cities and villages without compromising the standard of education.'
        },
        {
            id: 'faq3',
            title: 'Expanding Our Presence & Impact',
            content: 'Bharathi Institute expanded its presence due to the increasing need for skilled professionals. Our 18 branches provide industry-focused training and career support. We are proud to offer high-quality education at an affordable price.'
        },
        {
            id: 'faq4',
            title: 'A Legacy of Excellence in Education',
            content: (
                <>
                    For almost two decades, Bharathi Institute has been churning out competent professionals for a successful career. We take pride in:

                    <ul className="legacy-list">
                        <li><i className="fa fa-medkit" aria-hidden="true"></i> 20+ years of experience in Hotel Management and Paramedical education.</li>
                        <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>10,000+ students placed in top hotels, hospitals, and companies.</li>
                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>100% placement assistance with the help of our strong industry connections.</li>
                        <li><i className="fa fa-globe" aria-hidden="true"></i>Modern training facilities that match industry standards.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'faq5',
            title: 'Pioneering Industry-Focused Education',
            content: 'At Bharathi Institute, we believe in a practical and hands-on approach to learning. Our courses are carefully designed with industry experts, hotel chains, and medical institutions to ensure that our students are job-ready from day one. With our extensive network of 350+ hotel and hospital tie-ups, we provide unmatched internship and job placement opportunities to help students kickstart their careers. As we continue to grow, our commitment remains the same—to provide top-tier education and career opportunities to students across Tamil Nadu, making Bharathi Institute the best hotel management and paramedical college in the region. At Bharathi Institute, we emphasize learning by doing. Our courses are designed in consultation with industry experts, hotel chains, and medical organizations. This ensures that our students are employment-ready from Day One. We have over 350 hotel and hospital tie-ups, which provide our students with excellent internship and placement opportunities. As we expand, our commitment to our mission remains unchanged – to offer quality education and excellent career opportunities to students in Tamil Nadu. This is why we are recognized as one of the top hotel management and paramedical colleges in the area.'
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
                    <li>Modern Classrooms & Smart Learning – Interactive learning techniques with modernized classrooms.
                    </li>
                    <li>Advanced Training Labs – Equipped kitchen labs, bakery labs, housekeeping labs, and medical labs for hands-on training.
                    </li>
                    <li>Library & Study Center – A decent collection of books and learning resources for the benefit of students.
                    </li>
                </ul>
            )
        },
        {
            id: 'why3',
            title: 'Hands-On Practical Training',
            content: (
                <ul>
                    <li>Live Cooking Demonstrations & Workshops – Learn from the experts themselves.
                    </li>
                    <li>Housekeeping & Front Office Practice – Gain practical experience before you even start your job.
                    </li>
                    <li>Medical Equipment Training – Practical training in the use of diagnostic equipment, operation theater equipment, and patient care techniques.
                    </li>
                </ul>
            )
        },
        {
            id: 'why4',
            title: 'Engaging Student Activities & Events',
            content: (
                <ul>
                    <li>Cooking Competitions & Hotel Expos – Showcase your skills and network with professionals.</li>
                    <li>Healthcare Awareness Camps – Gain practical exposure to patient handling through community services.</li>
                    <li>Cultural Programs & Sports Events – Experience a vibrant campus life with fun activities and sports.</li>
                </ul>
            )
        },
        {
            id: 'why5',
            title: 'Internship & Industry Visits',
            content: (
                <ul>
                    <li>Hotel & Hospital Internships – Gain practical experience in the best institutions.</li>
                    <li>Guest Lectures & Industry Talks – Get insights from industry leaders who are changing the face of the industry.</li>
                    <li>Foreign Internship Opportunities – Get international exposure in the best global hospitality and healthcare institutions.</li>
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

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
            <section className="banner_section">
                <img src={Images.about_banner.src} alt="About Us Banner" />
                <h1>About Us</h1>
            </section>
            {/* Mobile Tab Navigation */}
            {isMobile && (
                <div className="mobile-tab-nav">
                    <div className="container">
                        <div className="tab-buttons">
                            <button
                                className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
                                onClick={() => setActiveTab('journey')}
                            >
                                <i className="fas fa-history"></i>
                                <span>Our Journey</span>
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'student' ? 'active' : ''}`}
                                onClick={() => setActiveTab('student')}
                            >
                                <i className="fas fa-users"></i>
                                <span>Student Life</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <section className="default-section about-main-content">
                <div className="container">
                    {isMobile ? (
                        <div className="mobile-accordion-view">
                            <h2 className="section-title"><b>About Bharathi Educational Institution</b></h2>

                            {activeTab === 'journey' && (
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
                            )}

                            {activeTab === 'student' && (
                                <div className="student-life-image mb-4">
                                    <Image
                                        src={Images.aboutWhyUsImg.src}
                                        alt="bharathi institute students picture"
                                        width={600}
                                        height={400}
                                        className="img-fluid"
                                    />
                                </div>
                            )}

                            {activeTab === 'student' && (
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
                            )}
                        </div>
                    ) : (
                        <div className="row desktop-view">
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
                    )}
                </div>
            </section>

            {/* Vision & Mission - Mobile Optimized */}
            <section className="vision-mission-section">
                <div className="container">
                    <div className={`row ${isMobile ? 'mobile-column' : ''}`}>
                        <div className="col-md-6 col-sm-12">
                            <div className="vision-card">
                                <div className="icon-wrapper">
                                    <Image
                                        src={Images.visionIcon.src}
                                        alt="our vision"
                                        width={isMobile ? 60 : 80}
                                        height={isMobile ? 60 : 80}
                                    />
                                </div>
                                <h4><strong>Our Vision</strong></h4>
                                <p>To be the leading institution in Tamil Nadu for hotel management and paramedical education, empowering students with world-class skills, industry exposure, and career opportunities to shape a successful future.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="mission-card">
                                <div className="icon-wrapper">
                                    <Image
                                        src={Images.valueIcon.src}
                                        alt="our mission"
                                        width={isMobile ? 60 : 80}
                                        height={isMobile ? 60 : 80}
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
            {/* <section className="placement-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title"><b>Our Placement & Industry Partnerships</b></h2>
                        <p className="section-description">At Bharathi Institute, we don't just provide education—we build careers. Our strong industry partnerships and dedicated placement support ensure that students step into the professional world with confidence.</p>
                    </div>
                </div>
            </section> */}

            {/* Shape Your Future - Mobile Grid */}
            {/* <section className="future-section mb-5">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>How We Shape Your Future</h3>
                    </div>
                    <div className={`future-grid ${isMobile ? 'mobile-grid' : ''}`}>
                        {futureItems.map((item, index) => (
                            <div className="future-card" key={index}>
                                <div className="future-image">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="img-fluid"
                                        layout="responsive"
                                    />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <Partners />

            {/* Why Choose Us - Mobile Grid */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Why Choose Bharathi Institute for Your Career?</h3>
                    </div>
                    <div className={`why-choose-grid ${isMobile ? 'mobile-grid' : ''}`}>
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

            {/* Student Life - Desktop Only */}
            {!isMobile && (
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
            )}

            {/* Meet Experts */}
            <section className="experts-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title"><b>Meet Our Experts – <span className="highlight">Learn from the Best in the Industry</span></b></h2>
                        <p>At Bharathi Institute, we take pride in our team of highly qualified, industry-experienced faculty members who are dedicated to shaping the future of our students.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section - Mobile Optimized */}
            <section className="cta-section">
                <div className="container">
                    <div className={`cta-content ${isMobile ? 'mobile-cta' : ''}`}>
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

            {/* WhatsApp Button - Mobile Optimized */}
            <div className="whatsapp-float">
                <a href="https://api.whatsapp.com/send?phone=+919444120052" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}