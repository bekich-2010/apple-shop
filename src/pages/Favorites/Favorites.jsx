import React from 'react';
import './Favorites.scss'
import {toggleFavorites} from "../../store/reducers/changeFavorites";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import logo from "../Headphones/star.jpg";
import {addCart, removeCart} from "../../store/reducers/carts";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Favorite = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.products);
    const favorites = useSelector((state) => state.changeFavorites)
    const nav = useNavigate()
    const carts = useSelector(state => state.carts)
        return(
            <section className="favorites">
                {/*<div className="container">*/}
                {/*    <div className="favorites__row">*/}
                {/*        {*/}
                {/*            data.filter(el => el.data.includes(el.id)).map((item) => (*/}
                {/*                <div className="wiredheadphones__item" key={item.id}>*/}
                {/*                <span onClick={() => dispatch(toggleFavorites(item.id))} className="wirelessheadphones__fav">*/}
                {/*                    {*/}
                {/*                        favorites.data.includes(item.id) ? <MdFavoriteBorder/>*/}
                {/*                            : <MdFavorite/>*/}
                {/*                    }*/}
                {/*                </span>*/}
                {/*                    <img onClick={() => nav(`/product/:${item.id}`)} className="wiredheadphones__img" src={item.img} alt=""/>*/}
                {/*                    <h3 className="wiredheadphones__subtitle">{item.name}</h3>*/}
                {/*                    <div className="wiredheadphones__grade">*/}
                {/*                        <img src={logo} alt="" className="wiredheadphones__star"/>*/}
                {/*                        <span>4.7</span>*/}
                {/*                    </div>*/}
                {/*                    <p className="wiredheadphones__price">{item.price}</p>*/}
                {/*                    {*/}
                {/*                        carts.data.some(el => el.id === item.id) ?*/}
                {/*                            <div className="wirelessheadphones__cart">*/}
                {/*                                <button onClick={() => dispatch(removeCart(item.id))}>-</button>*/}
                {/*                                <input value={carts.data.find(el => el.id === item.id).count} type="text"/>*/}
                {/*                                <button onClick={() => dispatch(addCart(item.id))}>+</button>*/}
                {/*                            </div> : <button onClick={() => dispatch(addCart(item.id))}>add to cart</button>*/}
                {/*                    }*/}

                {/*                </div>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        )
};

export default Favorite;