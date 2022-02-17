import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { turnGreen } from "./colorChangeSlice";
import styles from "../../src/index.css"

export function ColorChange(){
    const initialColor = useSelector((state) => state.colorChange.colorSlice)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(turnGreen())}>Click me</button>
            {/* <span style={backgroundColor='blue'}>I AM THE TRUTH</span> */}
        </div>
    )
}