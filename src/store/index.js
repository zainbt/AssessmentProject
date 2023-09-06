import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authentication";
import { propertiesReducer } from "./properties";

export const store = configureStore({
  reducer: {
    // add reducers here
    authentication: authReducer,
    properties: propertiesReducer,
  },
});
