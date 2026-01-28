import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';

export default function Placements() {
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
            <PageBreadcrumb
                title="Placements"
                bgImage="/images/gallerybanner.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Placements' }
                ]}
            />
            <section className="recuiters-section" style={{ padding: '50px 0' }}>
                <div className="container">
                    <div className="section-title text-center" style={{ marginBottom: '30px' }}>
                        <h1 style={{ color: 'black', lineHeight: '180%', fontSize: '28px', fontWeight: 700 }}>Placements at Bharathi Institute – Trusted Hotel <br /> Management and Paramedical College</h1><br />
                        <p style={{ fontSize: '16px', lineHeight: '26px' }}>At Bharathi Institutes, we take pride in our 100% placement assistance, ensuring our students secure rewarding careers in top-tier organizations. Our strong industry connections and dedicated placement cell open doors to prestigious hotels, hospitals, and corporate establishments across India.</p>
                    </div>

                    <div className="logo-section">
                        <h3 style={{ color: 'black', fontWeight: 600, textAlign: 'center', textDecoration: 'underline', marginBottom: '30px' }}>Hotel Industry</h3>
                        <div className="row">
                            {['logo1.svg', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png'].map((logo, i) => (
                                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6" key={i} style={{ marginBottom: '20px' }}>
                                    <div className="image" style={{ textAlign: 'center' }}>
                                        <img alt="recruiter logo" src={`/images/resource/${logo}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="logo-section" style={{ marginTop: '30px' }}>
                        <h3 style={{ color: 'black', fontWeight: 600, textAlign: 'center', textDecoration: 'underline', marginBottom: '30px' }}>Healthcare Industry</h3>
                        <div className="row">
                            {['logo6.png', 'logo7.png', 'logo8.jpg', 'logo9.png', 'logo10.png'].map((logo, i) => (
                                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6" key={i} style={{ marginBottom: '20px' }}>
                                    <div className="image" style={{ textAlign: 'center' }}>
                                        <img alt="recruiter logo" src={`/images/resource/${logo}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="logo-section" style={{ marginTop: '30px' }}>
                        <h3 style={{ color: 'black', fontWeight: 600, textAlign: 'center', textDecoration: 'underline', marginBottom: '30px' }}>Corporate & Other Sectors</h3>
                        <div className="row">
                            {['logo12.png', 'logo13.png', 'logo11.png', 'logo14.png', 'logo15.png'].map((logo, i) => (
                                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6" key={i} style={{ marginBottom: '20px' }}>
                                    <div className="image" style={{ textAlign: 'center' }}>
                                        <img alt="recruiter logo" src={`/images/resource/${logo}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                        <div style={{ width: '80px', height: '80px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden' }}>
                                            <img alt="" src={testi.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{testi.name}</h3>
                                        <p style={{ fontStyle: 'italic', marginBottom: '15px', color: '#666' }}>"{testi.content}"</p>
                                        <h5 style={{ fontSize: '14px', color: '#ed1c24', fontWeight: 600 }}>- {testi.role}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="read_more_bt mt-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Link className="thm-btn" href="#">Download Placement Brochure</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
