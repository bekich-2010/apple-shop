import React, {useState} from 'react';
import './Header.scss'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder,MdFavorite} from  "react-icons/md";
import {Link} from "react-router-dom";

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
                <div className="header__nav-div">
                    <nav className="header__nav">
                        <h2 className="header__title">QPICK</h2>
                        <p onClick={() => showPhone(Arrows())} className="header__nav-choise">
                            Выбрать модель телефона
                            <span className="header__nav-sapn">
                                {
                                    active ? <TiArrowSortedUp/> :  <TiArrowSortedDown/>
                                }
                            </span>
                            <ul style={phone ? {display: 'inline'} : {display: 'none'}} className="header__list">
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                                <li className="header__link">iphone12</li>
                            </ul>
                        </p>
                    </nav>
                    <div className="header__cartfav">
                        <Link to="/cart">
                            <IoCartOutline className="header__cart"/>
                        </Link>
                        <Link to='/favorites'>
                            <MdFavoriteBorder className="header__fav"/>
                        </Link>

                    </div>
                </div>
            </div>
        </haeder>
    );
};

export default Header;