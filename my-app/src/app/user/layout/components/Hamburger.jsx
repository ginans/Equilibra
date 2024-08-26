import styles from "../../../../styles/HomeUser/Hamburger.module.scss";
import icoEdad from "../images/clock-regular.svg";
import icoNombre from "../images/user-solid.svg";
import icoImc from "../images/weight-scale-solid.svg";
import icoCronicas from "../images/heart-pulse-solid.svg";
import profilePic from "../images/foto-perfil.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Hamburger = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await fetch(
            `http://localhost:8000/getUserClientById/${token}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false); // Termina el estado de carga al finalizar la solicitud
        }
      } 
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {//manejo de cierre de sesión
    localStorage.removeItem("token"); // para eliminar el token
    navigate("/"); // a landing
  };

  if (loading) {
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
          <div className={styles.cajaBoton}>
            <button id={styles.botonVer} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    );
  }

  // const weight = parseFloat(userData?.weight) || 0;
  // const height = parseFloat(userData?.height) || 0;
  // console.log("Weight:", weight, "Height:", height);

  // const imc = height > 0 ? (weight / (height * height)).toFixed(1) : 'N/A';

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
              <p className={styles.nombreP}>{userData.userName}</p>
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
              <p className={styles.edadP}>{userData.age}</p>
            </div>
          </div>

          <div className={styles.imc}>
            <p>IMC</p>
            <div className={styles.imcImg}>
              <img src={icoImc} alt="IMC" width={"20px"} height={"20px"}></img>
              <p className={styles.imcP}>{userData.weight/(userData.height**2)} IMC</p>{/*arreglar*/}
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
              <p className={styles.cronicasP}>{userData.chronicDiseases ? "Sí" : "No"}</p>
            </div>
          </div>

          <div className={styles.cajaBoton}>
            <button id={styles.botonVer} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
