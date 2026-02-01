"use client";
import { useState } from 'react';
import { Images } from '@/app/utilis/Images';
import Image from 'next/image';

const HomeFAQ = () => {
    const [activeFaq, setActiveFaq] = useState(0);

    const faqs = [
        {
            question: 'what all certificates you will be recieved?',
            answer: 'specialized certification offered for hotel management students that they can create their own event management company\'s for media,advertisement,mall\'s,trade centre\'s,etc.'
        },
        {
            question: 'what kind of benefit you recieve for DHM?',
            answer: 'only one institute offer students sponsorship on the spot admission for hotel management students for their fees convenience.'
        },
        {
            question: 'what all the programmes you can participate in your institution?',
            answer: 'students can be participate in certain various occussions like SICA,CARVING,BAR TRENDING in various competitors challenge in our esteemeed concern.'
        },
        {
            question: 'whether your institution tied up with any foreign countries?',
            answer: 'bharathi institute  tied up with several multi speciality hospital\'s in 32 districts as well as in international countries like saudi,khuwait,dubai etc.'
        },
        {
            question: 'what facilities you have in your organisation?',
            answer: 'our institute have very much of Hitech Lab facilities for Lab Technitians students with high decor and tied up with much rated Lab\'s in all over tamilnadu.'
        },
        {
            question: 'whether any curricular activities conducting?',
            answer: 'Extra curicular activities like students can easily learn spoken english,computer knowledge,Indoor& Outdoor games,personality development  classes etc.'
        }
    ];

    return (
        <section className="faq" style={{ padding: '60px 0', backgroundColor: '#f7f8fb' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <Image
                            src={Images.faq_image.src}
                            alt="FAQ Image"
                            width={400}
                            height={400}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className="faq-box">
                            <div className="section-title" style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700' }}>Frequently Asked Questions</h3>
                            </div>
                            <div id="accordion">
                                {faqs.map((faq, index) => (
                                    <div className="card" key={index} style={{ marginBottom: '10px', border: '1px solid #ddd' }}>
                                        <div
                                            className="card-header"
                                            style={{
                                                background: '#f8f9fa',
                                                cursor: 'pointer',
                                                padding: '15px'
                                            }}
                                            onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                        >
                                            <a className="card-link" style={{
                                                textTransform: 'capitalize',
                                                color: '#333',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}>
                                                <i className="fas fa-question-circle" style={{ color: '#0495f5' }}></i>
                                                {faq.question}
                                            </a>
                                        </div>
                                        <div
                                            id={`collapse${index}`}
                                            className={`collapse ${activeFaq === index ? 'show' : ''}`}
                                        >
                                            <div className="card-body" style={{
                                                padding: '15px',
                                                textTransform: 'capitalize',
                                                color: '#666'
                                            }}>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
