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
import Cart from "../models/cart";

const BASE_URL = "http://localhost:3001";

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

  // TODO: remove all cart including api
};

export default cartActionCreator;
