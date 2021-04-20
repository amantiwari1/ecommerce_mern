import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";
import {setEmptyCartData} from "../reducers/CartSlide";

const BASE_URL = "http://localhost:3001";

const orderActionCreator = {
  orderCart: (data: any) => async (dispatch: Dispatch) => {
    await axios
      .post(`${BASE_URL}/order/create`, data.cart)
      .then(() => {
        toast.success("ordered");
        dispatch(setEmptyCartData());
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  },

  getOrderData: () => async (dispatch: Dispatch) => {
    await axios
      .get(`${BASE_URL}/order/read`)
      .then(() => {
        // TODO: add all order to state
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  },
};

export default orderActionCreator;
