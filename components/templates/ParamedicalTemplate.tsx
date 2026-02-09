import PageBreadcrumb from '@/components/PageBreadcrumb';
import { AccordionItem } from '@/components/AccordionItem';
import Link from 'next/link';
import React from 'react';

interface TemplateProps {
    city?: string;
}

export default function ParamedicalTemplate({ city }: TemplateProps) {
    const titleSuffix = city ? ` in ${city}` : '';

    return (
        <>
            <PageBreadcrumb
                bgImage="/images/medical.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Courses', url: '/courses' },
                    { label: `Paramedical Course${titleSuffix}` }
                ]}
            />

            <section className="default-section faq sec-padd6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="section-title">
                                <h3> Paramedical Course{titleSuffix} </h3>
                                <span className="decor"></span>
                            </div>
                            <br /><br />
                            <div className="accordion-box style-one">
                                <AccordionItem
                                    title="Diploma in Nursing Assistant"
                                    isOpen={true}
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 & 2 Years<br /><br />
                                            <strong>Qualification:</strong> 10th & +2 Pass/Fail <br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="Medical Lab Technician"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1 & 2 Years<br /><br />
                                            <strong>Qualification:</strong> 10th & +2 Pass/Fail<br /><br />
                                            <strong>Mode of Selection:</strong> Direct Admission by the BI<br /><br />
                                        </>
                                    }
                                />
                                <AccordionItem
                                    title="Health Assistant"
                                    content={
                                        <>
                                            <strong>Duration:</strong> 1  Year<br /><br />
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
                                    <h3> Hotel Management </h3>
                                    <span className="decor"></span>
                                </div><br />
                                <ul className="contact-info">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/hotel-management"> Diploma in Hotel Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/hotel-management">Food and Beverage Production</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/hotel-management">Food and Beverage Service</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/hotel-management">House Keeping Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/hotel-management">Front Office Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/hotel-management">Bakery and Confectionery</Link> </li>
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
