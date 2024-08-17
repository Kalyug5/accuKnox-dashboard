import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./components/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});
