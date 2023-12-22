import { configureStore } from "@reduxjs/toolkit";
import slimSlice from "./slimSlice";

export const store = configureStore({
  reducer: {
    auth: slimSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});