import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCheckAdmin = () => {
  console.log("reenderizando checklogin admin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const checkAdmin = () => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");

    setIsLoggedIn(!!tokenAdmin);
  };

  useEffect(() => {
    checkAdmin();
  }, [location]);

  return isLoggedIn;
};

export default useCheckAdmin;
