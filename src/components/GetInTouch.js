import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetInTouch = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 768) {
                setThreshold(0.1);
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
            <motion.div className="row section text-center"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}
            >
                <h6 id="secondFontFamily2">05. What’s Next?</h6>
                <p className="display-5" style={{ color: '#ccd6f6', fontWeight: 800 }}>Get In Touch</p>
                <div className="col-9 mx-auto">
                    <p id="content">I am actively exploring new opportunities and welcome any inquiries or connections. My inbox is open, so feel free to reach out if you have any questions, potential collaborations, or just want to say hello. I’ll try my best to get back to you!</p>
                    <a href="mailto:pratiksamarth29@gmail.com" className="text-decoration-none" style={{ color: '#64ffda' }}><button type="button" className="btn mt-4 homeBtn3">Let’s Connect</button></a>
                </div>
            </motion.div>
        </div>
    )
}

export default GetInTouch