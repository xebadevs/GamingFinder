import { createSlice } from "@reduxjs/toolkit";

export const showWrapperSlice = createSlice({
    name: 'showWrapper',
    initialState: {
        value: false
    },
    reducers: {
        turnTrue: (state) => {
            state.value = true
        },
        turnFalse: (state) => {
            state.value = false
        }
    }
})

export const { turnTrue } = showWrapperSlice.actions
export const { turnFalse } = showWrapperSlice.actions

export default showWrapperSlice.reducer
