import { createSlice } from "@reduxjs/toolkit";
import  UserState from "../models/client/UserState";


const initialState: UserState = {
    currentUser: {
        email: undefined,
        name: undefined,
        cart: undefined,
        isAdmin: false
    },
    loading: false,
    isAuth: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addCurrentUser: (_, action) => {
                return { currentUser: {...action.payload} ,isAuth: true, loading: false}
        },

        isLogin: (state, action) => {
            return {...state, isAuth: action.payload}
        },

        addCartData: (state, action) => {

            state.currentUser.cart.push(action.payload)
            // return {...state, currentUser: {...state.currentUser, cart: action.payload}}
        }
    }
})


export const {
    addCurrentUser,
    isLogin,
    addCartData
  } = userSlice.actions;
  
  export default userSlice.reducer;