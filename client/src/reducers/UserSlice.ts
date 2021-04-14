import { createSlice } from "@reduxjs/toolkit";
import  UserState from "../models/client/UserState";


const initialState: UserState = {
    currentUser: undefined,
    loading: false,
    isAuth: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addCurrentUser: (state) => {
                return { ...state ,isAuth: true, loading: false}
        },

        isLogin: (state, action) => {
            return {...state, isAuth: action.payload}
        }
    }
})


export const {
    addCurrentUser,
    isLogin
  } = userSlice.actions;
  
  export default userSlice.reducer;