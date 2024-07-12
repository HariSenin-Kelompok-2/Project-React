import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async () => {
  const response = await axios.get("http://localhost:3001/api/user");
  return response.data.data;
});

export const loginUser = createAsyncThunk("auth/loginUser", async (user, { dispatch, rejectWithValue }) => {
  try {
    await axios.post("http://localhost:3001/api/user/login", {
      username: user.username,
      password: user.password,
    });
    dispatch(fetchUserData());
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return rejectWithValue(message);
    }
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  await axios.delete("http://localhost:3001/api/user/logout");
  dispatch(fetchUserData());
});

export const registerUser = createAsyncThunk("auth/registerUser", async (user, { dispatch, rejectWithValue }) => {
  try {
    await axios.post("http://localhost:3001/api/user/register", {
      username: user.username,
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
      region: user.region,
    });
    dispatch(fetchUserData());
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return rejectWithValue(message);
    }
    return rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk("auth/editUser", async (user, { dispatch, rejectWithValue }) => {
  try {
    await axios.patch("http://localhost:3001/api/user", user);
    dispatch(fetchUserData());
  } catch (error) {
    if (error.response) {
      const message = error.response.data;
      return rejectWithValue(message);
    }
    return rejectWithValue(error.message);
  }
});

const initialState = {
  isLogin: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  user: null,
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
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLogin = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLogin = false;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLogin = false;
      state.user = null;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLogin = true;
    });
  },
});

export default authSlice.reducer;
