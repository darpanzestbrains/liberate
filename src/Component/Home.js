import * as React from "react";

import Footer from "./Footer/Footer";
import GuestHeader from "./Header/GuestHeader";
const Home = (props) => {
    return (
        <>

            {/* <Link to="/about">About</Link> */}
            {/* HEADER [ with responisve ]  */}
            <GuestHeader />
            {/* MAIN SECTIONS */}
            <main>
                <section id="liberate-cont">
                    <div className="container">
                        <div className="row">
                            <div className="libe-content">
                                <div className="col-lg-6 col-md-12">
                                    <h1>Liberate </h1>
                                    <p>Habit changing weight loss programme backed by science. No calorie counting. No Yo-Yo
                                        diets. No boring foods. Try the new way to lose weight and keep it off for good.</p>
                                    <a href="/">Start Liberate Free</a>
                                    <span>* First week free - No Credit card needed</span>
                                </div>
                                <div className="col-lg-6 col-md-12"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* FOOTER  */}
            <Footer />

        </>

    );
}
export default Home;