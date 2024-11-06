import React from 'react';
import logo from '../../assets/vector.jpg'
import logo1 from '../../assets/map.jpg'
import logo2 from '../../assets/Whatsapp.png'
import logo4 from '../../assets/VK.png'
import logo5 from '../../assets/Instagram.png'
import logo6 from '../../assets/Telegram.png'
import logo3 from '../../assets/phone.jpg'
import './Contacts.scss'

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__sides">
                    <div className="contacts__left">
                        <div className="contacts__map">
                            <h4 className="contacts__title">Офис Бекболсуна и Темирлана</h4>
                            <img src={logo1} alt="" className="contacts__img"/>
                            <div className="contacts__location">
                                <img src={logo} alt="" className="contacts__vector"/>
                                <h5 className="contacts__subtitle">Аксай-3а, 62ф,
                                    Алматы, Казахстан <br/> <span className="contacts__floor">
                                3 этаж 35 кабинет</span>
                                </h5>
                            </div>
                        </div>
                        <div className="contacts__phone">
                            <img src={logo3} alt="" className="contacts__phone-img"/>
                            <h3 className="contacts__number">+996 704 011 183 <br/>
                                +996 777 312 112
                            </h3>
                        </div>
                    </div>
                    <div className="contacts__right">
                        <div className="contacts__card">
                            <img src={logo2} alt="" className="contacts__wats"/>
                        </div>
                        <div className="contacts__card">
                            <img src={logo4} alt="" className="contacts__vk"/>
                        </div>
                        <div className="contacts__card">
                            <img src={logo5} alt="" className="contacts__inst"/>
                        </div>
                        <div className="contacts__card">
                            <img src={logo6} alt="" className="contacts__tel"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;