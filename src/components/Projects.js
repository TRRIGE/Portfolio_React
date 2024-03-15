import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
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
            <motion.div
                className="row section"
                id="project"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}
            >
                <h6><span id="secondFontFamily2">04. </span><span className='fs-4' style={{ color: '#ccd6f6' }}>Projects </span><span id="rowStyleProjects"></span></h6>
                <p id="edit">My recent work</p>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">HealthChat</h5>
                                <span>
                                    <a className="fs-5 me-3" style={{ color: '#ccd6f6' }} href="https://github.com/TRRIGE/HealthChat" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://healthchat-3pvr.onrender.com/" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                                </span>
                            </div>
                            <p className="card-text">The Health Care Chat Bot Project, powered by artificial intelligence, seeks to elevate healthcare accessibility.</p>
                            <p className="projectSkills">Python Flask MySQL JS</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">NewsHunt</h5>
                                <span>
                                    <a className="fs-5 me-3" style={{ color: '#ccd6f6' }} href="https://github.com/TRRIGE/NewsHunt_React" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://newshunt-uebc.onrender.com/" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                                </span>
                            </div>
                            <p className="card-text">NewsHunt is a professional React based Web Application! Where you get all the daily insights of all categories.</p>
                            <p className="projectSkills">React.js API BootStrap JS</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">TextManipulator</h5>
                                <span>
                                    <a className="fs-5 me-3" style={{ color: '#ccd6f6' }} href="https://github.com/TRRIGE/TextManipulator_React" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://textmanipulator.onrender.com/" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                                </span>
                            </div>
                            <p className="card-text">TextManipulator is a versatile utility designed for the purpose of text manipulation for all practical text needs.</p>
                            <p className="projectSkills">React.js JS BootStrap CSS</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">StockManager</h5>
                                <span>
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://github.com/TRRIGE/StockManager_Next" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                </span>
                            </div>
                            <p className="card-text">Build a thorough Stock Management System, ensuring streamlined tracking and organization of inventory data.</p>
                            <p className="projectSkills">Next.js Tailwind API MongoDB</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">Remainder</h5>
                                <span>
                                    <a className="fs-5" style={{ color: '#ccd6f6' }} href="https://github.com/TRRIGE/Remainder_Next" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                </span>
                            </div>
                            <p className="card-text">Remainder Web Application, solution designed to streamline and enhance your daily work management.</p>
                            <p className="projectSkills" id="contact">Next.js Tailwind CSS MongoDB</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects