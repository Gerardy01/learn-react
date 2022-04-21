import { useState } from "react";
import "./todo.css"
import TodoList from "../todo-list/todo-list";
import InputForm from "../list-input/list-input";



function Todo( {theValue} ) {

    const [todoData, setTodoData] = useState([
        {
            id: 1,
            title: "main"
        }, {
            id: 2,
            title: "makan"
        }, {
            id: 3,
            title: "belajar"
        }
    ]);

    const createTodo = (todo) => {
        setTodoData(todoData.concat(todo));
    }

    return (
        <div className="todo-header">
            <h3> {!theValue ? "ini adalah todo list" : theValue} </h3>
            <InputForm theTodoData = {todoData} createTodo = {createTodo}/>
            <TodoList theData = {todoData}/>
        </div>
    );
}

export default Todo;