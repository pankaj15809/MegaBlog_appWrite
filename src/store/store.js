import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice
    // Add the reducer here
  },
});

export default store;
