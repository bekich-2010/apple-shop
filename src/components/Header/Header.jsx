import React, {useState} from 'react';
import './Header.scss'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {

    const [showPhone, setShowPhone] = useState(false)
    const [active, setActive] = useState(false)
    const dropChoise = () => {
        setShowPhone(!showPhone);
    }
    const activeArrow = () => {
        setActive(active => !active);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__nav-div">
                    <nav className="header__nav">
                        <h1 className="header__title">QPICK</h1>
                        <p onClick={() => setShowPhone(dropChoise)} className="header__choise">Выбрать модель
                            телефона
                            <span className="header__nav-arr">
                            {
                                active ? <IoIosArrowUp/>
                                    : <IoIosArrowDown/>
                            }
                        </span>
                            <ul style={showPhone ? {display: "inline"} : {display: "none"}}
                                className="header__list">
                                <li className="header__link">iphone 12</li>
                                <li className="header__link">iphone 12</li>
                                <li className="header__link">iphone 12</li>
                                <li className="header__link">iphone 12</li>
                                <li className="header__link">iphone 12</li>
                            </ul>
                        </p>


                    </nav>
                    <div className="header__cart-fav">
                        <MdFavoriteBorder/>
                        <FiShoppingCart/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;