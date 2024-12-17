'use client'

import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Topbar: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full py-2 px-4 z-10">
            <div className="container mx-auto flex justify-between items-center text-sm">
                {/* Left - Phone Icon and Number */}
                <div className="flex items-center gap-2 text-gray-100">
                    <FiPhone className="text-lg" />
                    <span className="font-medium font-[poppins,sans-serif]">+1 (604) 889-1794</span>
                </div>

                {/* Right - Social Media Icons */}
                <div className="flex items-center gap-4 text-gray-100">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        <FaLinkedin className="text-lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
