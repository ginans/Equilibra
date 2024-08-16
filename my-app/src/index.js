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
import EducationPage from "./app/user/EducationPage/EducationPage.jsx";
import FullArticle from "./app/user/EducationPage/components/FullArticle.jsx";
import CreateArticle from "./app/user/EducationPage/components/CreateArticle.jsx";

console.log("Renderizando rutas principales");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register/>}/> */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomewithoutLogin />} />
            <Route path="/landingPageUser" element={<LandingPageUser />} />
            <Route path="/educationalPage" element={<EducationPage />} />
            <Route path="/createArticle" element={<CreateArticle />} />
            <Route path="/fullArticle/:id" element={<FullArticle/>} />
            
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
