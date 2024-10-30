import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import OneProduct from "../pages/OneProduct/OneProduct";
import Main from "../pages/Main/Main"

const routing =createBrowserRouter(
    [
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <Main/>
                },
                {
                    path: "Cart",
                    element: <Cart/>
                },
                {
                    path: "favorites",
                    element: <Favorites/>
                },
                {
                    path: 'product:id',
                    element: <OneProduct/>
                }

            ]
        }
    ]
)
export default routing;