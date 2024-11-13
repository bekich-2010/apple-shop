import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from "../../Cases/SiliconCases/case.webp";
import './SiliconCases.scss'

const SiliconCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/silicone_cases')
            .then(res => setCases(res.data))
            .catch(err => console.log(err));
    }, [])
    return (

        <div className="siliconcases">
            <div className="container">
                <h1 className="siliconcases__title">Силиконовые чехлы</h1>
                <div className="siliconcases__row">
                    {
                        cases.map((item) => (
                            <div className="siliconcases__item" key={item.id}>
                                <h4 className="siliconcases__item-title">{item.title}</h4>
                                <img src={logo} alt="" className="leathercases__img"/>
                                <p className="siliconcases__color">Синий</p>
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