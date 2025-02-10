import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [scrollThreshold, setScrollThreshold] = useState(0);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);

            if (currentScrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            setScrollThreshold(window.innerHeight / 7);

            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <motion.nav
            className={`navbar navbar-expand-lg sticky-top ${scrolled ? 'scrolled' : ''}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ pointerEvents: showHeader ? 'auto' : 'none' }}
        >
            <motion.div
                className="container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
            >
                <a className="navbar-brand fs-2" style={{ color: '#ccd6f6' }} href="#">
                    <span style={{ color: '#64ffda' }}>P</span>ratik <span style={{ color: '#64ffda' }}>S</span>amarth
                </a>
                <motion.button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span role="button">
                        <i className="bi bi-list fs-1" aria-hidden="true" style={{ color: isOpen ? '#64ffda' : 'white' }}></i>
                    </span>
                </motion.button>
                <div className="collapse navbar-collapse d-lg-flex flex-row justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item small">
                            <a className="nav-link" href="#about">
                                <span id="secondFontFamily">01. </span>About
                            </a>
                        </li>
                        <li className="nav-item ms-lg-3 small">
                            <a className="nav-link" href="#skills">
                                <span id="secondFontFamily">02. </span>Skills
                            </a>
                        </li>
                        <li className="nav-item ms-lg-3 small">
                            <a className="nav-link" href="#experience">
                                <span id="secondFontFamily">03. </span>Experience
                            </a>
                        </li>
                        <li className="nav-item ms-lg-3 small">
                            <a className="nav-link" href="#project">
                                <span id="secondFontFamily">04. </span>Work
                            </a>
                        </li>
                        <li className="nav-item ms-lg-3 small" id="switchLi">
                            <a className="nav-link" href="https://pratiksamarthprojects.vercel.app/">
                                <span id="secondFontFamily">05. </span>Switch to Version 2
                            </a>
                        </li>
                        <li className="nav-item ms-lg-4 navButtonBottom">
                            <a href="#contact" className="text-decoration-none" style={{ color: '#64ffda' }}>
                                <button type="button" className="btn homeBtn2 small">Say Hello</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.nav>
    );
}
