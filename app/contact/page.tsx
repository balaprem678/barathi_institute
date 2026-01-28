import React from 'react';
import PageBreadcrumb from '../../components/PageBreadcrumb';

interface Branch {
    id: number;
    img: string;
    address: string;
    phone?: string;
    mobile?: string;
    mapSrc?: string;
}

const branches: Branch[] = [
    {
        id: 1,
        img: "/images/branch/1.jpg",
        address: "No.95, Rajaji Road, Near Vasan Eye Care Hospital, Tambaram, Chennai – 600 0045",
        phone: "044 – 22264484",
        mobile: "+91 - 9444120052",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.36370092467!2d80.09614723955077!3d12.928889100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f71f90e545f%3A0x65457b33c4262b19!2sBharathi%20Institute%20of%20Catering%20%26%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1579590059545!5m2!1sen!2sin"
    },
    {
        id: 2,
        img: "/images/branch/2.jpg",
        address: "No.29, GNG Colony, Varatharajapuram, Ambattur, Chennai – 600 0053",
        phone: "044 – 26251005",
        mobile: "+91 - 9444120052",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.068011753096!2d80.14229176977537!3d13.113941599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ae527db2bb%3A0x612586a15945e596!2sBharathi%20Institute%20of%20Hotel%20Management%20%26%20paramedical!5e0!3m2!1sen!2sin!4v1579590094646!5m2!1sen!2sin"
    },
    {
        id: 3,
        img: "/images/branch/3.jpg",
        address: "No.9, M.B.T. Road, Navalpur, Vimal Shopping Complex, Ranipet – 632 402",
        phone: "04172-273393",
        mobile: "+91 - 9444320052",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5949301138335!2d79.33171086452498!3d12.933736140880749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3575127a56c1%3A0x32595cfeaefe8f5e!2sBharathi%20Institute%20of%20Catering%20%26%20Paramedical!5e0!3m2!1sen!2sin!4v1579590216307!5m2!1sen!2sin"
    },
    {
        id: 4,
        img: "/images/branch/4.jpg",
        address: "No.104, S.K. Road, Dr.Nagaraj Hospital (2ndFloor), Krishnapuram, Ambur -635 802",
        phone: "0417 – 4222822",
        mobile: "+91 - 9442100056",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8964820112174!2d78.71407711452323!3d12.785230890978331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08e48a4d5537%3A0xcc8ba71e9cca17f6!2sBharathi%20Institute%20of%20Catering%20%26%20Paramedical!5e0!3m2!1sen!2sin!4v1579591629610!5m2!1sen!2sin"
    },
    {
        id: 5,
        img: "/images/branch/5.jpg",
        address: "No.793, Nerhuji Road, Indian Bank Upstairs, Villupuram-605 602",
        phone: "04146 – 222822",
        mobile: "+91 - 9444120052",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.497131032581!2d79.48712171451376!3d11.940043591538442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a535695b2116cbd%3A0xf98ca8dcf880334!2sBharathi%20Institute%20Of%20Hotel%20Management%20%26%20Nursing!5e0!3m2!1sen!2sin!4v1579589867054!5m2!1sen!2sin"
    },
    {
        id: 6,
        img: "/images/branch/6.jpg",
        address: "No.5, Good Shed Street, Near Sethupathi School, Madurai – 625 001",
        phone: "0452 – 2344355",
        mobile: "+91 - 94439 17155",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.12628082594!2d78.11162971449374!3d9.923439592903694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5862b720c03%3A0xad7e3a656d40872d!2sBharathi%20Institute%20of%20Hotel%20Management%20%26%20Paramedical%20College!5e0!3m2!1sen!2sin!4v1579589977368!5m2!1sen!2sin"
    },
    {
        id: 7,
        img: "/images/branch/7.jpg",
        address: "No.47, Ramal Residence, Mudiyarasan Salai, Karaikudi – 630 002",
        phone: "04565 – 234848",
        mobile: "+91 - 94439 17155",
        mapSrc: ""
    },
    {
        id: 8,
        img: "/images/branch/8.jpg",
        address: "No.108, Thambuchetti Street, Kalikambal Kovil Opp. Broadway, Chennai - 600 001.",
        phone: "",
        mobile: "+91 - 9444120052",
        mapSrc: ""
    },
    {
        id: 9,
        img: "/images/branch/9.jpg",
        address: "No.25, S.N.Chavadi Road, K.V.Tex Near, SRG Tours, Cuddalore.",
        mobile: "+91 - 9787898991",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.1672299524143!2d79.758665064352!3d11.741471456874997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a549927ddbc9ef7%3A0xf6aabab4a38ac699!2sBHARATHI%20INSTITUTE%20OF%20HOTEL%20MANAGEMENT%20%26%20PARAMEDICAL%20COLLEGE!5e0!3m2!1sen!2sin!4v1579590293143!5m2!1sen!2sin"
    },
    {
        id: 10,
        img: "/images/branch/10.jpg",
        address: "No.171, Hindu Nadar Sangam Complex, S N High Road, Tirunelveli Junction, Tirunelveli - 627 001",
        mobile: "+91 - 9443917155",
        mapSrc: ""
    },
    {
        id: 11,
        img: "/images/branch/11.jpg",
        address: "No. 36/12, Vellalar Street, Ragavan Complex, TMB Bank 2nd Floor, Ariyalur - 621704",
        mobile: "+91 - 9787898991",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.683307177547!2d79.07082501450532!3d11.136947192077526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baadf109e6964b9%3A0x50e72363657db67e!2sBharathi%20catering%20and%20paramedical%20institute!5e0!3m2!1sen!2sin!4v1579591481076!5m2!1sen!2sin"
    },
    {
        id: 13,
        img: "/images/branch/13.jpg",
        address: "No. 29-B, IDA SCUDDAR Road, 3rd Floor, Jambubala Complex, Vellore - 632004",
        mobile: "+91 - 9787898991, +91 - 9444120052",
        mapSrc: ""
    },
    {
        id: 14,
        img: "/images/branch/6.jpg",
        address: "No.15/5, Pollur Main Road, Near Axis Bank, Thiruvannamalai – 606 601",
        phone: "+91 - 9444320052",
        mobile: "+91 - 9444320052",
        mapSrc: ""
    },
    {
        id: 15,
        img: "/images/branch/7.jpg",
        address: "No.17 A, Ulagalandhar Mada Street, Near Aruna Mahal, Big Kanchipuram, Kanchipuram – 6631 502",
        phone: "+91 - 9787438991",
        mobile: "+91 - 9787438991",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9991625910243!2d79.69913687483904!3d12.843330287460395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c30061c6677f%3A0xd0753eff5a8685d4!2sBig%20Kanchipuram!5e0!3m2!1sen!2sin!4v1708514753624!5m2!1sen!2sin"
    },
    {
        id: 16,
        img: "/images/branch/1.jpg", // Placeholder if specific image not found, or use standard
        address: "No.59, 3rd floor, Gopuram towers, Dhurugam Road, Kallakurichi - 606202",
        mobile: "+91 - 9655363236",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125004.58730047903!2d78.88422492209892!3d11.737314698177158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bab6700084e7a39%3A0x794a1213edb2d0fe!2s58%2C3rd%20floor%2C%20gopuram%20towers%2C%20Dhurugam%20road%2C%20Raja%20Nagar%2C%20Kallakurichi%2C%20Tamil%20Nadu%20606202!3m2!1d11.7373339!2d78.9666287!5e0!3m2!1sen!2sin!4v1716608027791!5m2!1sen!2sin"
    },
    {
        id: 17,
        img: "/images/branch/1.jpg", // Placeholder
        address: "No 10, LGB compound, E.B colony, Near Anil semiya head office, Dindigul 624001",
        mobile: "+91 - 9655363236",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3924.7508072254673!2d77.98024317503604!3d10.361799089762888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIxJzQyLjUiTiA3N8KwNTgnNTguMiJF!5e0!3m2!1sen!2sin!4v1714571876238!5m2!1sen!2sin"
    }
];

