import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

// Mengecek session dari server (cookies)
export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const response = await api.get("/auth/check", { withCredentials: true });
    return response.data; // { isAuthenticated: true, user: {...} }
  } catch (error) {
    return { isAuthenticated: false, user: null };
  }
});

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await api.post("/auth/logout", {}, { withCredentials: true });
  return { isAuthenticated: false, user: null };
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;