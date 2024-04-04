import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <div className='container'>
            <motion.div className="row"
                id="skills"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}
            >
                <h6><span id="secondFontFamily2">02. </span><span className='fs-4' style={{ color: '#ccd6f6' }}>Skills </span><span id="rowStyleSkills"></span></h6>
                <p id="edit">Technologies i engage with</p>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.9 }}
                    className="card-group text-center no-margin-on-mobile">
                    <div className="card" style={{ paddingTop: "70px" }}>
                        <i className="bi bi-layers mb-2" style={{ fontSize: "50px", color: "#64ffda" }}></i>
                        <div className="card-body mt-2">
                            <h4 className="card-title mb-3" style={{ color: '#ccd6f6' }}>Designer</h4>
                            <p className="card-text mb-4">I value simple content structure, clean designs, and thoughtful interactions.</p>
                            <p className="card-text mb-4"><span style={{ color: "#64ffda" }}>Things I enjoy designing: </span><br /> UX, UI, Web, Logos</p>
                            <p><span style={{ color: "#64ffda" }}>Design Tools: </span><br />Figma  <br />Pen & Paper  <br />Sketch  <br />Webflow
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ paddingTop: "70px" }}>
                        <i className="bi bi-code-square mb-2" style={{ fontSize: "50px", color: "#64ffda" }}></i>
                        <div className="card-body mt-2">
                            <h4 className="card-title mb-3" style={{ color: '#ccd6f6' }}>Frontend Developer</h4>
                            <p className="card-text mb-4">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            <p className="card-text mb-4"><span style={{ color: "#64ffda" }}>Languages I Use: </span><br /> HTML, CSS, JavaScript, Tailwind CSS, jQuery, Git</p>
                            <p><span style={{ color: "#64ffda" }}>Dev Tools: </span><br />Bootstrap<br />React<br />Next<br />EJS<br />Github<br />Vercel<br />VSCode<br />
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ paddingTop: "70px" }}>
                        <i className="bi bi-database-check mb-2" style={{ fontSize: "50px", color: "#64ffda" }}></i>
                        <div className="card-body mt-2">
                            <h4 className="card-title mb-3" style={{ color: '#ccd6f6' }}>Backend Developer</h4>
                            <p className="card-text mb-4">I enjoy crafting and turning concepts into powerful functionality behind the scenes.</p>
                            <p className="card-text mb-4"><span style={{ color: "#64ffda" }}>Languages I Use: </span><br /> Node, Express, JavaScript, Python, PHP</p>
                            <p><span style={{ color: "#64ffda" }}>Dev Tools: </span><br />Firebase<br />Postman<br />MongoDB<br />MySQL<br />Render<br />VSCode<br />
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills