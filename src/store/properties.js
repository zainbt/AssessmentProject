import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
   
    properties: (state, action) => {
      state.properties = action.payload;
    },
  
  },
});

export const { properties } = propertiesSlice.actions;
export const propertiesReducer = propertiesSlice.reducer;
