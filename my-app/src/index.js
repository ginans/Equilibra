import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.module.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NotFound from './app/notFound/notFound';
import Foro from './app/user/Foro/components/Foro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Foro />} />
        <Route path="/Foro/:id" element={<Foro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
