import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlices";

const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export default store;