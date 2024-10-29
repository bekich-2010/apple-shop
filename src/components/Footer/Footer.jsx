import React from 'react';
import WhatsApp from "../../assets/Whatsapp.png"
import Insta from "../../assets/Instagram.png"
import Wk from "../../assets/VK.png"
import Telega from "../../assets/Telegram.png"
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <p>QPICK</p>
                    </div>
                    <div className="footer-links">
                        <a href="#">Избранное</a>
                        <a href="#">Корзина</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="footer-terms">
                        <a href="#">Условия сервиса</a>
                    </div>
                    <div className="footer-languages">
                        <span>🌐</span>
                        <a href="#">Каз</a>
                        <a href="#" className="active">Рус</a>
                        <a href="#">Eng</a>
                    </div>
                    <div className="footer-socials">
                        <a href="#"><img src={Wk} alt="VK" /></a>
                        <a href="#"><img src={Insta} alt="Instagram" /></a>
                        <a href="#"><img src={Telega} alt="Telegram" /></a>
                        <a href="#"><img src={WhatsApp} alt="WhatsApp" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
