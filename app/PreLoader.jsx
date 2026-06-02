import React from 'react';

const PreLoader = () => {
    return (
        <div id="page">
            {/* Injecting CSS/SCSS styles natively using an inline style block */}
            <style>{`
                #page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }

                #container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .loading-text {
                    color: rgb(82, 79, 79);
                    font-family: sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .ring {
                    width: 190px;
                    height: 190px;
                    border: 1px solid transparent;
                    border-radius: 50%;
                    position: absolute;
                }

                .ring:nth-child(1) {
                    border-bottom: 8px solid rgb(240, 42, 230);
                    animation: rotate1 2s linear infinite;
                }

                .ring:nth-child(2) {
                    border-bottom: 8px solid rgb(240, 19, 67);
                    animation: rotate2 2s linear infinite;
                }

                .ring:nth-child(3) {
                    border-bottom: 8px solid rgb(3, 170, 170);
                    animation: rotate3 2s linear infinite;
                }

                .ring:nth-child(4) {
                    border-bottom: 8px solid rgb(207, 135, 1);
                    animation: rotate4 2s linear infinite;
                }

                @keyframes rotate1 {
                    from { transform: rotateX(50deg) rotateZ(110deg); }
                    to   { transform: rotateX(50deg) rotateZ(470deg); }
                }

                @keyframes rotate2 {
                    from { transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg); }
                    to   { transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg); }
                }

                @keyframes rotate3 {
                    from { transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg); }
                    to   { transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg); }
                }

                @keyframes rotate4 {
                    from { transform: rotateX(70deg) rotateZ(270deg); }
                    to   { transform: rotateX(70deg) rotateZ(630deg); }
                }
            `}</style>

            <div id="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <span className="loading-text text-white">B I</span>
            </div>
        </div>
    );
};

export default PreLoader;