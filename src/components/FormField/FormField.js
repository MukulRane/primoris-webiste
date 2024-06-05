import React from 'react';
import './FormField.css';

const FormField = ({ label, type = 'text', rows }) => {
  return (
    <div className="form-field">
      <label>{label}</label>
      {rows ? (
        <textarea rows={rows} />
      ) : (
        <input type={type} />
      )}
    </div>
  );
};

export default FormField;
