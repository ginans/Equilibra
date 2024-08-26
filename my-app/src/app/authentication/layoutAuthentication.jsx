import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "../../styles/authentication/layoutAuthentication.module.scss";
import logo from "./img/logo.svg";
import subLogo from "./img/subLogo.svg";
const LayoutAuthentication = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/landingPageUser");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ContainLogos}>
        <img src={logo} alt="logo Equilibra" />
        <img className={styles.subLogo} src={subLogo} alt="subLogo Equilibra" />
        <p>“Equilibra tu cuerpo, revitaliza tu vida”</p>
      </div>
      <div className={styles.containChildren}>
        <Outlet />
        <p className={styles.copyritghtText}>
          Copyright © 2024 SextoSentido S.A. Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default LayoutAuthentication;
