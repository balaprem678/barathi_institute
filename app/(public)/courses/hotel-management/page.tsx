import PageBreadcrumb from '@/components/PageBreadcrumb';
import { AccordionItem } from '@/components/AccordionItem';
import Link from 'next/link';
import React from 'react';

export default function HotelManagementPage() {
    return (
        <>
            <PageBreadcrumb
                bgImage="/images/hotelmanagaement.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Courses', url: '/courses' },
                    { label: 'Hotel Management Course' }
                ]}
            />

            <section className="default-section faq sec-padd6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="section-title">
                                <h3> Hotel Management Course </h3>
                                <span className="decor"></span>
                            </div>
                            <br /><br />
                            <div className="accordion-box style-one">
                                <AccordionItem
                                    title="Diploma in Hotel Management"
                                    isOpen={true}
                                    content={
                                        <>
                                            <strong>Duration:</strong> 2 Years<br /><br />
                                            <strong>Qualification:</strong> 10th Pass/Fail, 12th Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="Food and Beverage Production"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 Years<br /><br />
                                            <strong>Qualification:</strong> 10th Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="Food and Beverage Service"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 Years<br /><br />
                                            <strong>Qualification:</strong> 10th Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="House Keeping Management"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 Years<br /><br />
                                            <strong>Qualification:</strong> 10th Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="Front Office Management"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 Years<br /><br />
                                            <strong>Qualification:</strong> 10th Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="Bakery and Confectionery"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 Years<br /><br />
                                            <strong>Qualification:</strong> 10th Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-md-3 col-md-offset-1 col-sm-12">
                            <div className="default-sidebar">
                                <div className="section-title">
                                    <h3> Paramedical Course</h3>
                                    <span className="decor"></span>
                                </div><br />
                                <ul className="contact-info">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/paramedical">Diploma in Nursing Assistant</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/paramedical">Medical Lab Technician</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/paramedical">Health Assistant</Link> </li>
                                </ul>

                                <div className="section-title">
                                    <h3>Our Locations</h3>
                                    <span className="decor"></span>
                                </div>
                                <div className="testimonial-style2">
                                    {/* Simplified locations for sidebar */}
                                    <div className="testimonial-item">
                                        <div className="content">
                                            <p><strong>Tirunelveli</strong><br />No.171, Hindu Nadar Sangam Complex, S N High Road, Tirunelveli Junction<br />Mobile : +91 - 9443917155</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="content">
                                            <p><strong>Tambaram</strong><br />No.95, Rajaji Road, Near Vasan Eye Care Hospital<br />Mobile : +91 - 9444120052</p>
                                        </div>
                                    </div>
                                    {/* Only showing a few as example since sidebar space is limited or we can link to contact */}
                                    <div className="download-link">
                                        <Link href="/contact" className="thm-btn">View All Locations</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
