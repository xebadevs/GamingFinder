import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { turnTrue } from "./showWrapperSlice";
import { turnFalse } from "./showWrapperSlice";


export function ShowWrapper(){
    const initialCondition = useSelector((state) => state.showWrapper.value)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(turnTrue())}>Turn true</button>
            <span style={{value: initialCondition}}>Turn TRUE or FALSE</span>
            <button onClick={() => dispatch(turnFalse())}>Turn false</button>
        </div>
    )
}