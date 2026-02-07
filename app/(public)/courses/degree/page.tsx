'use client';
import Link from 'next/link';
import PageBreadcrumb from '../../../components/PageBreadcrumb';

export default function DegreeCoursesPage() {
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
                    { label: 'Degree Courses' }
                ]}
            />

            <section className="courses_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="course_head">
                                <h2 className="our_course_head">DEGREE COURSE OVERVIEW (B.Sc / B.Voc)</h2>
                                <h5 className="course_overview">Course Overview :</h5>
                                <p className="courses_p">The degree program is designed to develop skilled professionals through a balanced combination of academic knowledge and practical training. The curriculum is industry-oriented and focuses on building technical expertise, managerial skills, and professional competence required for long-term career growth.</p>
                                <p className="courses_p">Students receive hands-on training, internship opportunities, and career guidance to prepare them for employment in leading organizations.</p>
                                <div className="d-flex">
                                    <h5 className="course_overview">Eligibility : </h5>
                                    <h4 className="flex_pas"> 12TH Pass</h4>
                                </div>

                                <h5 className="course_overview">COURSES & DURATION:</h5>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>B.Sc, Hotel Management</td>
                                            <td>- 3 years</td>
                                        </tr>
                                        <tr>
                                            <td>B.Voc in Hotel Management</td>
                                            <td>- 3 years</td>
                                        </tr>
                                        <tr>
                                            <td>B.Voc in Medical Lab Technology </td>
                                            <td>- 3 years</td>
                                        </tr>
                                        <tr>
                                            <td>B.Voc in Emergency Care & Trauma care Technology </td>
                                            <td>- 3 years</td>
                                        </tr>
                                        <tr>
                                            <td>B.Voc in Operation Theatre Technology </td>
                                            <td>- 3 years</td>
                                        </tr>
                                        <tr>
                                            <td>B.Voc in Hospital Administration </td>
                                            <td>- 3 years</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
