import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import './blog.scss';

interface BlogPost {
  id: number;
  title: string;
  studentName: string;
  course: string;
  duration: string;
  content: string;
  imageUrl: string;
  alt: string;
}

export default function Blogs() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "From Student to Entrepreneur: A Success Story",
      studentName: "P. Kavitha",
      course: "DHM",
      duration: "2023-2025",
      content: "என் பெயர் பி கவிதா நான் பாரதி இன்ஸ்டிடியூட்டில் டிஎச்ஏ 2018 2020 வருடத்தில் ஒரு வருடம் படித்தேன் அப்பொழுது என்னால் படிப்பை தொடர முடியவில்லை பின்பு எனது பள்ளி சான்றிதழை பெறும் நோக்கத்தோடு இன்ஸ்டியூட்டை அணுகினேன் அப்பொழுது எனது ஆசிரியர் அறிவுரையின்படி மீண்டும் படிப்பை தொடர்ந்தேன் தற்சமயம் எனது கணவருடன் சேர்ந்து ஸ்கேன் சென்டர் மற்றும் ரத்த பரிசோதனை மையத்தை சொந்தமாக நடத்துகிறேன் பாரதி இன்ஸ்டியூட் நன்றி",
      imageUrl: "/images/resource/kavitha.jpg",
      alt: "Student Kavitha - DHM Graduate turned Entrepreneur"
    },
    {
      id: 2,
      title: "Building a Career with Honor and Respect",
      studentName: "P. Rajeshwari",
      course: "DHM",
      duration: "2023-2025",
      content: "நான் 12th முடித்த பிறகு என்ன படிப்பது என்று குழம்பி போய் இருற்தேன் என் அம்மா நர்ஸிங் படிக்க சொன்னார்கள் இது எந்த பலபேரிடம் விசாரித்து கடைசியாக இந்த பாரதி இஸ்டியூட் இடத்தை கண்டுபிடித்தோம் எனக்கு விருப்பம் இல்லை ஆனால் படித்து முடித்த. பிறகு இதில் கிடைக்கும் மரியாதை அதிகம் எனக்கு global hospital karaikudi _ல் ஆசிரியர்கள் வேலை வாங்கித் தற்தார்கள் எனக்கு நல்ல அனுபவங்கள் நல்ல நண்பர்கள் கிடைத்தார்கள் சந்தோஹக்ஷஷமாக என்னுடைய காலோஜ் life இருந்தது நான் மாதம் 8000 ஆயிரம் வாங்கிக் கொண்டிருக்கின்றேன் என் வீட்டில் loan வாங்கின என் அப்பாவும் சேர்ந்து கட்டிக் கொண்டிருக்கின்றோம் இதில் எனக்கு ஒரு பெரிய கௌரவம் கிடைத்தது. பலபேருக்கு வீட்ட்ற்கு சென்றும் அன்னால் என் மருந்துவ பணியை சிறப்பாக செய்ய முடிக்கின்றது . என் குடும்பத்திலும் யாருக்காவது உடல்நிலை சரியில்லை யென்றால் அவர்களையும் நான் பார்த்துக் கொள்கின்றேன் அனைவரும் என்னை அன்பாக ஆசீர்வதிக்க என்றார்கள் அந்த ஆசீர்வாதம் என்னை மகிழ்விக்கின்றது.",
      imageUrl: "/images/resource/rajeshwari.jpg",
      alt: "Student Rajeshwari - DHM Student at Global Hospital"
    },
    {
      id: 3,
      title: "Dreams Fulfilled Through Education",
      studentName: "S. Sandhya",
      course: "DHM",
      duration: "2023-2025",
      content: "நான் பாரதி இன்ஸ்டடியூட் வருவதற்கு முன்பாக மளிகை கடையில் வேலை பார்த்துக் கொண்டிருந்தேன் எனக்கு அப்பா இல்லை என் அம்மாவும் ஒரு அக்காவும் மட்டும்தான் நான் மல்லிகை கடையில் வேலை பார்க்கும்போது படிக்க ஆசைப்பட்டேன் அதற்க்கான வருமானம் எங்களிடம் இல்லை இருந்தாலும் அந்த வழியாக நம்ம காலேஜ் சீருடை அணிந்த சிஸ்ட்டர்ஸ் வரும்போது ஆசையாய் இருக்கும் அவர்களை விசாரித்தி பிறகு இங்கு வந்து அட்மிஹன் போட்டேன் அங்குள்ள ஆசிரியர்கள் எனக்கு part time job வேலை வாங்கித் தந்தார்கள் மாதம் 5000 ரூபாய் கிடைத்தது அதை வைத்து நான் என்னுடைய கல்லூரி படிப்பை முடித்தேன் முடித்த பிறகு எனக்கு மருத்துவமனையில் வேலை வாங்கித் தற்தார்கள் இப்பொழுது நான் பாக்கியலெட்சுமி மருத்துவமனையில் வேலை பார்த்துக் கொண்டிருக்கிறேன் மாதம் 8 ஆயிரம் சம்பளம் அதுபோக வரும் நோயாளிகளின் உடன் இருப்பவர் களும் என்னுடைய care நன்றாக உள்ளது என்று என்னை வாழ்த்தி தனிப்பட்ட முறையிலும் எனக்கு amount கொடுப்பார்கள் இந்த சீருடையில் எனக்கு மிகப் பெரிய மரியாதை கிடைக்கின்றது என்னால் என் குடும்பத்தை பார்க்க முடிகின்றது இந்த பாரதி இன்ஸ்டியூட்டில் படித்ததாதார் தான் என்னுடைய கனவுகள் நிறைவேறிக் கொண்டிருக்கின்றன நான் சம்பாதித்தால் எனக்கு தேவையான ( கல்யான நகைகள் ) வாங்கி வைத்திருக்கின்றேன் ரொம்ப சந்தோஹ மாக இருக்கின்றேன்.",
      imageUrl: "/images/resource/sandhiya.jpg",
      alt: "Student Sandhya - From Grocery Store to Hospital Professional"
    }
  ];

  return (
    <>
      <div className="placementsbanner">
        <div className="container">
          <h3 className='page_title'>Students Success Story</h3>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h6 className="subtitle">Inspiring Journeys</h6>
            <h1 className="title">From Our Students & Alumni</h1>
            <p className="description">
              Real stories of transformation and success from our hotel management and paramedical graduates
            </p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="card-image">
                  <div className="image-wrapper">
                    <Image
                      src={post.imageUrl}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="blog-image"
                    />
                    <div className="image-overlay">
                      <span className="course-badge">{post.course}</span>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="student-info">
                    <h3 className="student-name">{post.studentName}</h3>
                    <div className="course-info">
                      <span className="course">{post.course} Student</span>
                      <span className="duration">{post.duration}</span>
                    </div>
                  </div>

                  <h4 className="blog-title">{post.title}</h4>

                  <div className="content-preview">
                    <p>{post.content.substring(0, 200)}...</p>
                  </div>

                  <div className="card-footer">
                    <Link href={`/stories/${post.id}`} className="read-more-btn">
                      Read Full Story
                  
                    </Link>
                    <Link href="/contact" className="contact-btn">
                      Contact Student
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Write Your Success Story?</h2>
              <p>Join hundreds of successful graduates who started their journey at our institute</p>
              <div className="cta-buttons">
                <Link href="/admissions" className="cta-primary">
                  Apply Now
                </Link>
                <Link href="/contact" className="cta-secondary">
                  Book Campus Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}