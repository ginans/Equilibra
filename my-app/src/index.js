import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.module.scss";


import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Layout from "../src/app/user/layout/LayoutG.jsx";
import NotFound from "./app/notFound/notFound";
import LandingPageUser from "./app/user/HomeUser/LandingPageUser.jsx";
import EducationPage from "./app/user/EducationPage/EducationPage.jsx";
import LayoutAuthentication from "./app/authentication/layoutAuthentication.jsx";
import RegisterClient from "./app/authentication/register/registerClient/registerClient.jsx";
import RegisterProfessional from "./app/authentication/register/registerProfessional/registerClient.jsx";
import Login from "./app/authentication/login/login.jsx";
import Foro from './app/user/Foro/Foro.jsx';
import FullArticle from "./app/user/EducationPage/components/FullArticle.jsx";
import CreateArticle from "./app/user/EducationPage/components/CreateArticle.jsx";
import PagPrincipal from "./app/landingPage/PaginaPrincipal.jsx"
import GaleriaEntrenamiento from "./app/galeriaEntrenamiento/GaleriaEntrenamiento.jsx"
import CreateNoticia from "./app/noticias/components/createnoticia.jsx"
import Noticias from "./app/noticias/Noticia.jsx"
import ListaNoticias from "./app/noticias/ListaNoticias";
import AdminVideos from './app/crearVideos/AdminVideos.jsx';
import ProtectedRoute from "./components/ProtectedRoute.jsx";




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
            <Route path='/' element={<PagPrincipal/>}/> 
            <Route path="/landingPageUser" element={<LandingPageUser />} />
            <Route path="/educationalPage" element={<EducationPage />} />
            <Route path="/Foro/" element={<Foro />} /> 
            <Route path="/createArticle" element={<ProtectedRoute><CreateArticle /></ProtectedRoute>} />
            <Route path="/fullArticle/:id" element={<FullArticle/>} />
            <Route path='/Galeria-Entrenamiento' element={<GaleriaEntrenamiento/>}/> 
            <Route path='/noticias' element={<ListaNoticias/>}/> 
            <Route path="/createNoticia" element={<CreateNoticia/>}/>
           
            <Route path='/AdminVideos' element={<AdminVideos/>}/> 
            
            {/* aqui van los archivos que esten dentro de la carpeta user */}
          </Route>
          <Route path="*" element={<NotFound />} />{" "}
          {/* Ruta para páginas no encontradas */}
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();