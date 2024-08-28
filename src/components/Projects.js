import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 768) {
                setThreshold(0.1);
            } else if (window.innerWidth < 992) {
                setThreshold(0.2);
            } else {
                setThreshold(0.15);
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
            <motion.div
                className="row section"
                id="project"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}
            >
                <h6><span id="secondFontFamily2">04. </span><span className='fs-4 icon-link'>Projects </span><span id="rowStyleProjects"></span></h6>
                <p id="edit">My recent work</p>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 icon-link col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">HealthChat</h5>
                                <span>
                                    <a className="fs-5 icon-link me-3" href="https://github.com/TRRIGE/HealthChat" target="_blank" rel="noreferrer"><FiGithub /></a>
                                    <a className="fs-4 icon-link" href="https://healthchat-3pvr.onrender.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text">The Health Care Chat Bot Project, powered by artificial intelligence, seeks to elevate healthcare accessibility.</p>
                            <p className="projectSkills">Python Flask MySQL JS</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 icon-link col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">PerceptInfo</h5>
                                <span>
                                    <a className="fs-5 icon-link me-3" href="https://github.com/TRRIGE/PerceptInfo_Next" target="_blank" rel="noreferrer"><FiGithub /></a>
                                    <a className="fs-4 icon-link" href="https://perceptinfosystem-vert.vercel.app/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text">Percept Infosystems, an Next.js driven website for  seamless gateway to cutting-edge solutions.</p>
                            <p className="projectSkills">Next.js Bootstrap JS Taiwind</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 icon-link col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">ClientWebApp</h5>
                                <span>
                                    <a className="fs-5 icon-link me-3" href="https://github.com/TRRIGE/Client_webapp" target="_blank" rel="noreferrer"><FiGithub /></a>
                                    <a className="fs-4 icon-link" href="https://rutujakothekar.netlify.app" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                                </span>
                            </div>
                            <p className="card-text">A comprehensive personal portfolio reflecting client's unique skills, achievements, & professional journey.</p>
                            <p className="projectSkills">Next.js Bootstrap JS Taiwind</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 icon-link col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">ChatTalk</h5>
                                <span>
                                    <a className="fs-5 icon-link" href="https://github.com/TRRIGE/ChatTalk" target="_blank" rel="noreferrer"><FiGithub /></a>
                                </span>
                            </div>
                            <p className="card-text">ChatTalk is an AI conversational agent using OpenAI technology to simulate human-like interactions.</p>
                            <p className="projectSkills">React.js Express Node MongoDB</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 icon-link col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">TextManipulator</h5>
                                <span>
                                    <a className="fs-5 icon-link me-3" href="https://github.com/TRRIGE/TextManipulator_React" target="_blank" rel="noreferrer"><FiGithub /></a>
                                    <a className="fs-4 icon-link" href="https://textmanipulator.onrender.com/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
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
                    className="col-lg-4 icon-link col-md-6">
                    <div className="card card-project">
                        <div className="card-body">
                            <div className='d-flex justify-content-between mb-3'>
                                <h5 className="card-title">StockManager</h5>
                                <span>
                                    <a className="fs-5 icon-link" href="https://github.com/TRRIGE/StockManager_Next" target="_blank" rel="noreferrer"><FiGithub /></a>
                                </span>
                            </div>
                            <p className="card-text">Build a thorough Stock Management System, ensuring streamlined tracking and organization of inventory data.</p>
                            <p className="projectSkills" id="contact">Next.js Tailwind Node MongoDB</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects