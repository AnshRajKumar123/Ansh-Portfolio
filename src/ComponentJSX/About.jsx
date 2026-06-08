import React from "react";
import "../ComponentCSS/About.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaFolderOpen, FaCode } from "react-icons/fa";
import { Portfolio } from "../assets/assest";

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="about-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className="about-sub">ABOUT ME</div>

                <h1 className="about-hero">
                    Building Meaningful <br /> Digital Experiences
                </h1>

                <div className="about-divider" />

                <p className="about-paragraph">
                    I'm a creative front-end developer passionate about building modern and
                    responsive web experiences. My journey began with a love for design and
                    evolved into a deep curiosity for how the web works — combining logic
                    with creativity to bring ideas to life.
                </p>

                <p className="about-paragraph">
                    When I'm not coding, I enjoy learning new technologies, improving my
                    projects, and exploring better ways to make the web faster and more
                    engaging. I believe in continuous learning, attention to detail, and
                    the power of clean, meaningful design.
                </p>

                <h3 className="drives-title">What Drives Me</h3>

                <div className="drives-cards">
                    <div className="drive-card">
                        <div className="card-icon"><FaCode /></div>
                        <h4 className="card-title">&lt;/&gt; Languages</h4>
                        <div className="card-sub">HTML, CSS, JavaScript, React</div>
                    </div>

                    <div className="drive-card highlight">
                        <div className="card-icon"><FaGraduationCap /></div>
                        <h4 className="card-title">Education</h4>
                        <div className="card-sub">B.tech in Computer Science</div>
                    </div>

                    <div className="drive-card">
                        <div className="card-icon"><FaFolderOpen /></div>
                        <h4 className="card-title">Projects</h4>
                        <div className="card-sub">Built more than 15 projects</div>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT SIDE: glassy oval + timeline */}
            <motion.div
                className="about-right"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                viewport={{ once: true }}
            >
                <div className="right-inner">
                    <div className="oval-frame">
                        <img src={Portfolio.ImageS3} />
                    </div>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-year">2024</div>
                            <div className="tl-body">
                                <strong>Frontend Developer</strong> — Built multiple React
                                applications with component-driven architecture.
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="tl-year">2023</div>
                            <div className="tl-body">
                                <strong>UI/UX Designer</strong> — Created design systems and
                                Figma prototypes for startups.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;