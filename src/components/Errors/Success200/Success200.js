import React from 'react';
import './Success200.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Success200 = ({ message, onClose }) => {
    return (
        <div className="success-container">
            <div className="success-content">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h2>OK</h2>
                <p>{message}</p>
                <button onClick={onClose}>SALIR</button>
            </div>
        </div>
    );
};

export default Success200;
