import React from "react";
import "../ComponentCSS/Services.css";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaReact } from "react-icons/fa";

const services = [
    {
        icon: <FaReact />,
        title: "Frontend Development",
        desc: "Building responsive, fast and clean UI using React, JavaScript, and modern web technologies.",
    },
    {
        icon: <FaPalette />,
        title: "UI/UX Design",
        desc: "Crafting visually appealing layouts, intuitive interactions and seamless user experiences.",
    },
    {
        icon: <FaCode />,
        title: "Custom Tools",
        desc: "Creating unique web tools like image editors, generators, and utilities for client needs.",
    },
];

const Services = () => {
    return (
        <section id="services" className="service-section">
            <motion.h2
                className="service-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Services
            </motion.h2>

            <motion.p
                className="service-sub"
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                What I can do for you — clean, modern and user-centered digital solutions.
            </motion.p>

            <div className="service-grid">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        className="service-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="service-icon">{s.icon}</div>

                        <h3 className="service-card-title">{s.title}</h3>

                        <p className="service-card-desc">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
