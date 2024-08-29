import React from "react";
import Cards from "../galeriaEntrenamiento/components/Cards";
import RedirectButton from "../galeriaEntrenamiento/components/RedirectButton";
import useCheckAdmin from "../../hooks/useCheckAdmin";

const GaleriaEntrenamiento = () => {
  const isAdminLogged = useCheckAdmin();

  return (
    <div>
      {isAdminLogged ? <RedirectButton /> : <></>}
      <Cards />
    </div>
  );
};

export default GaleriaEntrenamiento;
