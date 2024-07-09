import React, { useState } from 'react';
import './HeaderComponent.css';
import userImage from "../../assets/user-image.png"; // Asegúrate de ajustar la ruta según la ubicación de tu imagen

const HeaderComponent = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="welcome">
          <h1>Bienvenido, Nombre</h1>
          <p>Portal de Configuración Clientes</p>
        </div>
        <div className="user-info">
          <img src={userImage} alt="Peter Parker" className="user-avatar" onClick={toggleMenu} />
          <span onClick={toggleMenu}>Peter Parker</span>
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li><a href="#update-profile">Actualizar perfil</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
