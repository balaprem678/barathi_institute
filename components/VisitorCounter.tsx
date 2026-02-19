"use client";

import { useEffect, useRef, useState } from "react";
import "./VisitorCounter.scss";
export default function VisitorCounter() {
    const [count, setCount] = useState(0);
    const target = 236470;
    const ref = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!start) return;

        let startValue = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const counter = setInterval(() => {
            startValue += increment;
            if (startValue >= target) {
                setCount(target);
                clearInterval(counter);
            } else {
                setCount(Math.floor(startValue));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [start]);

    return (
        <div className="visitor-counter" ref={ref}>
            <h4>No. of Visitors :</h4>
            <span>{count.toLocaleString()}</span>


        </div>
    );
};





