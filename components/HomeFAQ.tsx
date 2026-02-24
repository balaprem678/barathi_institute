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
            question: "Who are Bharathi Institutes?",
            answer: "Bharathi Institutes is a college in Tamil Nadu that offers courses in Hotel Management and Paramedical Sciences, helping students get practical skills and jobs in these fields."
        },
        {
            question: "Where are your campuses located?",
            answer: "They have multiple campuses across Tamil Nadu including Chennai (Tambaram, Ambattur, Broadway) and other cities like Vellore, Madurai, Salem, Trichy, Karaikudi, Dindigul and more."
        },
        {
            question: "What courses do you offer?",
            answer: "They offer diploma and certificate courses in: Hotel Management (front office, kitchen, housekeeping, etc.) Paramedical courses (Medical Lab Tech, X-ray & Imaging, OT Technology, etc.)"
        },
        {
            question: "Who can apply for the courses?",
            answer: "Students who have completed 10th or 12th grade from a recognised school/board are eligible to apply."
        },
        {
            question: "What is the admission process?",
            answer: "You must fill out an application form (online or in person), submit academic documents, photos, and other certificates before the deadline."
        },
        {
            question: "Do you help students get jobs?",
            answer: "Yes! Bharathi Institutes offers 100% placement assistance and helps connect students with hotels, hospitals, and other companies."
        },
        {
            question: "Will I receive hands-on training?",
            answer: "Yes. Courses include practical training, internships, lab work, and real-world experience to make students job-ready."
        },
        {
            question: "Are the courses recognised?",
            answer: "Yes. Their courses are government-approved and recognised certificates that can help in future jobs or further studies."
        },
        {
            question: "Do you offer extra activities and skills training?",
            answer: "Yes. Students can join spoken English, personality development, computer skills, games, and other activities."
        },
        {
            question: "Can I apply even if I’m waiting for my exam results?",
            answer: "Yes. Students who are awaiting results of their current board exams can still apply."
        },
        {
            question: "How do I contact Bharathi Institutes?",
            answer: "You can call +91 94441 20052 or email info@bharathiinstitutes.com for more details or help with admission."
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;