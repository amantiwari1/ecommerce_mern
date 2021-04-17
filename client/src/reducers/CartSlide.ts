import { createSlice } from "@reduxjs/toolkit";
import  CartState from "../models/client/CartState";


const initialState: CartState = {
    data: [],
    fullTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        getsCartData: (state, action) => {
            let totalPrice = action.payload.reduce(function (accumulator: any, item: any) {
                return accumulator + item.total;
              }, 0);
            state.data = action.payload 
            state.fullTotal = totalPrice
        },
        updateCartData: (state, action) => {
            for (let cart of state.data) {
                if (cart.id === action.payload.id) {
                    cart.quality += action.payload.value
                    cart.total = cart.quality*cart.price
                    state.fullTotal += (cart.price*action.payload.value)
                }
            }
        },
        removeCartData: (state, action) => {
            let updatedCart = state.data.filter(arr => arr.id !== action.payload )
            state.data = updatedCart
        } 

    }

})


export const {
    getsCartData,
    updateCartData,
    removeCartData
  } = cartSlice.actions;
  
  export default cartSlice.reducer;