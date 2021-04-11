import { createSlice } from '@reduxjs/toolkit'
import ProductState from '../models/client/PorudactState'
  
  // Define the initial state using that type
  const initialState: ProductState = {
    loading: false,
    valid: false,
    data: [],
  }

export const productSlice = createSlice({
  name:'product',
  initialState: initialState,
  reducers: {
    SaveProductSuccess: (state, action) => { 
      return { loading: false, valid: false , data: [...state.data, {...action.payload}]} 
    },
    ProductBegin: (state) => {
      return { ...state, loading: true, valid: true } 
    },
    GetProductsSuccess: (state, action) => {
      return {loading: false, valid:false, data: action.payload} 
    }
  }
}) 
  
export const { SaveProductSuccess, ProductBegin, GetProductsSuccess } = productSlice.actions

export default productSlice.reducer
  