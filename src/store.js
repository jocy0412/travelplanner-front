import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./store/reduxSlice";

let user = createSlice({
    name: "user",
    initialState: "kim",
    reducers: {
        // 수정 - 1. 수정 해주는 함수 만들기
        changeName(state) {
            return "john " + state;
        },
    },
});

// 수정 - 2. 수정함수 변수에 담아서 export하기
export let { changeName } = user.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
