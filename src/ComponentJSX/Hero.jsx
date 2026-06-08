import React from "react";
import "../ComponentCSS/Hero.css";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Portfolio } from "../assets/assest";

const Hero = () => {
    return (
        <div className="hero" id="home">

            {/* LEFT CONTENT */}
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
            >
                <p className="DotSector">.Available for freelance work</p>

                <h3 className="hero-intro">Hi, I'm</h3>

                <h1 className="hero-name">
                    <span>Ansh Raj</span>
                </h1>

                <div className="hero-role">
                    <Typewriter
                        words={[
                            "Frontend React Developer",
                            "UI/UX Designer",
                            "JavaScript Enthusiast",
                            "Creative Web Developer"
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </div>

                <p className="hero-desc">
                    I create beutiful, function, and user-centerd digital experiences. With
                    2+ years of experiences in web Development, I bring ideas to life through
                    clean code and thoughtful design
                </p>

                <div className="hero-buttons">
                    <button className="btn hire">Hire Me</button>
                    <button className="btn cv">Download CV</button>
                </div>

                <hr className="HoriZontalLine" />

                <div className="FollowMe">
                    <span>Follow Me - </span>
                    <div className="hero-social">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaGithub />
                    </div>
                </div>
            </motion.div>

            {/* RIGHT IMAGE SIDE */}
            <motion.div
                className="hero-right"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="hero-img-wrap">
                    <div className="hero-img">
                        <img src={Portfolio.ImageS1} />
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Hero;