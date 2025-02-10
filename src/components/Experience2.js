import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from "react-icons/fi";

const Experience = () => {
    const controls = useAnimation();
    const [threshold, setThreshold] = useState(0.3);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 768) {
                setThreshold(0.2);
            } else if (window.innerWidth < 992) {
                setThreshold(0.2);
            } else {
                setThreshold(0.38);
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

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    const tabs = document.querySelector('.tabs');

    tabs.addEventListener('click', e => handleClick(e));

    function handleClick(e) {
        const target = e.target;
        const tabNum = target.dataset.tab;
        const activeTab = document.querySelector('.tabs .active');
        const activeContent = document.querySelector(
            '.content .visible'
        );
        const currentContent = document.querySelector(
            `.content__section[data-tab='${tabNum}']`
        );

        if (!tabNum) {
            return;
        }

        activeTab.classList.remove('active');
        target.classList.add('active');
        activeContent.classList.remove('visible');
        currentContent.classList.add('visible');
    }


    return (
        <div className='container'>
            <motion.div className="row section"
                id="experience"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.9 }}>
                <h6><span id="secondFontFamily2">03. </span><span className='fs-4' style={{ color: '#ccd6f6' }}>Experience </span><span id="rowStyleExperience"></span></h6>
                <p id="edit">Where I’ve Worked</p>
                <div className="expcontainer">
                    <div className="tabs">

                        <a className="tab tab-1 active cursor-pointer" data-tab="1">Vaspp</a>
                        <a className="tab tab-2" data-tab="2">Transcend Tech</a>
                        <a className="tab tab-3" data-tab="3">InnoSewa</a>

                        <span className="highlighter"></span>

                    </div>

                    <div className="content">

                        <div className="content__section visible" data-tab="1">
                            <p>Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick. Meggings franzen kogi, next level fingerstache +1 kitsch YOLO activated charcoal craft beer adaptogen twee. Yuccie tumeric irony heirloom, shoreditch kinfolk swag cold-pressed 90's chicharrones.</p>
                        </div>

                        <div className="content__section" data-tab="2">
                            <p>Wayfarers small batch brooklyn, pabst godard flannel blog authentic fingerstache salvia disrupt kombucha pickled. Actually hammock semiotics DIY cold-pressed lo-fi swag franzen chia locavore. Biodiesel venmo irony, salvia shaman plaid photo booth keffiyeh VHS slow-carb chillwave knausgaard vape occupy.</p>
                        </div>

                        <div className="content__section" data-tab="3">
                            <p id="expFont">Software & Business Dev Intern <span style={{ color: "#64ffda" }}>@ InnoSewa</span></p>
                            <p id="expdate">November 2023 - Aprill 2024</p>
                            <li><span>My responsibility was to tailor projects to meet client needs with precision, ensuring excellence in execution and expectations.</span></li>
                            <li><span>Building web application blueprints and structures tailored to client needs, ensuring a precise alignment with their requirements.</span></li>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Experience



/* 
a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  transition: color 0.25s ease;
}

p {
  margin: 0;
}

.expcontainer {
  position: relative;
  margin: 20px auto;
  padding: 20px;
  width: 700px;
  display: flex;
  align-items: flex-start;
}
.expcontainer .tabs {
  display: block;
  position: relative;
  z-index: 3;
  width: max-content;
}
.expcontainer .tabs .tab {
  width: 150px;
  height: 40px;
  text-align: start;
  font-weight: 350;
  font-size: 13px;
  padding: 10px 0 0 20px;
  transition: all 0.25s ease;
  margin-right: 5px;
  border-left: 2px solid #233554;
  cursor: pointer;
  font-family: "Oxygen Mono", monospace;
}
.expcontainer .tabs .tab:hover {
  color: #64ffda;
  background-color: #112240;
}
.expcontainer .tabs .tab.active {
  color: #64ffda;
}
.expcontainer .tabs .tab.tab-1.active ~ .highlighter {
  transform: translateY(0px);
}
.expcontainer .tabs .tab.tab-2.active ~ .highlighter {
  transform: translateY(40px);
}
.expcontainer .tabs .tab.tab-3.active ~ .highlighter {
  transform: translateY(80px);
}
.expcontainer .tabs .highlighter {
  display: block;
  background: #64ffda;
  width: 2px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0);
  transition: transform 0.2s ease;
  transition-delay: 0.1s;
  z-index: 10;
}
.expcontainer .tabs a:first-of-type {
  border-top-left-radius: 2px;
}
.expcontainer .tabs a:last-of-type {
  border-top-right-radius: 2px;
}
.expcontainer .content {
  position: relative;
  padding: 0 20px;
}
.expcontainer .content__section {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  transition: opacity 0s ease;
}
.expcontainer .content__section.visible {
  position: relative;
  opacity: 1;
  width: 100%;
  height: auto;
  transition: opacity 0.5s ease;
  z-index: 2;
}

#expFont {
  font-size: 16px;
  margin-bottom: 5px;
  font-family: "Oxygen Mono", monospace;
}

#expdate {
  font-size: 13px;
  margin-bottom: 16px;
}

.content__section li {
  list-style: none; 
  position: relative; 
  padding-left: 1.5em; 
  margin-bottom: 0.5em;
  color: #8892b0;
}

.content__section li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #64ffda;
} */
