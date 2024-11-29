import React, {useEffect, useState} from 'react';
import axios from "axios";
import './WiredHeadphones.scss'
import {useParams, useNavigate} from 'react-router-dom'
import logo from '../../Headphones/star.jpg'
import {useDispatch, useSelector} from "react-redux";
import {addCart, removeCart} from "../../../store/reducers/carts";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {toggleFavorites} from "../../../store/reducers/changeFavorites";
import {getProducts} from "../../../store/reducers/products";

const WiredHeadphones = () => {

    const [earphones, setEarphones] = useState([])
    const favorites = useSelector((state) => state.changeFavorites)
    useEffect(() => {
        axios('http://localhost:8080/wired_headphones')
            .then((res) => setEarphones(res.data))
    }, []);
    const params = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts)
    // const {data, error, filter, status} = useSelector(state => state.products)
    // useEffect(() => {
    //     dispatch(getProducts())
    // },[])
    return (
        <section className="wiredheadphones">
            <div className="container">
                <h1 className="wiredheadphones__title">Наушники</h1>
                <div className="wiredheadphones__row">
                    {
                        earphones.map((item) => (
                            <div className="wiredheadphones__item" key={item.id}>
                                <span onClick={() => dispatch(toggleFavorites(item.id))} className="wirelessheadphones__fav">
                                    {
                                        favorites.data.includes(item.id) ?  <MdFavorite/>
                                            : <MdFavoriteBorder/>
                                    }
                                </span>
                                <img onClick={() => nav(`/product/:${item.id}`)} className="wiredheadphones__img" src={item.img} alt=""/>
                                <h3 className="wiredheadphones__subtitle">{item.name}</h3>
                                <div className="wiredheadphones__grade">
                                    <img src={logo} alt="" className="wiredheadphones__star"/>
                                    <span>4.7</span>
                                </div>
                                <p className="wiredheadphones__price">{item.price}</p>
                                {
                                    carts.data.some(el => el.id == item.id) ?
                                        <div className="wirelessheadphones__cart">
                                            <button onClick={() => dispatch(removeCart(item.id))}>-</button>
                                            <input value={carts.data.find(el => el.id === item.id).count} type="text"/>
                                            <button onClick={() => dispatch(addCart(item.id))}>+</button>
                                        </div> : <button onClick={() => dispatch(addCart(item.id))}>add to cart</button>
                                }

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WiredHeadphones;