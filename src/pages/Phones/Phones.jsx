import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Phones.scss'
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {useNavigate} from "react-router-dom";

const Phones = () => {
    const nav = useNavigate()
    useEffect(() => {
        axios('http://localhost:8080/products')
            .then((response) => setPhone(response.data))
    }, []);
    const [phone, setPhone] = useState([])
    return (
        <section className="phones">
            <div className="container">
                <div className="phones__row">
                    {
                        phone.map((item) => (
                            <div className="phones__item" key={item.id}>
                                <h3 className="phones__subtitle">{item.title}</h3>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{clickable: true}}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                >
                                        <SwiperSlide key={item.id}>
                                            <div className="leathercases__color-item">
                                                <img src={item.img} alt="" className="phones__img"/>


                                                <p className="leathercases__color-name">{item.colors[0]}</p>
                                                <p className="leathercases__color-price"></p>
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Phones;