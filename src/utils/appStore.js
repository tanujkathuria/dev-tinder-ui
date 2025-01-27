import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    feed: feedReducer,
  },
});

export default appStore;
