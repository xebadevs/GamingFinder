import { createSlice } from "@reduxjs/toolkit";

export const colorChangeSlice = createSlice({
    name: 'colorChange',
    initialState: {
        color: 'blue'
    },
    reducers: {
        turnGreen: (state) => {
            state.color = 'green'
        },
        turnBlue: (state) => {
            state.color = 'blue'
        }
    }
})

export const { turnGreen } = colorChangeSlice.actions
export const { turnBlue } = colorChangeSlice.actions

export default colorChangeSlice.reducer