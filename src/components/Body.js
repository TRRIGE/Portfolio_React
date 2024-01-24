import React from "react";
import about from '../images/about.png';
import profile from '../images/profile.png';
import project from '../images/project.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';


export default function Body() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6" id="responsiveOrder1">
                        <h4 style={{ color: '#03b672' }}>___ Hello</h4>
                        <h1>I’m Pratik Samarth</h1>
                        <div id="content">
                            <p className="mt-4">Full Stack Developer</p>
                            <p className="mt-4">I'm Pratik Samarth, a dedicated Software Development Engineer, fueled by a fervent passion for full-stack development. Committed to continuous growth, I thrive as a self-learner in the ever-evolving world of technology.</p>
                        </div>
                        <a href="Pratik Samarth.pdf" download={"Pratik Samarth.pdf"}><button type="button" className="btn text-white btn-lg mt-4 me-3 homeBtn" >Resume</button></a>
                        <a href="#contact"><button type="button" className="btn text-white btn-lg mt-4 homeBtn">Contact</button></a>
                    </div>
                    <div className="col-lg-6 text-lg-end text-md-center text-sm-center mt-sm-5 mt-lg-0 mt-md-5" id="responsiveOrder2">
                        <img src={profile} className="responsiveImage1" width={415} height={420} alt="..." style={{ borderRadius: "1000px" }} />
                    </div>
                </div>


                <div className="row section" id="about">
                    <h4 style={{ color: '#03b672' }}>____ About</h4>
                    <p className="lead" id="edit">Let's find more about me</p>
                    <div className="col-lg-6 text-md-center text-sm-center text-lg-start">
                        <img src={about} className="rounded responsiveImage2" width={440} height={420} alt="..." />
                    </div>
                    <div className="col-lg-6" id="responsiveImage2">
                        <h1 className="mt-4">Software Development Engineer</h1>
                        <div id="content">
                            <p className="mt-4">Full Stack Developer</p>
                            <p className="mt-4">Aspiring software Developer with a fervent interest in Full Stack Web Development, seeking opportunities to delve into Software Development Engineer roles.</p>
                        </div>
                        <div className="mt-4" id="icons">
                            <a className="text-white me-4 fs-5" href="https://www.linkedin.com/in/pratik-samarth-ps/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                            <a className="text-white me-4 fs-5" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                            <a className="text-white me-4 fs-5" href="https://twitter.com/PratikSamarth" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
                            <a className="text-white fs-5" href="https://www.instagram.com/rn_samarth/?next=%2F" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>


                <div className="row section" id="experience">
                    <h4 style={{ color: '#03b672' }}>____ Experience</h4>
                    <p className="lead" id="edit2">From where i get experience</p>
                    <div className="col-lg-6 mb-md-5 mb-sm-5" id="responsiveContent">
                        <div className="p-4" id="content_small">
                            <div className="card-body">
                                <h4 className="card-title"><i className="bi bi-buildings" style={{ color: '#03b672' }}></i> Code Crafters Community</h4>
                                <p className="card-text mt-1 text-white">Web Development Intern</p>
                                <p className="card-text mt-1">My responsibility was to develop and to make revisions of web applications and ensuring alignment with specified requirements</p>
                                <p>Developed an interactive Goal and Reminder web application, incorporating current functionalities for enhanced user experience.</p>
                                <h4 style={{ color: '#03b672' }}>Projects<a className="text-white fs-5 me-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github ms-3"></i></a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-4" id="content_small">
                            <div className="card-body">
                                <h4 className="card-title"><i className="bi bi-buildings" style={{ color: '#03b672' }}></i> InnoSewa Pvt. Ltd. Delhi</h4>
                                <p className="card-text mt-1 text-white">Software and Business Development Intern</p>
                                <p className="card-text mt-1">My responsibility was to tailor projects to meet client needs with precision, ensuring excellence in execution and expectations.</p>
                                <p>Building web application blueprints and structures tailored to client needs, ensuring a precise alignment with their requirements.</p>
                                <h4 style={{ color: '#03b672' }}>Projects<a className="text-white fs-5 me-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github ms-3"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row section" id="project">
                    <h4 style={{ color: '#03b672' }}>____ Projets</h4>
                    <p className="lead" id="edit2">Projects i worked on</p>
                    <div className="col-lg-4 col-md-6">
                        <div className="card" id="cards">
                            <img src={project1} width={60} height={200} className="rounded card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HealthChat<i className="bi bi-hammer ms-3"></i></h5>
                                <p className="card-text">The Health Care Chat Bot Project, powered by artificial intelligence, seeks to elevate healthcare accessibility.</p>
                                <a href="https://github.com/TRRIGE/NewsHunt_React" target="_blank" rel="noreferrer"><button type="button" className="btn text-white btn-md homeBtn2">GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card" id="cards">
                            <img src={project2} width={60} height={200} className="rounded card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">NewsHunt</h5>
                                <p className="card-text">NewsHunt is a professional React based Web Application for you! Where you get all the daily insights of all categories.</p>
                                <a href="https://github.com/TRRIGE/NewsHunt_React" target="_blank" rel="noreferrer"><button type="button" className="btn text-white btn-md homeBtn2">GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card" id="cards">
                            <img src={project3} width={60} height={200} className="rounded card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">TextManipulator</h5>
                                <p className="card-text">TextManipulator is a versatile utility, designed as a React-based website, dedicated to the art of text manipulation.</p>
                                <a href="https://github.com/TRRIGE/TextManipulator_React" target="_blank" rel="noreferrer"><button type="button" className="btn text-white btn-md homeBtn2">GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card" id="cards">
                            <img src={project} width={60} height={200} className="rounded card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">StockManager<i className="bi bi-hammer ms-3"></i></h5>
                                <p className="card-text">Building a thorough Stock Management System, ensuring streamlined tracking and organization of inventory data.</p>
                                <a href="https://github.com/TRRIGE/StockManager_Next" target="_blank" rel="noreferrer"><button type="button" className="btn text-white btn-md homeBtn2">GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card" id="cards">
                            <img src={project4} width={60} height={200} className="rounded card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Remainder</h5>
                                <p className="card-text">Remainder Web Application, solution designed to streamline and enhance your daily work management.</p>
                                <a href="https://github.com/TRRIGE/Remainder_Next" target="_blank" rel="noreferrer"><button type="button" className="btn text-white btn-md homeBtn2">GitHub</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

