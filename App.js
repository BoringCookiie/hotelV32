import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Employee from './Employee';
import AdminPage from './AdminPage'; // Correctly import AdminPage.js
import FemmeDeMenage from './FemmeDeMenage'; // Import FemmeDeMenage component
import Technicien from './Technicien'; // Import Technicien component

// Admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

// Home component with Admin Login form
function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password are correct
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Navigate to the AdminPage on successful login
      navigate('/adminpage');
    } else {
      // Set error message if login is incorrect
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>

      {/* Admin Login Form */}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Show error message */}

      {/* Employee Link */}
      <p>
        or are you an <Link to="/employee">employee?</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to LuxeStay</h1>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route with login form */}
          <Route path="/employee" element={<Employee />} /> {/* Employee route */}
          <Route path="/adminpage" element={<AdminPage />} /> {/* AdminPage route */}
          <Route path="/femmedemenage" element={<FemmeDeMenage />} /> {/* FemmeDeMenage route */}
          <Route path="/technicien" element={<Technicien />} /> {/* Technicien route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
