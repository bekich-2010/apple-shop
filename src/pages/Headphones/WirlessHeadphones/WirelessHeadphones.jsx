import React, {useEffect, useState} from 'react';
import axios from "axios";
import './WirelessHeadphones.scss'
import logo from '../../Headphones/star.jpg'
import {useNavigate} from "react-router-dom";

const WirelessHeadphones = () => {

    const [earphones, setEarphones] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/wireless_headphones')
            .then(res => setEarphones(res.data))
    }, [])
    const nav = useNavigate();
    return (
        <section className="wirelessheadphones">
            <div className="container">
                <h1 className="wirelessheadphones__title">Беспроводные наушники</h1>
                <div className="wirelessheadphones__row">
                    {
                        earphones.map((item) => (
                            <div key={item.id} className="wirelessheadphones__item">
                                <img onClick={() => nav(`product/:${item.id}`)} className="wirelessheadphones__img" src={item.img} alt=""/>
                                <h3 className="wirelessheadphones__subtitle">{item.name}</h3>
                                <p className="wirelessheadphones__price">{item.price}</p>
                                <div className="wirelessheadphones__grade">
                                    <img src={logo} alt="" className="wirelessheadphones__star"/>
                                    <span>4.8</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WirelessHeadphones;