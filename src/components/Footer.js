import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {

    const form = useRef();

    const sendEmail = (e) => {
        var success = document.getElementById("success");
        e.preventDefault();

        emailjs.sendForm('service_x3a1w4v', 'template_2jksl4l', form.current, 'j-OEvWU-o-jF8HUHt')
            .then((result) => {
                e.target.reset();
                success.style.display = "block";
            }, (error) => {
                console.log(error);
            });

            setTimeout(() => {
             success.style.display = "none";
            },7000)
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
        <>
            <div className="container">
                <div className="row section" id="contact">
                    <div className="col-lg-6">
                        <h4 id="edit">Connect with me!</h4>
                        <div className="footer">
                            <p><i className="bi bi-globe-americas"></i>Planet Earth 🌎</p>
                            <p><i className="bi bi-envelope"></i><a href="mailto:pratiksamarth29@gmail.com" style={{textDecoration:"none",color:"#808dad",fontSize:"16px"}}>pratiksamarth29@gmail.com</a></p>
                            <div>
                                <a className="fs-5 me-4 text-none" href="https://www.linkedin.com/in/pratik-samarth-ps/"><i className="bi bi-linkedin" style={{fontSize:"16px"}}></i></a>
                                <a className="fs-5 me-4" href="https://github.com/TRRIGE"><i className="bi bi-github"  style={{fontSize:"16px"}}></i></a>
                                <a className="fs-5 me-4" href="https://twitter.com/PratikSamarth"><i className="bi bi-twitter-x" style={{fontSize:"16px"}}></i></a>
                                <a className="fs-5" href="https://www.instagram.com/rn_samarth/?next=%2F"><i className="bi bi-instagram" style={{fontSize:"16px"}}></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-sm-5 mt-lg-0 responsiveFooter" id='form'>
                        <h4 style={{ color: '#5be9b9' }}>━━ Contact me</h4>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <input type="text" name="user_name" className="form-control text-white" id="user_name" aria-describedby="emailHelp" placeholder="your full name" style={{ backgroundColor: "#171f38" }} onInput={checkForm} />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="user_email" className="form-control text-white" id="user_email" placeholder="your email" style={{ backgroundColor: "#171f38" }} onInput={checkForm} />
                            </div>
                            <div className="mb-3">
                                <textarea name="message" className="form-control text-white" placeholder="your message" id="message" style={{ height: "100px", backgroundColor: "#171f38" }} onInput={checkForm} ></textarea>
                            </div>
                            <div className="d-grid">
                                <button id='formButton' type="submit" value="Send" className="btn text-white" style={{ borderColor: '#374C89'}} disabled>Send Message</button>
                            </div>
                            <div className='fw-bold text-center mt-2 lead' id="success">Your message sent succesfully!</div>
                        </form>
                    </div>
                </div>
                <div className="row mb-3 mt-5" id="contacts">
                    <div className="col">
                        <h6 className="d-flex justify-content-lg-start justify-content-sm-center">© Copyright 2024 - Developed by Pratik Samarth. All right reserved.</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
