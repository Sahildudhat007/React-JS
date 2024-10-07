import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sahil Dudhat</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    {/* <a href="https://twitter.com/cyphrsylph" className="home__social-icon" target="_blank" rel="noreferrer">
                        <FiTwitter />
                    </a> */}
                    <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-dudhat-09bbb3313/" className="home__social-icon" target="_blank" rel="noreferrer" >
                        <FiLinkedin />
                    </a>
                </div>
                <span className="footer__copy"></span>
            </div>
        </footer>
    );
}

export default Footer;