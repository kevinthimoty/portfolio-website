import React from "react";

const AboutBox = () => {
    return(
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">7</h3>
                    <span className="about__subtitle">Project Engagement</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">4592</h3>
                    <span className="about__subtitle">Cup of Coffee</span>
                </div>
            </div>

            {/* <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Proud Parents</span>
                </div>
            </div> */}

            <div className="about__box">
                <i className="about__icon fa-regular fa-clock"></i>

                <div>
                    <h3 className="about__title">3 years</h3>
                    <span className="about__subtitle">Working Experience</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;