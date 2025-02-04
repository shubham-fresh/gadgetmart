import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "isSidebarActive": true,
}

const basicSlice = createSlice({
    name: "basic",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarActive = !state.isSidebarActive;
        }
    }
});

export const { toggleSidebar } = basicSlice.actions;
export default basicSlice.reducer;