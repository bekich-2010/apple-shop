import React from 'react';
import {addCart, removeCart} from "../../store/reducers/carts";
import {useSelector} from "react-redux";

const OneProduct = () => {

    const carts = useSelector(state => state.carts);
    return (
        <section className="one-product">
            <div className="container">
git
            </div>
        </section>
    );
};

export default OneProduct;