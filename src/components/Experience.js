import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const Experience = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 768) {
                setThreshold(0.2);
            } else if (window.innerWidth < 992) {
                setThreshold(0.2);
            } else {
                setThreshold(0.27);
            }
        };

        updateThreshold();

        window.addEventListener('resize', updateThreshold);

        return () => {
            window.removeEventListener('resize', updateThreshold);
        };
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: threshold,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then(bootstrap => {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl, {
                    animation: true,
                    customClass: 'custom-tooltip'
                });
            });
        });
    }, []);

    return (
        <div className='container'>
            <motion.div className="row expSection"
                id="experience"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}>
                <h6><span id="secondFontFamily2">03. </span><span className='fs-4' style={{ color: '#ccd6f6' }}>Experience </span><span id="rowStyleExperience"></span></h6>
                <p id="edit">Where I’ve Worked</p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6 mb-4">
                    <div id="content_small">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-title" style={{ color: '#ccd6f6' }}>Vaspp</h4>
                                <span>
                                    <a className="fs-4 icon-link me-3 customtooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="August 2024 - Present"><HiOutlineCalendarDays /></a>
                                    <a className="fs-4 icon-link" href="https://www.vaspp.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text" style={{ color: '#64ffda' }}>Associate Software Developer</p>
                            <p className="card-text" style={{ fontSize: "15px" }}>Developing and enhancing innovative web applications to meet and exceed client specifications, ensuring robust production builds.</p>
                            <p style={{ fontSize: "15px" }}>Ensuring seamless functionality and integration of web applications while maintaining high standards for production-ready solutions.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6 mb-3">
                    <div id="content_small">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-title" style={{ color: '#ccd6f6' }}>Transcendental Tech</h4>
                                <span>
                                    <a className="fs-4 icon-link me-3 customtooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="June 2024 - July 2024"><HiOutlineCalendarDays /></a>
                                    <a className="fs-4 icon-link" href="https://transcendental-technologies.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text" style={{ color: '#64ffda' }}>Full Stack Development Intern</p>
                            <p className="card-text" style={{ fontSize: "15px" }}>Working for designing and meticulously enhancing innovative web applications to meet and exceed project specifications.</p>
                            <p style={{ fontSize: "15px" }}>Contributing to both front-end and back-end development, ensuring integration and functionality of web applications.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6 mb-md-5 mb-sm-5" id="responsiveContent">
                    <div id="content_small">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-title" style={{ color: '#ccd6f6' }}>InnoSewa Pvt. Ltd</h4>
                                <span>
                                    <a className="fs-4 icon-link me-3 customtooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Nov 2023 - April 2024"><HiOutlineCalendarDays /></a>
                                    <a className="fs-4 icon-link" href="https://innosewa.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text" style={{ color: '#64ffda' }}>Software and Business Development Intern</p>
                            <p className="card-text" style={{ fontSize: "15px" }}>My responsibility was to tailor projects to meet client needs with precision, ensuring excellence in execution and expectations.</p>
                            <p style={{ fontSize: "15px" }}>Building web application blueprints and structures tailored to client needs, ensuring a precise alignment with their requirements.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Experience;
