import {configureStore} from '@reduxjs/toolkit';
import configuratorReducer from '../features/configurator/configuratorSlice'
import imagesReducer from '../features/imageManager/imagesSlice'


export const store = configureStore({
    reducer : {
        config : configuratorReducer,
        images : imagesReducer
        

    },
});