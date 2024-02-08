import React from "react";
import profile from '../images/profile.png';


export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6" id="responsiveOrder1">
                        <h4 style={{ color: '#5be9b9' }}>━━ Hello!</h4>
                        <h1 className="text-white">I’m Pratik Samarth</h1>
                        <div id="content">
                            <p className="mt-2">Fullstack Developer</p>
                            <p className="mt-1">I'm Pratik Samarth, a dedicated Software Development Engineer, fueled by a fervent passion for full-stack development. Committed to better and continuous growth, I thrive as a self-learner in the ever-evolving world of technology.</p>
                        </div>
                        <a href="Pratik Samarth.pdf" download={"Pratik Samarth.pdf"}><button type="button" className="btn fw-semiBold text-white mt-4 homeBtn">Hire Me</button></a>
                    </div>
                    <div className="col-lg-6 text-lg-end text-md-center text-sm-center text-center mt-sm-5 mt-lg-0 mt-md-5">
                        <img src={profile} className="responsiveImage1" width={415} height={420} alt="..." style={{ borderRadius: "1000px" }} />
                    </div>
                </div>
                {/* <h2 className="text-center d-none d-lg-block d-xl-block d-xxl-block"><i className="bi bi-mouse active-mouse"></i></h2> */}
            </div >
        </>
    )
}

