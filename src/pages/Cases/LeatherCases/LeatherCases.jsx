import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./LeatherCases.scss";

const LeatherCases = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        axios("http://localhost:8080/leather_cases")
            .then(res => setCases(res.data))
            .catch(err => console.error("Ошибка загрузки данных:", err));
    }, []);

    return (
        <section className="leathercases">
            <div className="container">
                <h1 className="leathercases__title">Кожаные чехлы</h1>
                <div className="leathercases__row">
                    {cases.map(item => (
                        <div className="leathercases__item" key={item.id}>
                            <h4 className="leathercases__item-title">{item.title}</h4>
                            <p className="leathercases__material">{item.material}</p>
                            <p className="leathercases__des">{item.description}</p>
                            <div className="leathercases__colors">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                >
                                    {item.colors.map(color => (
                                        <SwiperSlide key={color.id}>
                                            <div className="leathercases__color-item">
                                                <img
                                                    src={color.img}
                                                    alt={color.color}
                                                    className="leathercases__color-img"
                                                />
                                                <p className="leathercases__color-name">{color.color}</p>
                                                <p className="leathercases__color-price">{color.price}₽</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeatherCases;
