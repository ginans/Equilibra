import styles from "../../../../styles/HomeUser/Hamburger.module.scss";
import icoEdad from "../images/clock-regular.svg";
import icoNombre from "../images/user-solid.svg";
import icoImc from "../images/weight-scale-solid.svg";
import icoCronicas from "../images/heart-pulse-solid.svg";
import profilePic from "../images/fotoPerfil.jpg";
import { useNavigate } from "react-router-dom";
import useCheckProfessional from "../../../../hooks/useCheckProfessional";
import useCheckAdmin from "../../../../hooks/useCheckAdmin";
import useCheckClient from "../../../../hooks/useCheckClient";

const Hamburger = ({ userData, loading }) => {
  const navigate = useNavigate();
  const isAdminLogged = useCheckAdmin();
  const isProfessionalLogged = useCheckProfessional();
  const isClientLogged = useCheckClient();

  console.log("isAdminLogged:", isAdminLogged); // Agregar logs para depurar
  console.log("isProfessionalLogged:", isProfessionalLogged);
  console.log("isClientLogged:", isClientLogged);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenAdmin");
    localStorage.removeItem("tokenProfessional");
    navigate("/");
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

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

        {isClientLogged && userData && (
          <>
            <div className={styles.nombre}>
              <p>Nombre de usuario</p>
              <div className={styles.nombreImg}>
                <img
                  src={icoNombre}
                  alt="perfil"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.nombreP}>
                  {userData.userName || "No disponible"}
                </p>
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
                <p>{userData.age}</p>
              </div>
            </div>

            <div className={styles.imc}>
              <p>IMC</p>
              <div className={styles.imcImg}>
                <img
                  src={icoImc}
                  alt="IMC"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.imcP}>
                  {(
                    userData.weight /
                    (Math.round(userData.height / 100) *
                      Math.round(userData.height / 100))
                  ).toFixed(1)}{" "}
                  IMC
                </p>
              </div>
            </div>

            <div className={styles.cronicas}>
              <p>Enfermedades Crónicas</p>
              <div className={styles.cronicasImg}>
                <img
                  src={icoCronicas}
                  alt="Enfermedades crónicas"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.cronicasP}>
                  {userData.chronicDiseases ? "Sí" : "No"}
                </p>
              </div>
            </div>
          </>
        )}

        {isProfessionalLogged && userData && (
          <>
            <div className={styles.nombre}>
              <p>Nombre de usuario</p>
              <div className={styles.nombreImg}>
                <img
                  src={icoNombre}
                  alt="perfil"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.nombreP}>{userData.userNameP || "No disponible"}</p>
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
                <p>{userData.age}</p>
              </div>
            </div>

            <div className={styles.cronicas}>
              <p>Especialidad</p>
              <div className={styles.cronicasImg}>
                <img
                  src={icoCronicas}
                  alt="especialidad"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.cronicasP}>{userData.specialty || "No disponible"}</p>
              </div>
            </div>

            <div className={styles.cronicas}>
              <p>RUT</p>
              <div className={styles.cronicasImg}>
                <img
                  src={icoCronicas}
                  alt="rut"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.cronicasP}>{userData.rut || "No disponible"}</p>
              </div>
            </div>
            <div className={styles.cronicas}>
              <p>Registro SIS</p>
              <div className={styles.cronicasImg}>
                <img
                  src={icoCronicas}
                  alt="registro sis"
                  width={"20px"}
                  height={"20px"}
                ></img>
                <p className={styles.cronicasP}>{userData.registerSis || "No disponible"}</p>
              </div>
            </div>
          </>
        )}

        {isAdminLogged && userData && (
          <div className={styles.nombre}>
            <p>Nombre de usuario</p>
            <div className={styles.nombreImg}>
              <img
                src={icoNombre}
                alt="perfil"
                width={"20px"}
                height={"20px"}
              ></img>
              <p className={styles.nombreP}>{userData.name}</p>
            </div>
          </div>
        )}

        <div className={styles.cajaBoton}>
          <button id={styles.botonVer} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
