import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user.model";
import userService from "../services/user.service";

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  userData: User | undefined;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
  userData: undefined,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    const response = await userService.login(email, password);
    if (response?.success && response.data) {
      const token = response.data.body.token;
      localStorage.setItem("token", token);
      return token;
    } else {
      return thunkAPI.rejectWithValue(response?.error);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, thunkAPI) => {
    const token =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (thunkAPI.getState() as any).auth.token;
    if (token) {
      const response = await userService.getUserProfile(token);
      if (response.success && response.data) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.error);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      localStorage.clear();
      state.token = null;
      state.isLoggedIn = false;
      state.userData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.token = localStorage.getItem("token");
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
