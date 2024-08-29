import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "../../styles/authentication/layoutAuthentication.module.scss";
import logo from "./img/logo.svg";
import subLogo from "./img/subLogo.svg";
import useCheckAdmin from "../../hooks/useCheckAdmin";
import useCheckClient from "../../hooks/useCheckClient";
import useCheckProfessional from "../../hooks/useCheckProfessional";

const LayoutAuthentication = () => {
  const isAdminLogged= useCheckAdmin()
  const isClientLogged= useCheckClient()
  const isProfessionalLogged= useCheckProfessional()
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdminLogged || isClientLogged || isProfessionalLogged) {
      navigate("/landingPageUser");
    }
  }, [isAdminLogged, isClientLogged, isProfessionalLogged, navigate]);

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
