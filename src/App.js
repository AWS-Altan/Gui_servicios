import React from 'react';
import './App.css';
import MenuComponent from "../src/components/Menu/MenuComponent";
import HeaderComponent from "../src/components/Header/HeaderComponent";
import BodyComponent from './components/Body/BodyComponent';

const App = () => {
  return (
    <div className="app">
      <MenuComponent />
      <div className="main">
        <HeaderComponent/>
        <BodyComponent/>
      </div>
    </div>
  );
}

export default App;