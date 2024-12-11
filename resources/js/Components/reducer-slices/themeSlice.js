import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarShow: true,
    toast: 0,
    unfoldable: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleSidebar: (state, value) => {
            state.sidebarShow = value.payload;
        },
        toggleUnfoldable: (state, value) => {
            state.unfoldable = value.payload;
        },
        thToast: (state, { payload }) => {
            state.toast = payload;
        },
    },
});

export const { toggleSidebar, toggleUnfoldable, thToast } = themeSlice.actions;

export default themeSlice.reducer;
