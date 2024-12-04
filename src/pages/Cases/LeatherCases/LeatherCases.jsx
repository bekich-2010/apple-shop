import React, {useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./LeatherCases.scss";
import {Link} from "react-router-dom";
import {toggleFavorites} from "../../../store/reducers/changeFavorites";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";

const LeatherCases = () => {
    const [cases, setCases] = useState([]);
    const favorites = useSelector((state) => state.changeFavorites);
    useEffect(() => {
        axios("http://localhost:8080/leather_cases")
            .then(res => setCases(res.data))
    }, []);
    const dispatch = useDispatch();
    return (
        <section className="leathercases">
            <div className="container">
                <h1 className="leathercases__title">Кожаные чехлы</h1>
                <div className="leathercases__row">
                    {
                        cases.map((item) => (
                            <div className="leathercases__item" key={item.id}>
                                <div className="leathercases__top">
                                    <h4 className="leathercases__item-title">{item.title}</h4>
                                    <span onClick={() => dispatch(toggleFavorites(item.id))}
                                          className="leathercases__fav">
                                    {
                                        favorites.data.includes(item.id) ? <MdFavorite/>
                                            : <MdFavoriteBorder/>
                                    }
                                </span>
                                </div>
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
                                                <Link className="leathercases__color-link" to={`product/${el.id}`}>
                                                    <img
                                                        src={el.img}
                                                        alt={el.color}
                                                        className="leathercases__color-img"
                                                    />
                                                </Link>
                                                <p className="leathercases__color-name">{el.color}</p>
                                                <p className="leathercases__color-price">{item.price}₽</p>
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
