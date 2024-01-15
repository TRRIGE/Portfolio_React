import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-1 sticky-top">
                <div className="container">
                    <a className="navbar-brand text-white fs-2" href="#"><img src={logo} height={80} width={70} alt="logo" /><span style={{ color: '#03b672' }}>P</span>ratik <span style={{ color: '#03b672' }}>S</span>amarth</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ms-lg-5">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item ms-lg-5">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item ms-lg-5">
                                <a className="nav-link" href="#project">Projects</a>
                            </li>
                        </ul>
                        <div className="d-flex" id="icons">
                            <a className="text-white me-3" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            <a className="text-white me-3" href="https://github.com/TRRIGE" target="_blank"><i className="bi bi-github"></i></a>
                            <a className="text-white me-3" href="https://twitter.com/PratikSamarth" target="_blank"><i className="bi bi-twitter-x"></i></a>
                            <a className="text-white" href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


