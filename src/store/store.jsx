import React from 'react';
import {createContext, useEffect, useState} from "react"
import axios from "axios";



export const CustomContext = createContext()
const Context = (props) => {
    const [products,setProducts]= useState([])
    const [favorites,setFavorites]= useState([])

    useEffect(()=>{
        axios('http://localhost:3000/products')
            .then(({data})=>setProducts(data))
        if (localStorage.getItem('favorites')!== null){
            setFavorites(JSON.parse(localStorage.getItem('favorites')))        }
    },[])
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])
    let value = {
        favorites,
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};

export default Context