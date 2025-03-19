import React from 'react';
import styles from './InputDesign.module.css';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.fieldLabel}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.inputField}
      />
    </div>
  );
};

export default FormField;
