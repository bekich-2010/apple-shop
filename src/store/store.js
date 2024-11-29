import {configureStore} from "@reduxjs/toolkit";
import changeFavorites from "../store/reducers/changeFavorites";
import carts from "./reducers/carts"
import user from "../store/reducers/user";
import products from "../store/reducers/products";

export const store = configureStore({
    reducer: {
        changeFavorites,
        carts,
        user,
        products
    }
})