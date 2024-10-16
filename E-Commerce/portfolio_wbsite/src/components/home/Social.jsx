import React from "react";
import { FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="tel:+919586512031" className="home__social-icon" target="_blank">
                <FiPhone />
            </a>
            <a href="https://github.com/" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sahil-dudhat-09bbb3313/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div>
    );
}

export default Social;