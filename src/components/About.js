import React from 'react'
import about from '../images/about.png';

const About = () => {
    return (
        <div className="row section" id="about">
            <h4 style={{ color: '#5be9b9' }}>━━ About</h4>
            <p className="lead" id="edit">Let's find more about me</p>
            <div className="col-lg-6 text-md-center text-sm-center text-lg-start text-center">
                <img src={about} className="responsiveImage2" width={390} height={380} alt="..." />
            </div>
            <div className="col-lg-6" id="responsiveImage2">
                <h2 className="text-white" id="textTop">Software Development Engineer</h2>
                <div id="content">
                    <p className="">Fullstack Developer</p>
                    <p className="mt-4">Aspiring software Developer with a fervent interest in Full Stack Web Development, I enjoy working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.</p>

                    <p>I experiment with the web as a creative medium. This here portfolio changes each year in pursuit of learning and using web technology in unexpected ways.</p>
                </div>
                <div className="mt-3 abouIcons">
                    <a className="text-white me-4 fs-5" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a className="text-white me-4 fs-5" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    <a className="text-white me-4" href="https://www.instagram.com/rn_samarth/?next=%2F" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <a className="text-white fs-5" href="https://twitter.com/PratikSamarth" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About