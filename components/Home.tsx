import HomeFAQ from './HomeFAQ';
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Images } from '@/app/utilis/Images'
import HomeBanner from './HomeBanner'
import Locations from './Locations'
import PopupModal from '@/components/PopupModal';
import Partners from './partners'
import EnquiryForm from './EnquiryForm';


interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
}

interface HeroSliderProps {
  slides: Slide[]
}

export default function Home() {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const [activeFaq, setActiveFaq] = useState(0)


  // About Features
  const features = [
    { image: Images.home_about_1, title: 'State-of-the-Art Labs & Modern Facilities' },
    { image: Images.home_about_2, title: 'Experienced Faculty with Real-World Expertise' },
    { image: Images.home_about_3, title: 'Government-Approved Courses & Certifications' },
    { image: Images.home_about_4, title: 'Personalized Training & Career Guidance' },
    { image: Images.home_about_5, title: 'Hands-on Practical Training with Industry Experts' },
    { image: Images.home_about_6, title: 'Strong Alumni Network for Career Support' }
  ]

  // Courses
  const courses = [
    {
      image: Images.course_1,
      title: 'Hotel Management Courses',
      subtitle: '(Diploma, Certification)',
      link: '/courses/hotel-management'
    },
    {
      image: Images.course_2,
      title: 'Paramedical Courses',
      subtitle: '(Diploma, Certification)',
      link: '/courses/paramedical'
    }
  ]



  // Testimonials
  const testimonials = [
    {
      name: 'Priya S.',
      role: 'Hotel Management Graduate',
      text: 'Choosing Bharathi was the best decision I ever made. The faculty were incredibly supportive, and the hands-on training helped me gain confidence. Today, I work in a 5-star hotel in Dubai — all thanks to Bharathi\'s strong foundation!'
    },
    {
      name: 'Arun K',
      role: 'Paramedical Student',
      text: 'The practical experience I got during my course was unmatched. The labs are well-equipped, and we got to intern at reputed hospitals. Bharathi gave me the skills and clarity to pursue my dream career in healthcare.'
    },
    {
      name: 'Sneha R',
      role: 'Hotel Management Graduate',
      text: 'Bharathi didn\'t just teach me how to work in a kitchen — they taught me how to lead one. The exposure, competitions, and events helped shape my personality and boosted my communication skills. I\'m proud to be a Bharathi graduate.'
    }
  ]

  // Events
  const events = [
    { image: Images.event_1, title: 'Capping day celebration' },
    { image: Images.event_2, title: 'Capping day celebration' },
    { image: Images.event_3, title: 'Capping day celebration' }
  ]

  // Blog Testimonials
  const blogTestimonials = [
    {
      image: Images.student_1,
      name: 'P.Kavitha - DMLT students (2018-2020)',
      text: 'என் பெயர் பி கவிதா நான் பாரதி இன்ஸ்டிடியூட்டில் டிஎச்ஏ 2018 2020 வருடத்தில் ஒரு வருடம் படித்தேன் அப்பொழுது என்னால் படிப்பை தொடர முடியவில்லை பின்பு எனது பள்ளி சான்றிதழை பெறும் நோக்கத்தோடு இன்ஸ்டியூட்டை அணுகினேன் அப்பொழுது எனது ஆசிரியர் அறிவுரையின்படி மீண்டும் படிப்பை தொடர்ந்தேன் தற்சமயம் எனது கணவருடன் சேர்ந்து ஸ்கேன் சென்டர் மற்றும் ரத்த பரிசோதனை மையத்தை சொந்தமாக நடத்துகிறேன் பாரதி இன்ஸ்டியூட் நன்றி'
    },
    {
      image: Images.student_2,
      name: 'P.Rajeshwari - DHA Students (2020-2022)',
      text: 'நான் 12th முடித்த பிறகு என்ன படிப்பது என்று குழம்பி போய் இருற்தேன் என் அம்மா ‌ நர்ஸிங் படிக்க சொன்னார்கள் இது எந்த பலபேரிடம் விசாரித்து கடைசியாக இந்த பாரதி இஸ்டியூட் இடத்தை கண்டுபிடித்தோம் எனக்கு விருப்பம் இல்லை ஆனால் படித்து முடித்த. பிறகு இதில் கிடைக்கும் மரியாதை அதிகம் எனக்கு global hospital karaikudi _ல் ஆசிரியர்கள் வேலை வாங்கித் தற்தார்கள் எனக்கு நல்ல அனுபவங்கள் நல்ல நண்பர்கள் கிடைத்தார்கள் சந்தோஹக்ஷஷமாக......'
    },
    {
      image: Images.student_3,
      name: 'S.sandhya - DHA students (2022-2024)',
      text: 'நான் பாரதி இன்ஸ்டடியூட் வருவதற்கு முன்பாக மளிகை கடையில் வேலை பார்த்துக் கொண்டிருந்தேன் எனக்கு அப்பா இல்லை என் அம்மாவும் ஒரு அக்காவும் மட்டும்தான் நான் மல்லிகை கடையில் வேலை ‌ பார்க்கும்போது படிக்க ஆசைப்பட்டேன் அதற்க்கான வருமானம் எங்களிடம் இல்லை இருந்தாலும் அந்த வழியாக நம்ம காலேஜ் சீருடை அணிந்த சிஸ்ட்டர்ஸ் வரும்போது ஆசையாய் இருக்கும் அவர்களை விசாரித்தி பிறகு இங்கு வந்து அட்மிஹன் போட்டேன் அங்குள்ள'
    }
  ]

  // Gallery Images
  const galleryImages = [
    Images.event_1,
    Images.event_2,
    Images.event_3,
    Images.event_4
  ]





  // Stats Data
  const stats = [
    { value: 25, label: 'Years Experience' },
    { value: 9000, label: 'Student Placed' },
    { value: 350, label: 'Hotel Tie Up' },
    { value: 18, label: 'Branches' }
  ]

  return (
    <div>
      {/* Schema Markup */}
      <Script
        id="schema-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "Bharathi Institute Of Hotel Management & Paramedical",
            "url": "https://bharathiinstitutes.com/",
            "logo": "https://bharathiinstitutes.com/images/logo/logo-large.png",
            "description": "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-94441 20052",
              "contactType": "Customer Service"
            }
          })
        }}
      />

      {/* Hero Slider Section */}
      <HomeBanner />


      {/* Affiliation Section */}
      <section className="brand-logo sec-padd3 our_placements" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="award-column text-center" style={{ border: 'none' }}>
                <div className="section-title">
                  <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700', marginBottom: '15px' }}>College Affiliation</h3>
                </div>
                <ul className="award-list list_inline" style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '40px' }}>
                  <li><Image src={Images.a1} alt="Affiliation 1" width={150} height={100} /></li>
                  <li><Image src={Images.a2} alt="Affiliation 2" width={150} height={100} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="unique-selling-section" style={{
        background: 'linear-gradient(135deg, #0495f5 0%, #0378cc 100%)',
        padding: '28px 0',
        color: 'white'
      }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '32px' }}>Your Future Starts Here: Quality Education, Guaranteed Careers!</h3>
            <p style={{ fontSize: '18px' }}>Looking for the perfect place to kickstart your career? Here's why Bharathi Institute is your best choice!</p>
          </div>
          <div className="row">
            <div className="unique-selling-content" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {['100% Placement Assistance', 'Experienced Faculty', 'Modern Lab Facilities', 'Industry Tie-ups & Collaborations', 'Government-Approved Courses'].map((item, index) => (
                <div className="item" key={index} style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: 'white', fontSize: '18px' }}>{item}</h4>
                </div>
              ))}
            </div>
          </div>
          <h4 style={{ textAlign: 'center', fontSize: '24px' }}>Explore Our In-Demand Courses & Kickstart Your Career!</h4>
        </div>
      </section>

      {/* About Section */}
      <section className="default-section sec-padd3 about_section_home" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="section-title">
                <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700', marginBottom: '15px' }}>Welcome to Bharathi Institute</h3>
              </div>

              <div className="text">
                <p style={{ textAlign: 'justify', marginBottom: '30px' }}>
                  Bharathi Institute is one of South India's leading hotel management and paramedical institute,
                  offering world-class training in Hotel Management and Paramedical courses in TamilNadu.
                  With a legacy of over 25 years, we have established ourselves as a trusted name in skill-based education,
                  ensuring students receive the knowledge and hands-on experience they need to succeed in their chosen careers.
                </p>

                <div className="row">
                  {features.map((feature, index) => (
                    <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: '20px' }}>
                      <div className="box" style={{
                        textAlign: 'center',
                        padding: '20px',
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        height: '100%'
                      }}>
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={80}
                          height={80}
                          style={{ marginBottom: '15px' }}
                        />
                        <h4 style={{ color: 'black', fontSize: '16px', fontWeight: '600' }}>{feature.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="read_more_bt mt-2" style={{ marginTop: '20px' }}>
                  <Link href="/aboutus" style={{
                    display: 'inline-block',
                    background: '#b4d903',
                    color: '#333',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}>
                    Explore Our Story
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-sm-12">
              <div className="about_img">
                <Image
                  src="/images/aboutus.jpg"
                  alt="institute of hotel management and paramedical in chennai"
                  width={500}
                  height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="course-overview" style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700' }}>Featured Courses</h3>
          </div>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-lg-6" key={index} style={{ marginBottom: '30px' }}>
                <div className="item" style={{
                  background: 'white',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <div className="image">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={300}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="content" style={{ padding: '20px' }}>
                    <h4 style={{ color: 'black', fontWeight: '600', fontSize: '23px', marginBottom: '15px' }}>
                      {course.title}<br />
                      <span style={{ fontSize: '18px', color: '#666' }}>{course.subtitle}</span>
                    </h4>
                    <div className="read_more_bt mt-2">
                      <Link href={course.link} style={{
                        display: 'inline-block',
                        background: '#b4d903',
                        color: '#333',
                        padding: '10px 25px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}>
                        Explore Courses Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <Partners />

      {/* Testimonials Section */}
      <section className="video-testi" style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700' }}>Student Testimonials</h3>
          </div>

          {/* Video Testimonial */}
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-item" style={{ padding: '10px' }}>
                <div className="youtube-facade">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bTnv22KLZVc?si=ckgTqfNa3s1yLo8m"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Text Testimonials */}
          <div className="row mt-5">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: '30px' }}>
                <div className="box text-center p-3 h-100" style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '20px',
                  height: '100%',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <Image
                    src={Images.testi.src}
                    alt="Testimonial"
                    width={80}
                    height={80}
                    style={{ marginBottom: '15px' }}
                  />

                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{testimonial.name}</h3>
                  <p style={{ color: '#666', marginBottom: '15px' }}>{testimonial.text}</p>
                  <h5 style={{ color: '#6c757d' }}>- {testimonial.role}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="all-cause sec-padd2 home-event-section" style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)'
      }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: 'white', fontSize: '32px', fontWeight: '700' }}>Latest Events</h3>
          </div>
          <div className="row">
            {events.map((event, index) => (
              <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: '30px' }}>
                <div className="image">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                </div>
                <br />
                <h4 style={{ color: 'white', fontWeight: '600', fontSize: '20px', textAlign: 'center' }}>
                  {event.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="read_more_bt mt-2 text-center">
            <Link href="/gallery" style={{
              display: 'inline-block',
              background: '#b4d903',
              color: '#333',
              padding: '12px 30px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Testimonials */}
      <section className="all-cause sec-padd2 home-blog-section" style={{ padding: '28px 0' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700' }}>Student Success Stories</h3>
          </div>
          <div className="row">
            {blogTestimonials.map((testimonial, index) => (
              <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: '30px' }}>
                <div className="blog-item" style={{
                  background: 'white',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <div className="image">
                    <Image
                      src={testimonial.image}
                      alt="Student picture"
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="content" style={{ padding: '20px' }}>
                    <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: '15px' }}>
                      {testimonial.name}
                    </h3>
                    <p style={{ color: '#666', marginBottom: '20px' }}>
                      {testimonial.text.length > 150 ? testimonial.text.substring(0, 150) + '...' : testimonial.text}
                    </p>
                    <div className="read_more_bt mt-2">
                      <Link href="/blog" style={{
                        display: 'inline-block',
                        background: '#b4d903',
                        color: '#333',
                        padding: '8px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="all-cause sec-padd2 home-event-section pb-3">
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#333', fontSize: '32px', fontWeight: '700' }}>Our Gallery</h3>
          </div>
          <div className="row">
            {galleryImages.map((image, index) => (
              <div className="col-lg-3 col-md-6" key={index} style={{ marginBottom: '20px' }}>
                <div className="image">
                  <Image
                    src={image}
                    alt={`Bharathi institute picture ${index + 1}`}
                    width={300}
                    height={200}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="read_more_bt mt-2 text-center">
            <Link href="/gallery" style={{
              display: 'inline-block',
              background: '#b4d903',
              color: '#333',
              padding: '12px 30px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              View All Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}


      <EnquiryForm />

      {/* Locations Section */}
      <Locations />

      {/* Call to Action */}
      <section className="call-out" style={{
        padding: '50px 0',
        background: 'linear-gradient(135deg, #b4d903 0%, #9ab902 100%)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#333' }}>
              <strong>Want to be Join With Our Institution</strong>
            </h2>
            <Link
              href="https://forms.gle/9kCPJRg9aD3HKAmW9"
              target="_blank"
              style={{
                display: 'inline-block',
                background: '#0495f5',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '18px'
              }}
            >
              Get Started with Your Application
            </Link>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <HomeFAQ />

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
                      <img alt="Bharathi Institute of Catering &amp; Hotel Management" src={Images.why_prefer_1.src} />
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
                    <div className="image-box"><img alt="Bharathi Institute of Catering &amp; Hotel Management" src={Images.why_prefer_2.src} />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopupModal />
    </div>
  )
}
