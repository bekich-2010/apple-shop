import React, {useEffect, useState} from 'react';
import axios from "axios";
import './WiredHeadphones.scss'
import {useParams, useNavigate} from 'react-router-dom'
import logo from '../../Headphones/star.jpg'

const WiredHeadphones = () => {

    const [earphones, setEarphones] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/wired_headphones')
            .then((res) => setEarphones(res.data))
    }, []);

    const params = useParams()

    const nav = useNavigate()

    return (
        <section className="wiredheadphones">
            <div className="container">
                <h1 className="wiredheadphones__title">Наушники</h1>
                <div className="wiredheadphones__row">
                    {
                        earphones.map((item) => (
                            <div className="wiredheadphones__item" key={item.id}>
                                <img onClick={() => nav(`/product/:${item.id}`)} className="wiredheadphones__img" src={item.img} alt=""/>
                                <h3 className="wiredheadphones__subtitle">{item.name}</h3>
                                <div className="wiredheadphones__grade">
                                    <img src={logo} alt="" className="wiredheadphones__star"/>
                                    <span>4.7</span>
                                </div>
                                <p className="wiredheadphones__price">{item.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WiredHeadphones;