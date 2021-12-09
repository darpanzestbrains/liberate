import * as React from "react";
import logo from '../../assets/images/logo.png';

const GuestHeader = (props) => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <a className="logo" href="/"><img src={logo} alt="" /></a>
                            <span className="mobile-menu-icon"><i className="fas fa-align-right"></i></span>
                            <nav className="menu">
                                <ul>
                                    <li><a className="active" href="/">Home</a></li>
                                    <li><a href="/contact">Contact us</a></li>
                                    <li><a href="/faq">Faq</a></li>
                                    <li><a href="/pricing-plan">Pricing Plan</a></li>
                                    <li className="signin"><a href="/signin">Sign in</a></li>
                                    <li className="start-free"><a href="/">Start Liberate free</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}
export default GuestHeader;