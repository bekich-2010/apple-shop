import React from 'react';


const Card = ({item}) => {
    return (
        <div className='card'>
            <img className='card__img' src={item.img} alt=""/>
            <div className='card__row'>
                <h2 className='card__title'>{item.title}</h2>
                <p className='card__text'>{item.description}</p>
                <div className='card__content'>
                    <p className='card__content-price'>{item.price} с</p>
                </div>
            </div>
        </div>
    );
};

export default Card;