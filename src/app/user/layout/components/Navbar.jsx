import logo from "../images/logo5.png";
import { useState } from "react";
import Hamburger from "./Hamburger";
import styles from "../../../../styles/layout/Navbar.module.scss";

const Navbar = () => {
  const [dropDown, setDropDown] = useState("closed");

  const hamburguesa = () => {
    setDropDown((prevState) => (prevState === "closed" ? "open" : "closed"));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo de la empresa" />
      </div>

      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            Foro
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            Noticias
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            Rutinas
          </a>
        </li>
      </ul>

      <div className={styles.perfilContainer}>
        <button onClick={hamburguesa} className={styles.perfilHamburger}>
          Perfil
        </button>
        {dropDown === "open" && <Hamburger />}
      </div>
    </nav>
  );
};

export default Navbar;
