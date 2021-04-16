import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { addCartData } from "../reducers/UserSlice";
import { getsCartData } from "../reducers/CartSlide";
const BASE_URL = "http://localhost:3001";


const cartActionCreator = {
  addCart: (cart: any) => async (dispatch: Dispatch) => {
    await axios
      .post(`${BASE_URL}/cart/create`, cart)
      .then((res) => {
        toast.success("Successfully");
        dispatch(addCartData(res.data.cart));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  },

  getCarts: () => async (dispatch: Dispatch) => {
    await axios
    .get(`${BASE_URL}/cart/gets`)
    .then((res) => {
      toast.success("Successfully");
      dispatch(getsCartData(res.data.cart));
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
  }
};

export default cartActionCreator;
