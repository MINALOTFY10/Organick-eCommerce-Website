import React from 'react';
import './CheckMarkCircle.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckMarkCircle = () => {
    return (
        <div className="circle">
          <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} />
        </div>
      );
};

export default CheckMarkCircle;
