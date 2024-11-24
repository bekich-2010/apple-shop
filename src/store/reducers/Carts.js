import {createSlice} from "@reduxjs/toolkit";

const carts = createSlice({
    name:'carts',
    initialState:{
        data:[]
    },
    reducers:{
        addCart : (state,action) => {

            if (state.data.some(item => item.id === action.payload)){
                state.data = state.data.map((item) =>{
                    if (item.id === action.payload){
                        return{...item,count: item.count + 1}
                    }
                    return item
                })
            }else {
                state.data = [...state.data, {
                    id: action.payload,
                    count: 1
                }]
            }
        }
    }
})

export const {addCart} = carts.actions
export default carts.reducer;