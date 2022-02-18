import { createSlice } from "@reduxjs/toolkit";

export const colorChangeSlice = createSlice({
    name: 'colorChange',
    initialState: {
        colorSlice: 'blue'
    },
    reducers: {
        turnGreen: (state) => {
            state.colorSlice = 'green'
        },
        turnBlue: (state) => {
            state.colorSlice = 'blue'
        }
    }
})

export const { turnGreen } = colorChangeSlice.actions
export const { turnBlue } = colorChangeSlice.actions

export default colorChangeSlice.reducer