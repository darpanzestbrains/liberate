import * as React from "react";
import footer_logo from '../../assets/images/f-logo.png';

const Footer = (props) => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 f-l-box">
                                <span><img src={footer_logo} alt="" /></span>
                                <p>We are driven to inspire business success, lifestyle changes, and personal transformations.
                                    We strive to see our partners realize their potential through positive outcomes. It is our
                                    responsibility to continuously improve the customer experience so that the people</p>
                            </div>
                            <div className="col-lg-3 col-md-12 f-services">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a href="/">Fat Burn</a></li>
                                    <li><a href="/">Streching</a></li>
                                    <li><a href="/">Weight Loss</a></li>
                                    <li><a href="/">Self Defense</a></li>
                                    <li><a href="/">Body Building</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 f-contact">
                                <h4>Contact Us</h4>
                                <p>4517 Washington Ave. Man
                                    chester, Kentucky 39495</p>
                                <h5>Follow on Socials</h5>
                                <ul className="social">
                                    <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="/"><i className="fab fa-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <ul className="f-menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="pricing-plan.html">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}
export default Footer;