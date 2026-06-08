import React from "react";
import "../ComponentCSS/Projects.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Portfolio } from "../assets/assest";

const projects = [
    {
        title: "Modern Portfolio",
        desc: "A responsive portfolio built with React, Framer Motion, and glass UI.",
        img: Portfolio.Project1Image,
        tech: ["React", "CSS", "Framer Motion"],
        live: "/",
        // github: "#",
    },
    {
        title: "E-Commerce UI",
        desc: "Clean product UI with cart, filters, and localStorage support.",
        img: Portfolio.Project2Image,
        tech: ["React", "LocalStorage", "UI/UX"],
        live: "#",
        // github: "#",
    },
    {
        title: "MidNight N Food",
        desc: "A fun food blog featuring late-night snacks and easy recipes.",
        img: Portfolio.Project3Image,
        tech: ["React", "Canvas API", "Gsap", "Python"],
        live: "https://midnightnfood-com.netlify.app/",
        // github: "#",
    },
    {
        title: "Zenitsu Website",
        desc: "Website about Zenitsu with character info, images and details.",
        img: Portfolio.Project4Image,
        tech: ["React", "CSS", "Gsap"],
        live: "https://zenitsu-web-com.netlify.app/",
        // github: "#",
    },
    {
        title: "E-Commerce UI",
        desc: "Clean product UI with cart, filters, and localStorage support.",
        img: Portfolio.Project1Image,
        tech: ["React", "LocalStorage", "UI/UX"],
        live: "#",
        // github: "#",
    },
    {
        title: "Image Cropper",
        desc: "Custom cropper tool with preview + download system.",
        img: Portfolio.Project1Image,
        tech: ["React", "Canvas API"],
        live: "#",
        // github: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.h2
                className="projects-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            <h1 className="FeaturedWork">Featured Work</h1>

            <motion.p
                className="projects-sub"
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                A showcase of my recent projects demonstrating expertise in full-stack <br />
                development, modern frameworks, and creative problem-solving.
            </motion.p>

            <div className="projects-grid">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="project-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-img">
                            <img src={p.img} alt={p.title} />
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-desc">{p.desc}</p>

                            <div className="project-tech">
                                {p.tech.map((t, j) => (
                                    <span key={j}>{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={p.live} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt /> Live
                                </a>

                                <a href={p.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
