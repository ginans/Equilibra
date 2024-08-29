import logo from "../images/logo5.png";
import { useState } from "react";
import Hamburger from "./Hamburger";
import styles from "../../../../styles/layout/Navbar.module.scss";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"; //se importa el hook usenavegate
import useCheckLogin from "../../../../hooks/useCheckLogin";

const Navbar = () => {
  const [dropDown, setDropDown] = useState("closed");
  const [showRegister, setShowRegister] = useState(false); // Estado para mostrar la opción de registrar
  const navigate = useNavigate(); // Hook navigate, lo llamo aqui y lo defino para usarlo en mi funcion más abajo

  const isLoggedIn = useCheckLogin();

  const hamburguesa = () => {
    setDropDown((prevState) => (prevState === "closed" ? "open" : "closed")); //no se cambia
  };

  const toggleRegister = () => {
    setShowRegister((prevState) => !prevState); // Mostrar u ocultar la opción de registrar
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      navigate("/landingPageUser");//si el usuario esta loggeado que vaya a la landing mostrando hamburger
    } else {
      toggleRegister(); // Muestra el boton de registro/inicio de sesión
    }
  };

  const handleLogoClick = () => {
    console.log("reenderizando boton a la langing con user");
    if (isLoggedIn) {
      navigate("/landingPageUser"); //si esta loggeado me lleva a landing con user
    } else {
      navigate("/"); //si no, me lleva a landing sin user
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src={logo} alt="Logo de la empresa" />
      </div>

      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <a href="/foro" className={styles.navLink}>
            Foro
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/noticias" className={styles.navLink}>
            Noticias
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/Galeria-Entrenamiento" className={styles.navLink}>
            Rutinas
          </a>
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
              onClick={handleLogin}
              className={styles.loginIcon}
            />
            {showRegister && (
              <div className={styles.registerOptions}>
                <a
                  href="registerClient"
                  onClick={toggleRegister}
                  className={styles.registerButton}
                >
                  Registrar
                </a>
                <a
                  href="/login"
                  onClick={toggleRegister}
                  className={styles.registerButton}
                >
                  Iniciar sesión
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
