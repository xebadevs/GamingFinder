import { createSlice } from "@reduxjs/toolkit";

export const colorChangeSlice = createSlice({
    name: 'colorChange',
    initialState: {
        colorSlice: 'blue'
    },
    reducers: {
        turnGreen: (state) => {
            state.colorSlice = 'green'
        }
    }
})

export const { turnGreen } = colorChangeSlice.actions

export default colorChangeSlice.reducer