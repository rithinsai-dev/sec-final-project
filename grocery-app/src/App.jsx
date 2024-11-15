import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main className="landing-page">
        <h1>Welcome to Grocery World</h1>
        <p>Your one-stop shop for fresh groceries!</p>
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Grocery World</div>
      <div className="search-container">
        <input type="text" placeholder="Search products..." className="search-bar" />
        <button className="search-button">Search</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Products</button>
        <div className="dropdown-content">
          <a href="#fruits">Fruits</a>
          <a href="#vegetables">Vegetables</a>
          <a href="#dairy">Dairy</a>
        </div>
      </div>
    </nav>
  );
}

export default App;
