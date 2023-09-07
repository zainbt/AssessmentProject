import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: false,
    isSignIn: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.modalOpen = !state.modalOpen;
        },
        updateIsSignin: (state, action) => {
            state.isSignIn = action.payload;
        },
    }
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;