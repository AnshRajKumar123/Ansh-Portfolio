import React, { useState, useEffect } from "react";
import "../ComponentCSS/Navbar.css";
import { FaHome, FaUser, FaFolderOpen, FaCode, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    const [active, setActive] = useState("home");

    const handleScroll = (id) => {
        setActive(id);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // Detect active section on scroll
    useEffect(() => {
        const sections = ["home", "about", "projects", "services", "contact"];

        const scrollHandler = () => {
            sections.forEach((sec) => {
                const element = document.getElementById(sec);
                if (!element) return;

                const top = element.getBoundingClientRect().top;
                if (top <= 150 && top >= -300) {
                    setActive(sec);
                }
            });
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <div className="navbar">
            <div
                className={`nav-item ${active === "home" ? "active" : ""}`}
                onClick={() => handleScroll("home")}
            >
                <FaHome /> <span>Home</span>
            </div>

            <div
                className={`nav-item ${active === "about" ? "active" : ""}`}
                onClick={() => handleScroll("about")}
            >
                <FaUser /> <span>About</span>
            </div>

            <div
                className={`nav-item ${active === "projects" ? "active" : ""}`}
                onClick={() => handleScroll("projects")}
            >
                <FaFolderOpen /> <span>Projects</span>
            </div>

            <div
                className={`nav-item ${active === "services" ? "active" : ""}`}
                onClick={() => handleScroll("services")}
            >
                <FaCode /> <span>Services</span>
            </div>

            <div
                className={`nav-item ${active === "contact" ? "active" : ""}`}
                onClick={() => handleScroll("contact")}
            >
                <FaEnvelope /> <span>Contact</span>
            </div>
        </div>
    );
};

export default Navbar;