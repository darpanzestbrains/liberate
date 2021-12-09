import * as React from "react";
import Footer from "../Footer/Footer";
import GuestHeader from "../Header/GuestHeader";
import contact_banner from '../../assets/images/contact-banner.jpg';
import gym_body_build from '../../assets/images/gym-bodybuilding.png';

const Faq = (props) => {
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
                                    <h1>Frequently Ask Question</h1>
                                    <p>Fitness is not a destination it is a way of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="faq-section">
                    <div className="container">
                        <div className="row">
                            <div className="faq-content">
                                <div className="cont-title">
                                    <span>STARTING AT THE GYM: AN FAQ GUIDE FOR BEGINNERS</span>
                                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                                </div>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse">How to Raise over all fitness level?
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading2">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">How can we get natural way to health?
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading3">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">What if i am do for body strength?
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading4">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">Can i get a special trainer for bodybuilding?
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading5">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">When an i charged for the Service?
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-content-sect faq-contact">
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
                                <div className="faq-image">
                                    <img src={gym_body_build} alt="" />
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
export default Faq;