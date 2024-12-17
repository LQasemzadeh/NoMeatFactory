import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const services = [
    {
        image: '/assets/image/services/No_Meat_Factory-production_sites-teaser.jpg',
    },
    {
        image: '/assets/image/services/No_Meat_Factory-quality_food_safety-teaser.jpg',
    },
    {
        image: '/assets/image/services/No_Meat_Factory-sustainability-teaser.jpg',
    },
];

const Services: React.FC = () => {
    return (
        <div className="container mx-auto px-8 py-24">
            <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Left Side - Title and Text */}
                <div className="flex-1 font-[poppins,sans-serif]">
                    <h2 className="text-3xl font-bold mb-4">No Meat Factory</h2>
                    <p className="text-gray-600">
                        No Meat Factory has all the services required to support your needs.
                    </p>
                </div>

                {/* Right Side - Images */}
                <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="relative group cursor-pointer">
                            <img
                                src={service.image}
                                alt={`Service ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md group-hover:bg-gray-200 transition">
                                <FiChevronRight className="text-black text-2xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
