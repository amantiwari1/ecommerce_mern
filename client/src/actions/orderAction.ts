import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";
import {setEmptyCartData} from "../reducers/CartSlide";
import { getOrderData } from "../reducers/OrderSlide";
import {SERVER_URL, HOST_URL} from '../models/HostUrl'
axios.defaults.withCredentials = true;
axios.defaults.baseURL =  HOST_URL

const orderActionCreator = {
  orderCart: (data: any) => async (dispatch: Dispatch) => {
    await axios
      .post(`${SERVER_URL}/order/create`, data.cart)
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
      .get(`${SERVER_URL}/order/read`)
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
