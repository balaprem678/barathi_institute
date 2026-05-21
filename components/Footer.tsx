import Link from 'next/link';
import "./footer.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Images } from '@/app/utilis/Images';
import NextImage from 'next/image';

const Footer = () => {
    return (
        <>
            <section className="our-address bg-style1 sec-padd3 footer_new">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="practice-list">
                                <NextImage
                                    src={Images.logo}
                                    alt="Bharathi Institute Logo"
                                    width={300}
                                    height={80}
                                    style={{ width: '300px', height: 'auto' }}
                                />
                                <p style={{ color: '#FFFFFF' }}> In 2005, Bharathi Educational Institution began operations in Chennai&apos;s Tambaram district; Districts of Vellore, Ranipet, Ambur, and Karaikudi in the Sivagangai district are which are industrial centres.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 d-flex justify-center">
                            <div className="practice-list">
                                <h3 style={{ color: '#FFFFFF' }}>Quick Links </h3><br />
                                <ul>
                                    <li><Link href="/about"> About</Link></li>
                                    <li><Link href="/scholarship">Scholarship</Link></li>
                                    <li><Link href="/courses"> Courses</Link></li>
                                    <li><Link href="/facilities"> Facilities</Link></li>
                                    <li><Link href="/gallery"> Gallery</Link></li>
                                    <li><Link href="/blog"> Blogs</Link></li>
                                    <li><Link href="/contact">  Contact Us </Link></li>
                                    <li><Link href="/privacy-policy">  Privacy Policy </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="practice-list">
                                <h3 style={{ color: '#FFFFFF' }}>Contact Information</h3><br />
                                <ul>
                                    <li><a href="tel:+919444120052">+91 94441 20052</a></li>
                                    <li><a href="mailto:info@bharathiinstitutes.com">: info@bharathiinstitutes.com</a></li>
                                </ul>
                                <h3 style={{ color: '#FFFFFF', marginTop: '20px' }}>Follow on :</h3><br />
                                <ul style={{ display: 'flex', gap: '10px' }} className='p-0 social_media_link'>
                                    <div className="wrapper">
                                        <a href="https://www.facebook.com/bharathieducationalinstitutions">
                                            <NextImage src={Images.facebook} alt="Facebook" width={24} height={24} />
                                        </a>
                                        <a href="#">
                                            <NextImage src={Images.twitter} alt="Twitter" width={24} height={24} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/bharathi-institute-of-hotel-management-health-science/about/">
                                            <NextImage src={Images.linkedin} alt="LinkedIn" width={24} height={24} />
                                        </a>
                                        <a href="https://www.instagram.com/bharathi_institute_official/">
                                            <NextImage src={Images.instagram} alt="Instagram" width={24} height={24} />
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=919444120052">
                                            <NextImage src={Images.whatsapp} alt="WhatsApp" width={24} height={24} />
                                        </a>
                                        <a href="https://www.youtube.com/@BharathiInstitutes">
                                            <NextImage src={Images.youtube} alt="YouTube" width={24} height={24} />
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="practice-list">
                                <h3 style={{ color: '#FFFFFF' }}>Locations</h3><br />
                                <NextImage
                                    src={Images.overallmap}
                                    alt="Bharathi Institutes Tamil Nadu Locations Map"
                                    width={400}
                                    height={300}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="border"></div>
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center text-white">
                            &copy; 2026 Bharathi Educational Institution. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
            {/* WhatsApp Button */}
        </>
    );
};

export default Footer;
