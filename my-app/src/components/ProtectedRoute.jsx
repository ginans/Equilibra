import { useNavigate } from "react-router-dom";
import useCheckAdmin from "../hooks/useCheckAdmin";

const ProtectedRoute = ({ children }) => {
  const isAdminLogged= useCheckAdmin() ;
  const navigate = useNavigate();

  if (isAdminLogged) {
   return children //si esta logeado muestra el modulo
  }else{
    navigate("/") //si no esta logeado lleva a la landign sin user
  }

   
};

export default ProtectedRoute;
