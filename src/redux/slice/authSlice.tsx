import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../services/user.service";

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
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
      return token;
    } else {
      return thunkAPI.rejectWithValue(response?.error);
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
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
