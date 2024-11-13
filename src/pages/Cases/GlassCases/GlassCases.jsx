import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from "../GlassCases/case.webp";
import './GlassCases.scss'

const GlassCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/Glass_cases')
            .then(res => setCases(res.data))
    }, [])

    return (
        <div className="glasscases">
            <div className="container">
                <h1 className="glasscases__title">Стеклянные чехлы</h1>
                <div className="glasscases__row">
                    {
                        cases.map((item) => (
                            <div className="glasscases__item" key={item.id}>
                                <h4 className="glasscases__item-title">{item.title}</h4>
                                <img src={logo} alt="" className="glasscases__img"/>
                                <p className="glasscases__color">Прозрачный</p>
                                <p className="glasscases__material">Стекло</p>
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