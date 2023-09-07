import { configureStore } from '@reduxjs/toolkit';  
import { authReducer } from './authentication';
import { uiReducer } from './ui';
import { propertiesReducer } from "./properties";
import { filteredPropertiesReducer } from "./filteredProperties";


export const store = configureStore ({
    reducer: {
        // add reducers here
        authentication: authReducer,
        ui: uiReducer,
        properties: propertiesReducer,
        filteredProperties: filteredPropertiesReducer,
    }
});
