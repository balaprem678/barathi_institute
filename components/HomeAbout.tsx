import Link from 'next/link';

const HomeAbout = () => {
    return (
        <section className="default-section sec-padd3 about_section_home">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="section-title">
                            <h3>Welcome to Bharathi Institute</h3>
                        </div>

                        <div className="text">
                            <p style={{ textAlign: 'justify' }}>Bharathi Institute is one of South India&apos;s leading hotel management and paramedical institute, offering world-class training in Hotel Management and Paramedical courses in TamilNadu. With a legacy of over 25 years, we have established ourselves as a trusted name in skill-based education, ensuring students receive the knowledge and hands-on experience they need to succeed in their chosen careers.</p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="box">
                                        <img alt="lab" src="/images/home-about-1.png" />
                                        <h4 style={{ color: 'black' }}>State-of-the-Art Labs & Modern Facilities</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <img alt="experienced faculty" src="/images/home-about-2.png" />
                                        <h4 style={{ color: 'black' }}>Experienced Faculty with Real-World Expertise</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <img alt="certificate" src="/images/home-about-3.png" />
                                        <h4 style={{ color: 'black' }}>Government-Approved Courses & Certifications</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <img alt="Career Guidance" src="/images/home-about-4.png" />
                                        <h4 style={{ color: 'black' }}>Personalized Training & Career Guidance</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <img alt="Practical training" src="/images/home-about-5.png" />
                                        <h4 style={{ color: 'black' }}>Hands-on Practical Training with Industry Experts</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <img alt="network" src="/images/home-about-6.png" />
                                        <h4 style={{ color: 'black' }}>Strong Alumni Network for Career Support</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/about">Explore Our Story</Link></div>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12">
                        <div className="about_img">
                            <img alt="institute of hotel management and paramedical in chennai" src="/images/aboutus.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
