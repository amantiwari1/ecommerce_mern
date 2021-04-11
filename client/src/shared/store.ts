import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../reducers/ProductSlice'



export const store = configureStore({
  reducer: {
    productReducer: ProductReducer
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;