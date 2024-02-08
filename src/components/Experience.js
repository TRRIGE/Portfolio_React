import React from 'react'

const Experience = () => {
    return (
        <div className="row section" id="experience">
            <h4 style={{ color: '#5be9b9' }}>━━ Experience</h4>
            <p className="lead" id="edit">Where i previously employed</p>
            <div className="col-lg-6 mb-md-5 mb-sm-5" id="responsiveContent">
                <div className="p-4" id="content_small">
                    <div className="card-body">
                        <h4 className="card-title text-white">Code Crafters Community</h4>
                        <p className="card-text mt-1" style={{ color: '#5be9b9' }}>Web Development Intern</p>
                        <p className="card-text mt-1">My responsibility was to develop and to make revisions of web applications and ensuring alignment with specified requirements</p>
                        <p>Developed an interactive Goal and Reminder web application, incorporating current functionalities for enhanced user experience.</p>
                        <h4 style={{ color: '#5be9b9' }}>Projects<a className="text-white fs-5 me-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github ms-3"></i></a></h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-4" id="content_small">
                    <div className="card-body">
                        <h4 className="card-title text-white">InnoSewa Digitlal Services Pvt. Ltd.</h4>
                        <p className="card-text mt-1" style={{ color: '#5be9b9' }}>Software and Business Development Intern</p>
                        <p className="card-text mt-1">My responsibility was to tailor projects to meet client needs with precision, ensuring excellence in execution and expectations.</p>
                        <p>Building web application blueprints and structures tailored to client needs, ensuring a precise alignment with their requirements.</p>
                        <h4 style={{ color: '#5be9b9' }}>Projects<a className="text-white fs-5 me-4" href="https://github.com/TRRIGE" target="_blank" rel="noreferrer"><i className="bi bi-github ms-3"></i></a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience