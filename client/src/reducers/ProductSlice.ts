import { createSlice } from "@reduxjs/toolkit";
import ProductState from "../models/client/PorudactState";

// Define the initial state using that type
const initialState: ProductState = {
  loading: false,
  valid: false,
  data: [],
  SingleProduct: {
    title: "",
    ImageArray: [],
    category: "",
    description: "",
    featureImage: "",
    price: 0,
    titleslug: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    SaveProductSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        valid: false,
        data: [...state.data, { ...action.payload }],
      };
    },
    ProductBegin: (state) => {
      return { ...state, loading: true, valid: true };
    },
    GetProductsSuccess: (state, action) => {
      return { ...state, loading: false, valid: false, data: action.payload };
    },
    GetSingleProductSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        valid: false,
        SingleProduct: { ...action.payload },
      };
    },
    SetEmptyProduct: (state) => {
      state.SingleProduct = initialState.SingleProduct
    },
    UpdateProductData: (state, action) => {
      state.SingleProduct = action.payload
    },
  },


});


export const {
  SaveProductSuccess,
  ProductBegin,
  GetProductsSuccess,
  GetSingleProductSuccess,
  SetEmptyProduct,
  UpdateProductData
} = productSlice.actions;

export default productSlice.reducer;
