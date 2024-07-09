import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async () => {
  const response = await axios.get("http://localhost:3001/api/user");
  return response.data.data;
});

export const loginUser = createAsyncThunk("auth/loginUser", async (user, { dispatch }) => {
  await axios.post("http://localhost:3001/api/user/login", {
    username: user.username,
    password: user.password,
  });
  dispatch(fetchUserData());
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  await axios.delete("http://localhost:3001/api/user/logout");
  dispatch(fetchUserData());
});

export const registerUser = createAsyncThunk("auth/registerUser", async (user, { dispatch }) => {
  await axios.post("http://localhost:3001/api/user/register", {
    username: user.username,
    email: user.email,
    password: user.password,
    passwordConfirm: user.passwordConfirm,
    region: user.region,
  });
  dispatch(fetchUserData());
});

const initialState = {
  isLogin: false,
  user: {
    username: "",
    email: "",
    Region: {
      name: "",
    },
    productOwned: [],
    Carts: [],
    Reviews: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.isLogin = false;
      state.user = {
        username: "",
        email: "",
        Region: {
          name: "",
        },
        productOwned: [],
        Carts: [],
        Reviews: [],
      };
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLogin = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLogin = false;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLogin = false;
      state.user = {
        username: "",
        email: "",
        Region: {
          name: "",
        },
        productOwned: [],
        Carts: [],
        Reviews: [],
      };
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLogin = true;
    });
  },
});

export default authSlice.reducer;
