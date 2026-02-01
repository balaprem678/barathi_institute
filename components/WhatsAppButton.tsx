"use client";

import React from 'react';

const WhatsAppButton = () => {
    return (
        <section className="whatup_buton">
            <a href="https://api.whatsapp.com/send?phone=+919444120052" className="float" target="_blank" rel="noreferrer">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
            <style jsx>{`
                .float {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: 40px;
                    left: 40px;
                    background-color: #25d366;
                    color: #FFF;
                    border-radius: 50px;
                    text-align: center;
                    font-size: 30px;
                    box-shadow: 2px 2px 3px #999;
                    z-index: 100;
                }
                .my-float {
                    margin-top: 16px;
                }
            `}</style>
        </section>
    );
};

export default WhatsAppButton;
