import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Phones.scss'

const Phones = () => {

    useEffect(() => {
        axios('http://localhost:8080/products')
            .then((response) => setPhone(response.data))
    }, []);
    const [phone, setPhone] = useState([])
    return (
        <section className="phones">
            <div className="container">
                <div className="phones__row">
                    {
                        phone.map((item) => (
                            <div className="phones__item" key={item.id}>
                                <h3 className="phones__subtitle">{item.title}</h3>
                                <img src={item.img} alt="" className="phones__img"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Phones;