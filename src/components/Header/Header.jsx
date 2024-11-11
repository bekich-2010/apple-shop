import React, {useState} from 'react';
import './Header.scss'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder,MdFavorite} from  "react-icons/md";
import {Link} from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const Header = () => {
    const [active, setActive] = useState(false)
    const [phone, setPhone] = useState(false)
    const showPhone = () => {
        setPhone(!phone)
    }
    const Arrows = () => {
        setActive(!active)
    }

    let arr = [
        {
                id: 4,
                phone: "iphone 13"
            },
        {
                id: 5,
                phone: "iphone 13 pro"
            },
        {
                id: 7,
                phone: "iphone 14"
            },
        {
                id: 8,
                phone: "iphone 14 pro"
            },
        {
                id: 9,
                phone: "iphone 15"
            },
        {
                id: 10,
                phone: "iphone 15 pro"
            },
        {
                id: 11,
                phone: "iphone 16"
            },
        {
                id: 12,
                phone: "iphone 16 pro"
            }

    ]
    return (
        <haeder className="header">
            <div className="container">
                <div className="header__nav-div">
                    <nav className="header__nav">
                        <h2 className="header__title">QPICK</h2>
                                <Accordion className="header__acc" style={{background: 'none', boxShadow: 'none',}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Выбрать модель телефона
                                    </AccordionSummary>
                                    <AccordionDetails style={{height: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        {
                                            arr.map((item) => (
                                                    <a style={{borderRadius: '50px',
                                                        marginBottom: '5px'
                                                    }} className="header__choise" href="">{item.phone}</a>
                                            ))
                                        }
                                    </AccordionDetails>
                                </Accordion>
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