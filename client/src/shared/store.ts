import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "../reducers/ProductSlice";
import UserSlice from "../reducers/UserSlice";
import CartSlice from "../reducers/CartSlide";

export const store = configureStore({
  reducer: {
    productReducer: ProductReducer,
    userReducer: UserSlice,
    cartReducer: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
