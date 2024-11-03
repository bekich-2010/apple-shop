import React from 'react';
import logo1 from "../../assets/headphones-1.jpg";
import logo2 from "../../assets/headphones2.jpg";
import logo3 from "../../assets/headphones3.jpg";
import logo4 from "../../assets/star.jpg";
import logo5 from '../../assets/headphones4.jpg'
import logo6 from '../../assets/headphones5.jpg'
import logo7 from '../../assets/headphones.jpg'
import './Headphones.scss'
import {MdFavoriteBorder, MdOutlineFavorite} from "react-icons/md";

const Headphones = () => {
    return (
        <main className="main">
            <section className="headphones">
                <div className="container">
                    <h1 className="headphones__title">Наушники</h1>
                    <div className="headphones__row">
                        <div className="headphones__item">
                         <span className="headphones__like">
                            <MdFavoriteBorder/> <MdOutlineFavorite/>
                        </span>
                            <img src={logo1} alt="" className="headphones__img"/>
                            <div className="headphones__subtpr">
                                <h4 className="headphones__subtitle">Apple BYZ S852I</h4>
                                <p className="headphones__price">505 c</p>
                            </div>
                            <div className="headphones__grade">
                                <img src={logo4} alt="" className="headphones__star"/>
                                <p className="headphones__num">4.7</p>
                            </div>
                        </div>
                        <div className="headphones__item">
                        <span className="headphones__like">
                            <MdFavoriteBorder/> <MdOutlineFavorite/>
                        </span>
                            <img src={logo2} alt="" className="headphones__img"/>
                            <div className="headphones__subtpr">
                                <h4 className="headphones__subtitle">Apple EarPods</h4>
                                <p className="headphones__price">505 c</p>
                            </div>
                            <div className="headphones__grade">
                                <img src={logo4} alt="" className="headphones__star"/>
                                <p className="headphones__num">4.7</p>
                            </div>
                        </div>
                        <div className="headphones__item">
                        <span className="headphones__like">
                            <MdFavoriteBorder/> <MdOutlineFavorite/>
                        </span>
                            <img src={logo3} alt="" className="headphones__img"/>
                            <div className="headphones__subtpr">
                                <h4 className="headphones__subtitle">Apple EarPods</h4>
                                <p className="headphones__price">505 c</p>
                            </div>
                            <div className="headphones__grade">
                                <img src={logo4} alt="" className="headphones__star"/>
                                <p className="headphones__num">4.7</p>
                            </div>
                        </div>
                        <div className="headphones__item">
                        <span className="headphones__like">
                            <MdFavoriteBorder/> <MdOutlineFavorite/>
                        </span>
                            <img src={logo1} alt="" className="headphones__img"/>
                            <div className="headphones__subtpr">
                                <h4 className="headphones__subtitle">Apple BYZ S852I</h4>
                                <p className="headphones__price">505 c</p>
                            </div>
                            <div className="headphones__grade">
                                <img src={logo4} alt="" className="headphones__star"/>
                                <p className="headphones__num">4.7</p>
                            </div>
                        </div>
                        <div className="headphones__item">
                        <span className="headphones__like">
                            <MdFavoriteBorder/> <MdOutlineFavorite/>
                        </span>
                            <img src={logo2} alt="" className="headphones__img"/>
                            <div className="headphones__subtpr">
                                <h4 className="headphones__subtitle">Apple EarPods</h4>
                                <p className="headphones__price">505 c</p>
                            </div>
                            <div className="headphones__grade">
                                <img src={logo4} alt="" className="headphones__star"/>
                                <p className="headphones__num">4.7</p>
                            </div>
                        </div>
                        <div className="headphones__item">
                        <span className="headphones__like">
                            <MdFavoriteBorder/> <MdOutlineFavorite/>
                        </span>
                            <img src={logo3} alt="" className="headphones__img"/>
                            <div className="headphones__subtpr">
                                <h4 className="headphones__subtitle">Apple EarPods</h4>
                                <p className="headphones__price">505 c</p>
                            </div>
                            <div className="headphones__grade">
                                <img src={logo4} alt="" className="headphones__star"/>
                                <p className="headphones__num">4.7</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="headphonesnone">
                <div className="container">
                    <h1 className="headphonesnone__title">Беспроводные наушники</h1>
                    <div className="headphonesnone__row">
                        <div className="headphonesnone__item">
                            <span className="headphonesnone__like">
                                <MdFavoriteBorder/> <MdOutlineFavorite/>
                            </span>
                            <img src={logo5} alt="" className="headphonesnone__img"/>
                            <div className="headphonesnone__subtpr">
                                <h4 className="headphonesnone__subtitle">Apple AirPods</h4>
                                <p className="headphonesnone__price">1300 c</p>
                            </div>
                            <div className="headphonesnone__grade">
                                <img src={logo4} alt="" className="headphonesnone__star"/>
                                <p className="headphonesnone__num">4.7</p>
                            </div>
                        </div>


                        <div className="headphonesnone__item">
                            <span className="headphonesnone__like">
                                <MdFavoriteBorder/> <MdOutlineFavorite/>
                            </span>
                            <img src={logo6} alt="" className="headphonesnone__img"/>
                            <div className="headphonesnone__subtpr">
                                <h4 className="headphonesnone__subtitle">Apple AirPods</h4>
                                <p className="headphonesnone__price">1400 c</p>
                            </div>
                            <div className="headphonesnone__grade">
                                <img src={logo4} alt="" className="headphonesnone__star"/>
                                <p className="headphonesnone__num">4.7</p>
                            </div>
                        </div>
                        <div className="headphonesnone__item">
                            <span className="headphonesnone__like">
                                <MdFavoriteBorder/> <MdOutlineFavorite/>
                            </span>
                            <img src={logo7} alt="" className="headphonesnone__img"/>
                            <div className="headphonesnone__subtpr">
                                <h4 className="headphonesnone__subtitle">Apple AirPods</h4>
                                <p className="headphonesnone__price">1500 c</p>
                            </div>
                            <div className="headphonesnone__grade">
                                <img src={logo4} alt="" className="headphonesnone__star"/>
                                <p className="headphonesnone__num">4.7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Headphones;