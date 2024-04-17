import {configureStore} from '@reduxjs/toolkit';
import optionsReducer from '../features/options/optionsSlice'
import imagesReducer from '../features/imageManager/imagesSlice'
import selectionReducer from '../features/selection/selectionSlice'


export const store = configureStore({
    reducer : {
        options: optionsReducer,
        images : imagesReducer,
        selection: selectionReducer
        

    },
});