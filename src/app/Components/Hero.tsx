'use client';

import React from 'react';

const Hero: React.FC = () => {
    const videoSrc = '/assets/image/hero/1726170362414.mov';

    return (
        <section className="relative w-full h-[90vh] bg-gray-100"> {/* Reduced height */}
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                ></video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                {/* Main Title */}
                <h1 className="text-green-200 text-5xl font-bold mb-8 font-[poppins,sans-serif] shadow-lg shadow-black">
                    No Meat Factory
                </h1>
            </div>
        </section>
    );
};

export default Hero;
