import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './GeneralError.css';

const GeneralError = ({ message, onClose }) => {
    return (
        <div className="error-overlay">
            <div className="error-container">
                <div className="error-icon">
                    <FontAwesomeIcon icon={faTimesCircle} color="red" size="3x" />
                </div>
                <div className="error-message">
                    <h2>Error</h2>
                    <p>{message}</p>
                </div>
                <button className="error-button" onClick={onClose}>Salir</button>
            </div>
        </div>
    );
};

export default GeneralError;