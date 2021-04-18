import axios from "axios";
import { SaveProductSuccess, UpdateProductData, ProductBegin, GetProductsSuccess , GetSingleProductSuccess, SetEmptyProduct} from "../reducers/ProductSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const BASE_URL = "http://localhost:3001";

const productActionCreator = {
  createProduct: (post: any) => async (dispatch: Dispatch) => {
    
      dispatch(ProductBegin());

      
      
        await axios.post(`${BASE_URL}/product/create`, post) 
        .then(res => {  
          toast.success("Successfully")
          dispatch(SaveProductSuccess(res.data))  
        })    
        .catch(err => {  
          toast.error(err.response.data.message)
          console.log(err.response.data.message);
          
        }); 
     
  
  
  },

  getProducts: () => async (dispatch: Dispatch) => {

    await axios.get(`${BASE_URL}/product/gets`) 
        .then(res => {  
          dispatch(GetProductsSuccess(res.data))  
        })    
        .catch(err => {
            if (err.response) {
              toast.error(err.response.data.message)
            } else {
              toast.error("requested failed")

            }
        }); 
  },


  getCategoryProducts: (category: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(ProductBegin());
      const AllProducts = await axios.get(`${BASE_URL}/product/getsCategories?category=${category}`)
      dispatch(GetProductsSuccess(AllProducts.data))
    } catch (error) {
      console.error(error);
    }
  },
  getProduct: (titleslug: string) => async (dispatch: Dispatch) => {
    await axios.get(`${BASE_URL}/product/get/${titleslug}`) 
    .then(res => {  
      dispatch(GetSingleProductSuccess(res.data))  
    })    
    .catch(err => {  
      toast.error(err.response.data.message) 
    }); 
  },

  setProductEmpty: () => async (dispatch: Dispatch) => {

    
    dispatch(SetEmptyProduct())
  },
  updateProduct: (data: any) => async (dispatch: Dispatch) => {

    await axios.post(`${BASE_URL}/product/update/`, data.data) 
    .then(res => {  
      dispatch(UpdateProductData(res.data))
      data.history.go(-1);
    })    
    .catch(err => {  
      toast.error(err.response.data.message) 
      
    }); 
  },
  deleteProduct: (data: any) => async (dispatch: Dispatch) => {
    
    await axios.delete(`${BASE_URL}/product/delete/${data.id}`) 
    .then(() => {  
      dispatch(SetEmptyProduct())
      toast.success("deleled")
      data.history.go(-1);
    })    
    .catch(err => {  
      console.log(err);
      toast.error(err.response.data.message) 
      
    }); 
  }

  


};

export default productActionCreator;
