import Link from 'next/link';
import Image from 'next/image';

const Gallery = () => {
    // Defines the gallery items based on gallery.html content
    // Note: The HTML had "acticle", we use "article". The image paths are updated to use the public folder.
    // The query params ?id=... are removed for the Next.js version or can be kept if needed for dynamic routing, 
    // but here we are just replicating the static view as per the HTML.

    const galleryItems = [
        { id: 31, image: "/images/6192163045952.jpg", title: "Capping day celebration" },
        { id: 36, image: "/images/6155964938825.jpg", title: "Capping day celebration" },
        { id: 37, image: "/images/7115724047094.jpg", title: "Capping day celebration" },
        { id: 38, image: "/images/5615024697315.jpg", title: "Capping day celebration" },
        { id: 39, image: "/images/521959189412.jpg", title: "Capping day celebration" },
        { id: 40, image: "/images/4801403322902.jpg", title: "Capping day celebration" },
        { id: 41, image: "/images/8159153503002.jpg", title: "Capping day celebration" },
        { id: 42, image: "/images/560135220180.jpg", title: "Capping day celebration" },
        { id: 43, image: "/images/5970343321830.jpg", title: "Bharathiyar birthday celebration" },
        { id: 44, image: "/images/9855703121731.jpg", title: "Bharathiyar birthday celebration" },
        { id: 45, image: "/images/606854952445.jpg", title: "Bharathiyar birthday celebration" },
        { id: 47, image: "/images/4299072765198.jpg", title: "Christmas celebration" },
        { id: 48, image: "/images/512883652559.jpg", title: "Christmas celebration" },
        { id: 49, image: "/images/4635824218438.jpg", title: "Christmas celebration" },
        { id: 50, image: "/images/521351200627.jpg", title: "Christmas celebration" },
        { id: 51, image: "/images/459462998409.jpg", title: "Christmas celebration" },
        { id: 52, image: "/images/7751692006743.jpg", title: "Food festival competition" },
        { id: 53, image: "/images/7900824654516.jpg", title: "Food festival competition" },
        { id: 54, image: "/images/4024513165697.jpg", title: "Food festival competition" },
        { id: 55, image: "/images/7023893140680.jpg", title: "Food festival competition" },
        { id: 56, image: "/images/6388773080156.jpg", title: "Food festival competition" },
        { id: 57, image: "/images/7362822447764.jpg", title: "Food festival competition" },
        { id: 58, image: "/images/6767353008531.jpg", title: "Onam celebration" },
        { id: 59, image: "/images/6075914315686.jpg", title: "Onam celebration" },
        { id: 60, image: "/images/5303752858933.jpg", title: "Onam celebration" },
        { id: 61, image: "/images/518767295314.jpg", title: "Onam celebration" },
        { id: 62, image: "/images/8803713043660.jpg", title: "Women's day celebration" },
        { id: 63, image: "/images/9149673734167.jpg", title: "Women's day celebration" },
        { id: 64, image: "/images/8074683005020.jpg", title: "Women's day celebration" }
    ];

    return (
        <>
            {/* Banner Section */}
            <section className="inner-banner bg-style1" style={{ backgroundImage: 'url(/images/gallerybanner.jpg)' }}>
                <div className="container">
                    <h2><br /><br /></h2>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <section className="breadcrumb">
                <div className="container">
                    <ul>
                        <li><Link href="/">Home</Link><i className="fa fa-sort-desc"></i></li>
                        <li><Link href="/gallery">Our Photo Gallery</Link></li>
                    </ul>
                </div>
            </section>

            {/* Title Section */}
            <section className="default-section sec-padd6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h1> Gallery – Explore Campus Life at the Best Hotel Management and Paramedical Institute </h1>
                                <span className="decor"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />

            {/* Gallery Grid Section */}
            <section className="all-cause sec-padd2">
                <div className="container">
                    <div className="row filter-layout">
                        {galleryItems.map((item) => (
                            <article key={item.id} className="col-md-4 col-sm-6 col-xs-12">
                                <div className="single-item">
                                    <div className="inner-box text-center">
                                        <div className="image-box" align="center">
                                            {/* Using Link although the original had anchor to catwise_gallery.php. 
                                                Since we don't have that page yet, we keep it as a link or just a view.
                                                For now replicating the link structure but pointing to same page or # 
                                            */}
                                            <a href="#">
                                                <img src={item.image} alt="Bharathi Institute of Catering & Hotel Management" />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <div className="overlay-box center">
                                                <h4><strong>{item.title}</strong></h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
