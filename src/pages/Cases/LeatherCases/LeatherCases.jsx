import React, {useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./LeatherCases.scss";
import {useNavigate, useParams} from "react-router-dom";

const LeatherCases = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        axios("http://localhost:8080/leather_cases")
            .then(res => setCases(res.data))
    }, []);
    const params = useParams();
    const nav = useNavigate()
    return (
        <section className="leathercases">
            <div className="container">
                <h1 className="leathercases__title">Кожаные чехлы</h1>
                <div className="leathercases__row">
                    {
                        cases.map((item) => (
                            <div className="leathercases__item" key={item.id}>
                                <h4 className="leathercases__item-title">{item.title}</h4>
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
                                            <div className="leathercases__color-item">
                                                <img onClick={() => nav(`/product/${item.id}`)}
                                                     src={el.img}
                                                     alt={el.color}
                                                     className="leathercases__color-img"
                                                />
                                                <p className="leathercases__color-name">{el.color}</p>
                                                <p className="leathercases__color-price">{el.price}₽</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <p className="leathercases__material">{item.material}</p>
                                <p className="leathercases__des">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default LeatherCases;
