import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Employee from './Employee';  

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to LuxeStay - Admin Side</h1>

        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>

        <p>
          or are you an <Link to="/employee">employee?</Link>
        </p>
      </div>

      <Routes>
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
