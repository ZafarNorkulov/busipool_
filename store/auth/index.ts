import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SignIn from "./service";

export type TypeInitialStateAuth = {
  isAuthenticated: boolean;
  isLoading?: boolean;
  status: "pending" | "success" | "error";
  access_token: string | null;
};

export const initialState: TypeInitialStateAuth = {
  isAuthenticated: false,
  isLoading: false,
  status: "success",
  access_token: null,
};

const SignInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ access: string }>) {
      state.isAuthenticated = true;
      state.access_token = action.payload.access;
      state.status = "success";
    },
    logout(state) {
      state.isAuthenticated = false;
      state.access_token = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignIn.pending, (state) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(
      SignIn.fulfilled,
      (state, action: PayloadAction<{ access: string }>) => {
        console.log("fulfilled", action);
        state.isLoading = false;
        state.isAuthenticated = true;
        state.status = "success";
        state.access_token = action.payload.access;
      }
    );
    builder.addCase(SignIn.rejected, (state,action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.status = "error";

    });
  },
});

export const AUTH_ACTIONS = SignInSlice.actions;

export default SignInSlice.reducer;
