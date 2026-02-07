'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const AccordionItem = ({ title, isOpen, onClick, children }: { title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) => {
    return (
        <div className="panel panel-default" style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <div className="panel-heading" role="tab" onClick={onClick} style={{ cursor: 'pointer', color: '#000000', backgroundColor: '#bcdbee', borderColor: '#ddd', padding: '18px', fontWeight: 700 }}>
                <h4 className="panel-title" style={{ margin: 0 }}>
                    <a role="button" aria-expanded={isOpen}>
                        {title}
                    </a>
                </h4>
            </div>
            {isOpen && (
                <div className="panel-collapse collapse in" role="tabpanel">
                    <div className="panel-body" style={{ padding: '15px' }}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function DiplomaCoursesPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <style jsx>{`
                .courses_p {
                    padding: 10px;
                }
                .our_course_head {
                    text-align: center;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .course_overview {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 10px 0;
                }
                .d-flex {
                    display: flex;
                    align-items: center;
                }
                .flex_pas {
                    color: #000;
                    font-weight: 600;
                    font-size: 16px;
                    padding-left: 5px;
                }
                .course_head {
                    padding: 60px 0;
                }
                .table {
                    width: 50%;
                }
                .dip_ul {
                    list-style: disc;
                    padding: 10px 20px; 
                }
                .dip_ul li {
                    padding: 10px;
                    font-size: 15px;
                }
                td {
                    font-size: 16px;
                    padding: 12px;
                }
                @media (min-width: 320px) and (max-width: 480px) {
                    .table {
                        width: 100% !important;
                    }
                }
            `}</style>

            <PageBreadcrumb
                bgImage="/images/courses/course_banner.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Diploma Course' }
                ]}
            />

            <section className="courses_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="course_head">
                                <h2 className="our_course_head">DIPLOMA COURSE OVERVIEW</h2>
                            </div>

                            <div className="panel-group" role="tablist" aria-multiselectable="true">

                                {/* Item 1 */}
                                <AccordionItem
                                    title="DIPLOMA IN HOTEL MANAGEMENT COURSE OVERVIEW"
                                    isOpen={openIndex === 0}
                                    onClick={() => toggleAccordion(0)}
                                >
                                    <div className="course_head" style={{ padding: '0' }}>
                                        <h2 className="our_course_head">DIPLOMA IN HOTEL MANAGEMENT COURSE OVERVIEW</h2>
                                        <h5 className="course_overview">Course Overview :</h5>
                                        <p className="courses_p">This diploma course focuses on practical skill development and job-oriented training. It is ideal for students who want early entry into the workforce with industry-relevant knowledge and hands-on experience.</p>
                                        <p className="courses_p">The program includes practical sessions, real-time equipment training, and professional skill development to ensure career readiness.</p>
                                        <div className="d-flex">
                                            <h5 className="course_overview">Eligibility : </h5>
                                            <h4 className="flex_pas">  10TH 12TH Pass / Fail, Discontinued</h4>
                                        </div>

                                        <h5 className="course_overview">COURSES & DURATION:</h5>
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>Diploma In Hotel Management</td>
                                                    <td>- 2 years</td>
                                                </tr>
                                                <tr>
                                                    <td>Food & Beverage Production</td>
                                                    <td>- 1 years</td>
                                                </tr>
                                                <tr>
                                                    <td>Food & Beverage Service </td>
                                                    <td>- 1 years</td>
                                                </tr>
                                                <tr>
                                                    <td>Bakery & Confectionery </td>
                                                    <td>- 1 years</td>
                                                </tr>
                                                <tr>
                                                    <td>Front Office & Housekeeping Management </td>
                                                    <td>- 1 years</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </AccordionItem>

                                {/* Item 2 */}
                                <AccordionItem
                                    title="DIPLOMA IN HEALTHCARE COURSE OVERVIEW"
                                    isOpen={openIndex === 1}
                                    onClick={() => toggleAccordion(1)}
                                >
                                    <div className="course_head" style={{ padding: '0' }}>
                                        <h2 className="our_course_head">DIPLOMA IN HEALTHCARE COURSE OVERVIEW</h2>
                                        <h5 className="course_overview">Course Overview :</h5>
                                        <p className="courses_p">This healthcare course is designed to train students in essential medical and healthcare support skills through structured theoretical instruction and extensive practical training. The program prepares students to work efficiently in hospitals, laboratories, and healthcare institutions.</p>
                                        <p className="courses_p">Emphasis is placed on patient care, safety protocols, equipment handling, and professional ethics.</p>
                                        <div className="d-flex">
                                            <h5 className="course_overview">Eligibility : </h5>
                                            <h4 className="flex_pas"> 10TH 12TH Pass / Fail, Discontinued</h4>
                                        </div>

                                        <h5 className="course_overview">COURSES & DURATION:</h5>
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>Diploma in Health Assistant </td>
                                                    <td> - 2 year</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </AccordionItem>

                                {/* Item 3 */}
                                <AccordionItem
                                    title="DIPLOMA IN MEDICAL LAB TECHNICIAN OVERVIEW"
                                    isOpen={openIndex === 2}
                                    onClick={() => toggleAccordion(2)}
                                >
                                    <div className="course_head" style={{ padding: '0' }}>
                                        <h2 className="our_course_head">DIPLOMA IN MEDICAL LAB TECHNICIAN OVERVIEW</h2>
                                        <h5 className="course_overview">Course Overview :</h5>
                                        <p className="courses_p">This course provides specialized training in medical laboratory, Students gain hands-on experience with diagnostic techniques, and clinical practices under expert supervision. The program ensures students are well-prepared to assist healthcare professionals in real-time medical environments.</p>
                                        <h5 className="course_overview">COURSES & DURATION :</h5>
                                        <p>Diploma in Medical Lab Technician (DMLT) - 2 year</p>

                                        <div className="d-flex">
                                            <h5 className="course_overview">Eligibility : </h5>
                                            <h4 className="flex_pas"> 10TH 12TH Pass / Fail, Discontinued</h4>
                                        </div>

                                        <small>Students who have completed 18 years of age are eligible to apply.</small>

                                        <h5 className="course_overview">Course Benefits</h5>
                                        <ul className="dip_ul">
                                            <li>Students who have completed 18 years of age are eligible to apply.</li>
                                            <li>100% Theory & Practical Training provided. Exams conducted in Tamil language.</li>
                                            <li>Part-Time and Full-Time courses available.</li>
                                            <li>No bond system – students are free after course completion.</li>
                                            <li>Very low course fee starting from ₹7,000 only.</li>
                                            <li>Free study materials worth ₹8,000, including books and learning kits.</li>
                                            <li>20% fee concession for meritorious and eligible students.</li>
                                            <li>Bank loan and scholarship facilities available.</li>
                                            <li>Guaranteed job assistance in Hotel Management and Healthcare sectors (as applicable).</li>
                                            <li>Job opportunities available in Hotels, Hospitals, Laboratories, and leading institutions such as Apollo Hospitals.</li>
                                            <li>Additional training provided in: Spoken English  / MS Office / Soft Skills</li>
                                        </ul>

                                        <h5 className="course_overview">Key Advantages</h5>
                                        <ul className="dip_ul">
                                            <li>Skill-based learning approach</li>
                                            <li>Job-oriented training</li>
                                            <li>Suitable for both freshers and career-focused students</li>
                                            <li>Opportunities in India and abroad (as per norms)</li>
                                        </ul>

                                        <h5 className="course_overview">PLACEMENT & CAREER SUPPORT</h5>
                                        <p>We provide dedicated placement assistance to help students start their professional careers with confidence.</p>
                                        <ul className="dip_ul">
                                            <li>Career guidance and counseling</li>
                                            <li>Resume preparation and interview training</li>
                                            <li>Internship support in reputed hotels, hospitals, and laboratories</li>
                                            <li>Industry tie-ups for placement opportunities</li>
                                            <li>Continuous career support after course completion</li>
                                        </ul>

                                        <h5 className="course_overview">Career Opportunities</h5>
                                        <p>After successful completion of the course, students can work in:</p>
                                        <ul className="dip_ul">
                                            <li>Hotels, Resorts, and Hospitality Industry</li>
                                            <li>Hospitals, Diagnostic Centers, and Healthcare Institutions</li>
                                            <li>Laboratories, Clinics, and Medical Facilities</li>
                                            <li>Private and Government Sector Organizations</li>
                                        </ul>
                                    </div>
                                </AccordionItem>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
