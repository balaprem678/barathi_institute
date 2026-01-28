'use client';
import { useEffect } from 'react';

const VideoTestimonials = () => {
    useEffect(() => {
        const facades = document.querySelectorAll(".youtube-facade");
        facades.forEach(el => {
            const videoId = el.getAttribute("data-id");
            if (el instanceof HTMLElement) {
                el.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`;
                el.addEventListener("click", function () {
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
                    iframe.setAttribute("frameBorder", "0");
                    iframe.setAttribute("allowFullScreen", "1");
                    iframe.setAttribute("allow", "autoplay; encrypted-media");
                    iframe.style.width = "100%";
                    iframe.style.height = "100%";
                    el.innerHTML = "";
                    el.appendChild(iframe);
                });
            }
        });
    }, []);

    return (
        <section className="video-testi">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Student Testimonials</h3>
                </div>
                <div className="row">
                    <div className='col-lg-12'>
                        <div className="">
                            <div className="testimonial-item" style={{ padding: '10px' }}>
                                <iframe width="100%" height="380" src="https://www.youtube.com/embed/bTnv22KLZVc?si=ckgTqfNa3s1yLo8m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-testimonial-carousel row mt-5">

                            <div className="testimonial-item col-lg-4 mb-4">
                                <div className="box text-center p-3 h-100">
                                    <img src="/images/resource/testi.png" className="img-fluid mb-3" alt="Testimonial" />
                                    <h3>Priya S.</h3>
                                    <p>Choosing Bharathi was the best decision I ever made. The faculty were incredibly supportive, and the hands-on training helped me gain confidence. Today, I work in a 5-star hotel in Dubai — all thanks to Bharathi&apos;s strong foundation!</p>
                                    <h5 className="text-muted">- Hotel Management Graduate</h5>
                                </div>
                            </div>

                            <div className="testimonial-item col-lg-4 mb-4">
                                <div className="box text-center p-3 h-100">
                                    <img src="/images/resource/testi.png" className="img-fluid mb-3" alt="Testimonial" />
                                    <h3>Arun K</h3>
                                    <p>The practical experience I got during my course was unmatched. The labs are well-equipped, and we got to intern at reputed hospitals. Bharathi gave me the skills and clarity to pursue my dream career in healthcare.</p>
                                    <h5 className="text-muted">- Paramedical Student</h5>
                                </div>
                            </div>

                            <div className="testimonial-item col-lg-4 mb-4">
                                <div className="box text-center p-3 h-100">
                                    <img src="/images/resource/testi.png" className="img-fluid mb-3" alt="Testimonial" />
                                    <h3>Sneha R</h3>
                                    <p>Bharathi didn&apos;t just teach me how to work in a kitchen — they taught me how to lead one. The exposure, competitions, and events helped shape my personality and boosted my communication skills. I’m proud to be a Bharathi graduate.</p>
                                    <h5 className="text-muted">- Hotel Management Graduate</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <style jsx>{`
                .youtube-facade {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    background-color: #000;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer;
                    border-radius: 12px;
                    overflow: hidden;
                }
                .youtube-facade .play-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 68px;
                    height: 48px;
                    transform: translate(-50%, -50%);
                    background: url('https://i.imgur.com/TxzC70f.png') no-repeat;
                    background-size: contain;
                }
            `}</style>
        </section>
    );
};

export default VideoTestimonials;
