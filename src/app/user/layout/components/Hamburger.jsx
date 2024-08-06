import styles from "../../../../styles/HomeUser/Hamburger.module.scss";
import PropTypes from "prop-types";
import icoEdad from "../images/clock-regular.svg";
import icoNombre from "../images/user-solid.svg";
import icoImc from "../images/weight-scale-solid.svg";
import icoCronicas from "../images/heart-pulse-solid.svg";
import profilePic from "../images/foto-perfil.png";

const Hamburger = ({ nombre, edad, cronicas, fotoPerfil, imc }) => {
  console.log("Rendering Hamburger.jsx");
  return (
    <div className={styles.hamburgerContainer}>
      <div className={styles.cajaPrincipal}>
        <div className={styles.fotoPerfil}>
          <h4>Información personal</h4>
          <img
            src={profilePic}
            alt="Foto de perfil"
            className={styles.foto}
            width={"80px"}
            height={"80px"}
          ></img>
        </div>

        <div>
          <div className={styles.nombre}>
            <p>Nombre</p>
            <div className={styles.nombreImg}>
              <img
                src={icoNombre}
                alt="perfil"
                width={"20px"}
                height={"20px"}
              ></img>
              <p className={styles.nombreP}>{nombre} Maria Gutierrez</p>
            </div>
          </div>

          <div className={styles.edad}>
            <p>Edad</p>
            <div className={styles.edadImg}>
              <img
                src={icoEdad}
                alt="edad"
                width={"20px"}
                height={"30px"}
              ></img>
              <p className={styles.edadP}>{edad} 45 años</p>
            </div>
          </div>

          <div className={styles.imc}>
            <p>IMC</p>
            <div className={styles.imcImg}>
              <img src={icoImc} alt="IMC" width={"20px"} height={"20px"}></img>
              <p className={styles.imcP}>{imc} 24.5</p>
            </div>
          </div>
          <div className={styles.cronicas}>
            <p>Enfermedades Cronicas</p>
            <div className={styles.cronicasImg}>
              <img
                src={icoCronicas}
                alt="Enfermedades cronicas"
                width={"20px"}
                height={"20px"}
              ></img>
              <p className={styles.cronicasP}>{cronicas}Si</p>
            </div>
          </div>

          <div className={styles.cajaBoton}>
            <button
              id={styles.botonVer}
              onClick={() => {
                console.log("boton ver mas clicado");
              }}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Hamburger.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  cronicas: PropTypes.bool.isRequired,
  fotoPerfil: PropTypes.string.isRequired,
  imc: PropTypes.number.isRequired,
};

export default Hamburger;
