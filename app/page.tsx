import react from 'react';
import Home from '@/components/Home';
import AboutPage from '@/components/Aboutus';
import Courses from '@/components/Courses';
import Placements from './placements/page';
import GalleryPage from './gallery/page';
import ContactPage from './contact/page';
import FacilitiesPage from './facilities/page';
import StudentTestimonials from './student-testimonials/page';

export default function App() {
    return (
        <>
           {/* <Home/> */}
           {/* <AboutPage/> */}
           {/* <Placements/> */}
           {/* <GalleryPage /> */}
           {/* <ContactPage /> */}
           {/* <FacilitiesPage /> */}
           <StudentTestimonials />
        </>
    );
}
