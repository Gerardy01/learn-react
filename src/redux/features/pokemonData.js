import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const getPokemonData = createAsyncThunk("pokemonData/getPokemonData", async () => {
    return fetch("https://pokeapi.co/api/v2/pokemon").then(res => {
        return res.json()
    });
});

const pokemonDataSlice = createSlice({
    name: "pokemonData",
    initialState: {
        loading: false,
        data: [],
        fail: false
    },
    extraReducers: {
        [getPokemonData.pending]: (state, action) => {
            state.loading = true;
        },
        [getPokemonData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getPokemonData.rejected]: (state, action) => {
            state.loading = false;
            state.fail = true;
        }
    }
});

export default pokemonDataSlice.reducer;