'use client';

import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
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
                    ? 'top-0 bg-[rgba(255,255,255,0.85)] border-b border-[rgba(200,200,200,0.85)] py-[15px] shadow-lg'
                    : 'top-10 bg-[rgba(255,255,255,0.6)] border-b border-[rgba(220,220,220,0.6)] py-[15px] shadow-lg'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Left: Logo */}
                <a href="#home" className="flex items-center">
                    <img
                        src="/assets/Logo/nmf-logo.svg"
                        alt="No Meat Factory Logo"
                        className="h-10"
                    />
                </a>

                {/* Center: Navigation Links */}
                <nav className="flex space-x-6">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-gray-800 flex items-center font-semibold font-[poppins,sans-serif] text-sm hover:text-green-800 transition-colors duration-300 hidden md:block"
                        >
                            {item.icon} {item.name && <span>{item.name}</span>}
                        </a>
                    ))}
                </nav>
                <GiHamburgerMenu className="md:hidden z-50 text-2xl"/>

                {/* Right: Button */}
                <button
                    className="text-white font-[poppins,sans-serif] text-sm rounded-full py-2 px-4 shadow-md transition-all hidden md:block"
                    style={{backgroundColor: '#014450'}}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00303a')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#014450')}
                >
                    Contact
                </button>

            </div>
        </header>
    );
};

export default Navbar;
