import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="bg-dark text-white py-3 sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="logo mb-0">My Portfolio</h1>
        
        {/* Navigation */}
        <nav>
          <ul className="nav mb-0">
            <li className="nav-item">
              <a href="#about" className="nav-link text-white">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-white">My Projects</a>
            </li>
            <li className="nav-item">
              <a href="#crud" className="nav-link text-white">CRUD</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
