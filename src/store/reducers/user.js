import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const registerUser = createAsyncThunk(
    'post/registerUser',
    async (arg, {rejectWithValue}) => {
        try {
            const res = await axios.post('http://localhost:3000/register', arg)


            return res.data.user

        }catch (err){
            return rejectWithValue(err.message)
        }
    }
)

const user = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers:  {
        logOut : (state, action) => {
            state.user = null
            state.status = 'idle'
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'success'
                state.error = action.payload
            })
    }
})

export const {logOut} = user.actions
export default user.reducer