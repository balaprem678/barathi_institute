'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Images } from '@/app/utilis/Images';
import "../degree/degree.scss";




export default function DiplomaCoursesPage() {
    return (
        <>
            <div className="degree_courses_page">

                {/* Banner */}
                <section className="banner_section our_courses_banner">
                    <img src={Images.our_courses_banner.src} alt="Diploma Courses Banner" />
                    <h1>Diploma Courses</h1>
                </section>

                <section className="courses_sec">
                    <div className="container">

                        {/* Course 1 */}
                        <div className="course_card row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.degree_1.src} alt="Diploma in Hotel Management" />
                            </div>

                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Hotel Management</h3>
                                <p>
                                    This diploma program prepares students for careers in the hospitality industry
                                    by providing practical training in hotel operations, food & beverage service,
                                    housekeeping, and front office management.
                                </p>

                                <ul>
                                    <li><strong>Duration:</strong> 1 – 2 Years</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Practical & Industrial Exposure</li>
                                    <li><strong>Career:</strong> Hotel Supervisor, Front Office Executive, Restaurant Manager</li>
                                </ul>

                                <Link href="/register" className="apply_btn">
                                    Apply Now
                                </Link>
                            </div>
                        </div>



                        {/* Course 2 */}
                        <div className="course_card row align-items-center ">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_2.src} alt="Diploma in Food and Beverage Production" />
                            </div>

                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Food & Beverage Production</h3>
                                <p>
                                    This course focuses on professional cooking techniques, kitchen operations,
                                    food safety, and culinary skills development with hands-on training.
                                </p>

                                <ul>
                                    <li><strong>Duration:</strong> 1 Year</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Kitchen Practical Sessions</li>
                                    <li><strong>Career:</strong> Chef, Commis Chef, Kitchen Executive</li>
                                </ul>

                                <Link href="/register" className="apply_btn">
                                    Apply Now
                                </Link>
                            </div>
                        </div>


                        {/* Course 3 */}
                        <div className="course_card row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_3.src} alt="Diploma in Food and Beverage Service" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Food and Beverage Service</h3>
                                <p>
                                    Focused on restaurant operations, guest handling, beverage management,
                                    and professional serving techniques.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 Year</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Restaurant Practical Training</li>
                                    <li><strong>Career:</strong> Steward, Banquet Executive, Restaurant Supervisor</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>

                        {/* Course 3 */}
                        <div className="course_card row align-items-center ">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_4.src} alt="Diploma in House Keeping Management" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in House Keeping Management</h3>
                                <p>
                                    Provides training in housekeeping operations, hygiene management,
                                    and facility maintenance in hotels and hospitals.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 Year</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Practical Exposure</li>
                                    <li><strong>Career:</strong> Housekeeping Supervisor, Room Attendant</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>


                        {/* Course 4 */}
                        <div className="course_card row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_5.src} alt="Diploma in Front Office Management" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Front Office Management</h3>
                                <p>
                                    Specialized course in reception operations, reservation systems,
                                    and professional communication skills.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 Year</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Front Desk Practical Training</li>
                                    <li><strong>Career:</strong> Receptionist, Front Office Executive</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>

                        {/* Course 5 */}
                        <div className="course_card row align-items-center ">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_6.src} alt="Diploma in Bakery and Confectionery" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Bakery and Confectionery</h3>
                                <p>
                                    Hands-on program covering baking techniques, cake decoration,
                                    pastry preparation, and confectionery production.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 Year</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Bakery Lab Practice</li>
                                    <li><strong>Career:</strong> Baker, Pastry Chef, Cake Designer</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>

                        {/* Course 6 */}
                        <div className="course_card row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_7.src} alt="Diploma in Nursing Assistant" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Nursing Assistant</h3>
                                <p>
                                    Trains students in patient care, basic nursing procedures,
                                    and hospital support services.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 – 2 Years</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Hospital Internship</li>
                                    <li><strong>Career:</strong> Nursing Assistant, Ward Assistant</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>
                        {/* Course 7 */}
                        <div className="course_card row align-items-center ">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_8.src} alt="Diploma in Medical Lab Technician" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Medical Lab Technician</h3>
                                <p>
                                    Provides knowledge in laboratory diagnostics, pathology testing,
                                    microbiology, and clinical lab procedures.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 – 2 Years</li>
                                    <li><strong>Eligibility:</strong> 12th Pass (Science Preferred)</li>
                                    <li><strong>Training:</strong> Lab Practical Training</li>
                                    <li><strong>Career:</strong> Lab Technician, Pathology Assistant</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>
                        {/* Course 8 */}
                        <div className="course_card row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.diploma_9.src} alt="Diploma in Health Assistant" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Diploma in Health Assistant</h3>
                                <p>
                                    Designed to support healthcare professionals by providing training
                                    in patient care, first aid, and community health services.
                                </p>
                                <ul>
                                    <li><strong>Duration:</strong> 1 Year</li>
                                    <li><strong>Eligibility:</strong> 10th / 12th Pass</li>
                                    <li><strong>Training:</strong> Healthcare Practical Exposure</li>
                                    <li><strong>Career:</strong> Health Assistant, Clinic Staff, Community Worker</li>
                                </ul>
                                <Link href="/register" className="apply_btn">Apply Now</Link>
                            </div>
                        </div>



                    </div>
                </section>

            </div>
        </>
    );
}
