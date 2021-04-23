import {createSlice} from "@reduxjs/toolkit";
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
        data: [...state.data, {...action.payload}],
      };
    },
    GetProductsSuccess: (state, action) => {
      return {...state, loading: false, valid: false, data: action.payload};
    },
    GetSingleProductSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        valid: false,
        SingleProduct: {...action.payload},
      };
    },
    SetEmptyProduct: (state) => {
      state.SingleProduct = initialState.SingleProduct;
    },
    UpdateProductData: (state, action) => {
      state.SingleProduct = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload
  },

    deleteImageProductData: (state, action) => {
      state.SingleProduct.ImageArray = state.SingleProduct.ImageArray.filter(
        (arr: string) => arr !== action.payload
      );
    },
  },
});

export const {
  SaveProductSuccess,
  isLoading,
  GetProductsSuccess,
  GetSingleProductSuccess,
  SetEmptyProduct,
  UpdateProductData,
  deleteImageProductData,
} = productSlice.actions;

export default productSlice.reducer;
