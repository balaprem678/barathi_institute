import React from 'react'

export default function counter() {
    return (
        <div>
            <section className="fact-counter bg-style1 1" >
                <div className="container">
                    <div className="row clearfix">
                        <div className="counter-outer clearfix">
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="25">0</span>
                                    </div>
                                    <h4 className="counter-title">Years Experience</h4>
                                </div>
                            </article>
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="9000">0</span>
                                    </div>
                                    <h4 className="counter-title">Student Placed</h4>
                                </div>
                            </article>
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="350">0</span>
                                    </div>
                                    <h4 className="counter-title">Hotel Tie Up</h4>
                                </div>
                            </article>
                            <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
                                <div className="item">
                                    <div className="count-outer hexagon"><br />
                                        <span className="count-text" data-speed="3000" data-stop="18">0</span>
                                    </div>
                                    <h4 className="counter-title">Branches</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
