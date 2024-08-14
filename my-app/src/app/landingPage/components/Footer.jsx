// Footer.js
import React from 'react';
import '../../../styles/landingPage/Footer.css'; // Asegúrate de tener el archivo CSS para los estilos
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';  
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" /> {/* Asegúrate de usar el path correcto */}
        <p className="footer-slogan">"Equilibra tu cuerpo, revitaliza tu vida"</p>
      </div>

      <div className="redes">

            <h4>Siguenos</h4>
            <div className="socialmedia">
                <p><img src={facebook} alt =""/></p>
                <p><img src={instagram} alt =""/></p>
                <p><img src={linkedin} alt =""/></p>
                
            </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 SextoSentido S.A. Todos los derechos reservados</p>
        </div>
      <div className="footer-right">
        <ul><a>Legal</a>
          
          <li><a href="/politicas-privacidad">Políticas de privacidad</a></li>
          <li><a href="/terminos-condiciones">Términos y condiciones</a></li>
          <li><a href="/sugerencias-reclamos">Sugerencias y reclamos</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
