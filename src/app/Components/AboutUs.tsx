'use client';

import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-white py-20 px-8">
            <div className="relative max-w-4xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-8 md:flex">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 flex-shrink-0">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                        <img
                            src="/assets/image/about/No_Meat_Factory-OurVision-Teaser.jpg"
                            alt="No Meat Factory"
                            className="h-96 w-96 object-cover rounded-lg shadow-lg"
                            style={{
                                marginBottom: '-4rem', // Moves part of the image outside at the bottom
                            }}
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="md:flex-1 mt-24 md:mt-0 md:ml-8">
                    <blockquote className="text-lg leading-relaxed font-[poppins,sans-serif]">
                        With our extensive expertise in plant-based foods, we’re dedicated to crafting winning products that offer unique flavors and textures, serving as top-notch plant-based alternatives. Our products offer outstanding nutritional value, extended shelf life, and full compliance with all food safety regulations.
                    </blockquote>
                    <div className="mt-4 font-[poppins,sans-serif]">
                        <button className="app-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;
