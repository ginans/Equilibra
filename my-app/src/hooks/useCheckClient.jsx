import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCheckClient = () => {
  console.log("reenderizando checklogin client");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const checkClient = () => {
    const tokenClient = localStorage.getItem("token");

    setIsLoggedIn(!!tokenClient);
  };

  useEffect(() => {
    checkClient();
  }, [location]);

  return isLoggedIn;
};

export default useCheckClient;
