import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProperties: [],
};
export const filteredPropertiesSlice = createSlice({
  name: "filteredProperties",
  initialState,
  reducers: {
    filteredProperties: (state, action) => {
      state.filteredVideos = action.payload;
    },
  },
});
export const { filteredProperties } = filteredPropertiesSlice.actions;
export const filteredPropertiesReducer = filteredPropertiesSlice.reducer;
