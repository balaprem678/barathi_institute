import Link from 'next/link';
import PageBreadcrumb from '../../components/PageBreadcrumb';

export default function GalleryPage() {
    return (
        <>
            <PageBreadcrumb
                bgImage="/images/gallerybanner.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Photo Gallery' }
                ]}
            />

            <section className="default-section sec-padd6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h3> Photo Gallery </h3>
                                <span className="decor"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="all-cause sec-padd2">
                <div className="container">
                    <div className="row filter-layout">
                        <article className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-item">
                                <div className="inner-box">
                                    <div className="image-box" style={{ textAlign: 'center' }}>
                                        <Link href="/gallery/life-at-bharathi"><img src="/images/gallery/g1/banner.jpg" alt="Life @ Bharathi" /></Link>
                                        <Link href="/gallery/life-at-bharathi"><h4 style={{ textAlign: 'center' }}><strong>Life @ Bharathi</strong></h4></Link>
                                        <div className="overlay-box center">
                                            <Link href="/gallery/life-at-bharathi"><h4>Life @ Bharathi</h4></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-item">
                                <div className="inner-box">
                                    <div className="image-box" style={{ textAlign: 'center' }}>
                                        <Link href="/gallery/news-clips"><img src="/images/gallery/g2/banner.jpg" alt="News Clips" /></Link>
                                        <Link href="/gallery/news-clips"><h4 style={{ textAlign: 'center' }}><strong>News Clips </strong></h4></Link>
                                        <div className="overlay-box center">
                                            <Link href="/gallery/news-clips"><h4>News Clips</h4></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </>
    );
}
