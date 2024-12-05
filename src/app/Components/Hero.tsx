'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Hero: React.FC = () => {
    const videoSrc = '/assets/image/hero/1726170362414.mov';

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
                <SwiperSlide className="relative w-full h-full">
                    <video
                        className="w-full h-full object-cover"
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                    ></video>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Hero;
