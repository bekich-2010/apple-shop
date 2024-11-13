import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from '../../Cases/case.jpg'
import './LeatherCases.scss'

const LeatherCases = () => {

    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/leather_cases')
            .then(res => setCases(res.data))
    }, [])
    return (
        <section className="leathercases">
            <div className="container">
                <h1 className="leathercases__title">Кожанные чехлы</h1>
                <div className="leathercases__row">
                    {
                        cases.map((item, idx) => (
                            <div className="leathercases__item" key={item.id}>
                                <h4 className="leathercases__item-title">{item.title}</h4>
                                <img src={logo} alt="" className="leathercases__img"/>
                                <p className="leathercases__color">Белый</p>
                                <p className="leathercases__material">Натуральная кожа</p>
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