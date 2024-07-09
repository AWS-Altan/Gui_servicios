import React, { useState } from 'react';
import './App.css';
import MenuComponent from "../src/components/Menu/MenuComponent";
import HeaderComponent from "../src/components/Header/HeaderComponent";
import BodyComponent from "./components/Body/BodyComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app">
      {isSidebarVisible && <MenuComponent isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />}
      <div className={`main ${isSidebarVisible ? '' : 'full-width'}`}>
        <HeaderComponent />
        <BodyComponent />
      </div>
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarVisible ? faArrowLeft : faArrowRight} />
      </button>
    </div>
  );
}

export default App;
