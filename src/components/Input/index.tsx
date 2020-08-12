import React from 'react';

import './styles.css';

const Input: React.FC = () => {
  return (
    <div className="input-block">
      <label htmlFor="name">
        Nome Completo
        <input type="text" id="name" />
      </label>
    </div>
  );
};

export default Input;
