import React, {useEffect, useState} from 'react';
import axios from "axios";
import './WirelessHeadphones.scss'
import logo from '../../Headphones/star.jpg'

const WirelessHeadphones = () => {

    const [earphones, setEarphones] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/wireless_headphones')
            .then(res => setEarphones(res.data))
    }, [])
    return (
        <section className="wirlessheadphones">
            <div className="container">
                <h1 className="wirelessheadphones__title">Беспроводные наушники</h1>
                <div className="wirlessheadphones__row">
                    {
                        earphones.map((item) => (
                            <div key={item.id} className="wirlessheadphones__item">
                                <img className="wiredheadphones__img" src={item.img} alt=""/>
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