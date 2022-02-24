import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { turnTrue } from "./showWrapperSlice";
import { turnFalse } from "./showWrapperSlice";

export function ShowWrapper(){
    const initialCondition = useSelector((state) => state.value.false)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(turnTrue())}>Turn true</button>
            <span style={{color: initialCondition}}>Turn TRUE or FALSE</span>
            <button onClick={() => dispatch(turnFalse())}>Turn false</button>
        </div>
    )
}