import React from   'react';
import {configureStore} from '@reduxjs/toolkit';
import UserSliceReducer from '../sclices/UserSlice';
export default configureStore({
    reducer:{
        // Reducers go here
        UserDo:UserSliceReducer
    }
})