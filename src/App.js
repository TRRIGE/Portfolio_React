import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Text from './components/Text';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import GetInTouch from './components/GetInTouch';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function App() {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  }, [])

  return (
    <>
      {loading ?
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#020C1B' }}>
          <ClimbingBoxLoader
            color={"#64ffda"}
            loading={loading}
            size={window.innerWidth > 576 ? 15 : 10}
          />
          <motion.div style={{ color: '#64ffda', fontfamily: "Oxygen Mono", letterSpacing: '3.5px', wordSpacing: '5px' }} ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.9 }}
            id='loaderText'
          >Code Develope Vibe</motion.div>
        </div>
        :
        <>
          <Header />
          <div className="container">
            <motion.div
              id="verticalTextLeft"
              className='d-lg-block d-xxl-none d-none'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}><span className="mirror-container">pratiksamarth29@gmail.com</span><span id='rowStyleAboutVerticalLeft'></span>
            </motion.div>
            <Hero />
            <About />
            <Text />
            <Skills />
            <Experience />
            <Projects />
            <GetInTouch />
            <motion.div
              id="verticalTextRight1"
              className='d-lg-block d-xxl-none d-none'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <a className="mb-4 fs-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><FiGithub /></a>
              <a className="mb-4 fs-4" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
              <a className="mb-4 fs-4" href="https://www.instagram.com/rn_samarth/?next=%2F" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a className="mb-4 fs-4" href="https://dribbble.com/Pratik_Samarth/about" target="_blank" rel="noreferrer"><FaDribbble /></a>
              <a className="fs-4" style={{ marginBottom: '40px' }} href="https://twitter.com/PratikSamarth" target="_blank" rel="noreferrer"><FaXTwitter /></a>
            </motion.div>
            <motion.div
              id="verticalTextRight2"
              className='d-lg-block d-none d-xxl-none'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}>
              <span id='rowStyleAboutVerticalRight'></span>
            </motion.div>
            <Footer />
          </div>
        </>
      }
    </>
  );
}

export default App;
