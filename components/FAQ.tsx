
const FAQ = () => {
    return (
        <section className="faq" style={{ backgroundColor: '#f7f8fb' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <img alt="" src="/images/resource/faq-image.png" />
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className="faq-box">
                            <div className="section-title" style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse0" style={{ textTransform: 'capitalize' }}>
                                            <i className="fas fa-question-circle"></i> what all certificates you will be recieved?
                                        </a>
                                    </div>
                                    <div id="collapse0" className="collapse show" data-parent="#accordion">
                                        <div className="card-body show" style={{ textTransform: 'capitalize' }}>
                                            specialized certification offered for hotel management students that they can create their own event management company&apos;s for media,advertisement,mall&apos;s,trade centre&apos;s,etc.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse1" style={{ textTransform: 'capitalize' }}>
                                            <i className="fas fa-question-circle"></i> what kind of benefit you recieve for DHM?
                                        </a>
                                    </div>
                                    <div id="collapse1" className="collapse " data-parent="#accordion">
                                        <div className="card-body " style={{ textTransform: 'capitalize' }}>
                                            only one institute offer students sponsorship on the spot admission for hotel management students for their fees convenience.
                                        </div>
                                    </div>
                                </div>
                                {/* Add more FAQs as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
