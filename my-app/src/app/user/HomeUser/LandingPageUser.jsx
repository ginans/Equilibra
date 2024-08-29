import React, { useState, useEffect } from 'react';
// import Feed from './components/Feed.jsx';
import styles from "../../../styles/HomeUser/LandigPageUser.module.scss";
import useCheckAdmin from '../../../hooks/useCheckAdmin.jsx';
import useCheckClient from '../../../hooks/useCheckClient.jsx';
import useCheckProfessional from '../../../hooks/useCheckProfessional.jsx';

const LandingPageUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAdminLogged = useCheckAdmin();
  const isProfessionalLogged = useCheckProfessional();
  const isClientLogged = useCheckClient();

  useEffect(() => {
    const fetchUserData = async () => {
      let url;
      let token;

      if (isClientLogged) {
        token = localStorage.getItem("token");
        url = `http://localhost:8000/getUserClientById/${token}`;
      } else if (isProfessionalLogged) {
        token = localStorage.getItem("tokenProfessional");
        url = `http://localhost:8000/getdataUserProfessional/${token}`;
      } else if (isAdminLogged) {
        token = localStorage.getItem("tokenAdmin");
        url = `http://localhost:8000/getDataUserAdmin/${token}`;
      }

      if (token && url) {
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
      } else {
        setLoading(false); // Maneja el caso cuando no hay token o URL
      }
    };

    if (isAdminLogged || isClientLogged || isProfessionalLogged) {
      fetchUserData();
    } else {
      setLoading(false); // Maneja el caso cuando no hay sesión activa
    }
  }, [isAdminLogged, isClientLogged, isProfessionalLogged]);

  // Determina el nombre del usuario según su tipo
  const getUserName = () => {
    if (isClientLogged && userData?.userName) {
      return userData.userName;
    } else if (isProfessionalLogged && userData?.userNameP) {
      return userData.userNameP;
    } else if (isAdminLogged && userData?.name) {
      return userData.name;
    }
    return 'Invitado';
  };

  return (
    <div className={styles.landingPageUser}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <h1>Bienvenid@ {getUserName()}!</h1>
      )}
      <div>
        {/* <Feed/> no tocar*/}

        <div>
          {/* aqui va la simulacion de feed */}
        </div>

      </div>
    </div>
  );
};

export default LandingPageUser;
