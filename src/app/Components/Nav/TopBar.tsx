'use client';

import React, { useEffect, useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const TopBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event to toggle visibility of the top bar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled ? '-top-10' : 'top-0'
            }`}
        >
            <div className="flex justify-between items-center px-14 py-2">
                {/* Left Section */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                    >
                        <GrInstagram size={18} />
                    </a>
                </div>

                {/* Right Section */}
                <div>
                    <button className="text-gray-600 hover:text-gray-800">
                        <FaToggleOff size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
