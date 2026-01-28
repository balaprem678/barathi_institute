import Link from 'next/link';

const BrandLogos = () => {
    return (
        <section className="brand-logo sec-padd3 our_placements">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="award-column text-center" style={{ border: 'none' }}>
                            <div className="section-title">
                                <h3>college affiliation</h3>
                                <p></p>
                            </div>

                            <ul className="award-list list_inline">
                                <li><a href="#"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/hotel/a1.jpg" /></a></li>
                                <li><a href="#"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src="/images/hotel/a2.jpg" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
