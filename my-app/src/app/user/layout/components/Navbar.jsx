import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa Link y useNavigate
import logo from "../images/logo5.png";
import Hamburger from "./Hamburger";
import styles from "../../../../styles/layout/Navbar.module.scss";
import { HiOutlineUserCircle } from "react-icons/hi2";


const Navbar = () => {
  const [dropDown, setDropDown] = useState("closed");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar si el usuario está logueado
  const [showRegister, setShowRegister] = useState(false); // Estado para mostrar la opción de registrar
  const navigate = useNavigate(); // Hook navigate, lo llamo aqui y lo defino para usarlo en mi funcion más abajo

  const hamburguesa = () => {
    setDropDown((prevState) => (prevState === "closed" ? "open" : "closed"));
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Cambiar el estado de login
  };

  const toggleRegister = () => {
    setShowRegister((prevState) => !prevState); // Mostrar u ocultar la opción de registrar
  };

  const handleLogoClick = () => {
    console.log("reenderizando boton a la langing con user");
    if (isLoggedIn) {
      navigate("/landingPageUser"); //si esta loggeado me lleva a landing con user
    } else {
      navigate("/"); // Si no, me lleva a landing sin user
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={handleLogoClick}>
          <img src={logo} alt="Logo de la empresa" />
      </div>

      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Foro</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/noticias" className={styles.navLink}>Noticias</Link> {/* Cambiado a Link */}
        </li>
        <li className={styles.navItem}>
          <Link to="/rutinas" className={styles.navLink}>Rutinas</Link>
        </li>
        <li className={styles.navItem}>
          <a href="/educationalPage" className={styles.navLink}>
            Info Activa
          </a>
        </li>
      </ul>

      <div className={styles.perfilContainer}>
        {isLoggedIn ? (
          <>
            <button onClick={hamburguesa} className={styles.perfilHamburger}>
              Perfil
            </button>
            {dropDown === "open" && <Hamburger />}
          </>
        ) : (
          <div className={styles.loginContainer}>
            <HiOutlineUserCircle
              onClick={toggleRegister}
              className={styles.loginIcon}
            />
            {showRegister && (
              <div className={styles.registerOptions}>
                <button onClick={toggleLogin} className={styles.registerButton}>
                  Registrar
                </button>
                <button onClick={toggleLogin} className={styles.registerButton}>
                  Iniciar sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
