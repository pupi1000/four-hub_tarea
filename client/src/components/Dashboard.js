// src/components/Dashboard.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-container">
      <h2>Bienvenido al Dashboard</h2>
      <p>¡Has iniciado sesión correctamente!</p>
    </div>
  );
};

export default Dashboard;
