import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        status: false,
    },
    reducers: {
        createLoginSession: (state) => {
            state.status = true;
        },
        removeLoginSession: (state) => {
            state.status = false;
        },
    }
})


export const { createLoginSession, removeLoginSession } = loginSlice.actions
export default loginSlice.reducer