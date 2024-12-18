'use client';

import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
    return (
        <div className="-mt-32">
            <div className="flex justify-center items-center bg-white py-20 px-4 sm:px-8">
                <div
                    className="relative max-w-4xl mx-auto px-10 py-16 flex flex-col md:flex-row rounded-3xl shadow-lg ring-2 ring-gray-900/10"
                >
                    {/* Background Opacity Box */}
                    <div className="absolute inset-0 bg-white bg-opacity-60 rounded-3xl"></div>

                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 flex-shrink-0 z-10">
                        <Image
                            src="/assets/image/about/No_Meat_Factory-OurVision-Teaser.jpg"
                            alt="No Meat Factory"
                            width={500} // Replace with actual width
                            height={384} // Replace with actual height
                            className="h-80 w-full object-cover rounded-lg shadow-lg md:h-96"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="relative z-10 mt-8 md:mt-0 md:ml-8 md:flex-1 font-[poppins,sans-serif]">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: '#00303a' }}>
                            About Us
                        </h2>
                        <blockquote className="text-base leading-relaxed text-gray-900">
                            With our extensive expertise in plant-based foods, we’re dedicated to crafting winning
                            products that offer unique flavors and textures, serving as top-notch plant-based
                            alternatives. Our products offer outstanding nutritional value, extended shelf life, and
                            full compliance with all food safety regulations.
                        </blockquote>
                        <div className="mt-6">
                            <button
                                className="text-white font-[poppins,sans-serif] text-sm rounded-full py-2 px-4 shadow-md transition-all"
                                style={{ backgroundColor: '#014450' }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00303a')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#014450')}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
