import React from "react"
import logo from '../images/logo.png';

export default function Footer() {
    return (
        <>
            <div className="container">
            <div className="row section" id="contact">
                    <div className="col">
                        <h4 style={{ color: '#03b672' }} id="edit"> - Contact with me!</h4>
                        <div className="footer">
                            <img src={logo} height={110} width={110} alt="logo" />
                            <p><i className="bi bi-globe-americas"></i> Planet Earth</p>
                            <p><i className="bi bi-telephone"></i>+91 9359062282</p>
                            <p><i className="bi bi-envelope"></i>pratiksamarth29@gmail.com</p>
                            <div className="mt-4" id="icons">
                                <a className="text-white fs-5 me-4" href="https://www.linkedin.com/in/pratik-samarth-ps/"><i className="bi bi-linkedin"></i></a>
                                <a className="text-white fs-5 me-4" href="https://github.com/TRRIGE"><i className="bi bi-github"></i></a>
                                <a className="text-white fs-5 me-4" href="https://twitter.com/PratikSamarth"><i className="bi bi-twitter-x"></i></a>
                                <a className="text-white fs-5 " href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 mt-sm-3" id="contacts">
                    <div className="col">
                        <h6 className="d-flex justify-content-lg-end justify-content-sm-center">© Copyright 2024 - Developed by Pratik Samarth. All right reserved.</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
