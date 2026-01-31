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
                    {/* Text Testimonials moved to separate component */}

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
