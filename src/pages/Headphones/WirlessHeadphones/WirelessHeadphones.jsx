import React, {useEffect, useState} from 'react';
import axios from "axios";
import './WirelessHeadphones.scss'
import logo from '../../Headphones/star.jpg'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCart, removeCart} from "../../../store/reducers/carts";

const WirelessHeadphones = () => {

    const [earphones, setEarphones] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/wireless_headphones')
            .then(res => setEarphones(res.data))
    }, [])
    const nav = useNavigate();
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts)
    return (
        <section className="wirelessheadphones">
            <div className="container">
                <h1 className="wirelessheadphones__title">Беспроводные наушники</h1>
                <div className="wirelessheadphones__row">
                    {
                        earphones.map((item) => (
                            <div key={item.id} className="wirelessheadphones__item">
                                <img onClick={() => nav(`wireless-headphone/product/${item.id}`)} className="wirelessheadphones__img" src={item.img} alt=""/>
                                <h3 className="wirelessheadphones__subtitle">{item.name}</h3>
                                <p className="wirelessheadphones__price">{item.price}</p>
                                <div className="wirelessheadphones__grade">
                                    <img src={logo} alt="" className="wirelessheadphones__star"/>
                                    <span>4.8</span>
                                </div>
                                <p className="wirelessheadphones__price">{item.price}</p>
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

export default WirelessHeadphones;