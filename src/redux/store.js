import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter';
import nameReducer from './features/name'

export default configureStore({
    reducer: {
        counter: counterReducer,
        nameP: nameReducer
    }
});