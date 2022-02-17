import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { turnGreen } from "./colorChangeSlice";


export function ColorChange(){
    const initialColor = useSelector((state) => state.colorChange.colorSlice)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(turnGreen())}>Click me</button>
            <span>I AM THE TRUTH</span>
            <p>Ptrov</p>
        </div>
    )
}