import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";
import {addCartData} from "../reducers/UserSlice";
import {
  getsCartData,
  updateCartData,
  removeCartData,
  setEmptyCartData,
} from "../reducers/CartSlide";
import {isLogin} from "../reducers/UserSlice";
import {BASE_URL} from '../shared/constants'
axios.defaults.withCredentials = true;
axios.defaults.baseURL =  BASE_URL


const cartActionCreator = {
  addCart: (cart: any) => async (dispatch: Dispatch) => {
    await axios
      .post(`${BASE_URL}/cart/create`, cart.data)
      .then((res) => {
        dispatch(addCartData(res.data.cart));
        cart.history.push("/cart");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          cart.history.push("/signin");
          toast.error("Pleasse Sign In to add your Cart");
        } else {
          toast.error(err.response.data.message);
        }
      });
  },

  getCarts: () => async (dispatch: Dispatch) => {
    await axios
      .get(`${BASE_URL}/cart/gets`)
      .then((res) => {
        dispatch(getsCartData(res.data.cart));
      })
      .catch((err) => {
        dispatch(isLogin(false));

        console.log(err);

        toast.error(err.response.data.message);
      });
  },

  updateCart: (cart: any) => async (dispatch: Dispatch) => {
    dispatch(updateCartData(cart));
  },
  removeCart: (id: string) => async (dispatch: Dispatch) => {
    await axios
      .post(`${BASE_URL}/cart/delete/${id}`)
      .then(() => {
        toast.success("removed");
        dispatch(removeCartData(id));
      })
      .catch((err) => {
        dispatch(isLogin(false));
        toast.error(err.response.data.message);
      });
  },
  removeAllCart: () => async (dispatch: Dispatch) => {
    await axios
      .delete(`${BASE_URL}/cart/deleteall/`)
      .then(() => {
        toast.success("removed all cart items");
        dispatch(setEmptyCartData());
      })
      .catch((err) => {
        dispatch(isLogin(false));
        toast.error(err.response.data.message);
      });
  }
};

export default cartActionCreator;
