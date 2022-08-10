import "./App.css"
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import HomeView from "./views/HomeView";
import TodoListView from "./views/TodoListView";
import ErrorPage from "./views/ErrorPage";
import ProfileView from "./views/ProfileView";
import Login from "./views/Login";
import GameListPage from "./views/GameListPage";
import GameDetails from "./views/GameDetails";
import CounterPage from "./views/CounterPage";
import PokemonListPage from "./views/PokemonListPage";



function App() {

  return (
    <div>
      <Router>

        <nav>
          <ul style={{width: '100%', display: 'flex', justifyContent: 'space-around', alignItem: 'center'}}>  
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo Page</Link></li>
            <li><Link to="/login">Login Page</Link></li>
            <li><Link to="/game-list">Game List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todo" element={<TodoListView />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile/:user" element={<ProfileView />} />
          <Route path="game-list" element={<GameListPage />} />
          <Route path="game-details/:id" element={<GameDetails />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/pokemon-list" element={<PokemonListPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;