import React from 'react';
import './AdminPage.css'; // Import a CSS file specifically for admin page styling

function AdminPage() {
  return (
    <div className="admin-page">
      <div className="sidebar">
        <h3>Admin Menu</h3>
        <ul>
          <li><button>View Reservations</button></li>
          <li><button>Manage Employees</button></li>
          <li><button>Settings</button></li>
        </ul>
      </div>
      
      <div className="dashboard">
        <h2>Admin Dashboard</h2>
        <p>Welcome to the admin dashboard. Here, you can manage hotel reservations, employees, and more!</p>
        
        {/* Dashboard Stats */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Reservations</h3>
            <p>123</p>
          </div>
          <div className="stat-card">
            <h3>Active Reservations</h3>
            <p>87</p>
          </div>
          <div className="stat-card">
            <h3>Cancellations</h3>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

