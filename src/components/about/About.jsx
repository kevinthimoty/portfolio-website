import React from "react";
import "./about.css";
import Image from "../../assets/avatar-1.jpg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img"/>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Thimoty Kevin, web developer from Yogyakarta, Indonesia. 
                        Hard-working web developer with a flair for creating solutions in the least amount of time. 
                        Passionate about software architecture and web development. </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number ">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills_percentage ui__design"></span>
                            </div>
                        </div>
                        
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills_percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
}

export default About;