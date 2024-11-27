import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import OneProduct from "../pages/OneProduct/OneProduct";
import Main from "../pages/Main/Main";
import GlassCases from "../pages/Cases/GlassCases/GlassCases";
import SiliconCases from "../pages/Cases/SiliconCases/SiliconCases";
import LeatherCases from "../pages/Cases/LeatherCases/LeatherCases";
import Terms from "../pages/Terms/Terms";
import Contacts from "../pages/Contacts/Contacts";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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
                    path: 'product/:id',
                    element: <OneProduct/>
                },
                {
                    path: "glass-cases",
                    element: <GlassCases/>
                },
                {
                    path: "silicon-cases",
                    element: <SiliconCases/>
                },
                {
                    path: "leather-cases",
                    element: <LeatherCases/>
                },
                {
                    path: "terms-of-services",
                    element: <Terms/>
                },
                {
                    path: "contacts",
                    element: <Contacts/>
                },
                {
                    path: 'register',
                    element: <Register/>
                },
                {
                    path: 'login',
                    element: <Login/>
                }
            ]
        }
    ]
)
export default routing;