import React from 'react'

const Skills = () => {
    return (
        <div className="row" id="skills">
            <h4 style={{ color: '#5be9b9' }}>━━ Skills</h4>
            <p className="lead" id="edit">Technologies i engage with</p>
            <div className="card-group text-center">
                <div className="card" style={{paddingTop: "70px"}}>
                <i class="bi bi-layers mb-2" style={{fontSize:"50px",color: "#5be9b9" }}></i>
                    <div className="card-body mt-2">
                        <h4 className="card-title text-white mb-3">Designer</h4>
                        <p className="card-text mb-4">I value simple content structure, clean designs, and thoughtful interactions.</p>
                        <p className="card-text mb-4"><apan style={{ color: "#5be9b9" }}>Things I enjoy designing: </apan><br /> UX, UI, Web, Logos</p>
                        <p><span style={{ color: "#5be9b9" }}>Design Tools: </span><br />Figma  <br />Pen & Paper  <br />Sketch  <br />Webflow
                        </p>
                    </div>
                </div>
                <div className="card" style={{paddingTop: "70px"}}>
                    <i class="bi bi-code-square mb-2" style={{fontSize:"50px",color: "#5be9b9" }}></i>
                    <div className="card-body mt-2">
                        <h4 className="card-title text-white mb-3">Frontend Developer</h4>
                        <p className="card-text mb-4">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <p className="card-text mb-4"><span style={{ color: "#5be9b9" }}>Languages I Use: </span><br /> HTML, CSS, JavaScript, Tailwind CSS, jQuery, Git</p>
                        <p><span style={{ color: "#5be9b9" }}>Dev Tools: </span><br />Bootstrap<br />React<br />Next<br />EJS<br />Github<br />Vercel<br />VSCode<br />
                        </p>
                    </div>
                </div>
                <div className="card" style={{paddingTop: "70px"}}>
                <i class="bi bi-database-check mb-2" style={{fontSize:"50px",color: "#5be9b9" }}></i>
                    <div className="card-body mt-2">
                        <h4 className="card-title text-white mb-3">Backend Developer</h4>
                        <p className="card-text mb-4">I enjoy crafting and turning concepts into powerful functionality behind the scenes.</p>
                        <p className="card-text mb-4"><span style={{ color: "#5be9b9" }}>Languages I Use: </span><br /> Node, Express, JavaScript, PHP</p>
                        <p><span style={{ color: "#5be9b9" }}>Dev Tools: </span><br />Firebase<br />Postman<br />MongoDB<br />MySQL<br/>Render<br />VSCode<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills