"use client";
import { useState } from 'react';
import { Images } from '@/app/utilis/Images';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './HomeFAQ.scss';

const HomeFAQ = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What certificates will I receive?',
            answer: 'Specialized certification offered for hotel management students that they can create their own event management companies for media, advertisement, malls, trade centres, etc.'
        },
        {
            question: 'What benefits do I receive from DHM?',
            answer: 'Only one institute offers students sponsorship on the spot admission for hotel management students for their fees convenience.'
        },
        {
            question: 'What programs can I participate in at your institution?',
            answer: 'Students can participate in various occasions like SICA, CARVING, BAR TRENDING in various competitor challenges in our esteemed concerns.'
        },
        {
            question: 'Is your institution tied up with any foreign countries?',
            answer: 'Bharathi Institute is tied up with several multi-speciality hospitals in 32 districts as well as in international countries like Saudi Arabia, Kuwait, Dubai, etc.'
        },
        {
            question: 'What facilities do you have in your organization?',
            answer: 'Our institute has Hi-tech Lab facilities for Lab Technician students with high decor and is tied up with top-rated Labs all over Tamil Nadu.'
        },
        {
            question: 'Do you conduct any extracurricular activities?',
            answer: 'Extracurricular activities include spoken English, computer knowledge, indoor & outdoor games, personality development classes, etc.'
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="home-faq">
            <div className="faq-container">
                <div className="faq-row">
                    {/* Left Side - Image */}
                    <div className="faq-image-col">
                        <div className="image-wrappers">
                            <Image
                                src={Images.faq_image.src}
                                alt="FAQ Image"
                                width={500}
                                height={500}
                                className="faq-image"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - FAQ */}
                    <div className="faq-content-col">
                        <div className="faq-content">
                            <div className="section-title">
                                <h2 className="section-heading">Frequently Asked Questions</h2>
                                <p className="section-description">
                                    Find answers to common questions about our programs and facilities
                                </p>
                            </div>

                            <div className="faq-list">
                                {faqs.map((faq, index) => (
                                    <div 
                                        key={index} 
                                        className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                                    >
                                        <button
                                            className="faq-question"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={activeFaq === index}
                                            aria-controls={`faq-answer-${index}`}
                                        >
                                            <div className="question-content">
                                                <div className="question-number">
                                                    {index + 1}
                                                </div>
                                                <h3 className="question-text">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <div className="question-icon">
                                                {activeFaq === index ? (
                                                    <ChevronUp size={16} />
                                                ) : (
                                                    <ChevronDown size={16} />
                                                )}
                                            </div>
                                        </button>

                                        <div 
                                            id={`faq-answer-${index}`}
                                            className="faq-answer"
                                            role="region"
                                            aria-hidden={activeFaq !== index}
                                        >
                                            <div className="answer-content">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <div className="contact-section">
                                <p className="contact-text">
                                    <span className="contact-label">Still have questions?</span>
                                    Contact us at support@example.com or call +91 1234567890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;