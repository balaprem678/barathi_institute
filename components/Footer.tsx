import Link from 'next/link';
import "./footer.scss";
import { Images } from '@/app/utilis/Images';

const Footer = () => {
    return (
        <>
            <section className="our-address bg-style1 sec-padd3 footer_new">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="practice-list">
                                <img src={Images.logo.src} alt="logo" />
                                <p style={{ color: '#FFFFFF' }}> In 2005, Bharathi Educational Institution began operations in Chennai&apos;s Tambaram district; Districts of Vellore, Ranipet, Ambur, and Karaikudi in the Sivagangai district are which are industrial centres.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 d-flex justify-center">
                            <div className="practice-list">
                                <h3 style={{ color: '#FFFFFF' }}>Quick Links </h3><br />
                                <ul>
                                    <li><Link href="/about"> About</Link></li>
                                    <li><Link href="/register"> Admission</Link></li>
                                    <li><Link href="/courses"> Courses</Link></li>
                                    <li><Link href="/facilities"> Facilities</Link></li>
                                    <li><Link href="/gallery"> Gallery</Link></li>
                                    <li><Link href="/contact">  Contact Us </Link></li>
                                    <li><Link href="/privacy-policy">  Privacy Policy </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="practice-list">
                                <h3 style={{ color: '#FFFFFF' }}>Contact Information</h3><br />
                                <ul>
                                    <li><a href="#"> Phone No : +91 94441 20052</a></li>
                                    <li><a href="#"> Email ID : info@bharathiinstitutes.com</a></li>
                                </ul>
                                <h3 style={{ color: '#FFFFFF', marginTop: '20px' }}>Follow on :</h3><br />
                                <ul style={{ display: 'flex', gap: '10px' }}>
                                    <li><i className="fa fa-facebook-square" style={{ fontSize: '18px', color: '#fff' }}></i></li>
                                    <li><i className="fa fa-instagram" style={{ fontSize: '18px', color: '#fff' }}></i></li>
                                    <li><i className="fa fa-linkedin" style={{ fontSize: '18px', color: '#fff' }}></i></li>
                                    <li><i className="fa fa-youtube" style={{ fontSize: '18px', color: '#fff' }}></i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="practice-list">
                                <h3 style={{ color: '#FFFFFF' }}>Locations</h3><br />
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.36370092467!2d80.09614723955077!3d12.928889100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f71f90e545f%3A0x65457b33c4262b19!2sBharathi%20Institute%20of%20Catering%20%26%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1579590059545!5m2!1sen!2sin"
                                    width="100%"
                                    height="150"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                ></iframe> */}
                                <img src={Images.overallmap.src} alt="Overall Map" />
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
      <a
        href="https://api.whatsapp.com/send?phone=+919444120052"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 3px #999',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
        </>
    );
};

export default Footer;
