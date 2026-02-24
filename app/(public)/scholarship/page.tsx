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
                        <div className=" col-12">
                            <div className="section-title">
                                <h1>Scholarship Support</h1>
                                <span className="decor"></span>
                            </div><br />
                            <div className="job-details">
                                <div className="text" style={{ textAlign: 'justify' }}>
                                    At Bharathi Institute, we believe that financial support should never stop a student from achieving their dreams. Our students are eligible to receive Government Scholarships based on their course and category.
                                </div>

                                <h3>Government Scholarship for Hotel Management Students </h3>
                                <p>Students studying <b>Hotel Management</b> at Bharathi Institute can apply for the following Tamil Nadu Government schemes:
                                </p>

                                <div className="text" style={{ textAlign: 'justify' }}>
                                    <ul className="list-style-5">
                                        <li> <i className="fa fa-check-circle"></i><b>👨‍🎓 Tamil Puthalvan Scheme (For Boys)</b>
                                        </li>

                                        <li><i className="fa fa-check-circle"></i>Male students pursuing Hotel Management are eligible to receive scholarship support under the Tamil Puthalvan Scheme provided by the Government of Tamil Nadu. This scheme helps students continue their higher education without financial burden. (As per rule.)</li>

                                        <li><i className="fa fa-check-circle"></i><b>👩‍🎓 Pudhumai Pen Scheme (For Girls)
                                        </b> </li>
                                        <li><i className="fa fa-check-circle"></i>Female students studying Hotel Management can receive scholarship benefits under the Pudhumai Pen Scheme. This scheme supports girls’ education and encourages them to build a successful career. (As per rule.)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Why Apply for Scholarship?
                                    </h5>
                                    <ul>
                                        <li>Financial support for education</li>
                                        <li>Reduced burden on parents</li>
                                        <li>Encouragement to continue higher studies</li>
                                        <li>Support for career growth</li>
                                    </ul>
                                    <p>

                                        Our team at Bharathi Institute will guide students in applying for eligible Government scholarships and completing the required process.
                                    </p>
                                </div>

                                {/* <p style={{ textAlign: 'center' }}>  <Link href="/contact" className="thm-btn">Check Your Eligibility<i className="fa fa-sort-desc"></i></Link></p> */}

                            </div>
                        </div>
                        {/* <div className="col-md-3 col-sm-12 hotel_management">
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

                        </div> */}
                    </div>

                </div>
            </section>
        </>
    );
}
