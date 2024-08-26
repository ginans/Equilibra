import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useCheckLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const checkLogin = () => {
    const token = localStorage.getItem('token');
    if (token) {//si hay token
      setIsLoggedIn(true);//que pase a estado loggeado
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [location]); //cada vez que la url cambia verifica si esta logeado

  return isLoggedIn;
};

export default useCheckLogin;