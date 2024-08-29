import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCheckProfessional = () => {
  console.log("reenderizando checklogin professional");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const checkProfessional = () => {
    const tokenProfessional = localStorage.getItem("tokenProfessional");

    setIsLoggedIn(!!tokenProfessional);
  };

  useEffect(() => {
    checkProfessional();
  }, [location]);

  return isLoggedIn;
};

export default useCheckProfessional;
