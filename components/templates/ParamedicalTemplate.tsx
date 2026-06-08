import PageBreadcrumb from '@/components/PageBreadcrumb';
import { AccordionItem } from '@/components/AccordionItem';
import Link from 'next/link';
import React from 'react';
import CourseSidebar from '@/app/(public)/courses/CourseSidebar';

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
                                    title="Health Care Assistant"
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
                              
                            </div>
                        </div>

                        <div className="col-md-3 col-md-offset-1 col-sm-12">
                           <CourseSidebar/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
