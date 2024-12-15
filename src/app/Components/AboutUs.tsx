'use client';

import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-white py-20 px-4 sm:px-8">
            <div className="relative max-w-4xl mx-auto bg-white text-white p-8 flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 flex-shrink-0">
                    <div className="relative">
                        <img
                            src="/assets/image/about/No_Meat_Factory-OurVision-Teaser.jpg"
                            alt="No Meat Factory"
                            className="h-80 w-full object-cover rounded-lg shadow-lg md:h-96"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="mt-8 md:mt-0 md:ml-8 md:flex-1 font-[poppins,sans-serif]">
                    <h2
                        className="text-4xl font-bold mb-4"
                        style={{ color: '#00303a' }}
                    >
                        About Us
                    </h2>
                    <blockquote className="text-base leading-relaxed text-gray-900">
                        With our extensive expertise in plant-based foods, we’re dedicated to crafting winning products that offer unique flavors and textures, serving as top-notch plant-based alternatives. Our products offer outstanding nutritional value, extended shelf life, and full compliance with all food safety regulations.
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
    );
};

export default AboutUs;
