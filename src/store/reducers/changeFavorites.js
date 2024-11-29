import {createSlice} from "@reduxjs/toolkit";


const changeFavorites = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        toggleFavorites: (state, action) => {
            if (state.data.includes(action.payload)) {
                state.data = state.data.filter(item => item.id !== action.payload)
            } else{
                state.data = [...state.data, action.payload]
            }
        }
    }

})

export const {toggleFavorites} = changeFavorites.actions;
export default changeFavorites.reducer