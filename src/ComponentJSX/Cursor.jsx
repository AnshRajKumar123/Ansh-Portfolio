import React, { useEffect, useRef } from "react";
import "../ComponentCSS/Cursor.css";
import { Portfolio } from "../assets/assest";

import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {

        const moveCursor = (e) => {

            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.25,
                ease: "power3.out",
            });

        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    return (
        <div className="cursor" ref={cursorRef}>
            <img src={Portfolio.CursorImage} alt="" />
        </div>
    );
};

export default Cursor;