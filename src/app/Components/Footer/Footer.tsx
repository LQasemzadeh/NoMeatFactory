'use client'

import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";


const Footer = () => {
    return (
        <footer className="bg-gray-900 px-4 py-8 md:px-16 lg:px-28 font-[poppins,sans-serif]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="">
                    <h2 className="text-lg font-bold mb-4 text-white">Links</h2>
                    <ul className="leading-8">
                        <li><a href="" className="hover:text-green-500 text-sm text-gray-300">About Us</a></li>
                        <li><a href="" className="hover:text-green-500 text-sm text-gray-300">Customer Solutions</a></li>
                        <li><a href="" className="hover:text-green-500 text-sm text-gray-300">Imprint</a></li>
                        <li><a href="" className="hover:text-green-500 text-sm text-gray-300">Data Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">Contact</h2>
                    <ul className="leading-8">
                        <li><a href="" className="text-sm text-gray-300">
                            Address: 120-19055 34A Ave
                            Surrey B.C.
                            V3Z 0P6
                            Kanada</a></li>
                        <li><a href="" className="text-sm text-gray-300">e-mail: info@nomeatfactoty.com</a></li>
                        <li><a href="" className="text-sm text-gray-300">Tel: +1 (604) 889-1794</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">Follow us</h2>
                    <ul className="flex justify-start space-x-4">
                        <li><FaLinkedin className="text-green-500 text-3xl ml-4" /><a href=""></a></li>
                        <li><IoLogoInstagram  className="text-green-500 text-3xl" /><a href=""></a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-600 pt-6 text-center mt-2">
                <p className="text-xs text-gray-400">© 2024 No Meat Factory, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;