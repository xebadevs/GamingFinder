import { configureStore } from "@reduxjs/toolkit";
import turnToGreen from '../features/colorChangeSlice'

export default configureStore({
    reducer: {
        colorChange: turnToGreen
    },
})