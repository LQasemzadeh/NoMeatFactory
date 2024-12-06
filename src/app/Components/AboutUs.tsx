'use client';

import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            src="/assets/image/about/No_Meat_Factory-OurVision-Teaser.jpg"
                            alt="About Us"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-[poppins,sans-serif]">
                            Our Vision
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed font-[poppins,sans-serif]">
                            Make plant-based food products tasty, healthy and affordable for everybody.
                        </p>

                        <button className="mt-6 px-6 py-2 shadow-lg font-[poppins,sans-serif] bg-green-900 text-white rounded-full hover:bg-green-950 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
