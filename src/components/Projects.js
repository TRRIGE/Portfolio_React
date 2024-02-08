import project from '../images/project.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import React from 'react'

const Projects = () => {
    return (
        <div className="row section" id="project">
            <h4 style={{ color: '#5be9b9' }}>━━ Projects</h4>
            <p className="lead" id="edit">My recent work</p>
            <div className="col-lg-4 col-md-6">
                <div className="card card-project">
                    <img src={project1} width={60} height={200} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white">HealthChat</h5>
                        <p className="card-text">The Health Care Chat Bot Project, powered by artificial intelligence, seeks to elevate healthcare accessibility.</p>
                        <a href="https://github.com/TRRIGE/NewsHunt_React" target="_blank" rel="noreferrer"><button type="button" className="btn btn-md homeBtn2">GitHub</button></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card card-project">
                    <img src={project2} width={60} height={200} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white">NewsHunt</h5>
                        <p className="card-text">NewsHunt is a professional React based Web Application! Where you get all the daily insights of all categories.</p>
                        <a href="https://github.com/TRRIGE/NewsHunt_React" target="_blank" rel="noreferrer"><button type="button" className="btn btn-md homeBtn2">GitHub</button></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card card-project">
                    <img src={project3} width={60} height={200} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white">TextManipulator</h5>
                        <p className="card-text">TextManipulator is a versatile utility designed for the purpose of text manipulation for practical needs.</p>
                        <a href="https://github.com/TRRIGE/TextManipulator_React" target="_blank" rel="noreferrer"><button type="button" className="btn btn-md homeBtn2">GitHub</button></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card card-project">
                    <img src={project} width={60} height={200} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white">StockManager</h5>
                        <p className="card-text">Build a thorough Stock Management System, ensuring streamlined tracking and organization of inventory data.</p>
                        <a href="https://github.com/TRRIGE/StockManager_Next" target="_blank" rel="noreferrer"><button type="button" className="btn btn-md homeBtn2">GitHub</button></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card card-project">
                    <img src={project4} width={60} height={200} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white">Remainder</h5>
                        <p className="card-text">Remainder Web Application, solution designed to streamline and enhance your daily work management.</p>
                        <a href="https://github.com/TRRIGE/Remainder_Next" target="_blank" rel="noreferrer"><button type="button" className="btn btn-md homeBtn2">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects