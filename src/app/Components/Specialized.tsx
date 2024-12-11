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
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl font-[poppins,sans-serif]">
                    We specialize In
                </h2>
                <p className="mt-4 text-center text-lg text-gray-600 font-[poppins,sans-serif]">
                    A diverse range of great-tasting, and nutritious products. With modern production facilities and advanced technologies, we offer a wide range of solutions for the production of innovative food products.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="text-center font-[poppins,sans-serif] flex flex-col items-center">
                            <div className="w-28 h-28 mx-auto">
                                {/* Image */}
                                <img
                                    src={specialty.img}
                                    alt={specialty.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">{specialty.title}</h3>
                            <p className="mt-2 text-gray-600">{specialty.description}</p>
                            <button className=" btn">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Specialized;
