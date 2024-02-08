import React from 'react'

export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand text-white fs-2" href="#"><span style={{ color: '#5be9b9' }}>P</span>ratik <span style={{ color: '#5be9b9' }}>S</span>amarth</a>
                    <button className="navbar-toggler" style={{ color: "transparent", borderColor: "transparent" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span role="button" ><i className="bi bi-list fs-2" aria-hidden="true" style={{ color: "white" }}></i></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex flex-row justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <a className="nav-link" href="#project">Work</a>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <a className="nav-link" href="#contact">Say Hello</a>
                            </li>
                        </ul>
                        <div className='d-flex flex-row items-end gap-3 topIcons'>
                            <a className="ms-2 fw-bold d-none d-lg-block d-xl-block d-xxl-block" style={{ color: "#808dad" }}>|</a>
                            <a className="text-white d-none d-lg-block d-xl-block d-xxl-block" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                            <a className="text-white d-none d-lg-block d-xl-block d-xxl-block" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                            <a className="text-white d-none d-lg-block d-xl-block d-xxl-block" href="https://twitter.com/PratikSamarth" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
                            <a className="text-white d-none d-lg-block d-xl-block d-xxl-block" href="https://www.instagram.com/rn_samarth/?next=%2F" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


