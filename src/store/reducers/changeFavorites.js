import {createSlice} from "@reduxjs/toolkit";


const reducers = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {

    }

})

export default reducers.reducer