'use client';

import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import Btn from "@/app/Components/Nav/Btn";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    const navItems = [
        { name: '', href: '#home', icon: <FaHome className="mr-1" /> }, // Home with icon only
        { name: 'Products', href: '#products' },
        { name: 'Production', href: '#production' },
        { name: 'Customer Solutions', href: '#solutions' },
        { name: 'About Us', href: '#about' },
    ];

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
                <a href="#home" className="flex items-center">
                    <img
                        src="/assets/Logo/nmf-logo.svg"
                        alt="No Meat Factory Logo"
                        className="h-10" // Adjust the height as needed
                    />
                </a>

                {/* Center: Navigation Links */}
                <nav className="flex space-x-6">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-green-50 flex items-center font-[poppins,sans-serif] text-sm hover:text-green-400 transition-colors duration-300 hidden lg:block"
                        >
                            {item.icon} {item.name && <span>{item.name}</span>}
                        </a>
                    ))}
                </nav>
                <GiHamburgerMenu className="lg:hidden z-50 text-2xl" />

                {/* Right: Button */}
                <Btn name="Contact Us" />
            </div>
        </header>
    );
};

export default Navbar;
