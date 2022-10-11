import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        changeCount(state, action) {
            const findId = action.payload;

            let num = state.findIndex((item) => {
                return item.id === findId;
            });
            state[num].count++;
        },
        addItem(state, action) {
            let checkId = state.findIndex((item) => {
                return item.id === action.payload.id;
            });

            if (checkId === -1) {
                state.push(action.payload);
            } else {
                state[checkId].count++;
            }
        },
    },
});
export let { changeCount, addItem } = cart.actions;

export default cart;
