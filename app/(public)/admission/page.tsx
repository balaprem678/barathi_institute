import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';
import { Images } from '@/app/utilis/Images';


export default function Admission() {
    return (
        <>
              <section className="banner_section">
                          <img src={Images.admission_procudure_banner.src} alt="About Us Banner" />
                          <h1>Admission Procudere</h1>
                      </section>

            <section className="default-section sec-padd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="section-title">
                                <h1 style={{ color: '#000' }}>Admission Process – Best Institute for Hotel Management and Paramedical Courses</h1> 
                                <span className="decor"></span>
                            </div>
                            &nbsp;

                            <div className="job-details">
                                <h3>Eligibility Criteria</h3>

                                <div className="text" style={{ textAlign: 'justify' }}>
                                    <p>For entry in this admissions procedure, you must have passed the ten-plus-two (10+2) or equivalent examination. You may still register if you undertook the board exams in the current year and are awaiting results.</p>
                                </div>

                                <h3>Bharathi Features</h3>

                                <div className="text" style={{ textAlign: 'justify' }}>
                                    <ul className="list-style-5">
                                        <li>100% Job Guarantee Bond <a href="/images/bond.jpg" target="_blank"> View </a></li>
                                        <li>Rs 8000 Worth Free Uniforms , Books and Practical Kits</li> // Corrected "Kids" to "Kits" if that was a typo in source, but keeping source fidelity or assuming "Practical Kits" is meant. PHP said "Practical Kids", I will correct it to "Kits" as it makes more sense, or "Kids" if it refers to something else? "Practical Kits" is standard.
                                        <li>Get Scholarship for Garments / Widower and Farmers Based Families</li>
                                        <li>Bank Loan Arrangement</li>
                                        <li>Low Installment based Study Fees</li>
                                    </ul>
                                </div>

                                <h3>Admission Procedure</h3>

                                <div className="text" style={{ textAlign: 'justify' }}>
                                    <p>Application forms and Prospectus may be acquired from the Institute Office on Payment of Rs 100/-. Filled-in application forms must reach our office before the stipulated due date.<br />
                                        <br />
                                        <strong>Note: The following documents must accompany the filled-in application: </strong></p>
                                </div>

                                <ul className="list-style-5">
                                    <li>Original and Xerox Copy of X Std and Hr. Secondary Mark Statement.</li>
                                    <li>Original and Xerox Copy of Transfer Certificate.</li>
                                    <li>Copy of Community Certificate. (If applicable).</li>
                                    <li>8 passport size photograph (White background).</li>
                                    <li>Certificate of physical fitness.</li>
                                </ul>
                                &nbsp;

                                <p style={{ textAlign: 'center' }}><Link className="thm-btn" href="/contact">Reach Out Today</Link></p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 hotel_management">
                            <div className="default-sidebar">
                                <div className="section-title">
                                    <h3>Hotel Management</h3>
                                    <span className="decor"></span>
                                </div>
                                &nbsp;

                                <ul className="contact-info d-block">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma"> Diploma in Hotel Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Food and Beverage Production</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Food and Beverage Service</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">House Keeping Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Front Office Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Bakery and Confectionery</Link> </li>
                                </ul>

                                <div className="section-title">
                                    <h3>Paramedical Course</h3>
                                </div>
                                &nbsp;

                                <ul className="contact-info">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Diploma in Health Assistant</Link></li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Medical Lab Technician</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
