import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";
import User from "../models/User";
import {addCurrentUser, isLogin, isLoading} from "../reducers/UserSlice";
import {SERVER_URL, HOST_URL} from '../models/HostUrl'
axios.defaults.withCredentials = true;
axios.defaults.baseURL =  HOST_URL

const userActionCreator = {
  signup: (user: {data: User; history: any}) => async (dispatch: Dispatch) => {

    dispatch(isLoading(true))
    await axios
    .post(`${SERVER_URL}/auth/signup`, user.data)
    .then(() => {
        toast.success("Successfully Created Account Please Sign In");
        user.history.push("/signin");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error("Request failed");
        }
        
      });
      dispatch(isLoading(false))
  },

  login: (user: {data: User; history: any}) => async (dispatch: Dispatch) => {
    dispatch(isLoading(true))
    await axios
      .post(`${SERVER_URL}/auth/signin`, user.data)
      .then((res) => {
        toast.success("Successfully");
        dispatch(addCurrentUser(res.data));
        user.history.push("/");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {

          toast.error("Request failed");
        }
      });
    dispatch(isLoading(false))

  },

  isLogin: () => async (dispatch: Dispatch) => {

    await axios
      .get(`${SERVER_URL}/islogin/verify`)
      .then((res) => {
        dispatch(addCurrentUser(res.data.data));
        dispatch(isLogin(true));
      })
      .catch((err) => {
        dispatch(isLogin(false));
      });

  },

  logout: () => async (dispatch: Dispatch) => {
    dispatch(isLoading(true))

    await axios
      .get(`${SERVER_URL}/auth/logout`)
      .then(() => {
        toast.success("Successfully logged out");
        dispatch(isLogin(false));
      })
      .catch((err) => {
        dispatch(isLogin(false));
      });
    dispatch(isLoading(false))

  },
};

export default userActionCreator;
