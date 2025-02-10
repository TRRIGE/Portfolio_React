import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../assets/profile.png';

const About = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 768) {
                setThreshold(0.24);
            } else if (window.innerWidth < 992) {
                setThreshold(0.2);
            } else {
                setThreshold(0.3);
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
                id="about"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}
            >
                <h6><span id="secondFontFamily2">01. </span><span className='fs-4' style={{ color: '#ccd6f6' }}>About Me </span><span id="rowStyleAbout"></span></h6>
                <p id="edit">Let's find more about me</p>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-4 text-md-center text-sm-center text-lg-start text-center">
                    <div className="pe-1 pb-1">
                        <img src={profile} className="responsiveImage1 button-glow" width={300} height={300} alt="..." />
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-8" id="responsiveImage2">
                    <h4 id="textTop">Software Development Engineer</h4>
                    <div id="content">
                        <p style={{ color: '#ccd6f6' }}>Fullstack Developer & DevOps Engineer</p>
                        <p className="mt-4">Aspiring Software Developer with a fervent interest in Full Stack Web Development and DevOps, I enjoy working on the web and ensuring it remains a space for everyone to explore their creative, personal, and unique passions.</p>
                        <p>Experimenting the web as a creative medium, and my portfolio evolves each year as I explore and apply web technologies in innovative ways.</p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className='d-flex recentTech'>
                            <div>
                                <li><span className='ms-2'>AWS</span></li>
                                <li><span className='ms-2'>Node.js</span></li>
                                <li><span className='ms-2'>Kubernetes</span></li>
                            </div>
                            <div id='techDiv'>
                                <li><span className='ms-2'>TypeScript</span></li>
                                <li><span className='ms-2'>Next</span></li>
                                <li><span className='ms-2'>Devops</span></li>
                            </div>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About