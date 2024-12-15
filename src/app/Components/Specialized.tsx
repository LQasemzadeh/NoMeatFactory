'use client'

import React from "react";

interface Specialty {
    img: string;
    title: string;
    description: string;
}

const Specialized: React.FC = () => {
    const specialties: Specialty[] = [
        { img: "/assets/image/specialize/Grid.svg", title: "Grid", description: "Efficient and robust." },
        { img: "/assets/image/specialize/Meat.svg", title: "Meat", description: "High quality and fresh." },
        { img: "/assets/image/specialize/Peas.svg", title: "Peas", description: "Healthy and organic." },
        { img: "/assets/image/specialize/Sausage.svg", title: "Sausage", description: "Perfectly seasoned." },
    ];

    return (
        <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url('/assets/image/specialize/No_Meat_Factory-About_Us.jpg')` }}>
            {/* Mask Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-8 sm:px-14 lg:px-18">
                <h2 className="text-start text-3xl font-extrabold sm:text-4xl font-[poppins,sans-serif]" style={{ color: '#0a8c35' }}>
                    We specialize In
                </h2>
                <p className="mt-4 text-start text-lg text-gray-100 font-[poppins,sans-serif]">
                    A diverse range of great-tasting, and nutritious products. With modern production facilities and advanced technologies, we offer a wide range of solutions for the production of innovative food products.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="text-center font-[poppins,sans-serif] flex flex-col items-center">
                            <div className="w-28 h-28 mx-auto rounded-full border-2 border-gray-300 p-2 transition-transform duration-300 hover:scale-105 hover:border-green-500 cursor-pointer">
                                <img
                                    src={specialty.img}
                                    alt={specialty.title}
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-green-300">{specialty.title}</h3>
                            <p className="mt-2 text-gray-100">{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Specialized;
