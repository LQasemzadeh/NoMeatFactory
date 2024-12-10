'use client';

import React, { useState } from 'react';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const banners = [
        {
            id: 0,
            image: '/assets/image/banner/No_Meat_Factory-Slider3.jpg',
            title: 'Rely on our Experience',
            description:
                '100+ years combined experience in developing and producing plant-based food solutions supporting our customers in food product development and operational excellence.',
        },
        {
            id: 1,
            image: '/assets/image/banner/No_Meat_Factory-Slider2.jpg',
            title: 'Plant Based is our Mission',
            description:
                'No Meat Factory is an innovation, exclusively plant-based contract food manufacturing company that expeditiously creates and commercializes the finest plant-based foods for brand owners, retailers, food service and institutional customers.',
        },
        {
            id: 2,
            image: '/assets/image/banner/No_Meat_Factory-Slider1.jpg',
            title: 'Plant Protein Solutions',
            description:
                'Co-Manufacturing/ Food Service Solutions/ Custom Private Label Products/ Product Development',
        },
    ];

    return (
        <div className="container mx-auto py-16 flex flex-col md:flex-row gap-4">
            {banners.map((banner, index) => (
                <div
                    key={banner.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
                        activeIndex === index ? 'flex-[4]' : 'flex-[1]'
                    } overflow-hidden rounded-lg`}
                    style={{ minHeight: activeIndex === index ? '400px' : '200px' }}
                >
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                        <h3 className="text-xl font-bold font-[poppins,sans-serif]">{banner.title}</h3>
                        {activeIndex === index && (
                            <p className="text-sm mt-2 font-[poppins,sans-serif]">{banner.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
