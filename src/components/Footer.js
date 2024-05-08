import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

export default function Footer() {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    const [isPending, setIsPending] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        var success = document.getElementById("success");
        e.preventDefault();
        setIsPending(true);
        emailjs.sendForm('service_x3a1w4v', 'template_2jksl4l', form.current, 'j-OEvWU-o-jF8HUHt')
            .then((result) => {
                e.target.reset();
                success.style.display = "block";
                setIsPending(false);
            }, (error) => {
                console.log(error);
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

        if (nameValue !== '' && emailValue !== '' && messageValue !== '') {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }

    return (
        <div className="container">
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
                        <div className='d-lg-none d-xl-block d-xxl-block mb-xl-3'>
                            <a className="fs-6 me-4 text-none" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                            <a className="fs-6 me-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github" ></i></a>
                            <a className="fs-6 me-4" href="https://twitter.com/PratikSamarth" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
                            <a className="fs-6 me-4" href="https://www.instagram.com/rn_samarth/?next=%2F" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <a className="fs-6" href="https://dribbble.com/Pratik_Samarth/about" target="_blank" rel="noreferrer"><i className="bi bi-dribbble"></i></a>
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
                        <div className='fw-bold text-center mt-2' id="success">Your message sent succesfully!</div>
                        {isPending && <div className='fw-bold text-center mt-2' style={{ color: "#64ffda", animation: "3s linear" }}>Message Sending...</div>}
                    </form>
                </motion.div>
            </motion.div>
            <div className="row mb-2 mt-5">
                <div className="col text-center">
                    <p>© Copyright {new Date().getFullYear()} - Designed and built by Pratik Samarth.</p>
                </div>
            </div>
        </div >
    )
}
