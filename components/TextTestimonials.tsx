"use client";
import React from 'react';

export default function TextTestimonials() {
    return (
        <section className="text-testimonial-carousel-section" style={{ padding: '50px 0' }}>
            <div className="container">
                <div className="sec-title text-center">
                    <h2>What Our Students Say</h2>
                    <div className="text-decoration">
                        <span className="left"></span>
                        <span className="right"></span>
                    </div>
                </div>
                <div className="text-testimonial-carousel row mt-5">

                    <div className="testimonial-item col-lg-4 mb-4">
                        <div className="box text-center p-3 h-100" style={{ border: '1px solid #eee', padding: '30px', borderRadius: '10px' }}>
                            <img src="/images/resource/testi.png" className="img-fluid mb-3" alt="Testimonial" style={{ margin: '0 auto', display: 'block' }} />
                            <h3 style={{ margin: '15px 0' }}>Priya S.</h3>
                            <p style={{ color: '#777' }}>Choosing Bharathi was the best decision I ever made. The faculty were incredibly supportive, and the hands-on training helped me gain confidence. Today, I work in a 5-star hotel in Dubai — all thanks to Bharathi&apos;s strong foundation!</p>
                            <h5 className="text-muted" style={{ marginTop: '15px', color: '#888' }}>- Hotel Management Graduate</h5>
                        </div>
                    </div>

                    <div className="testimonial-item col-lg-4 mb-4">
                        <div className="box text-center p-3 h-100" style={{ border: '1px solid #eee', padding: '30px', borderRadius: '10px' }}>
                            <img src="/images/resource/testi.png" className="img-fluid mb-3" alt="Testimonial" style={{ margin: '0 auto', display: 'block' }} />
                            <h3 style={{ margin: '15px 0' }}>Arun K</h3>
                            <p style={{ color: '#777' }}>The practical experience I got during my course was unmatched. The labs are well-equipped, and we got to intern at reputed hospitals. Bharathi gave me the skills and clarity to pursue my dream career in healthcare.</p>
                            <h5 className="text-muted" style={{ marginTop: '15px', color: '#888' }}>- Paramedical Student</h5>
                        </div>
                    </div>

                    <div className="testimonial-item col-lg-4 mb-4">
                        <div className="box text-center p-3 h-100" style={{ border: '1px solid #eee', padding: '30px', borderRadius: '10px' }}>
                            <img src="/images/resource/testi.png" className="img-fluid mb-3" alt="Testimonial" style={{ margin: '0 auto', display: 'block' }} />
                            <h3 style={{ margin: '15px 0' }}>Sneha R</h3>
                            <p style={{ color: '#777' }}>Bharathi didn&apos;t just teach me how to work in a kitchen — they taught me how to lead one. The exposure, competitions, and events helped shape my personality and boosted my communication skills. I’m proud to be a Bharathi graduate.</p>
                            <h5 className="text-muted" style={{ marginTop: '15px', color: '#888' }}>- Hotel Management Graduate</h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
