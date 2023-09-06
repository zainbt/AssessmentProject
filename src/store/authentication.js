import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {        
            state.user = null;
        },
    },
});

export const authActions = authenticationSlice.actions;
export const authReducer = authenticationSlice.reducer;