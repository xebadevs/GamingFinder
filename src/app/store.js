import { configureStore } from "@reduxjs/toolkit";
import changeColor from '../features/colorChangeSlice'
import changeCondition from '../features/showWrapperSlice'

export default configureStore({
    reducer: {
        colorChange: changeColor,
        showWrapper: changeCondition
    },
})