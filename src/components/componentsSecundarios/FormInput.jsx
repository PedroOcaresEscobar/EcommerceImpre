import React, { useState } from 'react';

export const FormInput = ({ label, type, value, onChange, required, minLength, maxLength, pattern }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    </div>
  );
};