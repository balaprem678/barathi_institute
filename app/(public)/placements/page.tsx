import Image from 'next/image';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';
import Partners from '@/components/partners';
import './placements.scss';

import { Images } from '@/app/utilis/Images';
import { getStaticPageMetadata, getStaticPageSchema } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return await getStaticPageMetadata('/placements');
}


export default async function Placements() {
    const schemaScript = await getStaticPageSchema('/placements');

    const testimonials = [
        {
            name: "Priya S.",
            role: "Hotel Management Graduate",
            image: "/images/resource/testi.png",
            content: "Choosing Bharathi was the best decision I ever made. The faculty were incredibly supportive, and the hands-on training helped me gain confidence. Today, I work in a 5-star hotel in Dubai — all thanks to Bharathi's strong foundation!"
        },
        {
            name: "Arun K",
            role: "Paramedical Student",
            image: "/images/resource/testi.png",
            content: "The practical experience I got during my course was unmatched. The labs are well-equipped, and we got to intern at reputed hospitals. Bharathi gave me the skills and clarity to pursue my dream career in healthcare."
        },
        {
            name: "Sneha R",
            role: "Hotel Management Graduate",
            image: "/images/resource/testi.png",
            content: "Bharathi didn't just teach me how to work in a kitchen — they taught me how to lead one. The exposure, competitions, and events helped shape my personality and boosted my communication skills. I’m proud to be a Bharathi graduate."
        },
        {
            name: "Mohammed Irfan",
            role: "Diploma in Medical Lab Technology",
            image: "/images/resource/testi.png",
            content: "I was nervous about my future after school, but Bharathi gave me direction and purpose. Today, I’m working in a diagnostic lab, applying what I learned every single day. The support from staff never stops, even after graduation."
        },
        {
            name: "Lakshmi Devi",
            role: "B.Sc. Nursing Student",
            image: "/images/resource/testi.png",
            content: "What stood out at Bharathi was the way they cared for each student. The hostel, the campus, the curriculum — everything is student-friendly. I feel ready to face real-world challenges with confidence."
        },
        {
            name: "Kishore V",
            role: "Hotel Management Graduate",
            image: "/images/resource/testi.png",
            content: "The industry exposure at Bharathi is top-notch. We had guest lectures, hotel visits, and internships that helped bridge the gap between theory and practice. I now have job offers even before graduating!"
        }
    ];

    return (
        <>
            {schemaScript && (
                <div dangerouslySetInnerHTML={{ __html: schemaScript }} />
            )}

            <section className="banner_section">
                <Image 
                    src={Images.placements_banner} 
                    alt="Placements Banner" 
                    priority 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                />
                <h1 style={{ position: 'relative', zIndex: 1 }}>Placements</h1>
            </section>
            <section className="recuiters-section" style={{ padding: '50px 0' }}>
                <div className="container">
                    <div className="section-title text-center" style={{ marginBottom: '30px' }}>
                        <h1 style={{ color: 'black', lineHeight: '180%', fontSize: '28px', fontWeight: 700 }}>Placements at Bharathi Institute – Trusted Hotel <br /> Management and Paramedical College</h1><br />
                        <p style={{ fontSize: '16px', lineHeight: '26px' }}>At Bharathi Institute, we offer 100% placement assistance. We assist students in getting employment in good hotels, hospitals, and companies.
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '26px' }}>Our strong connections with the industry and placement assistance help students identify the appropriate job opportunities in India.
                        </p>
                    </div>

                    <Partners />

                </div>
            </section>

            <section className="about-institute">
                <div className="container">

                    <div className="about-header">
                        <h2>20 Years of Helping Students Build a Bright Future</h2>
                        <p>
                            Bharathi Institute has been helping students build a bright future
                            for the last 20 years. We have trained <strong>8,500+ students</strong>
                            and helped them build successful careers.
                        </p>
                    </div>

                    <div className="about-content">
                        <p>
                            We provide training in practical skills. Our students are trained to
                            work in real industries, not just for a certificate.
                        </p>

                        <p>
                            Our placement team helps students get jobs. Currently, our students
                            are working in <strong>250+ star hotels</strong> and
                            <strong> 300+ hospitals</strong> across India including Mumbai,
                            Goa, Chennai, Hyderabad, and Bengaluru.
                        </p>

                        <p>
                            We also provide international job opportunities. More than
                            <strong> 500 students</strong> are working in hotels abroad and
                            gaining global experience.
                        </p>
                    </div>

                    <div className="stats">
                        <div className="stat-card">
                            <h3>20+</h3>
                            <span>Years Experience</span>
                        </div>

                        <div className="stat-card">
                            <h3>8500+</h3>
                            <span>Students Trained</span>
                        </div>

                        <div className="stat-card">
                            <h3>550+</h3>
                            <span>Hotels & Hospitals</span>
                        </div>

                        <div className="stat-card">
                            <h3>500+</h3>
                            <span>International Placements</span>
                        </div>
                    </div>

                    <div className="about-footer">
                        <h4>Your dream + our 15 years of experience = your success</h4>
                        <p>
                            Join Bharathi Institute and begin your career with confidence.
                            <strong> Your future starts here.</strong>
                        </p>
                        <a href="/register" className="join-btn">Join Now</a>
                    </div>

                </div>
            </section>

            <section className="video-testi" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div className="section-title text-center" style={{ marginBottom: '50px' }}>
                        <h3>Placement Stories</h3>
                    </div>
                    <div className="row">
                        {testimonials.map((testi, index) => (
                            <div className="col-md-4 col-sm-6" key={index} style={{ marginBottom: '30px' }}>
                                <div className="testimonial-item" style={{ padding: '20px', background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '5px', height: '100%' }}>
                                    <div className="box text-center">
                                        <div style={{ width: '80px', height: '80px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                            <Image 
                                                alt={testi.name} 
                                                src={testi.image} 
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="80px"
                                            />
                                        </div>
                                        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{testi.name}</h3>
                                        <p style={{ fontStyle: 'italic', marginBottom: '15px', color: '#666' }}>"{testi.content}"</p>
                                        <h5 style={{ fontSize: '14px', color: '#ed1c24', fontWeight: 600 }}>- {testi.role}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
