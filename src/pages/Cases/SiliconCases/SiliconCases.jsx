import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from "../../Cases/SiliconCases/case.webp";
import './SiliconCases.scss'
import {useNavigate} from "react-router-dom";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const SiliconCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/silicone_cases')
            .then(res => setCases(res.data))

    }, [])
    const nav = useNavigate()
    return (

        <div className="siliconcases">
            <div className="container">
                <h1 className="siliconcases__title">Силиконовые чехлы</h1>
                <div className="siliconcases__row">
                    {
                        cases.map((item) => (
                            <div className="siliconcases__item" key={item.id}>
                                <h4 className="siliconcases__item-title">{item.title}</h4>
                                {/*<img onClick={() => nav(`/product/${item.id}`)} src={logo} alt="" className="leathercases__img"/>*/}
                                {/*<p className="siliconcases__color">Синий</p>*/}
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{clickable: true}}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                >
                                    {item.colors.map(el => (
                                        <SwiperSlide key={el.id}>
                                            <div className="siliconcases__color-item">
                                                <img onClick={() => nav(`/product/${item.id}`)}
                                                     src={el.img}
                                                     alt={el.color}
                                                     className="siliconcases__color-img"
                                                />
                                                <p className="siliconcases__color-name">{el.color}</p>
                                                <p className="siliconcases__color-price">{el.price}₽</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <p className="siliconcases__material">Силикон</p>
                                <p className="siliconcases__des">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SiliconCases;