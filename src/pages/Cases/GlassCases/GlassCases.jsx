import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from "../GlassCases/case.webp";
import './GlassCases.scss'
import {useNavigate} from "react-router-dom";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const GlassCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/Glass_cases')
            .then(res => setCases(res.data))
    }, [])
    const nav = useNavigate()
    return (
        <div className="glasscases">
            <div className="container">
                <h1 className="glasscases__title">Стеклянные чехлы</h1>
                <div className="glasscases__row">
                    {
                        cases.map((item) => (
                            <div className="glasscases__item" key={item.id}>
                             <h4 className="glasscases__item-title">{item.title}</h4>
                                {/*<p className="glasscases__color">Прозрачный</p>*/}
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{clickable: true}}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                >
                                    {item.colors.map(el => (
                                        <SwiperSlide key={el.id}>
                                            <div className="galsscases__color-item">
                                                <img onClick={() => nav(`/product/${item.id}`)}
                                                     src={logo}
                                                     alt={el.color}
                                                     className="glasscases__color-img"
                                                />
                                                <p className="galsscases__color-name">{el.color}</p>
                                                <p className="glasscases__color-price">{el.price}₽</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <p className="glasscases__material">{item.material}</p>
                                <p className="glasscases__des">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default GlassCases;