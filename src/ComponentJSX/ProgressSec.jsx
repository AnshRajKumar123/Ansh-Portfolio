import React, { useEffect, useState } from "react";
import "../ComponentCSS/ProgressSec.css";
import { motion } from "framer-motion";
import {
    FaLaptopCode,
    FaFacebook,
    FaInstagram,
    FaSpotify,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

const ProgressSec = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 5000;
        const interval = 50;
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const nextValue = prev + step;
                if (nextValue >= 100) {
                    clearInterval(timer);
                    setTimeout(onFinish, 300);
                }
                return nextValue;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onFinish]);

    return (
        <div className="progress-page">
            {/* Laptop Icon Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <FaLaptopCode className="main-icon" />
            </motion.div>

            {/* Name Animation */}
            <motion.h1
                className="main-name"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Ansh Raj
            </motion.h1>

            {/* Social Icons (Stagger Animation) */}
            <motion.div
                className="social-icons"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.5,
                        },
                    },
                }}
            >
                {[FaFacebook, FaInstagram, FaSpotify, FaLinkedin, FaGithub].map(
                    (Icon, i) => (
                        <motion.div
                            key={i}
                            className="icon-wrapper"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Icon />
                        </motion.div>
                    )
                )}
            </motion.div>

            {/* Progress Bar Fade In */}
            <motion.div
                className="progress-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <div className="progress-number">{Math.floor(progress)}%</div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProgressSec;