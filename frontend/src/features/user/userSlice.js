import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance.js";

const initialState = {
    loading: false,
    data: null,
    error: ""
};


export const addUser = createAsyncThunk("user/addUser", async(userData) => {
    try {
        const result = await axiosInstance.post(
            "/user/signup",
            userData
        );
        return result;
    }
    catch (error) {
        return error;
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {

        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = "";
        });

        builder.addCase(addUser.fulfilled, (state) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = "";
        });

        builder.addCase(addUser.rejected, (state) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        });
    }
});


export default userSlice.reducer;