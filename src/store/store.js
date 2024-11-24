import {configureStore} from "@reduxjs/toolkit";
import changeFavorites from "../store/reducers/changeFavorites";
import carts from "../store/reducers/Carts"
import user from "../store/reducers/user";

export const store = configureStore({
    reducer: {
        changeFavorites,
        carts,
        user
    }
})