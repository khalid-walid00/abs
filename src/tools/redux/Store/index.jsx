import { configureStore } from "@reduxjs/toolkit";
import { toggleSliceReducer } from "../Slices/Toggle";

export const store = configureStore({
  reducer: {
    Toggle: toggleSliceReducer,

  },
});
