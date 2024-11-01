import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/galss-case.jpg'
import logo2 from '../../assets/silicon-case.jpg'
import logo3 from '../../assets/leather-case.jpg'
import './Cases.scss'

const Cases = () => {
    return (
        <section className="cases">
            <div className="container">
                <h1 className="cases__title">Чехлы</h1>
                <div className="cases__row">
                    <Link to="/glass-cases" className="cases__link">
                        <img src={logo} alt="" className="cases__img"/>
                        <h4 className="cases__subtitle">Стеклянные</h4>
                    </Link>
                    <Link to="/silicon-cases" className="cases__link">
                        <img src={logo2} alt="" className="cases__img"/>
                        <h4 className="cases__subtitle">Силиконовые</h4>
                    </Link>
                    <Link to="/leather-cases" className="cases__link">
                        <img src={logo3} alt="" className="cases__img"/>
                        <h4 className="cases__subtitle">Кожаные</h4>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cases;