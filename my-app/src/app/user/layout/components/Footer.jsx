import styles from "../../../../styles/layout/footer.module.scss";
import login from "../images/logo5.png";
import instagramIcon from "../images/instagram-brands-solid.svg";
import facebook from "../images/facebook-brands-solid.svg";
import twitter from "../images/x-twitter-brands-solid.svg";
import linkedin from "../images/linkedin-brands-solid.svg";

const Footer = () => {
  return (
    <footer className={styles.containFooter}>
      <div className={styles.leftContain}>
        <img className={styles.logo} src={login} alt="Logo equilibra" />
        <p className={styles.textLogo}>
          “Equilibra tu cuerpo, revitaliza tu vida”
        </p>
      </div>
      <div className={styles.centralContain}>
        <div>
          <p>Síguenos</p>
          <div className={styles.socialNetworks}>
            <img src={instagramIcon} alt="icono de instagram"/>
            <img src={facebook} alt="icono de facebook"/>
            <img src={twitter} alt="icono de Twitter"/>
            <img src={linkedin} alt="icono de Linkedin" />
          </div>
        </div>
        <p>Copyright © 2024 SextoSentido S.A. Todos los derechos reservados</p>
      </div>
      <div className={styles.rightContain}>
        <div>
          <p><b>Legal</b></p>
          <p> Politicas de privacidad</p>
          <p> Terminos y condiciones </p>
        </div>
        <div>
          <p> Sugerencias y reclamos </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
