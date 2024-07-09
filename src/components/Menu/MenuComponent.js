import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSignOutAlt, faCog, faFileAlt, faChartBar, faEnvelope, faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import './MenuComponent.css';
import imgLogo from "../../assets/logo.png";

const MenuComponent = ({ isSidebarVisible, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const selectSubmenu = (submenu) => {
    setSelectedSubmenu(submenu);
  };

  return (
    <div className={`sidebar-container ${isSidebarVisible ? '' : 'hidden'}`}>
      <aside className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
        <div className="logo">
          <img src={imgLogo} alt="Altan logo" />
        </div>
        <nav>
          <ul>
            <li className={openMenu === 'autogestionCV' ? 'selected' : ''}>
              <div className="menu-item" onClick={() => toggleMenu('autogestionCV')}>
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Autogestión CV</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenu === 'autogestionCV' && (
                <ul className="submenu">
                  <li className={selectedSubmenu === 'sub1' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCog} className="submenu-icon" />
                    <a href="#sub1" onClick={() => selectSubmenu('sub1')}>Configuración</a>
                  </li>
                  <li className={selectedSubmenu === 'sub2' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faChartBar} className="submenu-icon" />
                    <a href="#sub2" onClick={() => selectSubmenu('sub2')}>Consulta</a>
                  </li>
                </ul>
              )}
            </li>
            <li className={openMenu === 'configuracion' ? 'selected' : ''}>
              <div className="menu-item" onClick={() => toggleMenu('configuracion')}>
                <FontAwesomeIcon icon={faCog} />
                <span>Configuración</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenu === 'configuracion' && (
                <ul className="submenu">
                  <li className={selectedSubmenu === 'sub3' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCircle} className="submenu-icon" />
                    <a href="#sub3" onClick={() => selectSubmenu('sub3')}>Submenú 3</a>
                  </li>
                  <li className={selectedSubmenu === 'sub4' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCircle} className="submenu-icon" />
                    <a href="#sub4" onClick={() => selectSubmenu('sub4')}>Submenú 4</a>
                  </li>
                </ul>
              )}
            </li>
            <li className={openMenu === 'consulta' ? 'selected' : ''}>
              <div className="menu-item" onClick={() => toggleMenu('consulta')}>
                <FontAwesomeIcon icon={faChartBar} />
                <span>Consulta</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenu === 'consulta' && (
                <ul className="submenu">
                  <li className={selectedSubmenu === 'sub5' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCircle} className="submenu-icon" />
                    <a href="#sub5" onClick={() => selectSubmenu('sub5')}>Submenú 5</a>
                  </li>
                  <li className={selectedSubmenu === 'sub6' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCircle} className="submenu-icon" />
                    <a href="#sub6" onClick={() => selectSubmenu('sub6')}>Submenú 6</a>
                  </li>
                </ul>
              )}
            </li>
            <li className={openMenu === 'reportes' ? 'selected' : ''}>
              <div className="menu-item" onClick={() => toggleMenu('reportes')}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Reportes</span>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {openMenu === 'reportes' && (
                <ul className="submenu">
                  <li className={selectedSubmenu === 'sub7' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCircle} className="submenu-icon" />
                    <a href="#sub7" onClick={() => selectSubmenu('sub7')}>Submenú 7</a>
                  </li>
                  <li className={selectedSubmenu === 'sub8' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCircle} className="submenu-icon" />
                    <a href="#sub8" onClick={() => selectSubmenu('sub8')}>Submenú 8</a>
                  </li>
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
