import React, {useContext, useState} from 'react';
import './Favorites.scss'
import {AppleContext} from "../../store/store";
import Card from "../../components/Card/Card";

const Favorite = () => {
    const {products, favorites} = useContext(AppleContext)

    const favoriteItems = products.filter(products => favorites.includes(products.id))

    if (favoriteItems.length) {
        return(
            <section className="favorites">
                <div className="container">
                    <div className="favorites__row">
                        {
                            favoriteItems.map(item => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
};

export default Favorite;