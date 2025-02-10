import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SlSocialBehance } from "react-icons/sl";


export default function Footer() {

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

    const [isPending, setIsPending] = useState(false);
    const form = useRef();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    useEffect(() => {
        if (isPending) {
            document.title = "Sending...";
        } else {
            document.title = "Pratik Samarth";
        }
    }, [isPending]);


    const sendEmail = (e) => {
        var success = document.getElementById("success");
        e.preventDefault();
        setIsPending(true);
        emailjs.sendForm('service_x3a1w4v', 'template_2jksl4l', form.current, 'j-OEvWU-o-jF8HUHt')
            .then((result) => {
                e.target.reset();
                success.style.display = "block";
                setIsPending(false);
                checkForm();
            }, (error) => {
                console.log(error);
                setIsPending(false);
            });

        setTimeout(() => {
            success.style.display = "none";
        }, 7000)
    }

    function checkForm(e) {
        var nameValue = document.getElementById('user_name').value.trim();
        var emailValue = document.getElementById('user_email').value.trim();
        var messageValue = document.getElementById('message').value.trim();

        var submitButton = document.getElementById('formButton');

        if (nameValue !== '' && emailValue !== '' && messageValue !== '' && !isPending) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }

    return (
        <div className="container">
            {isPending && (
                <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            )}

            <motion.div
                className="row FooterSection"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6">
                    <div id="edit">
                        <h4>Living, learning, & leveling up</h4>
                        <h4>one day at a time.</h4>
                    </div>
                    <div className="footer">
                        <p><i className="bi bi-globe-americas"></i>Planet Earth 🌎</p>
                        <p><i className="bi bi-envelope"></i>pratiksamarth29@gmail.com</p>
                        <div className='d-lg-none d-xl-none d-xxl-block mb-xl-3'>
                            <a className="fs-5 me-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><FiGithub /></a>
                            <a className="fs-5 me-4 text-none" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank" rel="noreferrer">< FiLinkedin /></a>
                            <a className="fs-5 me-4" href="https://www.behance.net/pratiksamarth" target="_blank" rel="noreferrer"><SlSocialBehance /></a>
                            <a className="fs-5 me-4" href="https://www.instagram.com/rn_samarth/?next=%2F" target="_blank" rel="noreferrer"><FaInstagram /></a>
                            <a className="fs-5 me-4" href="https://twitter.com/PratikSamarth" target="_blank" rel="noreferrer"><FaXTwitter /></a>
                        </div>
                        <p className='d-lg-block d-none'>Interested in working together?  <br />We should queue up a time to chat. I’ll buy the coffee.</p>
                    </div>
                </motion.div>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="col-lg-6 mt-sm-5 mt-lg-0 responsiveFooter" id='form'>
                    <h4 style={{ color: '#64ffda' }}>━━ Contact me</h4>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <input type="text" name="user_name" className="form-control text-white" id="user_name" aria-describedby="emailHelp" placeholder="your full name" style={{ backgroundColor: "#112240" }} onInput={checkForm} />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="user_email" className="form-control text-white" id="user_email" placeholder="your email" style={{ backgroundColor: "#112240" }} onInput={checkForm} />
                        </div>
                        <div className="mb-3">
                            <textarea name="message" className="form-control text-white" placeholder="your message" id="message" style={{ height: "100px", backgroundColor: "#112240" }} onInput={checkForm} ></textarea>
                        </div>
                        <div className="d-grid">
                            <button id='formButton' type="submit" value="Send" className="btn text-white" disabled>Send Message</button>
                        </div>
                        <div className='fw-bold text-center mt-2' id="success">Your message sent successfully!</div>
                    </form>
                </motion.div>
            </motion.div>
            <div className="row mb-2 mt-5">
                <div className="col-md-6" id="version2">
                    <a href="https://pratiksamarthprojects.vercel.app/" target="_blank" className="text-decoration-none" style={{ color: '#64ffda' }}>
                        <button type="button" className="btn homeBtn4 small">Switch to Version 2</button>
                    </a>
                </div>
                <div className="col-md-6" id="cpyright">
                    <p>© Copyright {new Date().getFullYear()} - Designed and built by Pratik Samarth.</p>
                </div>
            </div>
        </div>
    )
}
