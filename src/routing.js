import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import OneProduct from "./pages/OneProduct/OneProduct";

const routing =createBrowserRouter(
    [
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <Home/>
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