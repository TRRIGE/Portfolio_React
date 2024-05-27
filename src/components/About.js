import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../assets/profile.png';

const About = () => {
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
                    <div className="pe-1 pb-1 profileImageContainer">
                        <img src={profile} className="responsiveImage1" width={300} height={300} alt="..." />
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-8" id="responsiveImage2">
                    <h4 id="textTop">Software Development Engineer</h4>
                    <div id="content">
                        <p style={{ color: '#ccd6f6' }}>Fullstack Developer</p>
                        <p className="mt-4">Aspiring software Developer with a fervent interest in Full Stack Web Development, I enjoy working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.</p>
                        <p>I experiment with the web as a creative medium. This here portfolio changes each year in pursuit of learning and using web technology in unexpected ways.</p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className='d-flex recentTech'>
                            <div>
                                <li><span className='ms-2'>JS(ES6)</span></li>
                                <li><span className='ms-2'>Node.js</span></li>
                                <li><span className='ms-2'>Devops</span></li>
                            </div>
                            <div id='techDiv'>
                                <li><span className='ms-2'>TypeScript</span></li>
                                <li><span className='ms-2'>React</span></li>
                                <li><span className='ms-2'>Firebase</span></li>
                            </div>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About