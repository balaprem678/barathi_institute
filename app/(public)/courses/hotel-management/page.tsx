'use client';

import React from 'react';
import Link from 'next/link';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import './hotal_management.scss';

const courses = [
  {
    title: 'Diploma in Hotel Management',
    duration: '2 Years',
    qualification: '10th / 12th Pass or Fail'
  },
  {
    title: 'Food & Beverage Production',
    duration: '1 Year',
    qualification: '10th Pass'
  },
  {
    title: 'Food & Beverage Service',
    duration: '1 Year',
    qualification: '10th Pass'
  },
  {
    title: 'House Keeping Management',
    duration: '1 Year',
    qualification: '10th Pass'
  },
  {
    title: 'Front Office Management',
    duration: '1 Year',
    qualification: '10th Pass'
  },
  {
    title: 'Bakery & Confectionery',
    duration: '1 Year',
    qualification: '10th Pass'
  }
];

export default function HotelManagementPage() {
  return (
    <>
      <PageBreadcrumb
        bgImage="/images/hotelmanagaement.jpg"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Courses', url: '/courses' },
          { label: 'Hotel Management Course' }
        ]}
      />

      <section className="hotel-modern">
        <div className="container">

          <div className="page-grid">

            {/* COURSE SECTION */}
            <div className="course-wrapper">

              <h2 className="main-title">
                Hotel Management Courses
              </h2>

              <div className="course-grid">
                {courses.map((course, index) => (
                  <div className="course-card" key={index}>

                    <h3>{course.title}</h3>

                    <div className="info">
                      <p><b>Duration:</b> {course.duration}</p>
                      <p><b>Qualification:</b> {course.qualification}</p>
                    </div>

                    <button className="apply-btn">
                      Apply Now
                    </button>

                  </div>
                ))}
              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="sidebar">

              <div className="side-box">
                <h3>Paramedical Courses</h3>

                <Link href="/courses/paramedical">
                  Diploma in Nursing Assistant
                </Link>

                <Link href="/courses/paramedical">
                  Medical Lab Technician
                </Link>

                <Link href="/courses/paramedical">
                  Health Assistant
                </Link>
              </div>

              <div className="side-box">
                <h3>Our Locations</h3>

                <p><strong>Tirunelveli</strong><br />
                  +91 9443917155</p>

                <p><strong>Tambaram</strong><br />
                  +91 9444120052</p>

                <Link href="/contact" className="view-btn">
                  View All Locations
                </Link>

              </div>

            </aside>

          </div>

        </div>
      </section>
    </>
  );
}