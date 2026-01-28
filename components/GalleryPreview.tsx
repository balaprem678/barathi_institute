import Link from 'next/link';

const GalleryPreview = () => {
    return (
        <section className="all-cause sec-padd2 home-event-section">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Our Gallery</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="image"><img alt="Bharathi institute pictures" src="/images/resource/1.jpg" /></div>
                    </div>
                    <div className="col-lg-3">
                        <div className="image"><img alt="Bharathi institute pictures" src="/images/resource/2.jpg" /></div>
                    </div>
                    <div className="col-lg-3">
                        <div className="image"><img alt="Bharathi institute pictures" src="/images/resource/3.jpg" /></div>
                    </div>
                    <div className="col-lg-3">
                        <div className="image"><img alt="Bharathi institute pictures" src="/images/resource/4.jpg" /></div>
                    </div>
                </div>
                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/gallery">View All Gallery</Link></div>
            </div>
        </section>
    );
};

export default GalleryPreview;
