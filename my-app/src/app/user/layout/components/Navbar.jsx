import logo from "../images/logo5.png";
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import styles from "../../../../styles/layout/Navbar.module.scss";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckAdmin from "../../../../hooks/useCheckAdmin";
import useCheckClient from "../../../../hooks/useCheckClient";
import useCheckProfessional from "../../../../hooks/useCheckProfessional";

const Navbar = () => {
  const [dropDown, setDropDown] = useState("closed");
  const [showRegister, setShowRegister] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const isAdminLogged = useCheckAdmin();
  const isProfessionalLogged = useCheckProfessional();
  const isClientLogged = useCheckClient();

  console.log("Navbar isClientLogged:", isClientLogged);
  console.log("Navbar isProfessionalLogged:", isProfessionalLogged);
  console.log("Navbar isAdminLogged:", isAdminLogged);

  useEffect(() => {
    const fetchUserData = async () => {
      let url;
      let token;
    if (isClientLogged) {
      token = localStorage.getItem("token");
        url= `http://localhost:8000/getUserClientById/${token}`
    }else if(isProfessionalLogged){
      token = localStorage.getItem("tokenProfessional");
      url= `http://localhost:8000/getdataUserProfessional/${token}`
    }else if (isAdminLogged){
      token = localStorage.getItem("tokenAdmin");
      url= `http://localhost:8000/getDataUserAdmin/${token}`
    }
    
    if (token) {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (isAdminLogged || isClientLogged || isProfessionalLogged) {
    fetchUserData();
  }
}, [isAdminLogged, isClientLogged, isProfessionalLogged]);
         

  const hamburguesa = () => {
    setDropDown((prevState) => (prevState === "closed" ? "open" : "closed"));
  };

  const toggleRegister = () => {
    setShowRegister((prevState) => !prevState);
  };

  const handleLogin = () => {
    if (isAdminLogged || isClientLogged || isProfessionalLogged) {
      navigate("/landingPageUser");
    } else {
      toggleRegister();
    }
  };

  const handleLogoClick = () => {
    if (isAdminLogged || isClientLogged || isProfessionalLogged) {
      navigate("/landingPageUser");
    } else {
      navigate("/");
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
        { isAdminLogged || isClientLogged || isProfessionalLogged ? ( 
          <>
            <button onClick={hamburguesa} className={styles.perfilHamburger}>
              Perfil
            </button>
            {dropDown === "open" && (
              <Hamburger userData={userData} loading={loading} />
            )}
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
