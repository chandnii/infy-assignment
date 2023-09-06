// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from an API (replace with your actual API endpoint)
    axios
      .get('https://api.apis.guru/v2/providers.json')
      .then((response) => {
        setMenuItems(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={closeSidebar}></div>
      <Sidebar menuItems={menuItems} isOpen={sidebarOpen} />
      <div className="first-screen">
        <button onClick={openSidebar}>Explore web APIs</button>
    </div>
  </div>
  );
}

export default App;
