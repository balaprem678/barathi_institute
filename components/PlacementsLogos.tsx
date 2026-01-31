import Link from 'next/link';

const PlacementsLogos = () => {
    return (
        <section className="brand-logo sec-padd3 our_placements">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="partner-column">
                            <div className="section-title">
                                <h3>our placements</h3>
                            </div>

                            <ul className="brand-carousel">
                                <li><a href="#"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/hotel/h1.jpg" /></a></li>
                                <li><a href="#"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/hotel/h2.jpg" /></a></li>
                                <li><a href="#"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/hotel/h3.jpg" /></a></li>
                                <li><a href="#"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/hotel/h4.jpg" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementsLogos;
