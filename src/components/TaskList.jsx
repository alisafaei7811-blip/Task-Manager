import { useContext } from "react";
import {UseContext} from "../context/TaskContext"

export function TaskList() {
    const {state,dispatch} = useContext(UseContext)

    return<div>
        {state.map(item=>(
            <div key={item.id}>
                <p>{item.text}</p>
                <button onClick={()=>dispatch({type:"delete",payload:item.id})}>Delete</button>
                <button style={{color:item.isCompleted ? "green" : "red"}} onClick={()=>dispatch({type:"isCompleted",payload:item.id})}>Completed</button>
            </div>
        ))}
    </div>
}