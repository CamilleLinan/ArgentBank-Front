import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";
import userService from "../../services/user.service";

export interface UserState {
  userData: User | undefined;
  error: string | null;
}

const initialState: UserState = {
  userData: undefined,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, thunkAPI) => {
    const response = await userService.getUserProfile();
    if (response.success && response.data) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.error);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (
    { firstName, lastName }: { firstName: string; lastName: string },
    thunkAPI
  ) => {
    const response = await userService.updateUserProfile(firstName, lastName);
    if (response.success && response.data) {
      return response.data.body;
    } else {
      return thunkAPI.rejectWithValue(response.error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
