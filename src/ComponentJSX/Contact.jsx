import React, { useState } from "react";
import "../ComponentCSS/Contact.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {

    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 2000); // hide after 2 sec

        e.target.reset();
    };

    return (
        <>
            {/* Toast Box */}
            {showToast && <div className="simple-toast">Message Sent!</div>}

            <section id="contact" className="contact-section">
                <motion.h2
                    className="contact-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    className="contact-sub"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Feel free to reach out for collaborations or just a friendly hello 👋
                </motion.p>

                <div className="contact-container">
                    {/* LEFT SIDE INFORMATION */}
                    <motion.div
                        className="contact-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="left-title">Get In Touch</h3>

                        <motion.div
                            className="contact-item"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >
                            <FaPhoneAlt className="contact-icon" />
                            +91 7367824173
                        </motion.div>

                        <motion.div
                            className="contact-item"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 2.7, repeat: Infinity }}
                        >
                            <FaEnvelope className="contact-icon" />
                            golu.kkpncc.99008@gmail.com
                        </motion.div>

                        <motion.div
                            className="contact-item"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <FaLocationArrow className="contact-icon" />
                            Mandi Govindgard Punjab, India
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE FORM */}
                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="Enter your name" required />
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea placeholder="Write your message..." required></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="send-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;