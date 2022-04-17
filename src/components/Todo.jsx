import { useState } from "react";
import { TodoInput } from "./TodoInput";
import "../App.css"


export const Todo = ()=>{

    const [todoList, setTodoList] = useState([]);

    const getData = (todo)=>{
        // console.log("received",todo);
        setTodoList([...todoList, todo])
    }

    return ( <div className="App">
        {todoList.map((e)=>(
            <div className="container">{e}</div>
            ))}
            <TodoInput getData = {getData}/>
    </div>
    );
}




