import React from "react";
import '../../../styles/landingPage/Navbar.css'; 
import logo from '../images/logo.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Foro</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Noticias</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Rutinas</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Iniciar Sesión</a>
          </li>
          
        </ul>
      </nav>
    );
  }
  
  export default Navbar;