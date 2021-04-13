import { createSlice } from "@reduxjs/toolkit";
import  UserState from "../models/client/UserState";


const initialState: UserState = {
    currentUser: undefined,
    loading: false,
}


const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

    }
})