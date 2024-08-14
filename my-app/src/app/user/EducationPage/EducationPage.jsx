import React from 'react';
import styles from "../../../styles/EducationPage/EducationPage.module.scss"
import Card from "./components/Card"


const EducationPage = () => {

  console.log("Rendering education route");
  
  return (
    <div className={styles.educationPage}>
      <h2>Info Activa</h2>
      <Card/>
    </div>
  );
};

export default EducationPage;