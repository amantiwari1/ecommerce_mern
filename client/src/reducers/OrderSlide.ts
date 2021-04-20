import {createSlice} from "@reduxjs/toolkit";
import OrderState from "../models/client/OrderState";

const initialState: OrderState = {
  data: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    getOrderData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {getOrderData} = orderSlice.actions;

export default orderSlice.reducer;
