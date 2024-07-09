import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSignOutAlt, faCog, faFileAlt, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './MenuComponent.css';
import imgLogo from "../../assets/logo.png";

const MenuComponent = ({ isSidebarVisible, toggleSidebar }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={`sidebar-container ${isSidebarVisible ? '' : 'hidden'}`}>
      <aside className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
        <div className="logo">
          <img src={imgLogo} alt="Altan logo" />
        </div>
        <nav>
          <ul>
            <li>
              <div className="menu-item" onClick={() => toggleMenu('autogestionCV')}>
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Autogestión CV</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenus.autogestionCV && (
                <ul className="submenu">
                  <li><a href="#sub1">Submenú 1</a></li>
                  <li><a href="#sub2">Submenú 2</a></li>
                </ul>
              )}
            </li>
            <li>
              <div className="menu-item" onClick={() => toggleMenu('configuracion')}>
                <FontAwesomeIcon icon={faCog} />
                <span>Configuración</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenus.configuracion && (
                <ul className="submenu">
                  <li><a href="#sub3">Submenú 3</a></li>
                  <li><a href="#sub4">Submenú 4</a></li>
                </ul>
              )}
            </li>
            <li>
              <div className="menu-item" onClick={() => toggleMenu('consulta')}>
                <FontAwesomeIcon icon={faChartBar} />
                <span>Consulta</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenus.consulta && (
                <ul className="submenu">
                  <li><a href="#sub5">Submenú 5</a></li>
                  <li><a href="#sub6">Submenú 6</a></li>
                </ul>
              )}
            </li>
            <li>
              <div className="menu-item" onClick={() => toggleMenu('reportes')}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Reportes</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenus.reportes && (
                <ul className="submenu">
                  <li><a href="#sub7">Submenú 7</a></li>
                  <li><a href="#sub8">Submenú 8</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <a href="#logout">Log out</a>
        </div>
      </aside>
    </div>
  );
}

export default MenuComponent;
