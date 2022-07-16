import "./App.css"
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import HomeView from "./views/HomeView";
import TodoListView from "./views/TodoListView";
import ErrorPage from "./views/ErrorPage";
import ProfileView from "./views/ProfileView";
import Login from "./views/Login";



function App() {

  return (
    <div className="container">
      <Router>

        <nav>
          <ul>  
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo Page</Link></li>
            <li><Link to="/login">Login Page</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todo" element={<TodoListView />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile/:user" element={<ProfileView />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;