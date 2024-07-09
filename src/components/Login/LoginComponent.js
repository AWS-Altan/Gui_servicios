import React from 'react';
import './LoginComponent.css';
import logo from '../../assets/logo.png'; // Adjust the path of the image according to your project structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LoginComponent = () => {
    return (
        <div className="login-container">
            <header className="login-header">
                <img src={logo} alt="Altan Redes" className="logo" />
            </header>
            <div className="login-content">
                <div className="login-info">
                    <h1>Servicios IT</h1>
                    <p>
                        ALTÁN Redes es la empresa mexicana responsable de diseñar, desplegar, operar y comercializar la Red Compartida, la Red para Todos.
                    </p>
                    <p>
                        Tiene la misión de conectar a los mexicanos con más cobertura y mejores ofertas y servicios.
                    </p>
                </div>
                <div className="login-form">
                    <input type="text" placeholder="Correo electrónico" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Iniciar Sesión</button>
                    <a href="#forgot-password" className="forgot-password">¿Haz olvidado tu contraseña?</a>
                </div>
            </div>
            <footer className="login-footer">
                <p>
                    Seguimos desplegando diariamente la red para cubrir al menos 92.2% de la población.
                </p>
                <div className="social-media">
                    <span>ALTÁN en las redes</span>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LoginComponent;
