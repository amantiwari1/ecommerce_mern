import axios from "axios";
import { SaveProductSuccess, ProductBegin, GetProductsSuccess } from "../reducers/ProductSlice";
import { Dispatch } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3001";

const productActionCreator = {
  createProduct: (post: any) => async (dispatch: Dispatch) => {
    try {
      dispatch(ProductBegin());
      const result = await axios.post(`${BASE_URL}/product/create`, post);
      dispatch(SaveProductSuccess(result));
    } catch (error) {
      console.error(error);
    }
  },

  getProducts: () => async (dispatch: Dispatch) => {
    try {
      dispatch(ProductBegin());
      const AllProducts = await axios.get(`${BASE_URL}/product/gets`)
      dispatch(GetProductsSuccess(AllProducts.data))
    } catch (error) {
      console.error(error);
    }
  }
};

export default productActionCreator;
