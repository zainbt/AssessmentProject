import { configureStore } from '@reduxjs/toolkit';  
import { authReducer } from './authentication';
import { uiReducer } from './ui';


export const store = configureStore ({
    reducer: {
        // add reducers here
        authentication: authReducer,
        ui: uiReducer,
    }
})