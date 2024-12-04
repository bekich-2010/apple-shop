import React, {useEffect, useState} from 'react';
import axios from "axios";
import './SiliconCases.scss'
import {useNavigate, Link} from "react-router-dom";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {toggleFavorites} from "../../../store/reducers/changeFavorites";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";

const SiliconCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/silicone_cases')
            .then(res => setCases(res.data))
    }, [])
    const favorites = useSelector(state => state.changeFavorites);
    const dispatch = useDispatch();
    return (
        <div className="siliconcases">
            <div className="container">
                <h1 className="siliconcases__title">Силиконовые чехлы</h1>
                <div className="siliconcases__row">
                    {
                        cases.map((item) => (
                            <div className="siliconcases__item" key={item.id}>
                                <div className="siliconcases__top">
                                    <h4 className="siliconcases__item-title">{item.title}</h4>
                                    <span onClick={() => dispatch(toggleFavorites(item.id))}
                                          className="siliconcases__fav">
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
                                    <SwiperSlide key={item.id}>
                                        <div className="siliconcases__color-item">
                                            <Link className="siliconcases__color-link" to={`product/${item.id}`}>
                                                <img
                                                    src={item.img}
                                                    alt={item.color}
                                                    className="siliconcases__color-img"
                                                />
                                            </Link>
                                            <p className="siliconcases__color-name">{item.color}</p>
                                            <p className="siliconcases__color-price">{item.price}₽</p>
                                        </div>
                                    </SwiperSlide>
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