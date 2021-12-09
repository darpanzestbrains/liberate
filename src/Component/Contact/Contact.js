import * as React from "react";
import Footer from "../Footer/Footer";
import GuestHeader from "../Header/GuestHeader";
import contact_banner from '../../assets/images/contact-banner.jpg';


const Contact = (props) => {
    return (
        <>
            <GuestHeader />
            <main className="contact">
                <section className="inner-baner">
                    <img className="contact-banner-img" src={contact_banner} alt="" />
                    <div className="banner-cont-main">
                        <div className="container">
                            <div className="row">
                                <div className="inner-baner-cont">
                                    <h1>Contact Us</h1>
                                    <p>Fitness is not a destination it is a way of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-content-sect">
                    <div className="container">
                        <div className="row">
                            <div className="contact-main-cont">
                                <div className="contact-form">
                                    <span>CONTACT US</span>
                                    <h2>NEED ANY HELP? FEEL
                                        FREE TO CONTACT US.</h2>
                                    <div className="c-form">
                                        <form action="">
                                            <div className="form-group">
                                                <div className="form-box">
                                                    <input type="text" placeholder="Alex Marcus" />
                                                    <i className="far fa-user"></i>
                                                </div>
                                                <div className="form-box">
                                                    <input type="text" placeholder="Email" />
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-box">
                                                    <input type="phone" placeholder="Phone" />
                                                    <i className="fas fa-phone-alt"></i>
                                                </div>
                                                <div className="form-box">
                                                    <input type="text" placeholder="Subject" />
                                                    <i className="far fa-file-alt"></i>
                                                </div>
                                            </div>
                                            <div className="form-group massage">
                                                <div className="form-box">
                                                    <textarea name="" id="" placeholder="massage"></textarea>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </div>
                                            </div>
                                            <div className="form-group action">
                                                <button className="green-btn">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1613699.7843564304!2d-86.88930600541381!3d37.81915125493143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4517%20Washington%20Ave.%20Man%20chester%2C%20Kentucky!5e0!3m2!1sen!2sin!4v1629462512841!5m2!1sen!2sin"
                                        width="600" height="450" title="maps" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
}
export default Contact;