import React from "react";
import "./footer.css"

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Pranav</h1>
                <ul className="footer__list">
                    <li className=" footer__link" id="#about">About</li>
                    <li className=" footer__link" id="#portfolio">Project</li>
                    <li className=" footer__link" id="#test">Testimonial</li>
                </ul>

                <div className="footer__social">
                    <a href="" className="footer__social-link"
                    target="blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="" className="footer__social-link"
                    target="blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="" className="footer__social-link"
                    target="blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">All Copyrights Reserved @ sprnv007</span>
            </div>
        </footer>
    )
}

export default Footer