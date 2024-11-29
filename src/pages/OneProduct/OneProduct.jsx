import React, {useEffect, useState} from 'react';
import {addCart, removeCart} from "../../store/reducers/carts";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useParams} from "react-router-dom";

const OneProduct = (item) => {
    const dispatch = useDispatch()

    const carts = useSelector(state => state.carts);

    const params = useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios('http://localhost:8080/wired_headphones')
            .then((res) => setProduct(res.data))
    }, []);
    useEffect(() => {
        axios('http://localhost:8080/wireless_headphones')
            .then((res) => setProduct(res.data))
    }, [])

    const isItemInCart = carts.data.some(el => el.id === item.id);
    return (
        <section className="product">
            <div className="container">
                <div className="product__main">
                </div>
                {
                    isItemInCart ?
                        <div>
                            <button onClick={() => dispatch(removeCart(item.id))}>-</button>
                            <input type="text" />
                            <button onClick={() => dispatch(addCart(item.id))}>+</button>
                        </div> :
                        <button onClick={() => dispatch(addCart(item.id))}>В корзину</button>
                }
            </div>
        </section>
    );
};

export default OneProduct;