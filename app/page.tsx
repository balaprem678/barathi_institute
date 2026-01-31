import HeroSlider from '@/components/HeroSlider';
import Marquee from '@/components/Marquee';
import BrandLogos from '@/components/BrandLogos';
import UniqueSellingPoints from '@/components/UniqueSellingPoints';
import HomeAbout from '@/components/HomeAbout';
import CourseOverview from '@/components/CourseOverview';
import Recruiters from '@/components/Recruiters';
import VideoTestimonials from '@/components/VideoTestimonials';
import LatestEvents from '@/components/LatestEvents';
import BlogTestimonials from '@/components/BlogTestimonials';
import GalleryPreview from '@/components/GalleryPreview';
import EnquiryForm from '@/components/EnquiryForm';
import Locations from '@/components/Locations';
import FAQ from '@/components/FAQ';
import PopupModal from '@/components/PopupModal';
import TextTestimonials from '@/components/TextTestimonials';
import FactCounter from '@/components/FactCounter';
import CallOut from '@/components/CallOut';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <Marquee />
            <BrandLogos />
            <UniqueSellingPoints />
            <HomeAbout />
            <CourseOverview />
            <Recruiters />
            <VideoTestimonials />
            <TextTestimonials />
            <LatestEvents />
            <BlogTestimonials />
            <GalleryPreview />
            <EnquiryForm />
            <Locations />
            <FactCounter />
            <FAQ />
            <CallOut />
            <WhyChooseUs />
            <PopupModal />
        </>
    );
}
