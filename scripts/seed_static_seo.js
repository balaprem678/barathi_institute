const mongoose = require('mongoose');
const StaticPageSEO = require('../models/StaticPageSEO');
require('dotenv').config();

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/bharathi_institutes';

const seoData = [
    {
        pagePath: '/',
        pageName: 'Home',
        metaTitle: 'Hotel Management & Paramedical College in Tamil Nadu - Bharathi Institutes',
        metaDescription: 'Join Bharathi Institutes for top hotel management & paramedical courses with hands-on training, experienced faculty, 100% placement support & industry ties across Tamil Nadu.',
        metaKeywords: 'b sc hotel management colleges in tamilnadu, best hotel management colleges in tamilnadu, hotel management colleges in tamilnadu, bsc hotel management colleges in tamilnadu, Bharathi Institute, b sc hotel management, b sc in hotel management, paramedical colleges in tamilnadu, Operation Theatre Technology, Hospital Administration, hospital administration course, hospital administration course near me, Operation Theatre Technology course, Medical Lab Technology, b voc in medical lab technology, Medical Lab Technology course, Bharathi Institutes Tamil Nadu',
        altText: 'Hotel Management and Paramedical College in Tamil Nadu',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/",
"url": "https://bharathiinstitutes.com/",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/about',
        pageName: 'About Us',
        metaTitle: 'About Bharathi Institutes – Top Hotel & Paramedical College',
        metaDescription: 'Learn about Bharathi Institutes’ legacy, industry-focused hotel management & paramedical training, hands-on learning, strong placements & career support.',
        metaKeywords: 'Bharathi Institutes Tamil Nadu, Hotel Management & Paramedical college, About Bharathi Educational Institution, Hospitality training institute Tamil Nadu, Paramedical training with placement, hotel management training, Best paramedical institute Tamil Nadu',
        altText: 'About Bharathi Institutes',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/about",
"url": "https://bharathiinstitutes.com/about",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/courses',
        pageName: 'Courses',
        metaTitle: 'Hotel Management & Paramedical Courses with Placement',
        metaDescription: 'Explore hotel management, paramedical diploma & degree courses with practical training, government-approved certifications and career placement support.',
        metaKeywords: 'b sc hotel management colleges in tamilnadu, best hotel management colleges in tamilnadu, hotel management colleges in tamilnadu, bsc hotel management colleges in tamilnadu, paramedical colleges in tamilnadu, hospital administration course hospital administration course near me, Operation Theatre Technology course',
        altText: 'Bharathi Institutes Course',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/courses",
"url": "https://bharathiinstitutes.com/courses",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/courses/degree',
        pageName: 'Degree Courses',
        metaTitle: 'Degree Courses – B.Sc & B.Voc in Hotel & Paramedical',
        metaDescription: 'Discover B.Sc & B.Voc degree programs in hotel management, medical lab tech, emergency care and OT technology with internships and career growth exposure.',
        metaKeywords: 'b sc hotel management, b sc in hotel management, B Voc in Medical Lab Technology, B sc Hotel Management colleges in TamilNadu, B voc in medical lab technology colleges',
        altText: 'Bharathi Institutes Degree Courses',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/courses/degree",
"url": "https://bharathiinstitutes.com/courses/degree",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/courses/diploma',
        pageName: 'Diploma Courses',
        metaTitle: 'Diploma Hotel & Paramedical Courses – Job Ready Skills',
        metaDescription: 'Explore diploma programs in hotel management, healthcare, and medical lab technician with hands-on training, career support, internships & placement assistance.',
        metaKeywords: 'diploma hotel management, diploma in hotel management and catering technology, diploma in hotel management after 10th, diploma in hotel management after 10th colleges, diploma in hotel management after 12th, diploma in hotel management colleges, 1 year diploma in hotel management, diploma in paramedical, Diploma in paramedical in tamilnadu, Diploma paramedical Courses in tamilnadu, Diploma in paramedical colleges, Diploma hotel management in tamilnadu',
        altText: 'Bharathi Institutes Diploma Courses',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/courses/diploma",
"url": "https://bharathiinstitutes.com/courses/diploma",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/placements',
        pageName: 'Placements',
        metaTitle: '100% Placement Support – Hotel & Paramedical Careers',
        metaDescription: 'See student success stories & placement outcomes at Bharathi Institutes — strong industry ties with hotels, hospitals & corporates for internships and jobs.',
        metaKeywords: 'Placement support hotel management, Paramedical job placements India, Internships hospitality & healthcare, Hotel & healthcare placement success, Industry tie-ups for jobs, Student placement stories, Career guidance & job assistance, Campus recruitment hospitality & health',
        altText: '100% Placement Support',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/placements",
"url": "https://bharathiinstitutes.com/placements",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/gallery',
        pageName: 'Gallery',
        metaTitle: 'Campus & Event Gallery – Bharathi Institutes Photos',
        metaDescription: 'Browse photos of campus life, student events, celebrations, training sessions and hospitality activities at Bharathi Institutes for hotel management & paramedical.',
        metaKeywords: 'Bharathi Institutes photo gallery, Campus life photos hospitality institute, Student events & celebrations gallery, Hospitality training classroom pictures, Paramedical course campus photos, College event photography, Best hotel management college gallery, Visual tour of institute',
        altText: 'Bharathi Institutes Gallery',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/gallery",
"url": "https://bharathiinstitutes.com/gallery",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/student-testimonials',
        pageName: 'Student Testimonials',
        metaTitle: 'Student Testimonials – Success Stories & Reviews',
        metaDescription: 'Read real student testimonials about training, placements, internships and career growth after completing hotel management & paramedical courses.',
        metaKeywords: 'Student reviews Bharathi Institutes, Hospitality & paramedical testimonials, Success stories hotel management, Alumni placement experiences, Career growth student feedback, College reviews tamilnadu, Training impact testimonials, Graduate feedback hospitality & health,',
        altText: 'Bharathi Institutes Student Testimonials',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/student-testimonials",
"url": "https://bharathiinstitutes.com/student-testimonials",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/blog',
        pageName: 'Blog',
        metaTitle: 'Education & Career Blog – Hotel & Paramedical Insights',
        metaDescription: 'Read expert articles on hotel management, paramedical careers, study tips, industry trends, internships, placements and student guidance at Bharathi Institutes Blog.',
        metaKeywords: 'Hotel management blog articles, Paramedical career tips blog, Hospitality industry trends, Healthcare education insights, Study tips for students, Placement advice Hotel & paramedical, Internships guidance articles, Career planning blog India, Vocational training tips, Student success & learning tips',
        altText: 'Bharathi Institutes Blogs',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/blog",
"url": "https://bharathiinstitutes.com/blog",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/admission',
        pageName: 'Admission',
        metaTitle: 'Admissions – Apply for Hotel & Paramedical Courses',
        metaDescription: 'Start your journey with Bharathi Institutes — apply for hotel management, paramedical, diploma & degree courses with easy online admission and career guidance support.',
        metaKeywords: 'Hotel Management admissions Tamil Nadu, Paramedical course admission India, Apply for diploma & degree courses, College admission process hospital & hospitality, Online application Bharathi Institutes, Vocational training admission guide, Career-oriented course enrollment, Student admission help & support.',
        altText: 'Bharathi Institutes Admission',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/admission",
"url": "https://bharathiinstitutes.com/admission",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/scholarship',
        pageName: 'Scholarship',
        metaTitle: 'Scholarships – Fee Support for Hotel & Paramedical Students',
        metaDescription: 'Discover scholarship options for girls and eligible families at Bharathi Institutes — get up to 20% tuition fee support for hotel management & paramedical courses.',
        metaKeywords: 'Bharathi Institutes Scholarship, Hotel Management scholarship India, Paramedical course fee support, Education scholarships for girls, Tuition fee waiver hotel management, Financial aid for vocational training, Scholarship eligibility Tamil Nadu students, Student scholarship benefits hospitality & health, Bursary for diploma courses.',
        altText: 'Bharathi Institutes Scholarships',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/scholarship",
"url": "https://bharathiinstitutes.com/scholarship",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    },
    {
        pagePath: '/contact',
        pageName: 'Contact Us',
        metaTitle: 'Contact Bharathi Institutes – Queries & Admission Help',
        metaDescription: 'Get in touch with Bharathi Institutes for course details, admissions, scholarships, placements and student support. Call, email or visit us for personalized help.',
        metaKeywords: 'Bharathi Institutes contact details, Hotel & Paramedical college phone number, Admission help contact India, Contact form Bharathi Institutes, Institute email for student queries, Hospitality & healthcare college address, Ask questions about courses, Student support contact info.',
        altText: 'Bharathi Institutes Contacts',
        schemaScript: `<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Bharathi Institute",
"image": "https://bharathiinstitutes.com/images/logo/logo12.png",
"@id": "https://bharathiinstitutes.com/contact",
"url": "https://bharathiinstitutes.com/contact",
"telephone": "+91 94441 20052",
"priceRange": "₹",
"address": {
"@type": "PostalAddress",
"streetAddress": "95, Rajaji Road, near NATIONAL THEATRE, West Tambaram, Tambaram, Chennai, Tamil Nadu",
"addressLocality": "Chennai",
"postalCode": "600045",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 12.9264406,
"longitude": 80.1078558
},
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Tuesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Wednesday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Thursday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "09:30",
"closes": "17:00"
},{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "09:30",
"closes": "17:00"
}] 
}
</script>`
    }
];


async function seed() {
    try {
        await mongoose.connect(dbUrl);
        console.log('Connected to MongoDB');

        for (const data of seoData) {
            await StaticPageSEO.findOneAndUpdate(
                { pagePath: data.pagePath },
                data,
                { upsert: true, new: true }
            );
            console.log(`Seeded SEO for ${data.pageName}`);
        }

        console.log('Seeding completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
}

seed();
