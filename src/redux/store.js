import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/Counterslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
