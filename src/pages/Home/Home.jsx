import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/maxresdefault.jpg'
import logo1 from '../../assets/headphones-1.jpg'
import logo2 from '../../assets/headphones2.jpg'
import logo3 from '../../assets/headphones3.jpg'
import './Home.scss'
import Cases from "../Cases/Cases";

const Home = () => {
    return (
        <main className="main">
            <section className="accessories">
                <div className="container">
                    <div className="accessories__adds">
                        <h2 className="accessories__title">Аксессуары для <br/>
                            Iphone 13 Pro Max</h2>
                        <img className="accessories__img" src={logo} alt=""/>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default Home;