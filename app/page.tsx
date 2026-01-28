import HeroSlider from '@/components/HeroSlider';
import Marquee from '@/components/Marquee';
import BrandLogos from '@/components/BrandLogos';
import UniqueSellingPoints from '@/components/UniqueSellingPoints';
import HomeAbout from '@/components/HomeAbout';
import CourseOverview from '@/components/CourseOverview';
import Recruiters from '@/components/Recruiters';
import VideoTestimonials from '@/components/VideoTestimonials';
import LatestEvents from '@/components/LatestEvents';
import BlogTestimonials from '@/components/BlogTestimonials';
import GalleryPreview from '@/components/GalleryPreview';
import EnquiryForm from '@/components/EnquiryForm';
import Locations from '@/components/Locations';
import FAQ from '@/components/FAQ';
import PopupModal from '@/components/PopupModal';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <Marquee />
            <BrandLogos />
            <UniqueSellingPoints />
            <HomeAbout />
            <CourseOverview />
            <Recruiters />
            <VideoTestimonials />
            <LatestEvents />
            <BlogTestimonials />
            <GalleryPreview />
            <EnquiryForm />
            <Locations />
            <section className="fact-counter bg-style1" style={{ backgroundImage: 'url(/images/background/1.jpg)' }}>
                <div className="container">
                    <div className="row clearfix">
                        <div className="counter-outer clearfix">
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="25">0</span>
                                    </div>
                                    <h4 className="counter-title">Years Experience</h4>
                                </div>
                            </article>
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="9000">0</span>
                                    </div>
                                    <h4 className="counter-title">Student Placed</h4>
                                </div>
                            </article>
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="350">0</span>
                                    </div>
                                    <h4 className="counter-title">Hotel Tie Up</h4>
                                </div>
                            </article>
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="18">0</span>
                                    </div>
                                    <h4 className="counter-title">Branches</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ />
            <section className="call-out">
                <div className="container">
                    <div className="content clearfix">
                        <div className="float_left">
                            <h2><strong>Want to be Join With Our Institution</strong></h2>
                        </div>

                        <div className="call-out-button" style={{ textAlign: 'right' }}><a className="thm-btn" href="https://forms.gle/9kCPJRg9aD3HKAmW9">Get Started with Your Application</a></div>
                    </div>
                </div>
            </section>


            <section className="why-chooseus sec-padd3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="section-title">
                                <h3>Why prefer us?</h3>
                                <p style={{ textAlign: 'justify' }}>When you choose Bharathi Institute, you&apos;re choosing excellence, innovation, and a pathway to a rewarding career in the dynamic world of hospitality. Join us and embark on a journey towards success in the industry of your dreams.</p>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="why-chosse-carousel">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/resource/1.jpg" />
                                            <div className="caption">100% Placement</div>

                                            <div className="overlay-box">
                                                <h4>100% Placement</h4>

                                                <div className="text">
                                                    <p>We plan the service of business<br />
                                                        right way development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="inner-box">
                                        <div className="image-box"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/resource/2.jpg" />
                                            <div className="caption">70% Practicals</div>
                                            <div className="overlay-box">
                                                <h4>90% Practicals</h4>
                                                <div className="text">
                                                    <p>We plan the service of business<br />
                                                        right way development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more items if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopupModal />
        </>
    );
}
