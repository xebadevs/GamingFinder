import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { turnGreen } from "./colorChangeSlice";
import { turnBlue } from "./colorChangeSlice";


export function ColorChange(){
    const initialColor = useSelector((state) => state.colorChange.color)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(turnGreen())}>Turn green</button>
            <span style={{color: initialColor}}>I'm the fucking amo</span>
            <button onClick={() => dispatch(turnBlue())}>Turn blue</button>
            <p>Ptrov</p>
        </div>
    )
}