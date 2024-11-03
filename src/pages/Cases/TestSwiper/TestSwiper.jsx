import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

const TestSwiper = () => {
    return (
        <Swiper
            loop={true}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
            style={{ height: '300px' }}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
};

export default TestSwiper;
