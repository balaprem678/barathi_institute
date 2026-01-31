"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Mimic the original logic: delay(200).fadeOut(500)
        const handleLoad = () => {
            setTimeout(() => {
                // Start fading out
                setOpacity(0);
                // Remove from DOM after fade transition (500ms)
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }, 200);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!loading) return null;

    return (
        <div
            className="preloader"
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: 999999,
                backgroundColor: "#ffffff",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(/images/icons/loader.jpg)",
                opacity: opacity,
                transition: "opacity 0.5s ease-out",
            }}
        ></div>
    );
}
