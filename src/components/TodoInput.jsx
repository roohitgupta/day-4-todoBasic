import {useState} from "react";
import "../App.css"

export const TodoInput = ({getData})=>{
    const [text, setText] = useState("");

    // handleKeyPress = event =>{
    //     if(event.key == "Enter"){
    //        getData(text);
    //     }
    // }


    return(
        <div>
        <input className="inputText"  onChange={(e)=>{
            // console.log(e.target.value)
            setText(e.target.value)}} 
            type="text" placeholder="Enter here todo" />
        <button className="btn" id="btn" onClick={()=>{getData(text)}}>Add todo</button>
            
        </div>
    )
}


<script>
    
</script>