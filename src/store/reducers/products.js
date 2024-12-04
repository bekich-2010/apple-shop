import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'get/getProducts',
    async (arg, {rejectWithValue}) => {
        try {
            const res = await axios('http://localhost:8080/Glass_cases', arg)
            await axios('http://localhost:8080/Leather_cases', arg)
            await axios('http://localhost:8080/silicone_cases', arg)
            await axios('http://localhost:8080/wired_headphones', arg)
            await axios('http://localhost:8080/wireless_headphones', arg)

            if (res.status !== 200){
                throw new Error('Ошибка при получении товаров')
            }
            return res.data
        }catch(err) {
            return rejectWithValue(err.message);
        }
    }
)

const products = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        filter: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.error = action.payload
            })
    }
})

export default products.reducer