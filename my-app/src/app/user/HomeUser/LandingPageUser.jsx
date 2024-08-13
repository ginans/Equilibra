import React from 'react';
import Feed from './components/Feed.jsx';
import styles from "../../../styles/HomeUser/LandigPageUser.module.scss"

const LandingPageUser = () => {

  console.log("Renderizando LandingPageUser");
  
  return (
    <div className={styles.landingPageUser}>
      <h1>Bienvenid@!</h1>
      <Feed />
    </div>
  );
};

export default LandingPageUser;
