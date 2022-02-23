import { createSlice } from "@reduxjs/toolkit";

export const showWrapperSlice = createSlice({
    name: 'showWrapper',
    initialState: {
        value: false
},
    reducers: {
        showMe: (state) => {
            state.value = true
        },
        hideMe: (state) => {
            state.value = false
        }
    }    
})

export const { showMe } = showWrapperSlice.actions
export const { hideMe } = showWrapperSlice.actions