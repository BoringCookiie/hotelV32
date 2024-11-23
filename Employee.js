import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for routing

function Employee() {
  const [matricule, setMatricule] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Matricule:", matricule);

    // Navigate based on the matricule value
    if (matricule === "men123") {
      navigate('/femmedemenage'); // Navigate to FemmeDeMenage page
    } else if (matricule === "tech123") {
      navigate('/technicien'); // Navigate to Technicien page
    } else {
      alert("Matricule not recognized!");
    }
  };

  return (
    <div className="EmployeePage">
      <h2>Employee Page</h2>
      <p>Welcome to the employee page!</p>

      {/* Matricule Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="matricule">Matricule:</label>
          <input
            type="password" // Change the type to "password"
            id="matricule"
            name="matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default Employee;
