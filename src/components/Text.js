import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextImage from '../assets/text.png'

const Text = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 768) {
                setThreshold(0.1);
            } else if (window.innerWidth < 992) {
                setThreshold(0.2);
            } else {
                setThreshold(0.5);
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
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}
                className='row'>
                <div className="col text-center">
                    <img src={TextImage} height={300} width={570} alt='...' id="text-image" />
                </div>
            </motion.div>
        </div>
    )
}

export default Text