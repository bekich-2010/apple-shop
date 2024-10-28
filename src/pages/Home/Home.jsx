import React from 'react';
import logo from '../../assets/iphone.jpg'
import './Home.scss'

const Home = () => {
    return (
        <section className="accessories">
            <div className="container">
                <div className="accessories__adds">
                    <h2 className="accessories__title">Аксессуары для <br/>
                        Iphone 13 Pro Max</h2>
                    <img className="accessories__img" src={logo} alt=""/>
                </div>
            </div>
        </section>
        
    );
};

export default Home;