'use client';

import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: '', href: '#home', icon: <FaHome className="mr-1" /> },
        { name: 'Products', href: '#products' },
        { name: 'Customer Solutions', href: '#solutions' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                {/* Logo */}
                <a href="#home" className="flex items-center">
                    <img
                        src="/assets/Logo/nmf-logo.svg"
                        alt="No Meat Factory Logo"
                        className="h-10"
                    />
                </a>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-gray-800 flex items-center font-semibold font-[poppins,sans-serif] text-sm hover:text-green-800 transition-colors duration-300"
                        >
                            {item.icon} {item.name}
                        </a>
                    ))}
                </nav>

                {/* Contact Button */}
                <button
                    className="hidden md:block text-white font-[poppins,sans-serif] text-sm rounded-full py-2 px-4 shadow-md transition-all"
                    style={{ backgroundColor: '#014450' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00303a')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#014450')}
                >
                    Contact
                </button>

                {/* Hamburger Menu */}
                <GiHamburgerMenu
                    className="md:hidden text-2xl cursor-pointer z-50"
                    onClick={() => setIsMenuOpen(true)}
                />

                {/* Fullscreen Overlay Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start space-y-6 pt-12 font-[poppins,sans-serif]">
                        {/* Top Section */}
                        <div className="absolute top-8 left-6">
                            <img
                                src="/assets/Logo/nmf-logo.svg"
                                alt="No Meat Factory Logo"
                                className="h-8"
                            />
                        </div>
                        <IoMdClose
                            className="absolute top-4 right-6 text-3xl cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Items */}
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-800 text-2xl font-semibold hover:text-green-700 flex items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.icon && <span className="mr-2">{item.icon}</span>} {item.name}
                            </a>
                        ))}

                        {/* Contact Button */}
                        <button
                            className="text-white font-[poppins,sans-serif] text-lg rounded-full py-2 px-6 shadow-md"
                            style={{ backgroundColor: '#014450' }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00303a')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#014450')}
                        >
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
