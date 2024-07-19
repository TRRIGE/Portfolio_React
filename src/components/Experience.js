import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from "react-icons/fi";


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
                setThreshold(0.38);
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

    return (
        <div className='container'>
            <motion.div className="row section"
                id="experience"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}>
                <h6><span id="secondFontFamily2">03. </span><span className='fs-4' style={{ color: '#ccd6f6' }}>Experience </span><span id="rowStyleExperience"></span></h6>
                <p id="edit">Where I’ve Worked</p>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6 mb-md-5 mb-sm-5" id="responsiveContent">
                    <div id="content_small">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-title" style={{ color: '#ccd6f6' }}>InnoSewa Pvt. Ltd.</h4>
                                <span>
                                    <a className="fs-4 icon-link" href="https://innosewa.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text" style={{ color: '#64ffda' }}>Software and Business Development Intern</p>
                            <p className="card-text">My responsibility was to tailor projects to meet client needs with precision, ensuring excellence in execution and expectations.</p>
                            <p>Building web application blueprints and structures tailored to client needs, ensuring a precise alignment with their requirements.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6">
                    <div id="content_small">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-title" style={{ color: '#ccd6f6' }}>Transcendental Technologies.</h4>
                                <span>
                                    <a className="fs-4 icon-link" href="https://transcendental-technologies.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text" style={{ color: '#64ffda' }}>Full Stack Development Intern</p>
                            <p className="card-text">Working for designing and meticulously enhancing innovative web applications to meet and exceed various client project specifications.</p>
                            <p>Contributing to both front-end and back-end development, ensuring seamless integration and functionality of web applications.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Experience