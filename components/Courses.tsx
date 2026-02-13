// Delete File
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './courses.scss';
import { Images } from '@/app/utilis/Images';



export default function CoursesPage() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const courses = [
        {
            id: 1,
            title: 'Degree Courses',
            duration: '(3 Year)',
            image: Images.degree,
            link: '/degree-courses'
        },
        {
            id: 2,
            title: 'Diploma Courses',
            duration: '(1 & 2 Year)',
            image: Images.diploma,
            link: '/diploma-courses'
        }
    ];

    const toggleAccordion = (id: number) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <div className="courses-page">
            {/* Hero Banner - Simplified */}
          

            {/* Main Content Section */}
            <section className="courses-main-content">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-header">
                        <h2 className="section-title">Our Courses</h2>
                    </div>

                    {/* Course Description */}
                    <div className="course-description">
                        <p>
                            This course offers comprehensive training in hotel and hospitality operations,
                            combining classroom learning with practical exposure. Students gain hands-on
                            experience in food production, service, front office, and housekeeping,
                            enabling them to meet the demands of the hospitality industry confidently.
                        </p>
                        <p>
                            The program emphasizes professionalism, communication skills, and industry
                            readiness through practical sessions, internships, and expert guidance.
                        </p>
                    </div>

                    {/* Courses Grid */}
                    <div className=" courses-grid  row">
                        {courses.map((course) => (

                            <div className="col-lg-6 col-sm-12 course-card" key={course.id}>
                                <div className="course-image-wrapper">
                                    <div className="course-image">
                                        <img

                                            src={course.image.src}
                                            alt={course.title} width="100%" height="100%" />
                                    </div>
                                </div>

                                <div className="course-details">
                                    <h3 className="course-title">{course.title} <span className="course-duration">{course.duration}</span></h3>

                                    <div className="course-actions">
                                        <Link href={course.link} className="btn-view-course">
                                            View Course
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}