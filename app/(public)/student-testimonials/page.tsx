import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';
import React from 'react';
import './student_testimonials.scss';

export default function StudentTestimonials() {
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
            <section className='students_testimonial'>
                <div className="container">
                    <h3 className='page_title'>Student Testimonials </h3>
                </div>
            </section>

            <section className="video-testi" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="section-title text-center" style={{ marginBottom: '50px' }}>
                        <h1>Student Testimonials – Hear from Those Who Choose Our Institute of Hotel Management & Paramedicals</h1>
                    </div>

                    <div className="row" style={{ marginBottom: '50px' }}>
                        <div className='col-lg-12'>
                            <div className="testimonial-item" style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
                                <iframe
                                    width="100%"
                                    height="450"
                                    src="https://www.youtube.com/embed/bTnv22KLZVc?si=ckgTqfNa3s1yLo8m"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
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
                </div>
            </section>
        </>
    );
}
