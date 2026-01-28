import Link from 'next/link';

const BlogTestimonials = () => {
    return (
        <section className="all-cause sec-padd2 home-blog-section">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Testimonial</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="image">
                                <img alt="Student picture" src="/images/resource/kavitha.jpg" />
                            </div>
                            <br />
                            <div className="content">
                                <h3 style={{ fontWeight: 600, fontSize: '22px', fontStyle: 'sans-serif' }}>P.Kavitha - DMLT students (2018-2020)</h3><br />
                                <p>என் பெயர் பி கவிதா நான் பாரதி இன்ஸ்டிடியூட்டில் டிஎச்ஏ 2018 2020 வருடத்தில் ஒரு வருடம் படித்தேன் அப்பொழுது என்னால் படிப்பை தொடர முடியவில்லை பின்பு எனது பள்ளி சான்றிதழை பெறும் நோக்கத்தோடு இன்ஸ்டியூட்டை அணுகினேன் அப்பொழுது எனது ஆசிரியர் அறிவுரையின்படி மீண்டும் படிப்பை தொடர்ந்தேன் தற்சமயம் எனது கணவருடன் சேர்ந்து ஸ்கேன் சென்டர் மற்றும் ரத்த பரிசோதனை மையத்தை சொந்தமாக நடத்துகிறேன் பாரதி இன்ஸ்டியூட் நன்றி
                                </p>
                                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/blog">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="image">
                                <img alt="Student picture" src="/images/resource/rajeshwari.jpg" />
                            </div>
                            <br />
                            <div className="content">
                                <h3 style={{ fontWeight: 600, fontSize: '22px', fontStyle: 'sans-serif' }}>P.Rajeshwari - DHA Students (2020-2022)</h3><br />
                                <p>நான் 12th முடித்த பிறகு என்ன படிப்பது என்று குழம்பி போய் இருற்தேன் என் அம்மா  நர்ஸிங் படிக்க சொன்னார்கள் இது எந்த பலபேரிடம் விசாரித்து கடைசியாக இந்த பாரதி இஸ்டியூட் இடத்தை கண்டுபிடித்தோம் எனக்கு விருப்பம் இல்லை ஆனால் படித்து முடித்த. பிறகு இதில் கிடைக்கும் மரியாதை அதிகம் எனக்கு global hospital karaikudi _ல் ஆசிரியர்கள் வேலை வாங்கித் தற்தார்கள் எனக்கு நல்ல அனுபவங்கள் நல்ல நண்பர்கள் கிடைத்தார்கள் சந்தோஹக்ஷஷமாக......</p>
                                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/blog">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="image">
                                <img alt="Student picture" src="/images/resource/sandhiya.jpg" />
                            </div>
                            <br />
                            <div className="content">
                                <h3 style={{ fontWeight: 600, fontSize: '22px', fontStyle: 'sans-serif' }}>S.sandhya - DHA students (2022-2024)</h3><br />
                                <p>நான் பாரதி இன்ஸ்டடியூட் வருவதற்கு முன்பாக மளிகை கடையில் வேலை பார்த்துக் கொண்டிருந்தேன் எனக்கு அப்பா இல்லை என் அம்மாவும் ஒரு அக்காவும் மட்டும்தான் நான் மல்லிகை கடையில் வேலை  பார்க்கும்போது படிக்க ஆசைப்பட்டேன் அதற்க்கான வருமானம் எங்களிடம் இல்லை இருந்தாலும் அந்த வழியாக நம்ம காலேஜ் சீருடை அணிந்த சிஸ்ட்டர்ஸ் வரும்போது ஆசையாய் இருக்கும் அவர்களை விசாரித்தி பிறகு இங்கு வந்து அட்மிஹன் போட்டேன் அங்குள்ள</p>
                                <div className="read_more_bt mt-2"><Link className="enquiry_button hvr-pulse-grow" href="/blog">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogTestimonials;
