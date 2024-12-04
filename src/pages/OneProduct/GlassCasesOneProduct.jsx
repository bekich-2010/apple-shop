import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import logo from '../Cases/GlassCases/case.webp'
import {addCart, removeCart} from "../../store/reducers/carts";
import {useDispatch, useSelector} from "react-redux";

const GlassCasesOneProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios(`http://localhost:8080/Glass_cases/${params.id}`)
            .then(res => setProduct(res.data))
    }, []);
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts)
    const params = useParams()
    return (
        <section className="glassone">
            <div className="container">
                <div className="glassone__product">
                    <img src={logo} alt=""/>
                    <p>{product.description}</p>
                </div>
                {
                    carts.data.some(el => el.id === product.id) ?
                        <div className="">
                            <button onClick={() => dispatch(removeCart(product.id))}>-</button>
                            <input value={carts.data.find(el => el.id === product.id).count} type="text"/>
                            <button onClick={() => dispatch(addCart(product.id))}>+</button>
                        </div> : <button onClick={() => dispatch(addCart(product.id))}>add to cart</button>
                }
            </div>
        </section>
    );
};

export default GlassCasesOneProduct;