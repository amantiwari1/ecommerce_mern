import { createSlice } from "@reduxjs/toolkit";
import  CartState from "../models/client/CartState";


const initialState: CartState = {
    data: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        getsCartData: (state, action) => {
            state.data = action.payload 
        } 
    }

})


export const {
    getsCartData
  } = cartSlice.actions;
  
  export default cartSlice.reducer;