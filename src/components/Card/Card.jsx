import React, {useContext} from 'react';
import {AppleContext} from "../../store/store";
import { MdFavoriteBorder, MdOutlineFavorite} from "react-icons/md";

const Card = (item) => {
    const {favorites, changeFavorites} = useContext(AppleContext)


    return (
        <div className="card">
             <span onClick={() => changeFavorites(item.id)} className='card__favorite'>
                {
                    favorites.includes(item.id) ?
                        <MdFavoriteBorder color={'red'}/>
                        : <MdOutlineFavorite/>
                }
            </span>
            <img src={item.img} alt=""/>
        </div>
    );
};

export default Card;