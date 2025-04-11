import { configureStore } from "@reduxjs/toolkit";
import basicSlice from "../features/basic/basicSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        basic: basicSlice,
        user: userSlice,
    }
});

export default store;