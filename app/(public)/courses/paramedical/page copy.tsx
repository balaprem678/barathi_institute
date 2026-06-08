import { AccordionItem } from '@/components/AccordionItem';
import Link from 'next/link';
import React from 'react';
import { Images } from '@/app/utilis/Images';
import './paramedical.scss';


export default function ParamedicalPage() {
    return (
        <>

            <section className="paramedical-section">
                <div className="container">
                    <div className="section-header">
                        <span>Healthcare Programs</span>
                        <h2>Paramedical Courses</h2>
                        <p>
                            Build a rewarding career in healthcare with our industry-focused
                            paramedical courses designed for practical learning and job readiness.
                        </p>
                    </div>

                    <div className="course-accordion">
                        <AccordionItem
                            title="🏥 Health Care Assistant"
                            isOpen={true}
                            content={
                                <div className="course-card">
                                    <div className="course-info">
                                        <div className="info-item">
                                            <strong>Duration</strong>
                                            <span>1 & 2 Years</span>
                                        </div>

                                        <div className="info-item">
                                            <strong>Qualification</strong>
                                            <span>10th & +2 Pass/Fail</span>
                                        </div>

                                        <div className="info-item">
                                            <strong>Admission</strong>
                                            <span>Direct Admission</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                        <AccordionItem
                            title="🧪 Medical Lab Technician"
                            content={
                                <div className="course-card">
                                    <div className="course-info">
                                        <div className="info-item">
                                            <strong>Duration</strong>
                                            <span>1 & 2 Years</span>
                                        </div>

                                        <div className="info-item">
                                            <strong>Qualification</strong>
                                            <span>10th & +2 Pass/Fail</span>
                                        </div>

                                        <div className="info-item">
                                            <strong>Admission</strong>
                                            <span>Direct Admission</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                        <AccordionItem
                            title="❤️ Health Assistant"
                            content={
                                <div className="course-card">
                                    <div className="course-info">
                                        <div className="info-item">
                                            <strong>Duration</strong>
                                            <span>1 Year</span>
                                        </div>

                                        <div className="info-item">
                                            <strong>Qualification</strong>
                                            <span>10th Pass/Fail</span>
                                        </div>

                                        <div className="info-item">
                                            <strong>Admission</strong>
                                            <span>Direct Admission</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>

            </section>
        </>
    );
}
