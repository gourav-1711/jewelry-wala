import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const initialState = {
  user: Cookies.get("user") ? Cookies.get("user") : null,
  isLogin: Cookies.get("user") ? true : false,
  details: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      Cookies.set("user", action.payload, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: 7,
      });
      state.isLogin = true;
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove("user");
      state.isLogin = false;
    },
    register: (state, action) => {
      state.user = action.payload;
      Cookies.set("user", action.payload, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: 7,
      });
      state.isLogin = true;
    },
    setProfile: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { login, logout, register, setProfile } = authSlice.actions;
export default authSlice.reducer;

// thunk for fetching profile
export const fetchProfile = () => async (dispatch) => {
  const token = Cookies.get("user");
  if (!token) {
    return;
  }
  axios
    .post(
      process.env.NEXT_PUBLIC_API_URL + "/user/view-profile",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      dispatch(setProfile(res.data._data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
