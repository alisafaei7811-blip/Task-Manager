import { useContext, useState } from "react";
import {UseContext} from "../context/TaskContext"
export function TaskFrom() {
    const [text,setText] = useState("")
    const {dispatch} = useContext(UseContext)
    return<div>
        <input type="text" placeholder="Add Task Manager"  value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={()=>dispatch({type:"add",payload:{
            id:Date.now(),
            text:text,
            isCompleted:false,
        }})}>Add</button>
    </div>
}