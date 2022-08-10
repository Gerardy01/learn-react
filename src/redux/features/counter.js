import { createSlice } from '@reduxjs/toolkit';



export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        plusCount: (state) => {
            state.count += 1;
        },
        minCount: (state) => {
            state.count -= 1;
        },
        addWithValue: (state, action) => {
            state.count += action.payload;
        }
    }
});

export default counterSlice.reducer;
export const { plusCount, minCount, addWithValue } = counterSlice.actions;

