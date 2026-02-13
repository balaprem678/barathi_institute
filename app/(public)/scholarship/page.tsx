import Link from 'next/link';
import { Images } from '@/app/utilis/Images';


export default function Scholarship() {
    return (
        <>
            <section className="banner_section">
                <img src={Images.scholarship_banner.src} alt="About Us Banner" />
                <h1>Scholarship</h1>
            </section>

            <section className="default-section sec-padd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="section-title">
                                <h1>Scholarships for Hotel Management & Paramedical Courses </h1>
                                <span className="decor"></span>
                            </div><br />
                            <div className="job-details">
                                <div className="text" style={{ textAlign: 'justify' }}>
                                    <p> <strong>We are very happy to announce shcolarship scheme for the new admissions for the academic year 2017 - 2018.</strong> </p><br /> // Keeping 2017-2018 to match source, or should I update? Source said 2017-2018. I will keep it for fidelity unless instructed otherwise, but maybe update it to "current academic year" if it looks too old? No, sticking to fidelity for now.
                                </div>

                                <h3>Eligibility Criteria </h3>

                                <div className="text" style={{ textAlign: 'justify' }}>
                                    <ul className="list-style-5">
                                        <li> <i className="fa fa-check-circle"></i>For Girls - 20% scholarship  on tuition fee </li>
                                        <li><i className="fa fa-check-circle"></i>Get Scholarship for Garments / Widower and Farmers Based Families </li>
                                    </ul>
                                </div>

                                <br />

                                <p style={{ textAlign: 'center' }}>  <Link href="/contact" className="thm-btn">Check Your Eligibility<i className="fa fa-sort-desc"></i></Link></p>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 hotel_management">
                            <div className="default-sidebar">

                                <div className="section-title">
                                    <h3> Hotel Management  </h3>
                                    <span className="decor"></span>
                                </div><br />
                                <ul className="contact-info p-0 d-block">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma"> Diploma in Hotel Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Food and Beverage Production</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Food and Beverage Service</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">House Keeping Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Front Office Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Bakery and Confectionery</Link> </li>
                                </ul>

                                <div className="section-title">
                                    <h3> Paramedical Course</h3>
                                    <span className="decor"></span>
                                </div><br />
                                <ul className="contact-info p-0 d-block">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Diploma in Nursing Assistant</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Medical Lab Technician</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Health Assistant</Link> </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
