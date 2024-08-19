import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Layout from "../src/app/user/layout/LayoutG.jsx";
import NotFound from "./app/notFound/notFound";
import HomewithoutLogin from "./app/homewithoutLogin/homewithoutLogin";
import LandingPageUser from "./app/user/HomeUser/LandingPageUser.jsx";
import LayoutAuthentication from "./app/authentication/layoutAuthentication.jsx";
import RegisterClient from "./app/authentication/register/registerClient/registerClient.jsx";
import RegisterProfessional from "./app/authentication/register/registerProfessional/registerClient.jsx";
import Login from "./app/authentication/login/login.jsx";

console.log("Renderizando rutas principales");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutAuthentication/>}>
            <Route path="/registerClient" element={<RegisterClient/>}/>
            <Route path="/registerProfessional" element={<RegisterProfessional/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
          {/* <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register/>}/> */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomewithoutLogin />} />
            <Route path="/LandingPageUser" element={<LandingPageUser />} />
            {/* aqui van los archivos que esten dentro de la carpeta user */}
          </Route>
          <Route path="*" element={<NotFound />} />{" "}
          {/* Ruta para páginas no encontradas */}
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
