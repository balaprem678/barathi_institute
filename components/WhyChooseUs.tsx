'use client';

const WhyChooseUs = () => {
    return (
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
    );
};

export default WhyChooseUs;
