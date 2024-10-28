import React, {useState} from 'react';
import './Header.scss'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Header = () => {

    const [active, setActive] = useState(false)
    const [phone, setPhone] = useState(false)
    const showPhone = () => {
        setPhone(!phone)
    }
    const Arrows = () => {
        setActive(!active)
    }
    return (
        <haeder className="header">
            <div className="container">
                <h2 className="header__title">QPICK</h2>
                <div className="header__nav">
                    <nav className="header__nav-div">
                        <p className="header__nav-choise">
                            Выбрать модель телефона
                            <span className="header__nav-sapn">
                                {
                                    active ? <TiArrowSortedDown/> : <TiArrowSortedUp/>
                                }
                            </span>
                            <ul onClick={() => setPhone()} className="header__list">
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                            </ul>
                        </p>
                    </nav>
                </div>
            </div>
        </haeder>
    );
};

export default Header;