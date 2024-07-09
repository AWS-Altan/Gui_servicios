import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuComponent from './components/Menu/MenuComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import BodyComponent from './components/Body/BodyComponent';
import LoginComponent from './components/Login/LoginComponent'; // Asegúrate de ajustar la ruta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/dashboard" element={
            <>
              {isSidebarVisible && <MenuComponent isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />}
              <div className={`main ${isSidebarVisible ? '' : 'full-width'}`}>
                <HeaderComponent />
                <BodyComponent />
              </div>
              <button className="toggle-sidebar" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isSidebarVisible ? faArrowLeft : faArrowRight} />
              </button>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
