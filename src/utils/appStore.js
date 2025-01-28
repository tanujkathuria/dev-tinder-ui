import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
  },
});

export default appStore;