export default function ContactPage() {
    return (
        <>
            <PageBreadcrumb
                bgImage="/images/contactus.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Contact Us' }
                ]}
            />

            <section className="default-section sec-padd6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h3>Our Locations</h3>
                                <span className="decor"></span>
                            </div>
                            <br />
                            <h3><a href="https://forms.gle/9kCPJRg9aD3HKAmW9" target="_blank" rel="noreferrer">Click Here To Apply</a></h3>

                            <div className="our-leader">
                                <div className="row">
                                    {branches.map((branch) => (
                                        <article key={branch.id} className="col-md-3 col-sm-6 col-xs-12" style={{ marginBottom: '30px' }}>
                                            <div className="item" style={{ backgroundColor: '#C2FC68', paddingBottom: '20px', minHeight: '600px' }}>
                                                <div className="img-box">
                                                    <img src={branch.img} alt="Bharathi Institute of Catering & Hotel Management" className="img-responsive" style={{ width: '100%' }} />
                                                </div>
                                                <div className="content" style={{ textAlign: 'center', padding: '15px' }}>
                                                    <h4><i className="fa fa-location-arrow"></i>&nbsp; Address</h4>
                                                    <div className="text">
                                                        <p>{branch.address}</p>
                                                    </div>
                                                    {branch.phone && (
                                                        <>
                                                            <h4><i className="fa fa-phone"></i>&nbsp; Phone</h4>
                                                            <div className="text">
                                                                <p>{branch.phone}</p>
                                                            </div>
                                                        </>
                                                    )}
                                                    {branch.mobile && (
                                                        <>
                                                            <h4><i className="fa fa-mobile-phone"></i> &nbsp; Mobile</h4>
                                                            <div className="text">
                                                                <p>{branch.mobile}</p>
                                                            </div>
                                                        </>
                                                    )}
                                                    <br />
                                                    {branch.mapSrc && (
                                                        <div>
                                                            <iframe
                                                                src={branch.mapSrc}
                                                                width="100%"
                                                                height="150"
                                                                frameBorder="0"
                                                                style={{ border: 0 }}
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
