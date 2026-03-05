'use client';
import Link from 'next/link';
import { Images } from '@/app/utilis/Images';
import "./degree.scss";

export default function DegreeCoursesPage() {
    return (
        <div className="degree_courses_page">

            {/* Banner */}
            <section className="banner_section our_courses_banner">
                <img src={Images.our_courses_banner.src} alt="Degree Courses Banner" />
                <h1>Degree Courses (B.Sc / B.Voc)</h1>
            </section>

            <section className="courses_sec">
                <div className="container">

                    {/* Course 1 */}
                


                    {/* Course 2 */}
                    <div className="course_card row align-items-center ">
                        <div className="col-lg-5 col-md-6 col-12 course_img">
                            <img src={Images.degree_2.src} alt="Hotel Management" />
                        </div>

                        <div className="col-lg-7 col-md-6 col-12 course_content">
                            <h3>B.Voc in Hotel Management</h3>
                            <p>
                                Skill-based degree program covering diagnostic testing,
                                pathology procedures, microbiology, and laboratory
                                management.
                            </p>

                            <ul>
                                <li><strong>Duration:</strong> 3 Years</li>
                                <li><strong>Eligibility:</strong> 12th Pass</li>
                                <li><strong>Training:</strong> Advanced Lab Practice</li>
                                <li><strong>Career:</strong> Lab Technician, Pathology Assistant</li>
                            </ul>

                            <Link href="/register" className="apply_btn">
                                Apply Now
                            </Link>
                        </div>
                    </div>

                    {/* Course 3 */}
                    <div className="course_card row align-items-center">
                        <div className="col-lg-5 col-md-6 col-12 course_img">
                            <img src={Images.degree_3.src} alt="Medical Lab Technology" />
                        </div>

                        <div className="col-lg-7 col-md-6 col-12 course_content">
                            <h3>B.Voc in Medical Lab Technology</h3>
                            <p>
                                This program trains students in clinical laboratory testing, diagnostic procedures, and pathology analysis. It focuses on medical equipment handling, microbiology, and biochemistry lab practices.
                            </p>

                            <ul>
                                <li><strong>Duration:</strong> 3 Years</li>
                                <li><strong>Eligibility:</strong> 12th Pass</li>
                                <li><strong>Internship:</strong> Included</li>
                                <li><strong>Career:</strong> Medical Lab Technician, Pathology Lab Assistant, Diagnostic Center Technician, Research Lab Assistant</li>
                            </ul>

                            <Link href="/register" className="apply_btn">
                                Apply Now
                            </Link>
                        </div>
                    </div>

                    {/* Course 4 */}
                    <div className="course_card row align-items-center">
                        <div className="col-lg-5 col-md-6 col-12 course_img">
                            <img src={Images.degree_4.src} alt="Emergency Care & Trauma care Technology" />
                        </div>

                        <div className="col-lg-7 col-md-6 col-12 course_content">
                            <h3>B.Voc in Emergency Care & Trauma care Technology</h3>
                            <p>
                                This course prepares students to handle emergency medical situations and trauma care services. Students are trained in first aid, emergency response, and critical care assistance.
                            </p>

                            <ul>
                                <li><strong>Duration:</strong> 3 Years</li>
                                <li><strong>Eligibility:</strong> 12th Pass</li>
                                <li><strong>Internship:</strong> Included</li>
                                <li><strong>Career:</strong>Emergency Medical Technician (EMT), Trauma Care Assistant, Ambulance Technician, Hospital Emergency Staff</li>
                            </ul>

                            <Link href="/register" className="apply_btn">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    {/* Course 5 */}
                    <div className="course_card row align-items-center">
                        <div className="col-lg-5 col-md-6 col-12 course_img">
                            <img src={Images.degree_5.src} alt="Operation Theatre Technology" />
                        </div>

                        <div className="col-lg-7 col-md-6 col-12 course_content">
                            <h3>B.Voc in Operation Theatre Technology</h3>
                            <p>
                                This program focuses on preparing students to assist surgeons and manage operation theatre procedures. It includes training in sterilization, surgical instruments, and patient care during surgery.
                            </p>

                            <ul>
                                <li><strong>Duration:</strong> 3 Years</li>
                                <li><strong>Eligibility:</strong> 12th Pass</li>
                                <li><strong>Internship:</strong> Included</li>
                                <li><strong>Career:</strong>Operation Theatre Assistant, Surgical Technician, Hospital Theatre Staff, Surgical Support Assistant</li>
                            </ul>

                            <Link href="/register" className="apply_btn">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    {/* Course 6 */}
                    <div className="course_card row align-items-center">
                        <div className="col-lg-5 col-md-6 col-12 course_img">
                            <img src={Images.degree_6.src} alt="Hospital Administration" />
                        </div>

                        <div className="col-lg-7 col-md-6 col-12 course_content">
                            <h3>B.Voc in Hospital Administration</h3>
                            <p>
                                This course develops managerial and administrative skills required in hospitals and healthcare organizations. Students learn hospital operations, patient services, and healthcare management systems.
                            </p>

                            <ul>
                                <li><strong>Duration:</strong> 3 Years</li>
                                <li><strong>Eligibility:</strong> 12th Pass</li>
                                <li><strong>Internship:</strong> Included</li>
                                <li><strong>Career:</strong>Hospital Administrator, Healthcare Manager, Medical Office Manager, Hospital HR Executive</li>
                            </ul>

                            <Link href="/register" className="apply_btn">
                                Apply Now
                            </Link>
                        </div>
                    </div>

                        <div className="course_card row align-items-center">
                        <div className="col-lg-5 col-md-6 col-12 course_img">
                            <img src={Images.degree_1.src} alt="Hotel Management" />
                        </div>

                        <div className="col-lg-7 col-md-6 col-12 course_content">
                            <h3>B.Sc Hotel Management</h3>
                            <p>
                                3-year professional program focused on hospitality operations,
                                food production, housekeeping, and hotel administration
                                with industrial training.
                            </p>

                            <ul>
                                <li><strong>Duration:</strong> 3 Years</li>
                                <li><strong>Eligibility:</strong> 12th Pass</li>
                                <li><strong>Internship:</strong> Included</li>
                                <li><strong>Career:</strong> Hotel Manager, Chef, Cruise Staff</li>
                            </ul>

                            <Link href="/register" className="apply_btn">
                                Apply Now
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
