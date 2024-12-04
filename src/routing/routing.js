import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import Main from "../pages/Main/Main";
import GlassCases from "../pages/Cases/GlassCases/GlassCases";
import SiliconCases from "../pages/Cases/SiliconCases/SiliconCases";
import LeatherCases from "../pages/Cases/LeatherCases/LeatherCases";
import Terms from "../pages/Terms/Terms";
import Contacts from "../pages/Contacts/Contacts";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Phones from "../pages/Phones/Phones";
import LeatherCasesOneProduct from "../pages/OneProduct/LeatherCasesOneProduct";
import GlassCasesOneProduct from "../pages/OneProduct/GlassCasesOneProduct";
import SiliconCasesOneProduct from "../pages/OneProduct/SiliconCasesOneProduct";
import PhoneOneProduct from "../pages/OneProduct/PhoneOneProduct";
import WiredOneProduct from "../pages/OneProduct/WiredOneProduct";
import WirelessOneProduct from "../pages/OneProduct/WirelessOneProduct";

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
                    path: "All phones",
                    element: <Phones/>
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
                    path: 'leather-cases/product/:id',
                    element: <LeatherCasesOneProduct/>
                },
                {
                    path: 'glass-cases/product/:id',
                    element: <GlassCasesOneProduct/>
                },
                {
                    path: 'silicon-cases/product/:id',
                    element: <SiliconCasesOneProduct/>
                },
                {
                    path: 'phone/product/:id',
                    element: <PhoneOneProduct/>
                },
                {
                    path: '/wired-headphone/product/:id',
                    element: <WiredOneProduct/>
                },
                {
                    path: '/wireless-headphone/product/:id',
                    element: <WirelessOneProduct/>
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