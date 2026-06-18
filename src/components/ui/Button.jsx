import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', icon, ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
