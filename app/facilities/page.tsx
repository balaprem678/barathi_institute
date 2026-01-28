import Link from 'next/link';
import PageBreadcrumb from '../../components/PageBreadcrumb';
import React from 'react';

interface Facility {
    title: string;
    description: string;
    img: string;
}

const facilities: Facility[] = [
    { title: "Class Room", description: "Fully furnished classrooms, equipped with the latest teaching aids and all have network connectivity to facilitate presentations which make learning at BHARATHI a world class experience.", img: "/images/facilities/1.jpg" },
    { title: "Basic Food Production Lab", description: "The Basic Food Production Lab of BHARATHI denoted as Basic Kitchen. The Basic Food Production kitchen is equipped with latest equipment’s. This Lab is used to provide training to the students of 1st year in basic Continental and Indian cuisines.", img: "/images/facilities/2.jpg" },
    { title: "Advance Food Production Lab", description: "The Advance Food Production Lab is used to teaching and training international cuisines to the final year students. The Advance Food Production Lab is the place where finishing touches are given to the budding Chefs.", img: "/images/facilities/3.jpg" },
    { title: "Bakery & Confectionery", description: "The Bakery & Confectionery department trains the students in the art of making yeast products, flour confectionery products, chocolates, cold and hot pudding in order to prepare them face the challenges of the industry has two separate Bakery labs for smooth practical of 1st year and 2rd year students.", img: "/images/facilities/4.jpg" },
    { title: "Front Office Lab", description: "As the front office is known as the nerve centre of the hotel, the front office laboratory of the Institute is design to cater all the needs of providing training to the students. Every details of front office dealing like Room Reservation, Registration, Guest Relations, Telephones, Cashiering, Guest Accounting, Revenue Management etc. are taught to the students.", img: "/images/facilities/5.jpg" },
    { title: "Housekeeping Lab", description: "The Institute is equipped with the most modern automatic machines to train the students to provide clean and hygienic atmosphere. The model guest rooms with the most modern facility are used provide hands on training to the students.The housekeeping lab is entirely designed to meet every need of guest with chambers maid trolley. Along with this lab also includes specialized areas like Laundry Operation & room management.", img: "/images/facilities/6.jpg" },
    { title: "Language Lab", description: "The Language Lab of BHARATHI is only maid to supports all the language instructors by facilitating collaboration and communication all the students. Language laboratory encourages the students and integration of the students in the different exercises and this is reflected, Mentors of faculties uses the language lab to allow students to have access to the information quickly and easily developing many types of classroom exercises, personalizing the learning process, encouraging creativity, innovation and training.", img: "/images/facilities/7.jpg" },
    { title: "Library", description: "As Library place an very important role for the overall academic development of students, therefore to provide the best facility to our students, the Institute has got of big & specious library equipped with best books, journals, and periodicals.", img: "/images/facilities/8.jpg" },
    { title: "Medical lab", description: "For Hospital Management course BHARATHI has a medical laboratory where students of Hospital management can learn to the diagnosis, treatment, and prevention of disease.", img: "/images/facilities/9.jpg" },
    { title: "Accommodation Lab", description: "For For Hospital Management student BHARATHI has a accommodation lab to train students equipped and handle any situation in future work field.", img: "/images/facilities/10.jpg" },
    { title: "Study Room", description: "Study rooms in BHARATHI are exclusively for graduate and post graduate students. Our study rooms are for academic purposes only, and they all have whiteboards, tables, and task seating.", img: "/images/facilities/11.jpg" },
    { title: "Experienced Faculty", description: "BHARATHI is having dedicated team of highly qualified and trained faculties who with their extensive support bring the best of the personal guidance for the students.", img: "/images/facilities/12.jpg" },
    { title: "Hostel", description: "Separate hostels for boys and girls is provided by the institute for safe, secure and comfortable living with good food.", img: "/images/facilities/13.jpg" },
    { title: "Text Book", description: "Students will be given a set of textbooks as prescribed by the assessing institution. Also sometimes students are required to purchase certain books for their reference at their cost.", img: "/images/facilities/14.jpg" }
];

export default function FacilitiesPage() {
    return (
        <>
            <PageBreadcrumb
                bgImage="/images/facilities.jpg"
                breadcrumbs={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Facilities' }
                ]}
            />

            <section className="default-section service style-2 sec-padd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h3>Our Facilities</h3>
                                <span className="decor"></span>
                            </div>
                            <br />

                            <div className="news-event">
                                <div className="tabs-box tabs-style-one">
                                    <div className="tabs-content">
                                        <div className="tab active-tab" id="News">
                                            <div className="inner-box">
                                                {facilities.map((facility, index) => (
                                                    <React.Fragment key={index}>
                                                        <div className="table-responsive">
                                                            <div className="col-md-4 col-sm-12" style={{ padding: '0px' }}>
                                                                <div className="single-item">
                                                                    <div className="inner-box">
                                                                        <div className="image-box">
                                                                            <img src={facility.img} alt={facility.title} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8 col-sm-12">
                                                                <div className="content" style={{ textAlign: 'justify' }}>
                                                                    <a href="#"><h4>{facility.title}</h4></a>
                                                                    <p>{facility.description}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-sm-12" style={{ textAlign: 'center' }}>
                                                                <br /> <img src="/images/divider.png" alt="divider" /><br />
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
