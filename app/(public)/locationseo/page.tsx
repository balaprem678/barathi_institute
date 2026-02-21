import React from 'react'
import "./locationseo.scss"
export default function Locationseo() {
    return (
        <div>

            {/* HERO */}
            <section className="hero">
                <h1>
                    Hotel <br />
                    Management <br />
                    Course
                </h1>

                <div className="hero-side">
                    <p>Bharathi Institutes</p>
                    <span>Villupuram</span>
                </div>
            </section>

            {/* EDITORIAL */}
            <section className="editorial">
                <div className="left">
                    <h2>Learn Hospitality Professionally</h2>
                    <p>
                        Join Bharathi Institutes for hands-on hotel management
                        training with internships, catering practice and
                        industry exposure.
                    </p>
                </div>

                <div className="right">
                    <div className="highlight">
                        <h3>Admissions Open</h3>
                        <p>Placement Support Available</p>
                    </div>
                </div>
            </section>

            {/* ZIGZAG */}
            <section className="zigzag">
                <div className="item">
                    <h3>Food Production</h3>
                    <p>Professional culinary and kitchen operations training.</p>
                </div>

                <div className="item dark">
                    <h3>Front Office</h3>
                    <p>Guest handling and hotel administration skills.</p>
                </div>

                <div className="item">
                    <h3>Housekeeping</h3>
                    <p>Hotel maintenance and service management.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Start Your Hospitality Career</h2>
                <a href="#">Apply Now</a>
            </section>

          

        </div>
    )
}