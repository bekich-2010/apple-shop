import React, {useEffect, useState} from 'react';
import axios from "axios";
import './GlassCases.scss'
import {Link} from "react-router-dom";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from './case.webp'
import {toggleFavorites} from "../../../store/reducers/changeFavorites";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";

const GlassCases = () => {
    const [cases, setCases] = useState([])
    const favorites = useSelector((state) => state.changeFavorites)
    useEffect(() => {
        axios('http://localhost:8080/Glass_cases')
            .then(res => setCases(res.data))
    }, [])
    const dispatch = useDispatch();
    return (
        <div className="glasscases">
            <div className="container">
                <h1 className="glasscases__title">Стеклянные чехлы</h1>
                <div className="glasscases__row">
                    {
                        cases.map((item) => (
                            <div className="glasscases__item" key={item.id}>
                                <div className="glasscases__top">
                                    <h4 className="glasscases__item-title">{item.title}</h4>
                                    <span onClick={() => dispatch(toggleFavorites(item.id))}
                                          className="glasscases__fav">
                                    {
                                        favorites.data.includes(item.id) ? <MdFavorite/>
                                            : <MdFavoriteBorder/>
                                    }
                                </span>
                                </div>
                                <div key={item.id} className="glasscases__color-item">
                                    <Link className="glasscases__color-link" to={`product/${item.id}`}>
                                        <img
                                            src={logo}
                                            alt=""
                                            className="glasscases__color-img"
                                        />
                                    </Link>
                                    <p className="glasscases__color-price">{item.price}₽</p>
                                    <p className="glasscases__material">{item.material}</p>
                                </div>
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