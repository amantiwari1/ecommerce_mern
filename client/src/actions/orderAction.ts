import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";
import {setEmptyCartData} from "../reducers/CartSlide";
import { getOrderData } from "../reducers/OrderSlide";

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
      .then((res) => {
        dispatch(getOrderData(res.data))
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  },
};

export default orderActionCreator;