'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageBreadcrumb from '../../components/PageBreadcrumb';
import Image from 'next/image';

const AccordionItem = ({ title, isOpen, onClick, children }: { title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) => {
    return (
        <div className="panel panel-default" style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <div className="panel-heading" role="tab" onClick={onClick} style={{ cursor: 'pointer', color: '#000000', backgroundColor: '#f5f5f5', borderColor: '#ddd', padding: '18px' }}>
                <h4 className="panel-title" style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                    <a role="button" aria-expanded={isOpen} className="collapsed">
                        {title}
                        <i className={`fa fa-chevron-down pull-right ${isOpen ? 'rotate-180' : ''}`} style={{ float: 'right', transition: 'transform 0.3s' }}></i>
                    </a>
                </h4>
            </div>
            {isOpen && (
                <div className="panel-collapse collapse in" role="tabpanel">
                    <div className="panel-body" style={{ padding: '15px' }}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function About() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [openIndex2, setOpenIndex2] = useState<number | null>(0);

    const toggleAccordion = (index: number) => setOpenIndex(openIndex === index ? null : index);
    const toggleAccordion2 = (index: number) => setOpenIndex2(openIndex2 === index ? null : index);

    return (
        <>
            <PageBreadcrumb
                bgImage="/images/aboutusbanner.jpg" // Check if this image exists, otherwise adjust
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'About Us' }
                ]}
            />
            {/* Custom Heading from PHP */}
            <section className="inner-banner bg-style1 about-breadcrumb" style={{ display: 'none' }}> {/* Hidden because PageBreadcrumb handles it, or customization needed */}
                {/* PHP had: <h1>Bharathi Institute – Tamil Nadu’s Premier Hub for Diploma in Hotel Management & Paramedicals</h1> in banner */}
            </section>

            <section className="default-section sec-padd6 pad_about about_page">
                <div className="container">
                    <div className="row who_flex">
                        <div className="col-md-6 col-sm-12" style={{ padding: '0px' }}>
                            <div className="single-item">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img alt="diploma of hotel management & Paramedicals" src="/images/aboutus.jpg" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h2 className="abou_h2" style={{ fontSize: '24px', marginBottom: '20px' }}><b>About Bharathi Institute</b></h2>

                            <div className="panel-group" id="accordion">
                                <AccordionItem title="Our Journey & Legacy" isOpen={openIndex === 0} onClick={() => toggleAccordion(0)}>
                                    Bharathi Educational Institution was founded in 2005 with a vision to make quality education in hotel management and paramedical sciences accessible to students across Tamil Nadu. What started as a single institution in Tambaram, Chennai, has now expanded its footprint across Vellore, Ranipet, Ambur, and Karaikudi, becoming one of the best hotel management and paramedical colleges in Tamil Nadu.
                                </AccordionItem>
                                <AccordionItem title="Bridging the Urban-Rural Education Gap" isOpen={openIndex === 1} onClick={() => toggleAccordion(1)}>
                                    In the early 2000s, hotel management and catering education were primarily accessible only to students from urban metropolitan areas like Mumbai, Bangalore, and Chennai. Many talented students from rural regions lacked opportunities to pursue careers in hospitality and healthcare due to financial constraints and the unavailability of institutions near them. Bharathi Educational Institution was established with a mission to bridge this gap and provide world-class education to students from both urban and rural backgrounds, without compromising on quality.
                                </AccordionItem>
                                <AccordionItem title="Expanding Our Presence & Impact" isOpen={openIndex === 2} onClick={() => toggleAccordion(2)}>
                                    Recognizing the growing demand for skilled professionals in the hospitality and healthcare industries, Bharathi Institute expanded its reach beyond Chennai. Our branches in Vellore, Ambur, Ranipet, and Karaikudi have empowered thousands of students with industry-relevant knowledge, hands-on training, and career opportunities. Over the years, we have become a preferred choice for students seeking affordable yet high-quality professional education.
                                </AccordionItem>
                                <AccordionItem title="A Legacy of Excellence in Education" isOpen={openIndex === 3} onClick={() => toggleAccordion(3)}>
                                    For nearly two decades, Bharathi Institute has been dedicated to producing highly skilled professionals. We take pride in:
                                    <ul style={{ paddingTop: '15px', listStyle: 'none' }}>
                                        <li><i className="fa fa-medkit" aria-hidden="true"></i> 25+ Years of Excellence in Hospitality & Paramedical Education.</li>
                                        <li><i className="fa fa-graduation-cap" aria-hidden="true"></i> 10,000+ Students Placed in leading hotels, hospitals, and corporate sectors.</li>
                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i> 100% Placement Assistance through our strong industry network.</li>
                                        <li><i className="fa fa-globe" aria-hidden="true"></i> State-of-the-Art Training Facilities designed to match global industry standards.</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem title="Pioneering Industry-Focused Education" isOpen={openIndex === 4} onClick={() => toggleAccordion(4)}>
                                    At Bharathi Institute, we believe in a practical and hands-on approach to learning. Our courses are carefully designed with industry experts, hotel chains, and medical institutions to ensure that our students are job-ready from day one. With our extensive network of 350+ hotel and hospital tie-ups, we provide unmatched internship and job placement opportunities to help students kickstart their careers.<br />
                                    As we continue to grow, our commitment remains the same—to provide top-tier education and career opportunities to students across Tamil Nadu, making Bharathi Institute the best hotel management and paramedical college in the region.
                                </AccordionItem>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our_mission" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why_con">
                                <div className="our_vis" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }}>
                                    <img alt="our vision" src="/images/fav-icon/vision.png" />
                                </div>
                                <h4 style={{ display: 'inline-block', verticalAlign: 'middle' }}><strong>Our Vision</strong></h4>
                                <p>To be the leading institution in Tamil Nadu for hotel management and paramedical education, empowering students with world-class skills, industry exposure, and career opportunities to shape a successful future.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why_con">
                                <div className="our_vis" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }}>
                                    <img alt="our mission" src="/images/fav-icon/value.png" />
                                </div>
                                <h4 style={{ display: 'inline-block', verticalAlign: 'middle' }}><strong>Mission</strong></h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                                    <li>To provide high-quality, industry-relevant education in hotel management and paramedical sciences.</li>
                                    <li>To equip students with practical skills and global exposure through hands-on training and internships.</li>
                                    <li>To foster innovation, leadership, and professionalism, preparing students for rewarding careers.</li>
                                    <li>To build strong industry partnerships ensuring 100% placement assistance.</li>
                                    <li>To make quality education accessible to students from all backgrounds, especially in rural areas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new_about_page_contents" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="abou_h2"><b>Our Placement & Industry Partnerships</b></h2>
                    </div>
                    <p className="text-center">At Bharathi Institute, we don’t just provide education—we build careers. Our strong industry partnerships and dedicated placement support ensure that students step into the professional world with confidence. With a vast network of top-tier hotels, hospitals, and corporate firms, we bridge the gap between education and employment, offering real-world exposure and career opportunities both in India and abroad.</p>
                </div>
            </section>

            <section className="unique-selling-section about_page_shape_future" style={{ padding: '50px 0' }}>
                <div className="container">
                    <div className="section-title text-center" style={{ marginBottom: '30px' }}>
                        <h3>How We Shape Your Future</h3>
                    </div>
                    <div className="row">
                        <div className="unique-selling-content">
                            <div className="col-md-3 col-sm-6 item">
                                <img alt="Career Oriented Training" src="/images/resource/about-future-1.jpg" className="img-responsive" />
                                <h4 style={{ color: 'black', marginBottom: '-5px', marginTop: '10px' }}>Career-Oriented Training</h4>
                                <p>Our courses are designed to align with industry standards, making students job-ready from day one.</p>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <img alt="Exclusive Internship programs" src="/images/resource/about-future-2.webp" className="img-responsive" />
                                <h4 style={{ color: 'black', marginBottom: '-5px', marginTop: '10px' }}>Exclusive Internship Programs</h4>
                                <p>Gain hands-on experience in reputed organizations before stepping into full-time roles.</p>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <img alt="Global Placement Assistance" src="/images/resource/about-future-3.jpg" className="img-responsive" />
                                <h4 style={{ color: 'black', marginBottom: '-5px', marginTop: '10px' }}>Global Placement Assistance</h4>
                                <p>Opportunities extend beyond India, with career openings in the Middle East, Europe, and Asia.</p>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <img alt="Industry tailored workshops" src="/images/resource/about-future-4.jpg" className="img-responsive" />
                                <h4 style={{ color: 'black', marginBottom: '-5px', marginTop: '10px' }}>Industry-Tailored Workshops</h4>
                                <p>Regular interactions with industry experts, masterclasses, and skill-building sessions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recuiters-section" style={{ padding: '50px 0' }}>
                <div className="container">
                    <div className="logo-section">
                        <h3 style={{ color: 'black', fontWeight: 600, textAlign: 'center', textDecoration: 'underline' }}>Hotel Industry</h3><br /><br />
                        <div className="row">
                            {['logo1.svg', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png'].map((logo, i) => (
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6" key={i}>
                                    <div className="image">
                                        <img alt="recruiter logo" src={`/images/resource/${logo}`} className="img-responsive" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="logo-section" style={{ marginTop: '30px' }}>
                        <h3 style={{ color: 'black', fontWeight: 600, textAlign: 'center', textDecoration: 'underline' }}>Healthcare Industry</h3><br /><br />
                        <div className="row">
                            {['logo6.png', 'logo7.png', 'logo8.jpg', 'logo9.png', 'logo10.png'].map((logo, i) => (
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6" key={i}>
                                    <div className="image">
                                        <img alt="recruiter logo" src={`/images/resource/${logo}`} className="img-responsive" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="logo-section" style={{ marginTop: '30px' }}>
                        <h3 style={{ color: 'black', fontWeight: 600, textAlign: 'center', textDecoration: 'underline' }}>Corporate & Other Sectors</h3><br /><br />
                        <div className="row">
                            {['logo12.png', 'logo13.png', 'logo11.png', 'logo14.png', 'logo15.png'].map((logo, i) => (
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6" key={i}>
                                    <div className="image">
                                        <img alt="recruiter logo" src={`/images/resource/${logo}`} className="img-responsive" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="unique-selling-section about_page_shape_future about_why_us" style={{ backgroundColor: '#222', padding: '50px 0', color: 'white' }}>
                <div className="container-fluid" style={{ padding: '0px 20px' }}>
                    <div className="section-title text-center" style={{ marginBottom: '30px' }}>
                        <h3 style={{ color: 'white' }}>Why Choose Bharathi Institute for Your Career?</h3>
                    </div>
                    <div className="row container" style={{ margin: 'auto' }}>
                        <div className="unique-selling-content">
                            <div className="col-md-3 item">
                                <h4 style={{ color: 'white', fontWeight: 600 }}>Industry-Backed Curriculum</h4>
                                <p style={{ color: '#ccc' }}>Learn what employers demand</p>
                            </div>
                            <div className="col-md-3 item">
                                <h4 style={{ color: 'white', fontWeight: 600 }}>Placement-Linked Training</h4>
                                <p style={{ color: '#ccc' }}>Practical sessions that go beyond textbooks.</p>
                            </div>
                            <div className="col-md-3 item">
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '-10px' }}>Strong Alumni Network</h4>
                                <br />
                                <p style={{ color: '#ccc' }}>Connect with former students working in top organizations.</p>
                            </div>
                            <div className="col-md-3 item">
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '-15px' }}>Job Fairs & On-Campus Interviews</h4>
                                <br />
                                <p style={{ color: '#ccc' }}>Meet recruiters directly at our institute.</p>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center" style={{ marginTop: '30px', color: 'white' }}>At Bharathi Institute, your career is our commitment. Join us and step into a future filled with growth, stability, and success!</h4>
                </div>
            </section>

            <section className="new_about_page_contents about_page about_why_us_page" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="image">
                                <img alt="bharathi institute students pictutre" src="/images/resource/about-why-us-img.jpg" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="content">
                                <div className="panel-group" id="accordion">
                                    <AccordionItem title="Student Life & Facilities – Experience Learning Beyond Classrooms" isOpen={openIndex2 === 0} onClick={() => toggleAccordion2(0)}>
                                        At Bharathi Institute, education is more than just academics—it’s about hands-on training, industry exposure, and a vibrant student community. Our state-of-the-art facilities and engaging campus life ensure that every student gets a holistic learning experience while preparing for a successful career in hotel management and healthcare.
                                    </AccordionItem>
                                    <AccordionItem title="World-Class Learning Environment" isOpen={openIndex2 === 1} onClick={() => toggleAccordion2(1)}>
                                        <ul>
                                            <li>Hi-Tech Classrooms & Smart Learning – Interactive teaching methods with modern infrastructure.</li>
                                            <li>Advanced Training Labs – Fully equipped kitchen labs, bakery labs, housekeeping labs, and medical labs for practical training.</li>
                                            <li>Library & Research Center – Extensive resources, books, and digital materials to enhance learning.</li>
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem title="Hands-On Practical Training" isOpen={openIndex2 === 2} onClick={() => toggleAccordion2(2)}>
                                        <ul>
                                            <li>Live Cooking Demonstrations & Workshops – Learn from expert chefs and industry professionals.</li>
                                            <li>Housekeeping & Front Office Simulations – Gain real-world experience before entering the workforce.</li>
                                            <li>Medical Equipment Handling – Practical exposure to diagnostic tools, OT instruments, and patient care techniques.</li>
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem title="Engaging Student Activities & Events" isOpen={openIndex2 === 3} onClick={() => toggleAccordion2(3)}>
                                        <ul>
                                            <li>Culinary Competitions & Hotel Expos – Show off your skills and connect with industry leaders.</li>
                                            <li>Healthcare Awareness Camps – Real-time patient care experience through social initiatives.</li>
                                            <li>Cultural Festivals & Sports Events – A vibrant campus life with entertainment and extracurricular activities.</li>
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem title="Internship & Industry Visits" isOpen={openIndex2 === 4} onClick={() => toggleAccordion2(4)}>
                                        <ul>
                                            <li>Hotel & Hospital Internships – Gain on-the-job training in leading organizations.</li>
                                            <li>Guest Lectures & Industry Talks – Learn directly from professionals shaping the industry.</li>
                                            <li>Foreign Internship Opportunities – Get international exposure with global hospitality and healthcare firms.</li>
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem title="Comfortable Accommodation & Campus Life" isOpen={openIndex2 === 5} onClick={() => toggleAccordion2(5)}>
                                        <ul>
                                            <li>Hostel Facilities – Safe and comfortable lodging with hygienic dining facilities.</li>
                                            <li>Student Support Services – Career guidance, mentorship programs, and counseling sessions.</li>
                                            <li>Modern Cafeteria & Recreational Spaces – Relax and socialize in a welcoming campus environment.</li>
                                        </ul>
                                        <p>At Bharathi Institute, student life is a blend of learning, excitement, and career preparation. Join us and experience an education that shapes your future beyond classrooms!</p>
                                    </AccordionItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new_about_page_contents" style={{ margin: '60px 0px 30px 0px' }}>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="abou_h2"><b>Meet Our Experts – <span style={{ color: '#ed1c24' }}>Learn from the Best in the Industry</span></b></h2>
                        <p>At Bharathi Institute, we take pride in our team of highly qualified, industry-experienced faculty members who are dedicated to shaping the future of our students. Our experts bring years of real-world experience in hotel management and healthcare, ensuring that students receive practical knowledge, hands-on training, and career guidance to excel in their respective fields.</p>
                    </div>
                </div>
            </section>

            <section className="call-out abou_page_cta">
                <div className="container">
                    <div className="content clearfix">
                        <div className="float_left" style={{ float: 'left', width: '70%' }}>
                            <h2><strong>Take the First Step Towards a Successful Career!</strong></h2>
                            <p>Don’t wait! Your dream career starts here.</p>
                        </div>
                        <div className="call-out-button" style={{ textAlign: 'right', float: 'right', width: '30%' }}>
                            <a className="thm-btn" href="https://forms.gle/9kCPJRg9aD3HKAmW9" target="_blank" rel="noopener noreferrer">Apply Online Today</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
