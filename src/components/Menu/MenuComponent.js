import React from 'react';
import './MenuComponent.css';
import imgLogo from "../../assets/logo.png";

const MenuComponent = () => {
  return (
    <div className="menu">
        <div className="logo-container">
            <img src={imgLogo} alt="Logo" className="logo" />
        </div>
      {/* Contenido del menú */}
    </div>
  );
}

export default MenuComponent;