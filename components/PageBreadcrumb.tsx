import Link from 'next/link';
import React from 'react';

interface BreadCrumbItem {
    label: string;
    url?: string;
}

interface PageBreadcrumbProps {
    title?: string;
    bgImage: string;
    breadcrumbs: BreadCrumbItem[];
}

const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ title, bgImage, breadcrumbs }) => {
    return (
        <>
            <section className="inner-banner bg-style1" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="container">
                    <h1>{title || <><br /><br /></>}</h1>
                </div>
            </section>
            <section className="breadcrumb">
                <div className="container">
                    <ul>
                        {breadcrumbs.map((item, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    {item.url ? <Link href={item.url}>{item.label}</Link> : item.label}
                                    {index < breadcrumbs.length - 1 && <i className="fa fa-sort-desc"></i>}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default PageBreadcrumb;
