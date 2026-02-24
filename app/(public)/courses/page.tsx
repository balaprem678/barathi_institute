'use client';
import Link from 'next/link';
import { Images } from '@/app/utilis/Images';


export default function CoursesPage() {
    return (
        <>
            <style jsx>{`
                .courses_p {
                    padding: 10px;
                }
                .courses_details {
                    border-radius: 10px;
                    margin: 30px;
                    text-align: center;
                }
                .courses_img {
                    height: 300px;
                    width: 80%;
                    overflow: hidden;
                    border-radius: 10px;
                    margin: auto;
                }
                .courses_img img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .course_h2 {
                    font-size: 20px;
                    font-weight: 600;
                    margin: 20px auto;
                    text-align: center;
                }
                .btn_courses {
                    background-color: #e72b2d;
                    border-color: #e72b2d;
                    color: #FFF;
                    padding: 10px 20px;
                    border-radius: 5px;
                    display: inline-block;
                }
                .btn_courses:hover {
                    background-color: #333;
                    border-color: #333;
                    color: #fff;
                }
            `}</style>

            <section className="banner_section our_courses_banner">
                <img src={Images.our_courses_banner.src} alt="Our Courses Banner" />
                <h1>Our Courses</h1>
            </section>

            <section className="courses_sec sec-padd2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="course_head">
                                <p className="courses_p">This course provides full training in the hotel and hospitality industry. The students are trained both in class and in practical training. They are trained in food production, food service, front office, and housekeeping. This will help them to perform well in the hospitality industry.
</p>
                                <p className="courses_p">The course also emphasizes professionalism, communication, and employability. The students are trained in practical classes, internships, and are taken care of by experienced trainers.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="courses_details">
                                <div className="courses_img">
                                    <img src="/images/courses/Degree.webp" alt="Degree Courses" />
                                </div>

                                <h2 className="course_h2">Degree Courses ( 3 Year )</h2>

                                <Link href="/courses/degree" className="btn btn_courses cta-button">View Course</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="courses_details">
                                <div className="courses_img">
                                    <img src="/images/courses/Diploma Courses.webp" alt="Diploma Courses" />
                                </div>

                                <h2 className="course_h2">Diploma Courses ( 1 & 2 Year )</h2>

                                <Link href="/courses/diploma" className="btn btn_courses cta-button">View Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
