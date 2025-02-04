import { configureStore } from "@reduxjs/toolkit";
import basicSlice from "../features/basic/basicSlice";

const store = configureStore({
    reducer: {
        basic: basicSlice,

    }
});

export default store;