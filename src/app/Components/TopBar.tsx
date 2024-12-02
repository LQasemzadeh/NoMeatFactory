'use client'

import React, { useState, useEffect } from 'react';

const TopBar = () => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div
        id="topbar"
        className={`d-flex align-items-center fixed-top ${
            scroll > 100 ? 'topbar-scrolled' : undefined
        }`}
        >
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-felx align-items-center">
                    <i className="bi bi-phone d-flex align-items-center">
                        <span>+1 5589 55488 55</span>
                    </i>
                    <li className="bi bi-clock d-flex align-items-center ms-4">
                        <span>Mon-Sat: 11am - 23pm</span>
                    </li>
                </div>
                <div className="languages d-none d-md-flex align-items-center">
                    <ul>
                        <li>EN</li>
                        <li>
                            <a href="#">DE</a>
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>
    );
};

export default TopBar;