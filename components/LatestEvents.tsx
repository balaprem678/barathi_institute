import Link from 'next/link';

const LatestEvents = () => {
    return (
        <section className="all-cause sec-padd2 home-event-section">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Latest Events</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="image">
                            <img alt="Capping day celebration picture" src="/images/resource/1.jpg" />
                        </div>
                        <br />
                        <h4 style={{ color: 'white', fontWeight: 600, fontSize: '23px', textAlign: 'center' }}>Capping day celebration</h4>
                    </div>
                    <div className="col-lg-4">
                        <div className="image">
                            <img alt="Capping day celebration picture" src="/images/resource/2.jpg" />
                        </div>
                        <br />
                        <h4 style={{ color: 'white', fontWeight: 600, fontSize: '23px', textAlign: 'center' }}>Capping day celebration</h4>
                    </div>
                    <div className="col-lg-4">
                        <div className="image">
                            <img alt="Capping day celebration picture" src="/images/resource/3.jpg" />
                        </div>
                        <br />
                        <h4 style={{ color: 'white', fontWeight: 600, fontSize: '23px', textAlign: 'center' }}>Capping day celebration</h4>
                    </div>
                </div>
                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/gallery">View All Events</Link></div>
            </div>
        </section>
    );
};

export default LatestEvents;
