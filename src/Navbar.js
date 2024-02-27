import { NavLink } from "react-router-dom";
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar container mb-3">
      <h1>The Dojo Blog</h1>
      <div className="nav-item d-flex ">
        <NavLink className="nav-link" to="/" style={{
          color: 'black',
          borderRadius: '8px',
          padding: '6px',
          margin: '10px',
          textDecoration: 'none'
        }}>Home</NavLink>
        <NavLink className="nav-link" to="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
          padding: '6px',
          margin: '10px',
          textDecoration: 'none'
        }}>New Blog</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;