import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import User from "../models/User";
import { addCurrentUser, isLogin } from "../reducers/UserSlice";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:3001";

const userActionCreator = {
  signup: (user: { data: User; history: any }) => async (
    dispatch: Dispatch
  ) => {
    await axios
      .post(`${BASE_URL}/auth/signup`, user.data)
      .then(() => {
        toast.success("Successfully Created Account Please Sign In");
        user.history.push("/signin");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        user.history.push("/signin");
      });
  },

  login: (user: { data: User; history: any }) => async (dispatch: Dispatch) => {
    await axios
      .post(`${BASE_URL}/auth/signin`, user.data)
      .then((res) => {
        toast.success("Successfully");
        dispatch(addCurrentUser(res.data));
        user.history.push("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  },

  isLogin: () => async (
    dispatch: Dispatch
  ) => {
    await axios
      .get(`${BASE_URL}/islogin/verify`)
      .then((res) => {
        dispatch(addCurrentUser(res.data.data));
        dispatch(isLogin(true));
      })
      .catch((err) => {
        dispatch(isLogin(false));
      });
  },

  logout: () => async (dispatch: Dispatch) => {
    await axios
    .get(`${BASE_URL}/auth/logout`)
    .then(() => {
      toast.success("Successfully logged out");
      dispatch(isLogin(false));
    })
    .catch((err) => {
      dispatch(isLogin(false));
    });
  }
};

export default userActionCreator;
