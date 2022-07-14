import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import HomeView from "./views/HomeView";
import TodoListView from "./views/TodoListView";
import ErrorPage from "./views/ErrorPage";
import ProfileView from "./views/ProfileView";



function App() {
  return (
    <div className="container">
      <Router>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo Page</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todo" element={<TodoListView />} />
          <Route path="profile/:user" element={<ProfileView />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;