import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="topbar-info">
                        <p>
                            Share With Us
                            <a href="https://www.facebook.com/Bharathiinstitute2005/" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook-square" style={{ fontSize: '18px', marginLeft: '5px' }}></i>
                            </a>
                        </p>
                        <div id="google_translate_element" className="goo_lan"></div>
                    </div>
                </div>
            </div>

            <section className="mainmenu-area stricky">
                <div className="container-fluid">
                    <div className="row display-flex-center">
                        <div className="col-md-4">
                            <div className="main-logo">
                                <Link href="/">
                                    <img alt="Institute of Hotel Management and paramedical" className="img-responsive" src="/images/logo/logo12.png" style={{ maxWidth: '300px', height: '90px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-details">
                                <p>
                                    <i className="fa fa-envelope"></i> <strong>info@bharathiinstitutes.com</strong>
                                    &nbsp;&nbsp;&nbsp;
                                </p>
                                <div className="vl"></div>
                                <p>
                                    <i className="fa fa-phone"></i> <strong>+91 94441 20052</strong>
                                    &nbsp;&nbsp;&nbsp;
                                </p>
                                <div className="vl"></div>
                                <p>
                                    <i className="fa fa-whatsapp"></i> <strong>Chat with us</strong>
                                    &nbsp;&nbsp;&nbsp;
                                </p>
                                <div className="vl"></div>
                            </div>

                        </div>
                        <div className="col-md-3 mt-auto mb-auto">
                            <div className="text-center thm-btn1">
                                <Link className="enquiry_button hvr-pulse-grow" href="/register">Online Application</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid common_no_pad">
                    <div className="col-md-12 menu-column">
                        <nav className="main-menu">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                    <li><Link href="/">home </Link></li>
                                    <li><Link href="/about">about us </Link></li>
                                    <li><Link href="/courses">Courses</Link></li>
                                    <li><Link href="/placements">Placements </Link></li>
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    <li><Link href="/student-testimonials">Student Testimonials</Link></li>
                                    <li><Link href="/blog">Blogs</Link></li>
                                    <li className="dropdown"><a href="#">Admission</a>
                                        <ul>
                                            <li><Link href="/admission"> Admission Procedure</Link></li>
                                            <li><Link href="/scholarship">scholarship</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/facilities">Facilities</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                                <ul className="mobile-menu clearfix">
                                    <li><Link href="/">home </Link></li>
                                    <li><Link href="/about">about us </Link></li>
                                    <li><Link href="/courses">Courses</Link></li>
                                    <li><Link href="/placements">Placements </Link></li>
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    <li><Link href="/student-testimonials">Student Testimonials</Link></li>
                                    <li><Link href="/blog">Blogs</Link></li>
                                    <li className="dropdown"><a href="#">Admission</a>
                                        <ul>
                                            <li><Link href="/admission"> Admission Procedure</Link></li>
                                            <li><Link href="/scholarship">scholarship</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/facilities">Facilities</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
