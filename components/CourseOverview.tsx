import Link from 'next/link';

const CourseOverview = () => {
    return (
        <section className="course-overview">
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '30px' }}>
                    <h3>Featured Courses</h3>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="item">
                            <div className="image">
                                <img alt="hotel management course" src="/images/resource/1.jpg" />
                            </div>
                            <div className="content">
                                <h4 style={{ color: 'black', fontWeight: 600, fontSize: '23px' }}>Hotel Management Courses <br />(Diploma, Certification)</h4>
                                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/courses">Explore Courses Now</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item">
                            <div className="image">
                                <img alt="Paramedical course" src="/images/resource/2.jpg" />
                            </div>
                            <div className="content">
                                <h4 style={{ color: 'black', fontWeight: 600, fontSize: '23px' }}>Paramedical Courses <br />(Diploma, Certification)</h4>
                                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/courses">Explore Course Now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseOverview;
