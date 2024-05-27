import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
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
                <p id="edit">Prior employment</p>
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
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://innosewa.com/" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
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
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://transcendental-technologies.com/" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
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