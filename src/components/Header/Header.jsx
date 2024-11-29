import React, {useState} from 'react';
import './Header.scss'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder,MdFavorite} from  "react-icons/md";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Link} from "react-router-dom";
import CartLink from "./CartLink";

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
                        <Link to="/All phones" className="header__choise">Все телефоны</Link>
                    </nav>
                    <div className="header__cartfav">
                        <Link to="/cart">
                            <CartLink/>
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