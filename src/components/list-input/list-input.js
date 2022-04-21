import "./list-input.css"
import { useState } from "react"



function InputForm( {theTodoData, createTodo} ) {

    const [valueData, setValueData] = useState("")

    const handleSubmit = (event)=> {
        event.preventDefault()

        if (valueData) {
            const newData = {
                id: theTodoData.length + 1,
                title: valueData
            }
    
            createTodo(newData);
            setValueData("");
        }
    }

    const handleChange = (event) => {
        setValueData(event.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={valueData} placeholder="input here" name="list" onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    )
}

export default InputForm