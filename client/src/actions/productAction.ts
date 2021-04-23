import axios from "axios";
import {
  SaveProductSuccess,
  UpdateProductData,
  GetProductsSuccess,
  GetSingleProductSuccess,
  SetEmptyProduct,
  isLoading,
  deleteImageProductData,
} from "../reducers/ProductSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {SERVER_URL} from '../models/HostUrl'
axios.defaults.withCredentials = true;
axios.defaults.baseURL =  SERVER_URL

const productActionCreator = {
  createProduct: (post: any) => async (dispatch: Dispatch) => {
    dispatch(isLoading(true));
    
    const config = {headers: {"Content-Type": "multipart/form-data"}};
    
    await axios
    .post(`${SERVER_URL}/product/create`, post, config)
    .then((res) => {
      toast.success("Successfully");
      dispatch(SaveProductSuccess(res.data));
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err.response.data.message);
        console.error(err.response.data.message);
      } else {
        toast.error("Request failed");
      }
    });
    dispatch(isLoading(false));
  },

  getProducts: () => async (dispatch: Dispatch) => {
    dispatch(isLoading(true));

    await axios
      .get(`${SERVER_URL}/product/gets`)
      .then((res) => {
        dispatch(GetProductsSuccess(res.data));
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error("requested failed");
        }
      });

    dispatch(isLoading(false));

  },

  getCategoryProducts: (category: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(isLoading(true));
      const AllProducts = await axios.get(
        `${SERVER_URL}/product/getsCategories?category=${category}`
      );


      dispatch(GetProductsSuccess(AllProducts.data));


      
    } catch (error) {
      toast.error("requested failed");
      console.error(error);
    }
    dispatch(isLoading(false));
  },
  getProduct: (titleslug: string) => async (dispatch: Dispatch) => {
    dispatch(isLoading(true));

    await axios
      .get(`${SERVER_URL}/product/get/${titleslug}`)
      .then((res) => {
        dispatch(GetSingleProductSuccess(res.data));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    dispatch(isLoading(false));

  },

  setProductEmpty: () => async (dispatch: Dispatch) => {
    dispatch(SetEmptyProduct());
  },
  updateProduct: (data: any) => async (dispatch: Dispatch) => {
    dispatch(isLoading(true));

    await axios
      .post(`${SERVER_URL}/product/update/${data.data.get("_id")}`, data.data)
      .then((res) => {
        dispatch(UpdateProductData(res.data));
        data.history.go(-1);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
          console.error(err.response.data.message);
        } else {
          toast.error("Request failed");
        }
      });

    dispatch(isLoading(false));

  },
  deleteProduct: (data: any) => async (dispatch: Dispatch) => {
    dispatch(isLoading(true));

    await axios
      .delete(`${SERVER_URL}/product/delete/${data.id}`)
      .then(() => {
        dispatch(SetEmptyProduct());
        toast.success("deleled");
        data.history.go(-1);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });

    dispatch(isLoading(false));

  },

  deleteImageProduct: (id: string, file: string) => async (
    dispatch: Dispatch
  ) => {

    dispatch(isLoading(true));

    await axios
      .delete(`${SERVER_URL}/product/deleteImage/${id}/${file}`)
      .then(() => {
        dispatch(deleteImageProductData(file));
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });

    dispatch(isLoading(false));

  },

  
};

export default productActionCreator;
