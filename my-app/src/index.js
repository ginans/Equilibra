import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.module.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './app/notFound/notFound';
import Foro from './app/user/Foro/components/Foro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className="App"> 
      <BrowserRouter>  
        <Routes> 
          
         {/* <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register/>}/> */}
          <Route element={<Foro/> }> 
          <Route path="/" element={<Foro />} />
          <Route path="/Foro/:id" element={<Foro />} />
          
            {/* aqui van los archivos que esten dentro de la carpeta user */}
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Ruta para páginas no encontradas */}
        </Routes>
      </BrowserRouter>  
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
