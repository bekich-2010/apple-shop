import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/galss-case.jpg'
import logo2 from '../../assets/silicon-case.jpg'
import logo3 from '../../assets/leather-case.jpg'
import './Cases.scss'

const Cases = () => {

    const nav = useNavigate()

    return (
        <section className="cases">
            <div className="container">
                <h1 className="cases__title">Чехлы</h1>
                <div className="cases__row">
                    <div onClick={() => nav('/glass-cases')} className="cases__link">
                        <img src={logo} alt="" className="cases__img"/>
                        <h4 className="cases__subtitle">Стеклянные</h4>
                    </div>
                    <div onClick={() => nav('/silicon-cases')} className="cases__link">
                        <img src={logo2} alt="" className="cases__img"/>
                        <h4 className="cases__subtitle">Силиконовые</h4>
                    </div>
                    <div onClick={() => nav('/leather-cases')} className="cases__link">
                        <img src={logo3} alt="" className="cases__img"/>
                        <h4 className="cases__subtitle">Кожаные</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cases;