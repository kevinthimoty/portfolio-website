import React from "react";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/kevinthimoty" className="home__social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/kevinthimoty/" className="home__social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/kevinthimoty" className="home__social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    );
}

export default HeaderSocials;