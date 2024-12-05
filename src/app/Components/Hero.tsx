'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { TbArrowBigRightLineFilled } from "react-icons/tb";

const Hero: React.FC = () => {
    const slides = [
        {
            image: '/assets/image/hero/NoMeatFactory1.png',
            title: 'Innovating Plant-Based Foods',
            description: 'Join us in revolutionizing sustainable food production.',
        },
        {
            image: '/assets/image/hero/NoMeatFactory2.png',
            title: 'Empowering a Greener Tomorrow',
            description: 'Discover the future of environmentally-friendly food.',
        },
        {
            image: '/assets/image/hero/NoMeatFactory3.jpg',
            title: 'Leading the Food Tech Industry',
            description: 'Experience the innovation behind NoMeatFactory.',
        },
    ];

    const swiperRef = useRef<any>(null);

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <section className="relative w-full h-screen bg-gray-100">
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                        {/* Text Overlay for Each Slide */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 z-10">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 max-w-md">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Button */}
            <button
                onClick={handleNextSlide}
                className="absolute bottom-14 right-14 bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 shadow-lg font-[poppins,sans-serif] transition z-10"
            >
                <TbArrowBigRightLineFilled size={28} />
            </button>
        </section>
    );
};

export default Hero;
