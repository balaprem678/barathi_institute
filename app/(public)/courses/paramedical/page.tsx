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
                    <img src={Images.our_courses_banner.src} alt="Para Medical Courses Banner" />
                    <h1>Paramedical Courses</h1>
                </section>

                <section className="courses_sec">
                    <div className="container">

                        {/* Course 1 */}
                        <div className="course_card row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 course_img">
                                <img src={Images.degree_1.src} alt="Diploma in Hotel Management" />
                            </div>

                            <div className="col-lg-7 col-md-6 col-12 course_content">
                                <h3>Health Care Assistant</h3>
                                <p>
                                    This program prepares students for careers in the healthcare industry
                                    by providing practical training in patient care, medical procedures,
                                    and administrative tasks.
                                </p>

                                <ul>
                                    <li><strong>Duration:</strong> 1 – 2 Years</li>
                                    <li><strong>Eligibility:</strong> 10th 12th Pass / Fail / Discontinued</li>
                                    <li><strong>Training:</strong> Practical & Medical Exposure</li>
                                    <li><strong>Career:</strong> Health Care Assistant, Medical Assistant, Nursing Assistant</li>
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
                                <h3>Medical Lab Technician</h3>
                                <p>
                                    This course focuses on professional cooking techniques, kitchen operations,
                                    food safety, and culinary skills development with hands-on training.
                                </p>

                                <ul>
                                    <li><strong>Duration:</strong> 1 – 2 Years</li>
                                    <li><strong>Eligibility:</strong> 10th 12th Pass / Fail / Discontinued</li>
                                    <li><strong>Training:</strong> Practical & Medical Exposure</li>
                                    <li><strong>Career:</strong>Public Health Laboratories, Healthcare Organizations</li>
                                </ul>

                                <Link href="/register" className="apply_btn">
                                    Apply Now
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </>
    );
}
