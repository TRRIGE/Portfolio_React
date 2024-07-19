import React from "react";
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="container">
            <motion.div className="row mt-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
                <div className="col" id="responsiveOrder1">
                    <p style={{ color: '#64ffda', fontFamily: 'Oxygen Mono' }}>Hi, my name is</p>
                    <p className="display-3" style={{ color: '#ccd6f6', fontWeight: 850 }}>Pratik Samarth.</p>
                    <div id="content">
                        <p className="mt-2 display-3" style={{ color: '#8892b0', fontWeight: 850 }}>I build things for the web.</p>
                        <p className="mt-4 d-none d-lg-block">A dedicated Software Development Engineer, driven by a fervent passion <br />and specialization in full-stack development. I excel as a self-learner in the  <br />dynamic and ever-evolving realm of technology.</p>
                        <p className="mt-4 d-lg-none">A dedicated Software Development Engineer, driven by a fervent passion and specialization in full-stack development. I excel as a self-learner in the dynamic and ever-evolving realm of technology.</p>
                    </div>
                    <a href="Pratik_Samarth.pdf" className="text-decoration-none" target="_blank" style={{ color: '#64ffda' }} ><button type="button" className="btn homeBtn">Hire Me !</button></a>
                </div>
            </motion.div>
        </div >
    )
}

