import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.module.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Layout from './app/user/layout/LayoutG.jsx';
import NotFound from './app/notFound/notFound';
import HomewithoutLogin from './app/homewithoutLogin/homewithoutLogin';
import LandingPageUser from './app/user/HomeUser/LandingPageUser.jsx';
import Noticias from './app/noticias/ListaNoticias.jsx';

console.log("Renderizando rutas principales");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App"> 
      <BrowserRouter>  
        <Routes> 
          {/* Rutas dentro del Layout */}
          <Route element={<Layout />}>
            <Route path='/' element={<HomewithoutLogin />} />
            <Route path='/xd' element={<LandingPageUser />} />
            <Route path='/noticias' element={<Noticias />} /> 
          </Route>
          
          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>  
    </div>
  </React.StrictMode>
);

reportWebVitals();
