import {configureStore} from "@reduxjs/toolkit";
import changeFavorites from "../store/reducers/changeFavorites";
import addCart from "../store/reducers/addCart";
import removeCart from "../store/reducers/removeCart";
import user from "../store/reducers/user";

export const store = configureStore({
    reducer: {
        changeFavorites,
        addCart,
        removeCart,
        user
    }
})