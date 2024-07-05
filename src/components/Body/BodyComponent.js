import React from 'react';
import './BodyComponent.css';

const BodyComponent = () => {
  return (
    <div className="body">
       <h1>Configuración: Autogestión de Ciclo de Vida Automático</h1>
       <div className="dropdown-container">
        <div className="dropdown-item">
          <h2>Selecciona BE ID(s) Cliente</h2>
          <select className="dropdown">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div className="dropdown-item">
          <h2>Selecciona Productos(s)</h2>
          <select className="dropdown">
            <option value="opcion1">Opción A</option>
            <option value="opcion2">Opción B</option>
            <option value="opcion3">Opción C</option>
          </select>
        </div>
        <div className="dropdown-item">
          <h2>Configuracion cambio de Estado: Dias de activo a Suspendido</h2>
          <select className="dropdown">
            <option value="opcion1">Opción X</option>
            <option value="opcion2">Opción Y</option>
            <option value="opcion3">Opción Z</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <div className="dropdown-item">
          <h2>Configuracion cambio de Estado: Dias de Suspendido a Predeactivo</h2>
          <select className="dropdown">
            <option value="opcion1">Opción A</option>
            <option value="opcion2">Opción B</option>
            <option value="opcion3">Opción C</option>
          </select>
        </div>
        <div className="dropdown-item">
          <h2>Configuracion cambio de Estado: Dias de Predeactivo a Desactivo</h2>
            <select className="dropdown">
              <option value="opcion1">Opción A</option>
              <option value="opcion2">Opción B</option>
              <option value="opcion3">Opción C</option>
            </select>

        </div>
      </div>

      <div className="dropdown-container">
        <div className="dropdown-item">
          <h2>Configuracion SMS: Dias previo a cambio de estado Activo a Suspendido</h2>
          <select className="dropdown">
            <option value="opcion1">Opción A</option>
            <option value="opcion2">Opción B</option>
            <option value="opcion3">Opción C</option>
          </select>
        </div>
        <div className="dropdown-item">
          <h2>Configuración texto SMS (140 caracteres)</h2>
          <textarea className="textarea" rows="7" cols="60"></textarea>
        </div>
      </div>

    </div>
  );
}

export default BodyComponent;