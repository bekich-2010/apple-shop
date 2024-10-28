import React, {useState} from 'react';
import './Header.scss'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Header = () => {

    const [active, setActive] = useState(false)

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
                                    Arrows
                                }
                            </span>
                        </p>
                    </nav>
                </div>
            </div>
        </haeder>
    );
};

export default Header;