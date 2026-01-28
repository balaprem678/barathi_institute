'use client';

const EnquiryForm = () => {
    return (
        <section className="home-enquiryform home_page_enquiry_form">
            <div className="container">
                <div className="section-title text-center" style={{ marginBottom: '30px' }}>
                    <h3>Enquiry Form</h3>
                </div>
                <div className="row">
                    <form className="form" action="" method="post">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name.." />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" id="phone" name="phone" placeholder="Your Phone Number.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="email">Email Address</label>
                                <input type="text" id="email" name="email" placeholder="Your Mail ID.." />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="select">Select Courses</label>
                                <select className="selectform" id="select" name="select">
                                    <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
                                    <option value="Food & Beverage Production">Food & Beverage Production</option>
                                    <option value="Food & Beverage Service">Food & Beverage Service</option>
                                    <option value="Bakery & Confectionary">Bakery & Confectionary</option>
                                    <option value="Special Courses for Girls">Special Courses for Girls</option>
                                    <option value="House Keeping Management">House Keeping Management</option>
                                    <option value="Front Office & Hotel Management">Front Office & Hotel Management</option>
                                    <option value="Diploma Health Assistant">Diploma Health Assistant</option>
                                    <option value="Medical Lab Technology">Medical Lab Technology</option>
                                    <option value="Health Assistant">Health Assistant</option>
                                </select>
                            </div>
                        </div>

                        <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }}></textarea>

                        <button className="enquiry-btn" name="submit" type="submit" style={{ background: '#0495f5' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EnquiryForm;
