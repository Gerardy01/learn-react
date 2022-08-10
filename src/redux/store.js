import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter';
import nameReducer from './features/name';
import pokemonDataReducer from './features/pokemonData';

export default configureStore({
    reducer: {
        counter: counterReducer,
        nameP: nameReducer,
        pokemonData: pokemonDataReducer
    }
});