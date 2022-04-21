import { useState } from "react";
import "./App.css"
import Todo from "./components/todo/todo.js";


function App() {

  const [getValue, setValue] = useState("");

  const ubah = () => {
    if (!getValue || getValue == "ini adalah todo list") {
        setValue("this is todo list")
    } else {
        setValue("ini adalah todo list")
    }
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <Todo theValue={getValue} />
      <button onClick={ubah}>ubah</button>
    </div>
  )
}

export default App;