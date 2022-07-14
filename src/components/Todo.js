import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import TodoList from "./TodoList"
import "./todo.css"



function Todo() {

    let navigate = useNavigate();

    const [list, setList] = useState([
        {
            id: 1,
            title: "makan"
        }, {
            id: 2,
            title: "main"
        }, {
            id: 3,
            title: "tidur"
        }
    ]);

    const [theInput, setTheInput] = useState("")

    const handler = (event) => {
        
        event.preventDefault()
        if(theInput != "") {
            
            const newList = {
                id: list.length + 1,
                title: theInput
            }
    
            setList(list.concat(newList));
    
            setTheInput("");
        }

    }

    return (
        <div className="todo">

            <form>
                <input type="text" placeholder="input here" onChange={(event => setTheInput(event.target.value))} value={theInput}/>
                <button onClick={handler}>submit</button>
            </form>

            <ul className="list-holder">
                {list.map((e) => {
                    return <TodoList e={e} key={e.id} />
                })}
            </ul>
            
            <button onClick={() => navigate("/")}>back to home</button>
        </div>
    )
}



export default Todo