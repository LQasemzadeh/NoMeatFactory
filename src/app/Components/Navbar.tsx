'use client';

import React, { useState, useEffect } from 'react';
import Btn from "@/app/Components/Btn";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsSticky(true); // When scrolled down
            } else {
                setIsSticky(false); // When at the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed left-0 w-full z-[997] transition-all duration-500 ${
                isSticky
                    ? 'top-0 bg-[rgba(0,0,0,0.85)] border-b border-[rgba(37,51,42)] py-[15px]'
                    : 'top-10 bg-[rgba(12,11,9,0.6)] border-b border-[rgba(12,11,9,0.6)] py-[15px]'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Left: Logo */}
                <h1 className="m-0 p-0 text-[28px] leading-[1] font-light font-[poppins,sans-serif] tracking-[1px]">
                    <a href="#" className="text-green-200">
                        <span className="text-green-500">N</span>o
                        <span className="text-green-500">M</span>eat
                        <span className="text-green-500">F</span>actory
                    </a>
                </h1>

                {/* Right: Button */}
                <Btn name="Contact Us" />
            </div>
        </header>
    );
};

export default Navbar;
